s.d(e, { c: () => T });
var r = s(627968),
    i = s(64700),
    n = s(554146),
    l = s(192308),
    a = s(691540),
    o = s(857250),
    u = s(97483),
    d = s(765178),
    c = s(932001),
    S = s(17928),
    p = s(688810),
    _ = s(841595),
    h = s(808247),
    I = s(594832),
    A = s(240248),
    E = s(49999),
    f = s(985018);
function T(t) {
    let { userId: e, skuId: a, nuxGraphic: o, onNuxShow: u, location: d, onAddSuccess: f, onError: T } = t,
        [R, y] = (0, c.kn)([n.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        L = R === n.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (t) {
            let { userId: e, skuId: s, location: r, onAddSuccess: n, onRemoveSuccess: l, onError: a } = t,
                { analyticsLocations: o } = (0, p.Ay)((0, A.uJ)(r) ? [] : [r]),
                u = (0, S.bG)([_.A], () => _.A.getFirstWishlistId(e)),
                d = (0, I.rJ)(u, s),
                [c, E] = i.useState(null),
                [f, T] = i.useState(!1),
                m = null !== c ? c : d;
            i.useEffect(() => {
                E(null), T(!1);
            }, [s]);
            let R = i.useCallback(async () => {
                if (!f)
                    if ((T(!0), m && null != u)) {
                        E(!1);
                        try {
                            await h.A.removeSkuFromWishlist(u, s, o), l?.();
                        } catch (t) {
                            a?.(t);
                        } finally {
                            E(null), T(!1);
                        }
                    } else {
                        E(!0);
                        try {
                            await h.A.addSkuToWishlist(s, o), n?.();
                        } catch (t) {
                            a?.(t);
                        } finally {
                            E(null), T(!1);
                        }
                    }
            }, [f, m, u, s, o, n, l, a]);
            return { isWishlisted: m, isBusy: f, handleToggle: R };
        })({
            userId: e,
            skuId: a,
            location: d,
            onAddSuccess: i.useCallback(() => {
                L &&
                    null != o &&
                    (u?.(),
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await s.e("64581").then(s.bind(s, 38884));
                        return (e) => (0, r.jsx)(t, { ...e, graphic: o });
                    }),
                    y(E.i.USER_DISMISS)),
                    f?.();
            }, [y, o, u, L, f]),
            onError: T ?? m,
        }),
        isFirstTimeWishlister: L,
    };
}
function m() {
    (0, a.P0)((0, o.o)(f.intl.string(f.t.F8FvUy), u.Ck.FAILURE)), d.O.announce(f.intl.string(f.t.F8FvUy));
}
