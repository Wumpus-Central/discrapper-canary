"use strict";
n.d(t, { c: () => I });
var i = n(627968),
    r = n(64700),
    s = n(554146),
    a = n(192308),
    o = n(691540),
    l = n(857250),
    d = n(97483),
    _ = n(765178),
    u = n(932001),
    c = n(17928),
    E = n(688810),
    h = n(841595),
    m = n(808247),
    f = n(594832),
    g = n(240248),
    p = n(49999),
    A = n(985018);
function I(e) {
    let { userId: t, skuId: o, nuxGraphic: l, onNuxShow: d, location: _, onAddSuccess: A, onError: I } = e,
        [S, N] = (0, u.kn)([s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        C = S === s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (e) {
            let { userId: t, skuId: n, location: i, onAddSuccess: s, onRemoveSuccess: a, onError: o } = e,
                { analyticsLocations: l } = (0, E.Ay)((0, g.uJ)(i) ? [] : [i]),
                d = (0, c.bG)([h.A], () => h.A.getFirstWishlistId(t)),
                _ = (0, f.rJ)(d, n),
                [u, p] = r.useState(null),
                [A, I] = r.useState(!1),
                T = null !== u ? u : _;
            r.useEffect(() => {
                p(null), I(!1);
            }, [n]);
            let S = r.useCallback(async () => {
                if (!A)
                    if ((I(!0), T && null != d)) {
                        p(!1);
                        try {
                            await m.A.removeSkuFromWishlist(d, n, l), a?.();
                        } catch (e) {
                            o?.(e);
                        } finally {
                            p(null), I(!1);
                        }
                    } else {
                        p(!0);
                        try {
                            await m.A.addSkuToWishlist(n, l), s?.();
                        } catch (e) {
                            o?.(e);
                        } finally {
                            p(null), I(!1);
                        }
                    }
            }, [A, T, d, n, l, s, a, o]);
            return { isWishlisted: T, isBusy: A, handleToggle: S };
        })({
            userId: t,
            skuId: o,
            location: _,
            onAddSuccess: r.useCallback(() => {
                C &&
                    null != l &&
                    (d?.(),
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, i.jsx)(e, { ...t, graphic: l });
                    }),
                    N(p.i.USER_DISMISS)),
                    A?.();
            }, [N, l, d, C, A]),
            onError: I ?? T,
        }),
        isFirstTimeWishlister: C,
    };
}
function T() {
    (0, o.P0)((0, l.o)(A.intl.string(A.t.F8FvUy), d.Ck.FAILURE)), _.O.announce(A.intl.string(A.t.F8FvUy));
}
