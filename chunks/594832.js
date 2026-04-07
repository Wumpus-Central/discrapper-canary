"use strict";
n.d(t, {
    B5: () => S,
    KQ: () => E,
    Q8: () => A,
    Zh: () => g,
    fw: () => N,
    pE: () => O,
    rJ: () => C,
    sv: () => v,
    tA: () => R,
    uS: () => T,
});
var r = n(64700),
    i = n(735438),
    s = n(311907),
    a = n(96203),
    o = n(435658),
    l = n(622543),
    u = n(576622),
    c = n(961350),
    d = n(287809),
    _ = n(927813),
    f = n(808247),
    p = n(107563),
    h = n(178213),
    m = n(792334);
let E = (e) => (e ? 5 : 6),
    g = 350,
    A = 16,
    I = 24 * _.A.Millis.HOUR;
var T = (function (e) {
        return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
    })({}),
    S = (function (e) {
        return (e.USER_PROFILE = "user_profile"), e;
    })({});
function y(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function v(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        i = (0, h.AZ)("use_fetch_wishlists"),
        a = (0, s.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getWishlist(t) : null;
                }),
            [t],
        ),
        o = (0, s.bG)(
            [p.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && p.A.isFetching(t);
                }),
            [t],
        ),
        u = (0, s.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getError(t) : void 0;
                }),
            [t],
        ),
        c = (0, s.yK)([l.A], () =>
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
                    n >= c.length || (e[y(r, i)] = c[n]);
                }),
                e
            );
        }, [t, c]);
    return (
        (0, r.useEffect)(() => {
            for (let { wishlistId: e, userId: r } of t) {
                if (null == e || p.A.isFetching(e) || null != p.A.getError(e)) continue;
                let t = p.A.getWishlist(e),
                    s = p.A.getUpdatedAt(e),
                    a = d[y(r, e)],
                    o = p.A.getLastFetchedAt(e),
                    l = i && (null == o || Date.now() - o > I);
                (null == t || (null != a && s !== a) || l) && f.A.fetchWishlist(e, a, n);
            }
        }, [t, n, d, i]),
        { wishlists: a, isFetching: o, errors: u }
    );
}
function N(e) {
    let { wishlistId: t, userId: n, source: a = "user_profile" } = e,
        [u, c, d, _] = (0, s.yK)([p.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [p.A.getWishlist(t), p.A.getStatus(t), p.A.getError(t), p.A.getUpdatedAt(t)],
        ),
        m = "fetching" === c,
        E = "success" === c || "error" === c,
        g = r.useMemo(() => (null == u ? [] : (0, i.uniq)(u.getSkuIds())), [u]);
    (0, o.j)({ skuIds: g, location: "useFetchWishlist" });
    let A = (0, h.AZ)("use_fetch_wishlist"),
        T = (0, s.bG)([l.A], () => {
            if (null != t && null != n) return l.A.getWishlistSettings(n, t)?.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            if (null == t || p.A.isFetching(t) || null != d) return;
            let e = p.A.getLastFetchedAt(t),
                n = A && (null == e || Date.now() - e > I);
            (null == u || (null != T && _ !== T) || n) && f.A.fetchWishlist(t, T, a);
        }, [t, a, A, u, T, _, d]),
        { wishlist: u, isFetching: m, wasFetched: E, error: d }
    );
}
function C(e, t) {
    return (0, s.bG)([p.A], () => null != e && p.A.hasSkuId(e, t));
}
function R(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: i = !0 } = e,
        o = (0, a.A)({ userId: n?.id }),
        u = (0, s.bG)([l.A], () => (n?.id == null ? null : l.A.getFirstWishlistId(n.id))),
        { wishlist: c } = N({ wishlistId: null != u && t && null != n ? u : null, userId: n?.id }),
        d = (0, m.B)(c);
    return r.useMemo(() => !0 === t && null != n && (d.length > 0 || (i && o.length > 0)), [t, n, d, o, i]);
}
function O() {
    return b((0, s.bG)([c.default], () => c.default.getId()));
}
function b(e) {
    let t = (0, s.bG)([d.default], () => d.default.getUser(e)),
        { userProfile: n, wishlistId: i } = (0, s.cf)(
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
        { ...N({ wishlistId: i, userId: e }), wishlistId: i, userProfile: n }
    );
}
