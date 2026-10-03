n.d(t, { c: () => T });
var a = n(477900),
    i = n(582128),
    l = n(554146),
    s = n(192308),
    r = n(739187),
    d = n(857250),
    c = n(97483),
    u = n(765178),
    o = n(131607),
    h = n(17928),
    f = n(688810),
    m = n(321191),
    p = n(808247),
    A = n(594832),
    g = n(240248),
    y = n(375708),
    I = n(49999);
function T(e) {
    let { userId: t, skuId: r, nuxGraphic: d, onNuxShow: c, location: T, onAddSuccess: b, onError: R } = e,
        [E, w] = (0, o.kn)([l.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        O = E === l.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (e) {
            let {
                    userId: t,
                    skuId: n,
                    location: a,
                    onAddSuccess: l,
                    onRemoveSuccess: s,
                    onError: r,
                    skipAddAnnouncement: d,
                } = e,
                { analyticsLocations: c } = (0, f.Ay)((0, g.uJ)(a) ? [] : [a]),
                o = (0, h.bG)([m.A], () => m.A.getFirstWishlistId(t)),
                I = (0, A.rJ)(o, n),
                [T, v] = i.useState(null),
                [b, R] = i.useState(!1),
                E = null !== T ? T : I;
            i.useEffect(() => {
                (v(null), R(!1));
            }, [n]);
            let w = i.useCallback(async () => {
                if (!b)
                    if ((R(!0), E && null != o)) {
                        v(!1);
                        try {
                            (await p.A.removeSkuFromWishlist(o, n, c), u.O.announce(y.intl.string(y.t.DSXOiP)), s?.());
                        } catch (e) {
                            r?.(e);
                        } finally {
                            (v(null), R(!1));
                        }
                    } else {
                        v(!0);
                        try {
                            (await p.A.addSkuToWishlist(n, c), d || u.O.announce(y.intl.string(y.t["3T2jbf"])), l?.());
                        } catch (e) {
                            r?.(e);
                        } finally {
                            (v(null), R(!1));
                        }
                    }
            }, [b, E, o, n, c, l, s, r, d]);
            return { isWishlisted: E, isBusy: b, handleToggle: w };
        })({
            userId: t,
            skuId: r,
            location: T,
            onAddSuccess: i.useCallback(() => {
                (O &&
                    null != d &&
                    (c?.(),
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("454048"), n.e("864581")]).then(n.bind(n, 38884));
                        return (t) => (0, a.jsx)(e, { ...t, graphic: d });
                    }),
                    w(I.i.USER_DISMISS)),
                    b?.());
            }, [w, d, c, O, b]),
            onError: R ?? v,
        }),
        isFirstTimeWishlister: O,
    };
}
function v() {
    ((0, r.P)((0, d.o)(y.intl.string(y.t.F8FvUy), c.Ck.FAILURE)), u.O.announce(y.intl.string(y.t.F8FvUy)));
}
