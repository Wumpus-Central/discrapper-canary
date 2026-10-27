r.d(e, { tA: () => g, Zh: () => f, sv: () => y, pE: () => R, uS: () => E, rJ: () => T, pl: () => p, fw: () => L });
var i,
    l = r(582128),
    s = r(435558),
    n = r(17928),
    u = r(96203),
    o = r(435658),
    a = r(321191),
    d = r(903209),
    c = r(280450),
    S = r(287809),
    I = r(808247),
    A = r(820847),
    _ = r(107563),
    h = r(855052);
let p = 5,
    f = 350;
var E = (((i = {}).WISHLIST = "wishlist"), (i.POPULAR = "popular"), i);
function m(t, e) {
    return null != e ? `${t}:${e}` : `${t}:default`;
}
function y(t) {
    let { wishlistIdsAndUsers: e, source: r = A.B.USER_PROFILE } = t,
        i = (0, n.yK)(
            [_.A],
            () =>
                e.map((t) => {
                    let { wishlistId: e } = t;
                    return null != e ? _.A.getWishlist(e) : null;
                }),
            [e],
        ),
        s = (0, n.bG)(
            [_.A],
            () =>
                e.some((t) => {
                    let { wishlistId: e } = t;
                    return null != e && _.A.isFetching(e);
                }),
            [e],
        ),
        u = (0, n.yK)(
            [_.A],
            () =>
                e.map((t) => {
                    let { wishlistId: e } = t;
                    return null != e ? _.A.getError(e) : void 0;
                }),
            [e],
        ),
        o = (0, n.yK)([a.A], () =>
            e.map((t) => {
                let { wishlistId: e, userId: r } = t;
                return null != e ? a.A.getWishlistSettings(r, e)?.updated_at : void 0;
            }),
        ),
        d = l.useMemo(() => {
            let t = {};
            return (
                e.forEach((e, r) => {
                    let { userId: i, wishlistId: l } = e;
                    r >= o.length || (t[m(i, l)] = o[r]);
                }),
                t
            );
        }, [e, o]);
    return (
        (0, l.useEffect)(() => {
            for (let { wishlistId: t, userId: i } of e) {
                if (null == t || _.A.isFetching(t) || null != _.A.getError(t)) continue;
                let e = _.A.getWishlist(t),
                    l = _.A.getUpdatedAt(t),
                    s = d[m(i, t)];
                (null == e || (null != s && l !== s)) && I.A.fetchWishlist(t, s, r);
            }
        }, [e, r, d]),
        { wishlists: i, isFetching: s, errors: u }
    );
}
function L(t) {
    let { wishlistId: e, userId: r, source: i = A.B.USER_PROFILE } = t,
        [u, d, c, S] = (0, n.yK)([_.A], () =>
            null == e
                ? [null, "success", void 0, void 0]
                : [_.A.getWishlist(e), _.A.getStatus(e), _.A.getError(e), _.A.getUpdatedAt(e)],
        ),
        p = l.useMemo(() => (null == u ? [] : (0, s.uniq)((0, h.Lh)(u))), [u]);
    (0, o.j)({ skuIds: p });
    let f = (0, n.bG)([a.A], () => {
        if (null != e && null != r) return a.A.getWishlistSettings(r, e)?.updated_at;
    });
    return (
        (0, l.useEffect)(() => {
            null == e ||
                _.A.isFetching(e) ||
                null != c ||
                ((null == u || (null != f && S !== f)) && I.A.fetchWishlist(e, f, i));
        }, [e, i, u, f, S, c]),
        { wishlist: u, isFetching: "fetching" === d, wasFetched: "success" === d || "error" === d, error: c }
    );
}
function T(t, e) {
    return (0, n.bG)([_.A], () => null != t && _.A.hasSkuId(t, e));
}
function g(t) {
    let { isGift: e, giftRecipient: r, isSocialLayerStorefrontEnabled: i = !0 } = t;
    l.useEffect(() => {
        r?.id != null && (0, d.A)(r.id);
    }, [r?.id]);
    let s = (0, u.A)({ userId: r?.id }),
        o = (0, n.bG)([a.A], () => (r?.id == null ? null : a.A.getFirstWishlistId(r.id))),
        { wishlist: c } = L({ wishlistId: null != o && e && null != r ? o : null, userId: r?.id }),
        S = l.useMemo(() => c?.items.filter((t) => !0 !== t.isOwned) ?? [], [c]);
    return l.useMemo(() => !0 === e && null != r && (S.length > 0 || (i && s.length > 0)), [e, r, S, s, i]);
}
function R() {
    return (function (t) {
        let e = (0, n.bG)([S.default], () => S.default.getUser(t)),
            { userProfile: r, wishlistId: i } = (0, n.cf)(
                [a.A],
                () => ({
                    userProfile: null != t ? a.A.getUserProfile(t) : null,
                    wishlistId: null != t ? a.A.getFirstWishlistId(t) : null,
                }),
                [t],
            );
        return (
            l.useEffect(() => {
                null != t && null == r && null != e && null == r && (0, d.A)(e.id, e.getAvatarURL(null, 80));
            }, [e, t, r]),
            { ...L({ wishlistId: i, userId: t }), wishlistId: i, userProfile: r }
        );
    })((0, n.bG)([c.default], () => c.default.getId()));
}
