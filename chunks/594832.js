"use strict";
n.d(t, {
    B5: () => A,
    Zh: () => E,
    fw: () => S,
    pE: () => N,
    pl: () => m,
    rJ: () => y,
    sv: () => T,
    tA: () => v,
    uS: () => g,
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
    _ = n(808247),
    f = n(107563),
    p = n(855052),
    h = n(792334);
let m = 5,
    E = 350;
var g = (function (e) {
        return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
    })({}),
    A = (function (e) {
        return (e.USER_PROFILE = "user_profile"), e;
    })({});
function I(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function T(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        i = (0, s.yK)(
            [f.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? f.A.getWishlist(t) : null;
                }),
            [t],
        ),
        a = (0, s.bG)(
            [f.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && f.A.isFetching(t);
                }),
            [t],
        ),
        o = (0, s.yK)(
            [f.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? f.A.getError(t) : void 0;
                }),
            [t],
        ),
        u = (0, s.yK)([l.A], () =>
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
                    n >= u.length || (e[I(r, i)] = u[n]);
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
                    s = c[I(r, e)];
                (null == t || (null != s && i !== s)) && _.A.fetchWishlist(e, s, n);
            }
        }, [t, n, c]),
        { wishlists: i, isFetching: a, errors: o }
    );
}
function S(e) {
    let { wishlistId: t, userId: n, source: a = "user_profile" } = e,
        [u, c, d, h] = (0, s.yK)([f.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [f.A.getWishlist(t), f.A.getStatus(t), f.A.getError(t), f.A.getUpdatedAt(t)],
        ),
        m = "fetching" === c,
        E = "success" === c || "error" === c,
        g = r.useMemo(() => (null == u ? [] : (0, i.uniq)((0, p.Lh)(u))), [u]);
    (0, o.j)({ skuIds: g, location: "useFetchWishlist" });
    let A = (0, s.bG)([l.A], () => {
        if (null != t && null != n) return l.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, r.useEffect)(() => {
            null == t ||
                f.A.isFetching(t) ||
                null != d ||
                ((null == u || (null != A && h !== A)) && _.A.fetchWishlist(t, A, a));
        }, [t, a, u, A, h, d]),
        { wishlist: u, isFetching: m, wasFetched: E, error: d }
    );
}
function y(e, t) {
    return (0, s.bG)([f.A], () => null != e && f.A.hasSkuId(e, t));
}
function v(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: i = !0 } = e,
        o = (0, a.A)({ userId: n?.id }),
        u = (0, s.bG)([l.A], () => (n?.id == null ? null : l.A.getFirstWishlistId(n.id))),
        { wishlist: c } = S({ wishlistId: null != u && t && null != n ? u : null, userId: n?.id }),
        d = (0, h.B)(c);
    return r.useMemo(() => !0 === t && null != n && (d.length > 0 || (i && o.length > 0)), [t, n, d, o, i]);
}
function N() {
    return C((0, s.bG)([c.default], () => c.default.getId()));
}
function C(e) {
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
        { ...S({ wishlistId: i, userId: e }), wishlistId: i, userProfile: n }
    );
}
