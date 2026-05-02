"use strict";
n.d(t, { c: () => I });
var i = n(627968),
    r = n(64700),
    s = n(554146),
    a = n(192308),
    o = n(691540),
    l = n(857250),
    u = n(97483),
    c = n(765178),
    d = n(131607),
    _ = n(17928),
    f = n(688810),
    h = n(841595),
    p = n(808247),
    E = n(561794),
    m = n(240248),
    g = n(49999),
    A = n(375708);
function I(e) {
    let { userId: t, skuId: o, nuxGraphic: l, onNuxShow: u, location: c, onAddSuccess: A, onError: I } = e,
        [S, N] = (0, d.kn)([s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        y = S === s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (e) {
            let { userId: t, skuId: n, location: i, onAddSuccess: s, onRemoveSuccess: a, onError: o } = e,
                { analyticsLocations: l } = (0, f.Ay)((0, m.uJ)(i) ? [] : [i]),
                u = (0, _.bG)([h.A], () => h.A.getFirstWishlistId(t)),
                c = (0, E.rJ)(u, n),
                [d, g] = r.useState(null),
                [A, I] = r.useState(!1),
                T = null !== d ? d : c;
            r.useEffect(() => {
                g(null), I(!1);
            }, [n]);
            let S = r.useCallback(async () => {
                if (!A)
                    if ((I(!0), T && null != u)) {
                        g(!1);
                        try {
                            await p.A.removeSkuFromWishlist(u, n, l), a?.();
                        } catch (e) {
                            o?.(e);
                        } finally {
                            g(null), I(!1);
                        }
                    } else {
                        g(!0);
                        try {
                            await p.A.addSkuToWishlist(n, l), s?.();
                        } catch (e) {
                            o?.(e);
                        } finally {
                            g(null), I(!1);
                        }
                    }
            }, [A, T, u, n, l, s, a, o]);
            return { isWishlisted: T, isBusy: A, handleToggle: S };
        })({
            userId: t,
            skuId: o,
            location: c,
            onAddSuccess: r.useCallback(() => {
                y &&
                    null != l &&
                    (u?.(),
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, i.jsx)(e, { ...t, graphic: l });
                    }),
                    N(g.i.USER_DISMISS)),
                    A?.();
            }, [N, l, u, y, A]),
            onError: I ?? T,
        }),
        isFirstTimeWishlister: y,
    };
}
function T() {
    (0, o.P0)((0, l.o)(A.intl.string(A.t.F8FvUy), u.Ck.FAILURE)), c.O.announce(A.intl.string(A.t.F8FvUy));
}
