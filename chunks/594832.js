"use strict";
n.d(t, {
    B5: () => T,
    Q8: () => A,
    Yu: () => E,
    Zh: () => g,
    eT: () => D,
    fw: () => v,
    mk: () => L,
    pE: () => x,
    rJ: () => N,
    sv: () => y,
    tA: () => w,
    uS: () => I,
}),
    n(321073);
var r = n(64700),
    i = n(311907),
    s = n(979286),
    a = n(590180),
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
let E = (e) => (e ? 5 : 6),
    g = 350,
    A = 16;
var I = (function (e) {
        return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
    })({}),
    T = (function (e) {
        return (e.USER_PROFILE = "user_profile"), e;
    })({});
function S(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function y(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        s = (0, i.yK)(
            [f.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? f.A.getWishlist(t) : null;
                }),
            [t],
        ),
        a = (0, i.bG)(
            [f.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && f.A.isFetching(t);
                }),
            [t],
        ),
        o = (0, i.yK)(
            [f.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? f.A.getError(t) : void 0;
                }),
            [t],
        ),
        u = (0, i.yK)([l.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? l.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        c = r.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: r, wishlistId: i } = t;
                    n >= u.length || (e[S(r, i)] = u[n]);
                }),
                e
            );
        }, [t, u]);
    return (
        (0, r.useEffect)(() => {
            for (let { wishlistId: e, userId: r } of t) {
                if (null == e || f.A.isFetching(e) || null != f.A.getError(e)) continue;
                let t = f.A.getWishlist(e),
                    i = f.A.getUpdatedAt(e),
                    s = c[S(r, e)];
                (null == t || (null != s && i !== s)) && _.A.fetchWishlist(e, s, n);
            }
        }, [t, n, c]),
        { wishlists: s, isFetching: a, errors: o }
    );
}
function v(e) {
    let { wishlistId: t, userId: n, source: s = "user_profile" } = e,
        [a, o, u, c] = (0, i.yK)([f.A], () =>
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
                ((null == a || (null != d && c !== d)) && _.A.fetchWishlist(t, d, s));
        }, [t, a, d, c, u, s]),
        { wishlist: a, isFetching: o, error: u }
    );
}
function N(e, t) {
    return (0, i.bG)([f.A], () => null != e && f.A.hasSkuId(e, t));
}
function C(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = { sku_id: e.skuId, sku_name: e.name, sku_product_line: h.EZt.COLLECTIBLES, collectibles_item: e.items[0] };
    return p.A.fromServer(t);
}
function b(e) {
    let [t, n] = r.useState([]),
        [i, a] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = !1;
            a(!0);
            let r = m.PI.map((e) => e);
            return (
                (0, s.Og)(e, r).then((e) => {
                    t || (n(r.filter((t) => e[t]?.valid === !0)), a(!1));
                }),
                () => {
                    t = !0;
                }
            );
        }, [e]),
        { validatedSkuIds: t, isValidating: i }
    );
}
function R(e, t) {
    let n = e.slice(0, t),
        o = (0, i.bG)([a.A], () => n.some((e) => a.A.isFetchingProduct(e)));
    return (
        r.useEffect(() => {
            if (0 !== n.length)
                for (let e of n) {
                    let t = a.A.getProduct(e),
                        n = a.A.isFetchingProduct(e);
                    null != t || n || (0, s.Jp)(e);
                }
        }, [n]),
        { isFetching: o }
    );
}
function O() {
    let e = [];
    for (let t of m.PI) {
        let n = a.A.getProduct(t);
        null != n && e.push(n);
    }
    return e;
}
function D(e) {
    let { giftRecipient: t, minNumItems: n, source: s } = e,
        { defaultWishlistId: a } = (0, i.cf)([l.A], () => ({ defaultWishlistId: l.A.getFirstWishlistId(t.id) })),
        { wishlist: o, isFetching: u, error: c } = v({ wishlistId: a, source: s }),
        d = r.useMemo(() => null != o && o.items.filter((e) => !0 !== e.isOwned).length >= n, [o, n]),
        { validatedSkuIds: _, isValidating: f } = b(t.id),
        { isFetching: p } = R(_, n);
    return {
        defaultWishlistId: a,
        wishlist: o,
        popularCollectiblesProducts: r.useMemo(() => {
            if (d) return [];
            let e = new Set(_);
            return O().filter((t) => e.has(t.skuId));
        }, [d, _]),
        isFetchingWishlist: u,
        isValidatingPopularProducts: !d && f,
        isFetchingPopularProducts: !d && p,
        wishlistError: c,
    };
}
function L(e) {
    let {
        wishlist: t,
        popularCollectiblesProducts: n,
        popularSocialLayerStorefrontItems: i,
        wishlistError: s,
        numItems: a,
    } = e;
    return r.useMemo(() => {
        if (null != s) return { displayItems: [], totalUnownedWishlistItemCount: 0 };
        let e = (t?.items ?? []).filter((e) => !0 !== e.isOwned),
            r = e.slice(0, a),
            o = [];
        if ((o.push(...r.map((e) => ({ item: e, source: "wishlist" }))), o.length < a)) {
            let e = new Set(r.map((e) => e.skuId)),
                t = i.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && o.length < a; e++) o.push({ item: t[e], source: "popular" });
            let s = n.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < s.length && o.length < a; e++) {
                let t = C(s[e]);
                null !== t && o.push({ item: t, source: "popular" });
            }
        }
        return { displayItems: o, totalUnownedWishlistItemCount: e.length };
    }, [s, t?.items, n, i, a]);
}
function w(e) {
    let { location: t, isGift: n, giftRecipient: s } = e,
        a = (0, o.c)({ userId: s?.id, location: t }),
        u = (0, i.bG)([l.A], () => (s?.id == null ? null : l.A.getFirstWishlistId(s.id))),
        { wishlist: c } = v({ wishlistId: null != u && n && null != s ? u : null, userId: s?.id });
    return r.useMemo(
        () => !0 === n && null != s && ((c?.items.filter((e) => !0 !== e.isOwned) ?? []).length > 0 || a),
        [n, s, c, a],
    );
}
function x() {
    return M((0, i.bG)([c.default], () => c.default.getId()));
}
function M(e) {
    let t = (0, i.bG)([d.default], () => d.default.getUser(e)),
        { userProfile: n, wishlistId: s } = (0, i.cf)(
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
        v({ wishlistId: s, userId: e })
    );
}
