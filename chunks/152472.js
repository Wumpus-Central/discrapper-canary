r.d(e, { c: () => m });
var i = r(477900),
    n = r(582128),
    l = r(554146),
    s = r(192308),
    u = r(691540),
    a = r(857250),
    o = r(97483),
    d = r(765178),
    c = r(131607),
    S = r(17928),
    A = r(688810),
    h = r(321191),
    I = r(808247),
    p = r(561794),
    f = r(240248),
    _ = r(375708),
    E = r(49999);
function m(t) {
    let { userId: e, skuId: u, nuxGraphic: a, onNuxShow: o, location: m, onAddSuccess: g, onError: T } = t,
        [R, L] = (0, c.kn)([l.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        v = R === l.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (t) {
            let {
                    userId: e,
                    skuId: r,
                    location: i,
                    onAddSuccess: l,
                    onRemoveSuccess: s,
                    onError: u,
                    skipAddAnnouncement: a,
                } = t,
                { analyticsLocations: o } = (0, A.Ay)((0, f.uJ)(i) ? [] : [i]),
                c = (0, S.bG)([h.A], () => h.A.getFirstWishlistId(e)),
                E = (0, p.rJ)(c, r),
                [m, y] = n.useState(null),
                [g, T] = n.useState(!1),
                R = null !== m ? m : E;
            n.useEffect(() => {
                y(null), T(!1);
            }, [r]);
            let L = n.useCallback(async () => {
                if (!g)
                    if ((T(!0), R && null != c)) {
                        y(!1);
                        try {
                            await I.A.removeSkuFromWishlist(c, r, o), d.O.announce(_.intl.string(_.t.DSXOiP)), s?.();
                        } catch (t) {
                            u?.(t);
                        } finally {
                            y(null), T(!1);
                        }
                    } else {
                        y(!0);
                        try {
                            await I.A.addSkuToWishlist(r, o), a || d.O.announce(_.intl.string(_.t["3T2jbf"])), l?.();
                        } catch (t) {
                            u?.(t);
                        } finally {
                            y(null), T(!1);
                        }
                    }
            }, [g, R, c, r, o, l, s, u, a]);
            return { isWishlisted: R, isBusy: g, handleToggle: L };
        })({
            userId: e,
            skuId: u,
            location: m,
            onAddSuccess: n.useCallback(() => {
                v &&
                    null != a &&
                    (o?.(),
                    (0, s.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([r.e("454048"), r.e("864581")]).then(r.bind(r, 38884));
                        return (e) => (0, i.jsx)(t, { ...e, graphic: a });
                    }),
                    L(E.i.USER_DISMISS)),
                    g?.();
            }, [L, a, o, v, g]),
            onError: T ?? y,
        }),
        isFirstTimeWishlister: v,
    };
}
function y() {
    (0, u.P0)((0, a.o)(_.intl.string(_.t.F8FvUy), o.Ck.FAILURE)), d.O.announce(_.intl.string(_.t.F8FvUy));
}
