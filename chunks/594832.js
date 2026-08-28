n.d(t, {
    B5: () => C,
    Zh: () => E,
    fw: () => I,
    pE: () => w,
    pl: () => v,
    rJ: () => T,
    sv: () => S,
    tA: () => R,
    uS: () => A,
});
var l,
    r,
    i = n(582128),
    a = n(435558),
    s = n(17928),
    u = n(96203),
    o = n(435658),
    c = n(321191),
    d = n(903209),
    f = n(280450),
    h = n(287809),
    p = n(808247),
    m = n(107563),
    g = n(855052),
    y = n(792334);
let v = 5,
    E = 350;
var A = (((l = {}).WISHLIST = "wishlist"), (l.POPULAR = "popular"), l),
    C = (((r = {}).USER_PROFILE = "user_profile"), r);
function x(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function S(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        l = (0, s.yK)(
            [m.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? m.A.getWishlist(t) : null;
                }),
            [t],
        ),
        r = (0, s.bG)(
            [m.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && m.A.isFetching(t);
                }),
            [t],
        ),
        a = (0, s.yK)(
            [m.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? m.A.getError(t) : void 0;
                }),
            [t],
        ),
        u = (0, s.yK)([c.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? c.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        o = i.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: l, wishlistId: r } = t;
                    n >= u.length || (e[x(l, r)] = u[n]);
                }),
                e
            );
        }, [t, u]);
    return (
        (0, i.useEffect)(() => {
            for (let { wishlistId: e, userId: l } of t) {
                if (null == e || m.A.isFetching(e) || null != m.A.getError(e)) continue;
                let t = m.A.getWishlist(e),
                    r = m.A.getUpdatedAt(e),
                    i = o[x(l, e)];
                (null == t || (null != i && r !== i)) && p.A.fetchWishlist(e, i, n);
            }
        }, [t, n, o]),
        { wishlists: l, isFetching: r, errors: a }
    );
}
function I(e) {
    let { wishlistId: t, userId: n, source: l = "user_profile" } = e,
        [r, u, d, f] = (0, s.yK)([m.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [m.A.getWishlist(t), m.A.getStatus(t), m.A.getError(t), m.A.getUpdatedAt(t)],
        ),
        h = i.useMemo(() => (null == r ? [] : (0, a.uniq)((0, g.Lh)(r))), [r]);
    (0, o.j)({ skuIds: h });
    let y = (0, s.bG)([c.A], () => {
        if (null != t && null != n) return c.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, i.useEffect)(() => {
            null == t ||
                m.A.isFetching(t) ||
                null != d ||
                ((null == r || (null != y && f !== y)) && p.A.fetchWishlist(t, y, l));
        }, [t, l, r, y, f, d]),
        { wishlist: r, isFetching: "fetching" === u, wasFetched: "success" === u || "error" === u, error: d }
    );
}
function T(e, t) {
    return (0, s.bG)([m.A], () => null != e && m.A.hasSkuId(e, t));
}
function R(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: l = !0 } = e;
    i.useEffect(() => {
        n?.id != null && (0, d.A)(n.id);
    }, [n?.id]);
    let r = (0, u.A)({ userId: n?.id }),
        a = (0, s.bG)([c.A], () => (n?.id == null ? null : c.A.getFirstWishlistId(n.id))),
        { wishlist: o } = I({ wishlistId: null != a && t && null != n ? a : null, userId: n?.id }),
        f = (0, y.B)(o);
    return i.useMemo(() => !0 === t && null != n && (f.length > 0 || (l && r.length > 0)), [t, n, f, r, l]);
}
function w() {
    return (function (e) {
        let t = (0, s.bG)([h.default], () => h.default.getUser(e)),
            { userProfile: n, wishlistId: l } = (0, s.cf)(
                [c.A],
                () => ({
                    userProfile: null != e ? c.A.getUserProfile(e) : null,
                    wishlistId: null != e ? c.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            i.useEffect(() => {
                null != e && null == n && null != t && null == n && (0, d.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, n]),
            { ...I({ wishlistId: l, userId: e }), wishlistId: l, userProfile: n }
        );
    })((0, s.bG)([f.default], () => f.default.getId()));
}
