"use strict";
n.d(t, {
    B5: () => T,
    Q8: () => A,
    Zh: () => E,
    eT: () => R,
    fw: () => y,
    mk: () => O,
    pE: () => L,
    pl: () => g,
    rJ: () => S,
    tA: () => D,
    uS: () => I,
}),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(979286),
    s = n(590180),
    o = n(20424),
    l = n(622543),
    u = n(576622),
    c = n(961350),
    d = n(287809),
    _ = n(808247),
    f = n(107563),
    p = n(872472),
    h = n(652215),
    m = n(758836);
let g = 6,
    E = 350,
    A = 16;
var I = (function (e) {
        return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
    })({}),
    T = (function (e) {
        return (e.USER_PROFILE = "user_profile"), e;
    })({});
function y(e) {
    let { wishlistId: t, userId: n, source: a = "user_profile" } = e,
        [s, o, u, c] = (0, i.yK)([f.A], () =>
            null == t
                ? [null, !1, void 0, void 0]
                : [f.A.getWishlist(t), f.A.isFetching(t), f.A.getError(t), f.A.getUpdatedAt(t)],
        ),
        d = (0, i.bG)([l.A], () => {
            if (null != t && null != n) return l.A.getWishlistSettings(n, t)?.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            null == t ||
                f.A.isFetching(t) ||
                null != u ||
                ((null == s || (null != d && c !== d)) && _.A.fetchWishlist(t, d, a));
        }, [t, s, d, c, u, a]),
        { wishlist: s, isFetching: o, error: u }
    );
}
function S(e, t) {
    return (0, i.bG)([f.A], () => null != e && f.A.hasSkuId(e, t));
}
function v(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = { sku_id: e.skuId, sku_name: e.name, sku_product_line: h.EZt.COLLECTIBLES, collectibles_item: e.items[0] };
    return p.A.fromServer(t);
}
function C(e) {
    let [t, n] = r.useState([]),
        [i, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = !1;
            s(!0);
            let r = m.PI.map((e) => e);
            return (
                (0, a.Og)(e, r).then((e) => {
                    t || (n(r.filter((t) => e[t]?.valid === !0)), s(!1));
                }),
                () => {
                    t = !0;
                }
            );
        }, [e]),
        { validatedSkuIds: t, isValidating: i }
    );
}
function b(e, t) {
    let n = e.slice(0, t),
        o = (0, i.bG)([s.A], () => n.some((e) => s.A.isFetchingProduct(e)));
    return (
        r.useEffect(() => {
            if (0 !== n.length)
                for (let e of n) {
                    let t = s.A.getProduct(e),
                        n = s.A.isFetchingProduct(e);
                    null != t || n || (0, a.Jp)(e);
                }
        }, [n]),
        { isFetching: o }
    );
}
function N() {
    let e = [];
    for (let t of m.PI) {
        let n = s.A.getProduct(t);
        null != n && e.push(n);
    }
    return e;
}
function R(e) {
    let { giftRecipient: t, minNumItems: n, source: a } = e,
        { defaultWishlistId: s } = (0, i.cf)([l.A], () => ({ defaultWishlistId: l.A.getFirstWishlistId(t.id) })),
        { wishlist: o, isFetching: u, error: c } = y({ wishlistId: s, source: a }),
        d = r.useMemo(() => null != o && o.items.filter((e) => !0 !== e.isOwned).length >= n, [o, n]),
        { validatedSkuIds: _, isValidating: f } = C(t.id),
        { isFetching: p } = b(_, n);
    return {
        defaultWishlistId: s,
        wishlist: o,
        popularCollectiblesProducts: r.useMemo(() => {
            if (d) return [];
            let e = new Set(_);
            return N().filter((t) => e.has(t.skuId));
        }, [d, _]),
        isFetchingWishlist: u,
        isValidatingPopularProducts: !d && f,
        isFetchingPopularProducts: !d && p,
        wishlistError: c,
    };
}
function O(e) {
    let {
        wishlist: t,
        popularCollectiblesProducts: n,
        popularSocialLayerStorefrontItems: i,
        wishlistError: a,
        numItems: s,
    } = e;
    return r.useMemo(() => {
        if (null != a) return { displayItems: [], totalUnownedWishlistItemCount: 0 };
        let e = (t?.items ?? []).filter((e) => !0 !== e.isOwned),
            r = e.slice(0, s),
            o = [];
        if ((o.push(...r.map((e) => ({ item: e, source: "wishlist" }))), o.length < s)) {
            let e = new Set(r.map((e) => e.skuId)),
                t = i.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && o.length < s; e++) o.push({ item: t[e], source: "popular" });
            let a = n.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < a.length && o.length < s; e++) {
                let t = v(a[e]);
                null !== t && o.push({ item: t, source: "popular" });
            }
        }
        return { displayItems: o, totalUnownedWishlistItemCount: e.length };
    }, [a, t?.items, n, i, s]);
}
function D(e) {
    let { location: t, isGift: n, giftRecipient: a } = e,
        s = (0, o.c)({ userId: a?.id, location: t }),
        u = (0, i.bG)([l.A], () => (a?.id == null ? null : l.A.getFirstWishlistId(a.id))),
        { wishlist: c } = y({ wishlistId: null != u && n && null != a ? u : null, userId: a?.id });
    return r.useMemo(
        () => !0 === n && null != a && ((c?.items.filter((e) => !0 !== e.isOwned) ?? []).length > 0 || s),
        [n, a, c, s],
    );
}
function L() {
    return w((0, i.bG)([c.default], () => c.default.getId()));
}
function w(e) {
    let t = (0, i.bG)([d.default], () => d.default.getUser(e)),
        { userProfile: n, wishlistId: a } = (0, i.cf)(
            [l.A],
            () => ({
                userProfile: null != e ? l.A.getUserProfile(e) : null,
                wishlistId: null != e ? l.A.getFirstWishlistId(e) : null,
            }),
            [e],
        );
    return (
        r.useEffect(() => {
            null != e && null == n && null != t && null == n && (0, u.A)(t.id, t.getAvatarURL(null, 80));
        }, [t, e, n]),
        y({ wishlistId: a, userId: e })
    );
}
