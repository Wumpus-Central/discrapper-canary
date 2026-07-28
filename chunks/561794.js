"use strict";
n.d(t, {
    tA: () => O,
    Zh: () => p,
    sv: () => S,
    pE: () => R,
    uS: () => T,
    rJ: () => C,
    pl: () => f,
    B5: () => m,
    fw: () => N,
});
var i,
    r,
    a = n(64700),
    s = n(435558),
    l = n(17928),
    o = n(96203),
    d = n(435658),
    c = n(321191),
    u = n(903209),
    _ = n(280450),
    E = n(287809),
    A = n(808247),
    h = n(107563),
    I = n(855052);
let f = 5,
    p = 350;
var T = (((i = {}).WISHLIST = "wishlist"), (i.POPULAR = "popular"), i),
    m = (((r = {}).USER_PROFILE = "user_profile"), r);
function g(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function S(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        i = (0, l.yK)(
            [h.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? h.A.getWishlist(t) : null;
                }),
            [t],
        ),
        r = (0, l.bG)(
            [h.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && h.A.isFetching(t);
                }),
            [t],
        ),
        s = (0, l.yK)(
            [h.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? h.A.getError(t) : void 0;
                }),
            [t],
        ),
        o = (0, l.yK)([c.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? c.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        d = a.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: i, wishlistId: r } = t;
                    n >= o.length || (e[g(i, r)] = o[n]);
                }),
                e
            );
        }, [t, o]);
    return (
        (0, a.useEffect)(() => {
            for (let { wishlistId: e, userId: i } of t) {
                if (null == e || h.A.isFetching(e) || null != h.A.getError(e)) continue;
                let t = h.A.getWishlist(e),
                    r = h.A.getUpdatedAt(e),
                    a = d[g(i, e)];
                (null == t || (null != a && r !== a)) && A.A.fetchWishlist(e, a, n);
            }
        }, [t, n, d]),
        { wishlists: i, isFetching: r, errors: s }
    );
}
function N(e) {
    let { wishlistId: t, userId: n, source: i = "user_profile" } = e,
        [r, o, u, _] = (0, l.yK)([h.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [h.A.getWishlist(t), h.A.getStatus(t), h.A.getError(t), h.A.getUpdatedAt(t)],
        ),
        E = a.useMemo(() => (null == r ? [] : (0, s.uniq)((0, I.Lh)(r))), [r]);
    (0, d.j)({ skuIds: E });
    let f = (0, l.bG)([c.A], () => {
        if (null != t && null != n) return c.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, a.useEffect)(() => {
            null == t ||
                h.A.isFetching(t) ||
                null != u ||
                ((null == r || (null != f && _ !== f)) && A.A.fetchWishlist(t, f, i));
        }, [t, i, r, f, _, u]),
        { wishlist: r, isFetching: "fetching" === o, wasFetched: "success" === o || "error" === o, error: u }
    );
}
function C(e, t) {
    return (0, l.bG)([h.A], () => null != e && h.A.hasSkuId(e, t));
}
function O(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: i = !0 } = e;
    a.useEffect(() => {
        n?.id != null && (0, u.A)(n.id);
    }, [n?.id]);
    let r = (0, o.A)({ userId: n?.id }),
        s = (0, l.bG)([c.A], () => (n?.id == null ? null : c.A.getFirstWishlistId(n.id))),
        { wishlist: d } = N({ wishlistId: null != s && t && null != n ? s : null, userId: n?.id }),
        _ = a.useMemo(() => d?.items.filter((e) => !0 !== e.isOwned) ?? [], [d]);
    return a.useMemo(() => !0 === t && null != n && (_.length > 0 || (i && r.length > 0)), [t, n, _, r, i]);
}
function R() {
    return (function (e) {
        let t = (0, l.bG)([E.default], () => E.default.getUser(e)),
            { userProfile: n, wishlistId: i } = (0, l.cf)(
                [c.A],
                () => ({
                    userProfile: null != e ? c.A.getUserProfile(e) : null,
                    wishlistId: null != e ? c.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            a.useEffect(() => {
                null != e && null == n && null != t && null == n && (0, u.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, n]),
            { ...N({ wishlistId: i, userId: e }), wishlistId: i, userProfile: n }
        );
    })((0, l.bG)([_.default], () => _.default.getId()));
}
