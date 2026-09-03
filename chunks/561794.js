r.d(e, {
    tA: () => L,
    Zh: () => _,
    sv: () => g,
    pE: () => v,
    uS: () => E,
    rJ: () => R,
    pl: () => f,
    B5: () => m,
    fw: () => T,
});
var i,
    n,
    l = r(582128),
    s = r(435558),
    u = r(17928),
    a = r(96203),
    o = r(435658),
    c = r(321191),
    d = r(903209),
    S = r(280450),
    A = r(287809),
    h = r(808247),
    I = r(107563),
    p = r(855052);
let f = 5,
    _ = 350;
var E = (((i = {}).WISHLIST = "wishlist"), (i.POPULAR = "popular"), i),
    m = (((n = {}).USER_PROFILE = "user_profile"), n);
function y(t, e) {
    return null != e ? `${t}:${e}` : `${t}:default`;
}
function g(t) {
    let { wishlistIdsAndUsers: e, source: r = "user_profile" } = t,
        i = (0, u.yK)(
            [I.A],
            () =>
                e.map((t) => {
                    let { wishlistId: e } = t;
                    return null != e ? I.A.getWishlist(e) : null;
                }),
            [e],
        ),
        n = (0, u.bG)(
            [I.A],
            () =>
                e.some((t) => {
                    let { wishlistId: e } = t;
                    return null != e && I.A.isFetching(e);
                }),
            [e],
        ),
        s = (0, u.yK)(
            [I.A],
            () =>
                e.map((t) => {
                    let { wishlistId: e } = t;
                    return null != e ? I.A.getError(e) : void 0;
                }),
            [e],
        ),
        a = (0, u.yK)([c.A], () =>
            e.map((t) => {
                let { wishlistId: e, userId: r } = t;
                return null != e ? c.A.getWishlistSettings(r, e)?.updated_at : void 0;
            }),
        ),
        o = l.useMemo(() => {
            let t = {};
            return (
                e.forEach((e, r) => {
                    let { userId: i, wishlistId: n } = e;
                    r >= a.length || (t[y(i, n)] = a[r]);
                }),
                t
            );
        }, [e, a]);
    return (
        (0, l.useEffect)(() => {
            for (let { wishlistId: t, userId: i } of e) {
                if (null == t || I.A.isFetching(t) || null != I.A.getError(t)) continue;
                let e = I.A.getWishlist(t),
                    n = I.A.getUpdatedAt(t),
                    l = o[y(i, t)];
                (null == e || (null != l && n !== l)) && h.A.fetchWishlist(t, l, r);
            }
        }, [e, r, o]),
        { wishlists: i, isFetching: n, errors: s }
    );
}
function T(t) {
    let { wishlistId: e, userId: r, source: i = "user_profile" } = t,
        [n, a, d, S] = (0, u.yK)([I.A], () =>
            null == e
                ? [null, "success", void 0, void 0]
                : [I.A.getWishlist(e), I.A.getStatus(e), I.A.getError(e), I.A.getUpdatedAt(e)],
        ),
        A = l.useMemo(() => (null == n ? [] : (0, s.uniq)((0, p.Lh)(n))), [n]);
    (0, o.j)({ skuIds: A });
    let f = (0, u.bG)([c.A], () => {
        if (null != e && null != r) return c.A.getWishlistSettings(r, e)?.updated_at;
    });
    return (
        (0, l.useEffect)(() => {
            null == e ||
                I.A.isFetching(e) ||
                null != d ||
                ((null == n || (null != f && S !== f)) && h.A.fetchWishlist(e, f, i));
        }, [e, i, n, f, S, d]),
        { wishlist: n, isFetching: "fetching" === a, wasFetched: "success" === a || "error" === a, error: d }
    );
}
function R(t, e) {
    return (0, u.bG)([I.A], () => null != t && I.A.hasSkuId(t, e));
}
function L(t) {
    let { isGift: e, giftRecipient: r, isSocialLayerStorefrontEnabled: i = !0 } = t;
    l.useEffect(() => {
        r?.id != null && (0, d.A)(r.id);
    }, [r?.id]);
    let n = (0, a.A)({ userId: r?.id }),
        s = (0, u.bG)([c.A], () => (r?.id == null ? null : c.A.getFirstWishlistId(r.id))),
        { wishlist: o } = T({ wishlistId: null != s && e && null != r ? s : null, userId: r?.id }),
        S = l.useMemo(() => o?.items.filter((t) => !0 !== t.isOwned) ?? [], [o]);
    return l.useMemo(() => !0 === e && null != r && (S.length > 0 || (i && n.length > 0)), [e, r, S, n, i]);
}
function v() {
    return (function (t) {
        let e = (0, u.bG)([A.default], () => A.default.getUser(t)),
            { userProfile: r, wishlistId: i } = (0, u.cf)(
                [c.A],
                () => ({
                    userProfile: null != t ? c.A.getUserProfile(t) : null,
                    wishlistId: null != t ? c.A.getFirstWishlistId(t) : null,
                }),
                [t],
            );
        return (
            l.useEffect(() => {
                null != t && null == r && null != e && null == r && (0, d.A)(e.id, e.getAvatarURL(null, 80));
            }, [e, t, r]),
            { ...T({ wishlistId: i, userId: t }), wishlistId: i, userProfile: r }
        );
    })((0, u.bG)([S.default], () => S.default.getId()));
}
