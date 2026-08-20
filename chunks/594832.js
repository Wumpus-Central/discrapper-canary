l.d(t, {
    B5: () => S,
    Zh: () => b,
    fw: () => k,
    pE: () => y,
    pl: () => p,
    rJ: () => C,
    sv: () => T,
    tA: () => E,
    uS: () => v,
});
var n,
    i,
    s = l(582128),
    r = l(435558),
    u = l(17928),
    a = l(96203),
    d = l(435658),
    o = l(321191),
    c = l(903209),
    f = l(280450),
    h = l(287809),
    A = l(808247),
    g = l(107563),
    m = l(855052),
    I = l(792334);
let p = 5,
    b = 350;
var v = (((n = {}).WISHLIST = "wishlist"), (n.POPULAR = "popular"), n),
    S = (((i = {}).USER_PROFILE = "user_profile"), i);
function x(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function T(e) {
    let { wishlistIdsAndUsers: t, source: l = "user_profile" } = e,
        n = (0, u.yK)(
            [g.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? g.A.getWishlist(t) : null;
                }),
            [t],
        ),
        i = (0, u.bG)(
            [g.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && g.A.isFetching(t);
                }),
            [t],
        ),
        r = (0, u.yK)(
            [g.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? g.A.getError(t) : void 0;
                }),
            [t],
        ),
        a = (0, u.yK)([o.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: l } = e;
                return null != t ? o.A.getWishlistSettings(l, t)?.updated_at : void 0;
            }),
        ),
        d = s.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, l) => {
                    let { userId: n, wishlistId: i } = t;
                    l >= a.length || (e[x(n, i)] = a[l]);
                }),
                e
            );
        }, [t, a]);
    return (
        (0, s.useEffect)(() => {
            for (let { wishlistId: e, userId: n } of t) {
                if (null == e || g.A.isFetching(e) || null != g.A.getError(e)) continue;
                let t = g.A.getWishlist(e),
                    i = g.A.getUpdatedAt(e),
                    s = d[x(n, e)];
                (null == t || (null != s && i !== s)) && A.A.fetchWishlist(e, s, l);
            }
        }, [t, l, d]),
        { wishlists: n, isFetching: i, errors: r }
    );
}
function k(e) {
    let { wishlistId: t, userId: l, source: n = "user_profile" } = e,
        [i, a, c, f] = (0, u.yK)([g.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [g.A.getWishlist(t), g.A.getStatus(t), g.A.getError(t), g.A.getUpdatedAt(t)],
        ),
        h = s.useMemo(() => (null == i ? [] : (0, r.uniq)((0, m.Lh)(i))), [i]);
    (0, d.j)({ skuIds: h });
    let I = (0, u.bG)([o.A], () => {
        if (null != t && null != l) return o.A.getWishlistSettings(l, t)?.updated_at;
    });
    return (
        (0, s.useEffect)(() => {
            null == t ||
                g.A.isFetching(t) ||
                null != c ||
                ((null == i || (null != I && f !== I)) && A.A.fetchWishlist(t, I, n));
        }, [t, n, i, I, f, c]),
        { wishlist: i, isFetching: "fetching" === a, wasFetched: "success" === a || "error" === a, error: c }
    );
}
function C(e, t) {
    return (0, u.bG)([g.A], () => null != e && g.A.hasSkuId(e, t));
}
function E(e) {
    let { isGift: t, giftRecipient: l, isSocialLayerStorefrontEnabled: n = !0 } = e;
    s.useEffect(() => {
        l?.id != null && (0, c.A)(l.id);
    }, [l?.id]);
    let i = (0, a.A)({ userId: l?.id }),
        r = (0, u.bG)([o.A], () => (l?.id == null ? null : o.A.getFirstWishlistId(l.id))),
        { wishlist: d } = k({ wishlistId: null != r && t && null != l ? r : null, userId: l?.id }),
        f = (0, I.B)(d);
    return s.useMemo(() => !0 === t && null != l && (f.length > 0 || (n && i.length > 0)), [t, l, f, i, n]);
}
function y() {
    return (function (e) {
        let t = (0, u.bG)([h.default], () => h.default.getUser(e)),
            { userProfile: l, wishlistId: n } = (0, u.cf)(
                [o.A],
                () => ({
                    userProfile: null != e ? o.A.getUserProfile(e) : null,
                    wishlistId: null != e ? o.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            s.useEffect(() => {
                null != e && null == l && null != t && null == l && (0, c.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, l]),
            { ...k({ wishlistId: n, userId: e }), wishlistId: n, userProfile: l }
        );
    })((0, u.bG)([f.default], () => f.default.getId()));
}
