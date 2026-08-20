r.d(e, { c: () => m });
var i = r(477900),
    n = r(582128),
    s = r(554146),
    l = r(192308),
    a = r(691540),
    u = r(857250),
    o = r(97483),
    c = r(765178),
    d = r(131607),
    S = r(17928),
    I = r(688810),
    p = r(321191),
    h = r(808247),
    _ = r(594832),
    A = r(240248),
    f = r(375708),
    E = r(49999);
function m(t) {
    let { userId: e, skuId: a, nuxGraphic: u, onNuxShow: o, location: m, onAddSuccess: T, onError: R } = t,
        [L, k] = (0, d.kn)([s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        g = L === s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
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
                { analyticsLocations: o } = (0, I.Ay)((0, A.uJ)(i) ? [] : [i]),
                d = (0, S.bG)([p.A], () => p.A.getFirstWishlistId(e)),
                E = (0, _.rJ)(d, r),
                [m, y] = n.useState(null),
                [T, R] = n.useState(!1),
                L = null !== m ? m : E;
            n.useEffect(() => {
                y(null), R(!1);
            }, [r]);
            let k = n.useCallback(async () => {
                if (!T)
                    if ((R(!0), L && null != d)) {
                        y(!1);
                        try {
                            await h.A.removeSkuFromWishlist(d, r, o), c.O.announce(f.intl.string(f.t.DSXOiP)), l?.();
                        } catch (t) {
                            a?.(t);
                        } finally {
                            y(null), R(!1);
                        }
                    } else {
                        y(!0);
                        try {
                            await h.A.addSkuToWishlist(r, o), u || c.O.announce(f.intl.string(f.t["3T2jbf"])), s?.();
                        } catch (t) {
                            a?.(t);
                        } finally {
                            y(null), R(!1);
                        }
                    }
            }, [T, L, d, r, o, s, l, a, u]);
            return { isWishlisted: L, isBusy: T, handleToggle: k };
        })({
            userId: e,
            skuId: a,
            location: m,
            onAddSuccess: n.useCallback(() => {
                g &&
                    null != u &&
                    (o?.(),
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([r.e("454048"), r.e("864581")]).then(r.bind(r, 38884));
                        return (e) => (0, i.jsx)(t, { ...e, graphic: u });
                    }),
                    k(E.i.USER_DISMISS)),
                    T?.();
            }, [k, u, o, g, T]),
            onError: R ?? y,
        }),
        isFirstTimeWishlister: g,
    };
}
function y() {
    (0, a.P0)((0, u.o)(f.intl.string(f.t.F8FvUy), o.Ck.FAILURE)), c.O.announce(f.intl.string(f.t.F8FvUy));
}
