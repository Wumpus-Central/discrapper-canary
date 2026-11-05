n.d(e, { c: () => I });
var a = n(477900),
    i = n(582128),
    r = n(554146),
    l = n(192308),
    s = n(858899),
    c = n(765178),
    u = n(263775),
    d = n(855986),
    o = n(688810),
    h = n(851767),
    p = n(808247),
    f = n(634110),
    A = n(240248),
    g = n(792996),
    m = n(49999);
function I(t) {
    let { userId: e, skuId: s, nuxGraphic: I, onNuxShow: P, location: T, onAddSuccess: v, onError: y } = t,
        [E, O] = (0, u.kn)([r.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], { bypassAutoDismiss: !0 }),
        w = E === r.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
    return {
        ...(function (t) {
            let {
                    userId: e,
                    skuId: n,
                    location: a,
                    onAddSuccess: r,
                    onRemoveSuccess: l,
                    onError: s,
                    skipAddAnnouncement: u,
                } = t,
                { analyticsLocations: m } = (0, o.Ay)((0, A.uJ)(a) ? [] : [a]),
                I = (0, d.bG)([h.A], () => h.A.getFirstWishlistId(e)),
                R = (0, f.rJ)(I, n),
                [P, T] = i.useState(null),
                [v, y] = i.useState(!1),
                E = null !== P ? P : R;
            i.useEffect(() => {
                (T(null), y(!1));
            }, [n]);
            let O = i.useCallback(async () => {
                if (!v)
                    if ((y(!0), E && null != I)) {
                        T(!1);
                        try {
                            (await p.A.removeSkuFromWishlist(I, n, m), c.O.announce(g.intl.string(g.t.DSXOiP)), l?.());
                        } catch (t) {
                            s?.(t);
                        } finally {
                            (T(null), y(!1));
                        }
                    } else {
                        T(!0);
                        try {
                            (await p.A.addSkuToWishlist(n, m), u || c.O.announce(g.intl.string(g.t["3T2jbf"])), r?.());
                        } catch (t) {
                            s?.(t);
                        } finally {
                            (T(null), y(!1));
                        }
                    }
            }, [v, E, I, n, m, r, l, s, u]);
            return { isWishlisted: E, isBusy: v, handleToggle: O };
        })({
            userId: e,
            skuId: s,
            location: T,
            onAddSuccess: i.useCallback(() => {
                (w &&
                    null != I &&
                    (P?.(),
                    (0, l.mM)(async () => {
                        let { default: t } = await Promise.all([n.e(454048), n.e(864581)]).then(n.bind(n, 38884));
                        return (e) => (0, a.jsx)(t, { ...e, graphic: I });
                    }),
                    O(m.i.USER_DISMISS)),
                    v?.());
            }, [O, I, P, w, v]),
            onError: y ?? R,
        }),
        isFirstTimeWishlister: w,
    };
}
function R() {
    ((0, s.P0)({ text: g.intl.string(g.t.F8FvUy), variant: "critical" }), c.O.announce(g.intl.string(g.t.F8FvUy)));
}
