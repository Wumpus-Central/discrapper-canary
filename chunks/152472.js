r.d(e, { c: () => m });
var i = r(477900),
    n = r(582128),
    s = r(554146),
    l = r(192308),
    u = r(691540),
    a = r(857250),
    o = r(97483),
    c = r(765178),
    d = r(131607),
    S = r(17928),
    I = r(688810),
    p = r(321191),
    _ = r(808247),
    h = r(594832),
    A = r(240248),
    f = r(375708),
    E = r(49999);
function m(t) {
    let { userId: e, skuId: u, nuxGraphic: a, onNuxShow: o, location: m, onAddSuccess: T, onError: R } = t,
        [L, g] = (0, d.kn)([s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        k = L === s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (t) {
            let {
                    userId: e,
                    skuId: r,
                    location: i,
                    onAddSuccess: s,
                    onRemoveSuccess: l,
                    onError: u,
                    skipAddAnnouncement: a,
                } = t,
                { analyticsLocations: o } = (0, I.Ay)((0, A.uJ)(i) ? [] : [i]),
                d = (0, S.bG)([p.A], () => p.A.getFirstWishlistId(e)),
                E = (0, h.rJ)(d, r),
                [m, y] = n.useState(null),
                [T, R] = n.useState(!1),
                L = null !== m ? m : E;
            n.useEffect(() => {
                y(null), R(!1);
            }, [r]);
            let g = n.useCallback(async () => {
                if (!T)
                    if ((R(!0), L && null != d)) {
                        y(!1);
                        try {
                            await _.A.removeSkuFromWishlist(d, r, o), c.O.announce(f.intl.string(f.t.DSXOiP)), l?.();
                        } catch (t) {
                            u?.(t);
                        } finally {
                            y(null), R(!1);
                        }
                    } else {
                        y(!0);
                        try {
                            await _.A.addSkuToWishlist(r, o), a || c.O.announce(f.intl.string(f.t["3T2jbf"])), s?.();
                        } catch (t) {
                            u?.(t);
                        } finally {
                            y(null), R(!1);
                        }
                    }
            }, [T, L, d, r, o, s, l, u, a]);
            return { isWishlisted: L, isBusy: T, handleToggle: g };
        })({
            userId: e,
            skuId: u,
            location: m,
            onAddSuccess: n.useCallback(() => {
                k &&
                    null != a &&
                    (o?.(),
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([r.e("454048"), r.e("864581")]).then(r.bind(r, 38884));
                        return (e) => (0, i.jsx)(t, { ...e, graphic: a });
                    }),
                    g(E.i.USER_DISMISS)),
                    T?.();
            }, [g, a, o, k, T]),
            onError: R ?? y,
        }),
        isFirstTimeWishlister: k,
    };
}
function y() {
    (0, u.P0)((0, a.o)(f.intl.string(f.t.F8FvUy), o.Ck.FAILURE)), c.O.announce(f.intl.string(f.t.F8FvUy));
}
