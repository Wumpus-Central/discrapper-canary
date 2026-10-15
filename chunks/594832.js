l.d(t, { Zh: () => v, fw: () => k, pE: () => S, pl: () => p, rJ: () => x, sv: () => E, tA: () => y, uS: () => T });
var n,
    i = l(582128),
    s = l(435558),
    r = l(17928),
    a = l(96203),
    u = l(435658),
    d = l(321191),
    o = l(903209),
    c = l(280450),
    f = l(287809),
    h = l(808247),
    g = l(820847),
    b = l(107563),
    m = l(855052),
    A = l(792334);
let p = 5,
    v = 350;
var T = (((n = {}).WISHLIST = "wishlist"), (n.POPULAR = "popular"), n);
function I(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function E(e) {
    let { wishlistIdsAndUsers: t, source: l = g.B.USER_PROFILE } = e,
        n = (0, r.yK)(
            [b.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? b.A.getWishlist(t) : null;
                }),
            [t],
        ),
        s = (0, r.bG)(
            [b.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && b.A.isFetching(t);
                }),
            [t],
        ),
        a = (0, r.yK)(
            [b.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? b.A.getError(t) : void 0;
                }),
            [t],
        ),
        u = (0, r.yK)([d.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: l } = e;
                return null != t ? d.A.getWishlistSettings(l, t)?.updated_at : void 0;
            }),
        ),
        o = i.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, l) => {
                    let { userId: n, wishlistId: i } = t;
                    l >= u.length || (e[I(n, i)] = u[l]);
                }),
                e
            );
        }, [t, u]);
    return (
        (0, i.useEffect)(() => {
            for (let { wishlistId: e, userId: n } of t) {
                if (null == e || b.A.isFetching(e) || null != b.A.getError(e)) continue;
                let t = b.A.getWishlist(e),
                    i = b.A.getUpdatedAt(e),
                    s = o[I(n, e)];
                (null == t || (null != s && i !== s)) && h.A.fetchWishlist(e, s, l);
            }
        }, [t, l, o]),
        { wishlists: n, isFetching: s, errors: a }
    );
}
function k(e) {
    let { wishlistId: t, userId: l, source: n = g.B.USER_PROFILE } = e,
        [a, o, c, f] = (0, r.yK)([b.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [b.A.getWishlist(t), b.A.getStatus(t), b.A.getError(t), b.A.getUpdatedAt(t)],
        ),
        A = i.useMemo(() => (null == a ? [] : (0, s.uniq)((0, m.Lh)(a))), [a]);
    (0, u.j)({ skuIds: A });
    let p = (0, r.bG)([d.A], () => {
        if (null != t && null != l) return d.A.getWishlistSettings(l, t)?.updated_at;
    });
    return (
        (0, i.useEffect)(() => {
            null == t ||
                b.A.isFetching(t) ||
                null != c ||
                ((null == a || (null != p && f !== p)) && h.A.fetchWishlist(t, p, n));
        }, [t, n, a, p, f, c]),
        { wishlist: a, isFetching: "fetching" === o, wasFetched: "success" === o || "error" === o, error: c }
    );
}
function x(e, t) {
    return (0, r.bG)([b.A], () => null != e && b.A.hasSkuId(e, t));
}
function y(e) {
    let { isGift: t, giftRecipient: l, isSocialLayerStorefrontEnabled: n = !0 } = e;
    i.useEffect(() => {
        l?.id != null && (0, o.A)(l.id);
    }, [l?.id]);
    let s = (0, a.A)({ userId: l?.id }),
        u = (0, r.bG)([d.A], () => (l?.id == null ? null : d.A.getFirstWishlistId(l.id))),
        { wishlist: c } = k({ wishlistId: null != u && t && null != l ? u : null, userId: l?.id }),
        f = (0, A.B)(c);
    return i.useMemo(() => !0 === t && null != l && (f.length > 0 || (n && s.length > 0)), [t, l, f, s, n]);
}
function S() {
    return (function (e) {
        let t = (0, r.bG)([f.default], () => f.default.getUser(e)),
            { userProfile: l, wishlistId: n } = (0, r.cf)(
                [d.A],
                () => ({
                    userProfile: null != e ? d.A.getUserProfile(e) : null,
                    wishlistId: null != e ? d.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            i.useEffect(() => {
                null != e && null == l && null != t && null == l && (0, o.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, l]),
            { ...k({ wishlistId: n, userId: e }), wishlistId: n, userProfile: l }
        );
    })((0, r.bG)([c.default], () => c.default.getId()));
}
