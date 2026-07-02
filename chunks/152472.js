"use strict";
n.d(t, { c: () => I });
var i = n(627968),
    r = n(64700),
    s = n(554146),
    a = n(192308),
    o = n(691540),
    l = n(857250),
    u = n(97483),
    d = n(765178),
    c = n(131607),
    _ = n(17928),
    h = n(688810),
    f = n(321191),
    E = n(808247),
    p = n(561794),
    m = n(240248),
    g = n(375708),
    A = n(49999);
function I(e) {
    let { userId: t, skuId: o, nuxGraphic: l, onNuxShow: u, location: I, onAddSuccess: S, onError: N } = e,
        [C, y] = (0, c.kn)([s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        v = C === s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (e) {
            let {
                    userId: t,
                    skuId: n,
                    location: i,
                    onAddSuccess: s,
                    onRemoveSuccess: a,
                    onError: o,
                    skipAddAnnouncement: l,
                } = e,
                { analyticsLocations: u } = (0, h.Ay)((0, m.uJ)(i) ? [] : [i]),
                c = (0, _.bG)([f.A], () => f.A.getFirstWishlistId(t)),
                A = (0, p.rJ)(c, n),
                [I, T] = r.useState(null),
                [S, N] = r.useState(!1),
                C = null !== I ? I : A;
            r.useEffect(() => {
                T(null), N(!1);
            }, [n]);
            let y = r.useCallback(async () => {
                if (!S)
                    if ((N(!0), C && null != c)) {
                        T(!1);
                        try {
                            await E.A.removeSkuFromWishlist(c, n, u), d.O.announce(g.intl.string(g.t.DSXOiP)), a?.();
                        } catch (e) {
                            o?.(e);
                        } finally {
                            T(null), N(!1);
                        }
                    } else {
                        T(!0);
                        try {
                            await E.A.addSkuToWishlist(n, u), l || d.O.announce(g.intl.string(g.t["3T2jbf"])), s?.();
                        } catch (e) {
                            o?.(e);
                        } finally {
                            T(null), N(!1);
                        }
                    }
            }, [S, C, c, n, u, s, a, o, l]);
            return { isWishlisted: C, isBusy: S, handleToggle: y };
        })({
            userId: t,
            skuId: o,
            location: I,
            onAddSuccess: r.useCallback(() => {
                v &&
                    null != l &&
                    (u?.(),
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e("64581").then(n.bind(n, 38884));
                        return (t) => (0, i.jsx)(e, { ...t, graphic: l });
                    }),
                    y(A.i.USER_DISMISS)),
                    S?.();
            }, [y, l, u, v, S]),
            onError: N ?? T,
        }),
        isFirstTimeWishlister: v,
    };
}
function T() {
    (0, o.P0)((0, l.o)(g.intl.string(g.t.F8FvUy), u.Ck.FAILURE)), d.O.announce(g.intl.string(g.t.F8FvUy));
}
