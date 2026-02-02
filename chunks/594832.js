n.d(t, {
    B5: () => O,
    Q8: () => y,
    Zh: () => E,
    eT: () => N,
    fw: () => v,
    mk: () => w,
    pE: () => P,
    pl: () => g,
    rJ: () => A,
    tA: () => R,
    uS: () => b,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(979286),
    o = n(590180),
    s = n(20424),
    l = n(622543),
    c = n(576622),
    u = n(961350),
    d = n(287809),
    f = n(808247),
    p = n(107563),
    _ = n(872472),
    h = n(652215),
    m = n(758836);
let g = 6,
    E = 350,
    y = 16;
var b = (function (e) {
        return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
    })({}),
    O = (function (e) {
        return (e.USER_PROFILE = "user_profile"), e;
    })({});

function v(e) {
    let { wishlistId: t, userId: n, source: a = "user_profile" } = e,
        [o, s, c, u] = (0, i.yK)([p.A], () =>
            null == t
                ? [null, !1, void 0, void 0]
                : [p.A.getWishlist(t), p.A.isFetching(t), p.A.getError(t), p.A.getUpdatedAt(t)],
        ),
        d = (0, i.bG)([l.A], () => {
            var e;
            if (null != t && null != n) return null == (e = l.A.getWishlistSettings(n, t)) ? void 0 : e.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            null == t ||
                p.A.isFetching(t) ||
                null != c ||
                ((null == o || (null != d && u !== d)) && f.A.fetchWishlist(t, d, a));
        }, [t, o, d, u, c, a]),
        {
            wishlist: o,
            isFetching: s,
            error: c,
        }
    );
}

function A(e, t) {
    return (0, i.bG)([p.A], () => null != e && p.A.hasSkuId(e, t));
}

function I(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = {
        sku_id: e.skuId,
        sku_name: e.name,
        sku_product_line: h.EZt.COLLECTIBLES,
        collectibles_item: e.items[0],
    };
    return _.A.fromServer(t);
}

function S(e) {
    let [t, n] = r.useState([]),
        [i, o] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = !1;
            o(!0);
            let r = m.PI.map((e) => e);
            return (
                (0, a.Og)(e, r).then((e) => {
                    t ||
                        (n(
                            r.filter((t) => {
                                var n;
                                return (null == (n = e[t]) ? void 0 : n.valid) === !0;
                            }),
                        ),
                        o(!1));
                }),
                () => {
                    t = !0;
                }
            );
        }, [e]),
        {
            validatedSkuIds: t,
            isValidating: i,
        }
    );
}

function T(e, t) {
    let n = e.slice(0, t),
        s = (0, i.bG)([o.A], () => n.some((e) => o.A.isFetchingProduct(e)));
    return (
        r.useEffect(() => {
            if (0 !== n.length)
                for (let e of n) {
                    let t = o.A.getProduct(e),
                        n = o.A.isFetchingProduct(e);
                    null != t || n || (0, a.Jp)(e);
                }
        }, [n]),
        {
            isFetching: s,
        }
    );
}

function C() {
    let e = [];
    for (let t of m.PI) {
        let n = o.A.getProduct(t);
        null != n && e.push(n);
    }
    return e;
}

function N(e) {
    let { giftRecipient: t, minNumItems: n, source: a } = e,
        { defaultWishlistId: o } = (0, i.cf)([l.A], () => ({
            defaultWishlistId: l.A.getFirstWishlistId(t.id),
        })),
        {
            wishlist: s,
            isFetching: c,
            error: u,
        } = v({
            wishlistId: o,
            source: a,
        }),
        d = r.useMemo(() => null != s && s.items.filter((e) => !0 !== e.isOwned).length >= n, [s, n]),
        { validatedSkuIds: f, isValidating: p } = S(t.id),
        { isFetching: _ } = T(f, n);
    return {
        defaultWishlistId: o,
        wishlist: s,
        popularCollectiblesProducts: r.useMemo(() => {
            if (d) return [];
            let e = new Set(f);
            return C().filter((t) => e.has(t.skuId));
        }, [d, f]),
        isFetchingWishlist: c,
        isValidatingPopularProducts: !d && p,
        isFetchingPopularProducts: !d && _,
        wishlistError: u,
    };
}

function w(e) {
    let {
        wishlist: t,
        popularCollectiblesProducts: n,
        popularSocialLayerStorefrontItems: i,
        wishlistError: a,
        numItems: o,
    } = e;
    return r.useMemo(() => {
        var e;
        if (null != a)
            return {
                displayItems: [],
                totalUnownedWishlistItemCount: 0,
            };
        let r = (null != (e = null == t ? void 0 : t.items) ? e : []).filter((e) => !0 !== e.isOwned),
            s = r.slice(0, o),
            l = [];
        if (
            (l.push(
                ...s.map((e) => ({
                    item: e,
                    source: "wishlist",
                })),
            ),
            l.length < o)
        ) {
            let e = new Set(s.map((e) => e.skuId)),
                t = i.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && l.length < o; e++)
                l.push({
                    item: t[e],
                    source: "popular",
                });
            let r = n.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < r.length && l.length < o; e++) {
                let t = I(r[e]);
                null !== t &&
                    l.push({
                        item: t,
                        source: "popular",
                    });
            }
        }
        return {
            displayItems: l,
            totalUnownedWishlistItemCount: r.length,
        };
    }, [a, null == t ? void 0 : t.items, n, i, o]);
}

function R(e) {
    let { location: t, isGift: n, giftRecipient: a } = e,
        o = (0, s.c)({
            userId: null == a ? void 0 : a.id,
            location: t,
        }),
        c = (0, i.bG)([l.A], () => ((null == a ? void 0 : a.id) == null ? null : l.A.getFirstWishlistId(a.id))),
        { wishlist: u } = v({
            wishlistId: null != c && n && null != a ? c : null,
            userId: null == a ? void 0 : a.id,
        });
    return r.useMemo(() => {
        var e;
        return (
            !0 === n &&
            null != a &&
            ((null != (e = null == u ? void 0 : u.items.filter((e) => !0 !== e.isOwned)) ? e : []).length > 0 || o)
        );
    }, [n, a, u, o]);
}

function P() {
    return D((0, i.bG)([u.default], () => u.default.getId()));
}

function D(e) {
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
            null != e && null == n && null != t && null == n && (0, c.A)(t.id, t.getAvatarURL(null, 80));
        }, [t, e, n]),
        v({
            wishlistId: a,
            userId: e,
        })
    );
}
