"use strict";
n.d(t, {
    B5: () => v,
    KQ: () => A,
    Q8: () => T,
    Zh: () => I,
    eT: () => x,
    fw: () => b,
    mk: () => M,
    pE: () => k,
    rJ: () => R,
    sv: () => C,
    tA: () => P,
    uS: () => y,
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
    _ = n(927813),
    f = n(808247),
    p = n(107563),
    h = n(519421),
    m = n(872472),
    E = n(652215),
    g = n(758836);
let A = (e) => (e ? 5 : 6),
    I = 350,
    T = 16,
    S = 24 * _.A.Millis.HOUR;
var y = (function (e) {
        return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
    })({}),
    v = (function (e) {
        return (e.USER_PROFILE = "user_profile"), e;
    })({});
function N(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function C(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        s = (0, h.A)("use_fetch_wishlists"),
        a = (0, i.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getWishlist(t) : null;
                }),
            [t],
        ),
        o = (0, i.bG)(
            [p.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && p.A.isFetching(t);
                }),
            [t],
        ),
        u = (0, i.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getError(t) : void 0;
                }),
            [t],
        ),
        c = (0, i.yK)([l.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? l.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        d = r.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: r, wishlistId: i } = t;
                    n >= c.length || (e[N(r, i)] = c[n]);
                }),
                e
            );
        }, [t, c]);
    return (
        (0, r.useEffect)(() => {
            for (let { wishlistId: e, userId: r } of t) {
                if (null == e || p.A.isFetching(e) || null != p.A.getError(e)) continue;
                let t = p.A.getWishlist(e),
                    i = p.A.getUpdatedAt(e),
                    a = d[N(r, e)],
                    o = p.A.getLastFetchedAt(e),
                    l = s && (null == o || Date.now() - o > S);
                (null == t || (null != a && i !== a) || l) && f.A.fetchWishlist(e, a, n);
            }
        }, [t, n, d, s]),
        { wishlists: a, isFetching: o, errors: u }
    );
}
function b(e) {
    let { wishlistId: t, userId: n, source: s = "user_profile" } = e,
        [a, o, u, c] = (0, i.yK)([p.A], () =>
            null == t
                ? [null, !1, void 0, void 0]
                : [p.A.getWishlist(t), p.A.isFetching(t), p.A.getError(t), p.A.getUpdatedAt(t)],
        ),
        d = (0, h.A)("use_fetch_wishlist"),
        _ = (0, i.bG)([l.A], () => {
            if (null != t && null != n) return l.A.getWishlistSettings(n, t)?.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            if (null == t || p.A.isFetching(t) || null != u) return;
            let e = p.A.getLastFetchedAt(t),
                n = d && (null == e || Date.now() - e > S);
            (null == a || (null != _ && c !== _) || n) && f.A.fetchWishlist(t, _, s);
        }, [t, s, d, a, _, c, u]),
        { wishlist: a, isFetching: o, error: u }
    );
}
function R(e, t) {
    return (0, i.bG)([p.A], () => null != e && p.A.hasSkuId(e, t));
}
function O(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = { sku_id: e.skuId, sku_name: e.name, sku_product_line: E.EZt.COLLECTIBLES, collectibles_item: e.items[0] };
    return m.A.fromServer(t);
}
function D(e) {
    let [t, n] = r.useState([]),
        [i, a] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = !1;
            a(!0);
            let r = g.PI.map((e) => e);
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
function L(e, t) {
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
function w() {
    let e = [];
    for (let t of g.PI) {
        let n = a.A.getProduct(t);
        null != n && e.push(n);
    }
    return e;
}
function x(e) {
    let { giftRecipient: t, minNumItems: n, source: s } = e,
        { defaultWishlistId: a } = (0, i.cf)([l.A], () => ({ defaultWishlistId: l.A.getFirstWishlistId(t.id) })),
        { wishlist: o, isFetching: u, error: c } = b({ wishlistId: a, source: s }),
        d = r.useMemo(() => null != o && o.items.filter((e) => !0 !== e.isOwned).length >= n, [o, n]),
        { validatedSkuIds: _, isValidating: f } = D(t.id),
        { isFetching: p } = L(_, n);
    return {
        defaultWishlistId: a,
        wishlist: o,
        popularCollectiblesProducts: r.useMemo(() => {
            if (d) return [];
            let e = new Set(_);
            return w().filter((t) => e.has(t.skuId));
        }, [d, _]),
        isFetchingWishlist: u,
        isValidatingPopularProducts: !d && f,
        isFetchingPopularProducts: !d && p,
        wishlistError: c,
    };
}
function M(e) {
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
                let t = O(s[e]);
                null !== t && o.push({ item: t, source: "popular" });
            }
        }
        return { displayItems: o, totalUnownedWishlistItemCount: e.length };
    }, [s, t?.items, n, i, a]);
}
function P(e) {
    let { location: t, isGift: n, giftRecipient: s, isSocialLayerStorefrontEnabled: a = !0 } = e,
        u = (0, o.c)({ userId: s?.id, location: t }),
        c = (0, i.bG)([l.A], () => (s?.id == null ? null : l.A.getFirstWishlistId(s.id))),
        { wishlist: d } = b({ wishlistId: null != c && n && null != s ? c : null, userId: s?.id });
    return r.useMemo(
        () => !0 === n && null != s && ((d?.items.filter((e) => !0 !== e.isOwned) ?? []).length > 0 || (a && u)),
        [n, s, d, u, a],
    );
}
function k() {
    return U((0, i.bG)([c.default], () => c.default.getId()));
}
function U(e) {
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
        b({ wishlistId: s, userId: e })
    );
}
