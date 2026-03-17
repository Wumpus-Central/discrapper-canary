"use strict";
n.d(t, {
    B5: () => I,
    KQ: () => h,
    Q8: () => E,
    Zh: () => m,
    fw: () => y,
    pE: () => C,
    rJ: () => v,
    sv: () => S,
    tA: () => N,
    uS: () => A,
});
var r = n(64700),
    i = n(311907),
    s = n(20424),
    a = n(622543),
    o = n(576622),
    l = n(961350),
    u = n(287809),
    c = n(927813),
    d = n(808247),
    _ = n(107563),
    f = n(178213),
    p = n(792334);
let h = (e) => (e ? 5 : 6),
    m = 350,
    E = 16,
    g = 24 * c.A.Millis.HOUR;
var A = (function (e) {
        return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
    })({}),
    I = (function (e) {
        return (e.USER_PROFILE = "user_profile"), e;
    })({});
function T(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function S(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        s = (0, f.AZ)("use_fetch_wishlists"),
        o = (0, i.yK)(
            [_.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? _.A.getWishlist(t) : null;
                }),
            [t],
        ),
        l = (0, i.bG)(
            [_.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && _.A.isFetching(t);
                }),
            [t],
        ),
        u = (0, i.yK)(
            [_.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? _.A.getError(t) : void 0;
                }),
            [t],
        ),
        c = (0, i.yK)([a.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? a.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        p = r.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: r, wishlistId: i } = t;
                    n >= c.length || (e[T(r, i)] = c[n]);
                }),
                e
            );
        }, [t, c]);
    return (
        (0, r.useEffect)(() => {
            for (let { wishlistId: e, userId: r } of t) {
                if (null == e || _.A.isFetching(e) || null != _.A.getError(e)) continue;
                let t = _.A.getWishlist(e),
                    i = _.A.getUpdatedAt(e),
                    a = p[T(r, e)],
                    o = _.A.getLastFetchedAt(e),
                    l = s && (null == o || Date.now() - o > g);
                (null == t || (null != a && i !== a) || l) && d.A.fetchWishlist(e, a, n);
            }
        }, [t, n, p, s]),
        { wishlists: o, isFetching: l, errors: u }
    );
}
function y(e) {
    let { wishlistId: t, userId: n, source: s = "user_profile" } = e,
        [o, l, u, c] = (0, i.yK)([_.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [_.A.getWishlist(t), _.A.getStatus(t), _.A.getError(t), _.A.getUpdatedAt(t)],
        ),
        p = "fetching" === l,
        h = "success" === l || "error" === l,
        m = (0, f.AZ)("use_fetch_wishlist"),
        E = (0, i.bG)([a.A], () => {
            if (null != t && null != n) return a.A.getWishlistSettings(n, t)?.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            if (null == t || _.A.isFetching(t) || null != u) return;
            let e = _.A.getLastFetchedAt(t),
                n = m && (null == e || Date.now() - e > g);
            (null == o || (null != E && c !== E) || n) && d.A.fetchWishlist(t, E, s);
        }, [t, s, m, o, E, c, u]),
        { wishlist: o, isFetching: p, wasFetched: h, error: u }
    );
}
function v(e, t) {
    return (0, i.bG)([_.A], () => null != e && _.A.hasSkuId(e, t));
}
function N(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: o = !0 } = e,
        l = (0, s.c)({ userId: n?.id }),
        u = (0, i.bG)([a.A], () => (n?.id == null ? null : a.A.getFirstWishlistId(n.id))),
        { wishlist: c } = y({ wishlistId: null != u && t && null != n ? u : null, userId: n?.id }),
        d = (0, p.B)(c);
    return r.useMemo(() => !0 === t && null != n && (d.length > 0 || (o && l)), [t, n, d, l, o]);
}
function C() {
    return R((0, i.bG)([l.default], () => l.default.getId()));
}
function R(e) {
    let t = (0, i.bG)([u.default], () => u.default.getUser(e)),
        { userProfile: n, wishlistId: s } = (0, i.cf)(
            [a.A],
            () => ({
                userProfile: null != e ? a.A.getUserProfile(e) : null,
                wishlistId: null != e ? a.A.getFirstWishlistId(e) : null,
            }),
            [e],
        );
    return (
        r.useEffect(() => {
            null != e && null == n && null != t && null == n && (0, o.A)(t.id, t.getAvatarURL(null, 80));
        }, [t, e, n]),
        { ...y({ wishlistId: s, userId: e }), wishlistId: s, userProfile: n }
    );
}
