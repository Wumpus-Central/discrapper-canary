"use strict";
n.d(t, {
    tA: () => C,
    Zh: () => g,
    sv: () => S,
    pE: () => v,
    uS: () => A,
    rJ: () => y,
    pl: () => m,
    B5: () => I,
    fw: () => N,
});
var i,
    r,
    s = n(64700),
    a = n(735438),
    o = n(17928),
    l = n(96203),
    u = n(530868),
    c = n(841595),
    d = n(903209),
    _ = n(495544),
    f = n(287809),
    h = n(808247),
    p = n(107563),
    E = n(855052);
let m = 5,
    g = 350;
var A = (((i = {}).WISHLIST = "wishlist"), (i.POPULAR = "popular"), i),
    I = (((r = {}).USER_PROFILE = "user_profile"), r);
function T(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function S(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        i = (0, o.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getWishlist(t) : null;
                }),
            [t],
        ),
        r = (0, o.bG)(
            [p.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && p.A.isFetching(t);
                }),
            [t],
        ),
        a = (0, o.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getError(t) : void 0;
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
                    let { userId: i, wishlistId: r } = t;
                    n >= l.length || (e[T(i, r)] = l[n]);
                }),
                e
            );
        }, [t, l]);
    return (
        (0, s.useEffect)(() => {
            for (let { wishlistId: e, userId: i } of t) {
                if (null == e || p.A.isFetching(e) || null != p.A.getError(e)) continue;
                let t = p.A.getWishlist(e),
                    r = p.A.getUpdatedAt(e),
                    s = u[T(i, e)];
                (null == t || (null != s && r !== s)) && h.A.fetchWishlist(e, s, n);
            }
        }, [t, n, u]),
        { wishlists: i, isFetching: r, errors: a }
    );
}
function N(e) {
    let { wishlistId: t, userId: n, source: i = "user_profile" } = e,
        [r, l, d, _] = (0, o.yK)([p.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [p.A.getWishlist(t), p.A.getStatus(t), p.A.getError(t), p.A.getUpdatedAt(t)],
        ),
        f = s.useMemo(() => (null == r ? [] : (0, a.uniq)((0, E.Lh)(r))), [r]);
    (0, u.j)({ skuIds: f, location: "useFetchWishlist" });
    let m = (0, o.bG)([c.A], () => {
        if (null != t && null != n) return c.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, s.useEffect)(() => {
            null == t ||
                p.A.isFetching(t) ||
                null != d ||
                ((null == r || (null != m && _ !== m)) && h.A.fetchWishlist(t, m, i));
        }, [t, i, r, m, _, d]),
        { wishlist: r, isFetching: "fetching" === l, wasFetched: "success" === l || "error" === l, error: d }
    );
}
function y(e, t) {
    return (0, o.bG)([p.A], () => null != e && p.A.hasSkuId(e, t));
}
function C(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: i = !0 } = e;
    s.useEffect(() => {
        n?.id != null && (0, d.A)(n.id);
    }, [n?.id]);
    let r = (0, l.A)({ userId: n?.id }),
        a = (0, o.bG)([c.A], () => (n?.id == null ? null : c.A.getFirstWishlistId(n.id))),
        { wishlist: u } = N({ wishlistId: null != a && t && null != n ? a : null, userId: n?.id }),
        _ = s.useMemo(() => u?.items.filter((e) => !0 !== e.isOwned) ?? [], [u]);
    return s.useMemo(() => !0 === t && null != n && (_.length > 0 || (i && r.length > 0)), [t, n, _, r, i]);
}
function v() {
    return (function (e) {
        let t = (0, o.bG)([f.default], () => f.default.getUser(e)),
            { userProfile: n, wishlistId: i } = (0, o.cf)(
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
            { ...N({ wishlistId: i, userId: e }), wishlistId: i, userProfile: n }
        );
    })((0, o.bG)([_.default], () => _.default.getId()));
}
