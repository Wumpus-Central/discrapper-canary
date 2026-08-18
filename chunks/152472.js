"use strict";
n.d(t, { c: () => C });
var l = n(477900),
    i = n(582128),
    s = n(554146),
    r = n(192308),
    a = n(691540),
    o = n(857250),
    u = n(97483),
    c = n(765178),
    d = n(131607),
    h = n(17928),
    m = n(688810),
    f = n(321191),
    p = n(808247),
    g = n(561794),
    x = n(240248),
    A = n(375708),
    E = n(49999);
function C(e) {
    let { userId: t, skuId: a, nuxGraphic: o, onNuxShow: u, location: C, onAddSuccess: y, onError: S } = e,
        [v, _] = (0, d.kn)([s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        N = v === s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (e) {
            let {
                    userId: t,
                    skuId: n,
                    location: l,
                    onAddSuccess: s,
                    onRemoveSuccess: r,
                    onError: a,
                    skipAddAnnouncement: o,
                } = e,
                { analyticsLocations: u } = (0, m.Ay)((0, x.uJ)(l) ? [] : [l]),
                d = (0, h.bG)([f.A], () => f.A.getFirstWishlistId(t)),
                E = (0, g.rJ)(d, n),
                [C, I] = i.useState(null),
                [y, S] = i.useState(!1),
                v = null !== C ? C : E;
            i.useEffect(() => {
                I(null), S(!1);
            }, [n]);
            let _ = i.useCallback(async () => {
                if (!y)
                    if ((S(!0), v && null != d)) {
                        I(!1);
                        try {
                            await p.A.removeSkuFromWishlist(d, n, u), c.O.announce(A.intl.string(A.t.DSXOiP)), r?.();
                        } catch (e) {
                            a?.(e);
                        } finally {
                            I(null), S(!1);
                        }
                    } else {
                        I(!0);
                        try {
                            await p.A.addSkuToWishlist(n, u), o || c.O.announce(A.intl.string(A.t["3T2jbf"])), s?.();
                        } catch (e) {
                            a?.(e);
                        } finally {
                            I(null), S(!1);
                        }
                    }
            }, [y, v, d, n, u, s, r, a, o]);
            return { isWishlisted: v, isBusy: y, handleToggle: _ };
        })({
            userId: t,
            skuId: a,
            location: C,
            onAddSuccess: i.useCallback(() => {
                N &&
                    null != o &&
                    (u?.(),
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e("864581").then(n.bind(n, 38884));
                        return (t) => (0, l.jsx)(e, { ...t, graphic: o });
                    }),
                    _(E.i.USER_DISMISS)),
                    y?.();
            }, [_, o, u, N, y]),
            onError: S ?? I,
        }),
        isFirstTimeWishlister: N,
    };
}
function I() {
    (0, a.P0)((0, o.o)(A.intl.string(A.t.F8FvUy), u.Ck.FAILURE)), c.O.announce(A.intl.string(A.t.F8FvUy));
}
