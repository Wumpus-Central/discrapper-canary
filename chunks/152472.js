r.d(e, { c: () => m });
var i = r(477900),
    n = r(582128),
    s = r(554146),
    l = r(192308),
    a = r(691540),
    u = r(857250),
    o = r(97483),
    d = r(765178),
    c = r(131607),
    S = r(17928),
    I = r(688810),
    h = r(321191),
    p = r(808247),
    _ = r(594832),
    f = r(240248),
    A = r(375708),
    E = r(49999);
function m(t) {
    let { userId: e, skuId: a, nuxGraphic: u, onNuxShow: o, location: m, onAddSuccess: T, onError: R } = t,
        [L, g] = (0, c.kn)([s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        k = L === s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (t) {
            let {
                    userId: e,
                    skuId: r,
                    location: i,
                    onAddSuccess: s,
                    onRemoveSuccess: l,
                    onError: a,
                    skipAddAnnouncement: u,
                } = t,
                { analyticsLocations: o } = (0, I.Ay)((0, f.uJ)(i) ? [] : [i]),
                c = (0, S.bG)([h.A], () => h.A.getFirstWishlistId(e)),
                E = (0, _.rJ)(c, r),
                [m, y] = n.useState(null),
                [T, R] = n.useState(!1),
                L = null !== m ? m : E;
            n.useEffect(() => {
                (y(null), R(!1));
            }, [r]);
            let g = n.useCallback(async () => {
                if (!T)
                    if ((R(!0), L && null != c)) {
                        y(!1);
                        try {
                            (await p.A.removeSkuFromWishlist(c, r, o), d.O.announce(A.intl.string(A.t.DSXOiP)), l?.());
                        } catch (t) {
                            a?.(t);
                        } finally {
                            (y(null), R(!1));
                        }
                    } else {
                        y(!0);
                        try {
                            (await p.A.addSkuToWishlist(r, o), u || d.O.announce(A.intl.string(A.t["3T2jbf"])), s?.());
                        } catch (t) {
                            a?.(t);
                        } finally {
                            (y(null), R(!1));
                        }
                    }
            }, [T, L, c, r, o, s, l, a, u]);
            return { isWishlisted: L, isBusy: T, handleToggle: g };
        })({
            userId: e,
            skuId: a,
            location: m,
            onAddSuccess: n.useCallback(() => {
                (k &&
                    null != u &&
                    (o?.(),
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([r.e("454048"), r.e("864581")]).then(r.bind(r, 38884));
                        return (e) => (0, i.jsx)(t, { ...e, graphic: u });
                    }),
                    g(E.i.USER_DISMISS)),
                    T?.());
            }, [g, u, o, k, T]),
            onError: R ?? y,
        }),
        isFirstTimeWishlister: k,
    };
}
function y() {
    ((0, a.P0)((0, u.o)(A.intl.string(A.t.F8FvUy), o.Ck.FAILURE)), d.O.announce(A.intl.string(A.t.F8FvUy)));
}
