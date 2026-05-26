i.d(e, { c: () => m });
var r = i(627968),
    l = i(64700),
    s = i(554146),
    n = i(192308),
    a = i(691540),
    u = i(857250),
    o = i(97483),
    d = i(765178),
    c = i(131607),
    p = i(17928),
    h = i(688810),
    S = i(841595),
    I = i(808247),
    f = i(561794),
    A = i(240248),
    _ = i(49999),
    E = i(375708);
function m(t) {
    let { userId: e, skuId: a, nuxGraphic: u, onNuxShow: o, location: d, onAddSuccess: E, onError: m } = t,
        [y, g] = (0, c.kn)([s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        R = y === s.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (t) {
            let { userId: e, skuId: i, location: r, onAddSuccess: s, onRemoveSuccess: n, onError: a } = t,
                { analyticsLocations: u } = (0, h.Ay)((0, A.uJ)(r) ? [] : [r]),
                o = (0, p.bG)([S.A], () => S.A.getFirstWishlistId(e)),
                d = (0, f.rJ)(o, i),
                [c, _] = l.useState(null),
                [E, m] = l.useState(!1),
                T = null !== c ? c : d;
            l.useEffect(() => {
                _(null), m(!1);
            }, [i]);
            let y = l.useCallback(async () => {
                if (!E)
                    if ((m(!0), T && null != o)) {
                        _(!1);
                        try {
                            await I.A.removeSkuFromWishlist(o, i, u), n?.();
                        } catch (t) {
                            a?.(t);
                        } finally {
                            _(null), m(!1);
                        }
                    } else {
                        _(!0);
                        try {
                            await I.A.addSkuToWishlist(i, u), s?.();
                        } catch (t) {
                            a?.(t);
                        } finally {
                            _(null), m(!1);
                        }
                    }
            }, [E, T, o, i, u, s, n, a]);
            return { isWishlisted: T, isBusy: E, handleToggle: y };
        })({
            userId: e,
            skuId: a,
            location: d,
            onAddSuccess: l.useCallback(() => {
                R &&
                    null != u &&
                    (o?.(),
                    (0, n.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([i.e("54048"), i.e("64581")]).then(i.bind(i, 38884));
                        return (e) => (0, r.jsx)(t, { ...e, graphic: u });
                    }),
                    g(_.i.USER_DISMISS)),
                    E?.();
            }, [g, u, o, R, E]),
            onError: m ?? T,
        }),
        isFirstTimeWishlister: R,
    };
}
function T() {
    (0, a.P0)((0, u.o)(E.intl.string(E.t.F8FvUy), o.Ck.FAILURE)), d.O.announce(E.intl.string(E.t.F8FvUy));
}
