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
    h = s(688810),
    p = s(841595),
    _ = s(808247),
    I = s(594832),
    E = s(240248),
    A = s(49999),
    f = s(985018);
function T(t) {
    let { userId: e, skuId: a, nuxGraphic: o, onNuxShow: u, location: d, onAddSuccess: f, onError: T } = t,
        [R, y] = (0, c.kn)([n.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], void 0, !0),
        k = R === n.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (t) {
            let { userId: e, skuId: s, location: r, onAddSuccess: n, onRemoveSuccess: l, onError: a } = t,
                { analyticsLocations: o } = (0, h.Ay)((0, E.uJ)(r) ? [] : [r]),
                u = (0, S.bG)([p.A], () => p.A.getFirstWishlistId(e)),
                d = (0, I.rJ)(u, s),
                [c, A] = i.useState(null),
                [f, T] = i.useState(!1),
                m = null !== c ? c : d;
            i.useEffect(() => {
                A(null), T(!1);
            }, [s]);
            let R = i.useCallback(async () => {
                if (!f)
                    if ((T(!0), m && null != u)) {
                        A(!1);
                        try {
                            await _.A.removeSkuFromWishlist(u, s, o), l?.();
                        } catch (t) {
                            a?.(t);
                        } finally {
                            A(null), T(!1);
                        }
                    } else {
                        A(!0);
                        try {
                            await _.A.addSkuToWishlist(s, o), n?.();
                        } catch (t) {
                            a?.(t);
                        } finally {
                            A(null), T(!1);
                        }
                    }
            }, [f, m, u, s, o, n, l, a]);
            return { isWishlisted: m, isBusy: f, handleToggle: R };
        })({
            userId: e,
            skuId: a,
            location: d,
            onAddSuccess: i.useCallback(() => {
                k &&
                    null != o &&
                    (u?.(),
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await s.e("64581").then(s.bind(s, 38884));
                        return (e) => (0, r.jsx)(t, { ...e, graphic: o });
                    }),
                    y(A.i.USER_DISMISS)),
                    f?.();
            }, [y, o, u, k, f]),
            onError: T ?? m,
        }),
        isFirstTimeWishlister: k,
    };
}
function m() {
    (0, a.P0)((0, o.o)(f.intl.string(f.t.F8FvUy), u.Ck.FAILURE)), d.O.announce(f.intl.string(f.t.F8FvUy));
}
