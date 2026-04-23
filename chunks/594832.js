"use strict";
n.d(t, {
    B5: () => T,
    Zh: () => A,
    fw: () => N,
    pE: () => O,
    pl: () => g,
    rJ: () => v,
    sv: () => y,
    tA: () => C,
    uS: () => I,
});
var r,
    i,
    s = n(64700),
    a = n(735438),
    o = n(311907),
    l = n(96203),
    u = n(435658),
    c = n(622543),
    d = n(576622),
    _ = n(961350),
    f = n(287809),
    p = n(808247),
    h = n(107563),
    E = n(855052),
    m = n(792334);
let g = 5,
    A = 350;
var I = (((r = {}).WISHLIST = "wishlist"), (r.POPULAR = "popular"), r),
    T = (((i = {}).USER_PROFILE = "user_profile"), i);
function S(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function y(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        r = (0, o.yK)(
            [h.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? h.A.getWishlist(t) : null;
                }),
            [t],
        ),
        i = (0, o.bG)(
            [h.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && h.A.isFetching(t);
                }),
            [t],
        ),
        a = (0, o.yK)(
            [h.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? h.A.getError(t) : void 0;
                }),
            [t],
        ),
        l = (0, o.yK)([c.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? c.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        u = s.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: r, wishlistId: i } = t;
                    n >= l.length || (e[S(r, i)] = l[n]);
                }),
                e
            );
        }, [t, l]);
    return (
        (0, s.useEffect)(() => {
            for (let { wishlistId: e, userId: r } of t) {
                if (null == e || h.A.isFetching(e) || null != h.A.getError(e)) continue;
                let t = h.A.getWishlist(e),
                    i = h.A.getUpdatedAt(e),
                    s = u[S(r, e)];
                (null == t || (null != s && i !== s)) && p.A.fetchWishlist(e, s, n);
            }
        }, [t, n, u]),
        { wishlists: r, isFetching: i, errors: a }
    );
}
function N(e) {
    let { wishlistId: t, userId: n, source: r = "user_profile" } = e,
        [i, l, d, _] = (0, o.yK)([h.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [h.A.getWishlist(t), h.A.getStatus(t), h.A.getError(t), h.A.getUpdatedAt(t)],
        ),
        f = s.useMemo(() => (null == i ? [] : (0, a.uniq)((0, E.Lh)(i))), [i]);
    (0, u.j)({ skuIds: f, location: "useFetchWishlist" });
    let m = (0, o.bG)([c.A], () => {
        if (null != t && null != n) return c.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, s.useEffect)(() => {
            null == t ||
                h.A.isFetching(t) ||
                null != d ||
                ((null == i || (null != m && _ !== m)) && p.A.fetchWishlist(t, m, r));
        }, [t, r, i, m, _, d]),
        { wishlist: i, isFetching: "fetching" === l, wasFetched: "success" === l || "error" === l, error: d }
    );
}
function v(e, t) {
    return (0, o.bG)([h.A], () => null != e && h.A.hasSkuId(e, t));
}
function C(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: r = !0 } = e,
        i = (0, l.A)({ userId: n?.id }),
        a = (0, o.bG)([c.A], () => (n?.id == null ? null : c.A.getFirstWishlistId(n.id))),
        { wishlist: u } = N({ wishlistId: null != a && t && null != n ? a : null, userId: n?.id }),
        d = (0, m.B)(u);
    return s.useMemo(() => !0 === t && null != n && (d.length > 0 || (r && i.length > 0)), [t, n, d, i, r]);
}
function O() {
    return (function (e) {
        let t = (0, o.bG)([f.default], () => f.default.getUser(e)),
            { userProfile: n, wishlistId: r } = (0, o.cf)(
                [c.A],
                () => ({
                    userProfile: null != e ? c.A.getUserProfile(e) : null,
                    wishlistId: null != e ? c.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            s.useEffect(() => {
                null != e && null == n && null != t && null == n && (0, d.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, n]),
            { ...N({ wishlistId: r, userId: e }), wishlistId: r, userProfile: n }
        );
    })((0, o.bG)([_.default], () => _.default.getId()));
}
