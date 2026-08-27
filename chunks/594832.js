n.d(t, {
    B5: () => x,
    Zh: () => A,
    fw: () => I,
    pE: () => b,
    pl: () => v,
    rJ: () => T,
    sv: () => S,
    tA: () => R,
    uS: () => E,
});
var l,
    r,
    i = n(582128),
    s = n(435558),
    a = n(17928),
    u = n(96203),
    o = n(435658),
    c = n(321191),
    d = n(903209),
    f = n(280450),
    h = n(287809),
    m = n(808247),
    p = n(107563),
    g = n(855052),
    y = n(792334);
let v = 5,
    A = 350;
var E = (((l = {}).WISHLIST = "wishlist"), (l.POPULAR = "popular"), l),
    x = (((r = {}).USER_PROFILE = "user_profile"), r);
function C(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function S(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        l = (0, a.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getWishlist(t) : null;
                }),
            [t],
        ),
        r = (0, a.bG)(
            [p.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && p.A.isFetching(t);
                }),
            [t],
        ),
        s = (0, a.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getError(t) : void 0;
                }),
            [t],
        ),
        u = (0, a.yK)([c.A], () =>
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
                    n >= u.length || (e[C(l, r)] = u[n]);
                }),
                e
            );
        }, [t, u]);
    return (
        (0, i.useEffect)(() => {
            for (let { wishlistId: e, userId: l } of t) {
                if (null == e || p.A.isFetching(e) || null != p.A.getError(e)) continue;
                let t = p.A.getWishlist(e),
                    r = p.A.getUpdatedAt(e),
                    i = o[C(l, e)];
                (null == t || (null != i && r !== i)) && m.A.fetchWishlist(e, i, n);
            }
        }, [t, n, o]),
        { wishlists: l, isFetching: r, errors: s }
    );
}
function I(e) {
    let { wishlistId: t, userId: n, source: l = "user_profile" } = e,
        [r, u, d, f] = (0, a.yK)([p.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [p.A.getWishlist(t), p.A.getStatus(t), p.A.getError(t), p.A.getUpdatedAt(t)],
        ),
        h = i.useMemo(() => (null == r ? [] : (0, s.uniq)((0, g.Lh)(r))), [r]);
    (0, o.j)({ skuIds: h });
    let y = (0, a.bG)([c.A], () => {
        if (null != t && null != n) return c.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, i.useEffect)(() => {
            null == t ||
                p.A.isFetching(t) ||
                null != d ||
                ((null == r || (null != y && f !== y)) && m.A.fetchWishlist(t, y, l));
        }, [t, l, r, y, f, d]),
        { wishlist: r, isFetching: "fetching" === u, wasFetched: "success" === u || "error" === u, error: d }
    );
}
function T(e, t) {
    return (0, a.bG)([p.A], () => null != e && p.A.hasSkuId(e, t));
}
function R(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: l = !0 } = e;
    i.useEffect(() => {
        n?.id != null && (0, d.A)(n.id);
    }, [n?.id]);
    let r = (0, u.A)({ userId: n?.id }),
        s = (0, a.bG)([c.A], () => (n?.id == null ? null : c.A.getFirstWishlistId(n.id))),
        { wishlist: o } = I({ wishlistId: null != s && t && null != n ? s : null, userId: n?.id }),
        f = (0, y.B)(o);
    return i.useMemo(() => !0 === t && null != n && (f.length > 0 || (l && r.length > 0)), [t, n, f, r, l]);
}
function b() {
    return (function (e) {
        let t = (0, a.bG)([h.default], () => h.default.getUser(e)),
            { userProfile: n, wishlistId: l } = (0, a.cf)(
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
    })((0, a.bG)([f.default], () => f.default.getId()));
}
