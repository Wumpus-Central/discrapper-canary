"use strict";
n.d(t, { c: () => m });
var i = n(477900),
    r = n(582128),
    a = n(554146),
    s = n(192308),
    l = n(691540),
    o = n(857250),
    d = n(97483),
    c = n(765178),
    u = n(131607),
    _ = n(17928),
    E = n(688810),
    A = n(321191),
    h = n(808247),
    I = n(561794),
    f = n(240248),
    p = n(375708),
    T = n(49999);
function m(e) {
    let { userId: t, skuId: l, nuxGraphic: o, onNuxShow: d, location: m, onAddSuccess: S, onError: N } = e,
        [C, O] = (0, u.kn)([a.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        R = C === a.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (e) {
            let {
                    userId: t,
                    skuId: n,
                    location: i,
                    onAddSuccess: a,
                    onRemoveSuccess: s,
                    onError: l,
                    skipAddAnnouncement: o,
                } = e,
                { analyticsLocations: d } = (0, E.Ay)((0, f.uJ)(i) ? [] : [i]),
                u = (0, _.bG)([A.A], () => A.A.getFirstWishlistId(t)),
                T = (0, I.rJ)(u, n),
                [m, g] = r.useState(null),
                [S, N] = r.useState(!1),
                C = null !== m ? m : T;
            r.useEffect(() => {
                g(null), N(!1);
            }, [n]);
            let O = r.useCallback(async () => {
                if (!S)
                    if ((N(!0), C && null != u)) {
                        g(!1);
                        try {
                            await h.A.removeSkuFromWishlist(u, n, d), c.O.announce(p.intl.string(p.t.DSXOiP)), s?.();
                        } catch (e) {
                            l?.(e);
                        } finally {
                            g(null), N(!1);
                        }
                    } else {
                        g(!0);
                        try {
                            await h.A.addSkuToWishlist(n, d), o || c.O.announce(p.intl.string(p.t["3T2jbf"])), a?.();
                        } catch (e) {
                            l?.(e);
                        } finally {
                            g(null), N(!1);
                        }
                    }
            }, [S, C, u, n, d, a, s, l, o]);
            return { isWishlisted: C, isBusy: S, handleToggle: O };
        })({
            userId: t,
            skuId: l,
            location: m,
            onAddSuccess: r.useCallback(() => {
                R &&
                    null != o &&
                    (d?.(),
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, i.jsx)(e, { ...t, graphic: o });
                    }),
                    O(T.i.USER_DISMISS)),
                    S?.();
            }, [O, o, d, R, S]),
            onError: N ?? g,
        }),
        isFirstTimeWishlister: R,
    };
}
function g() {
    (0, l.P0)((0, o.o)(p.intl.string(p.t.F8FvUy), d.Ck.FAILURE)), c.O.announce(p.intl.string(p.t.F8FvUy));
}
