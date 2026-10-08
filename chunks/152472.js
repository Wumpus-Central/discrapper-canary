n.d(e, { c: () => m });
var a = n(477900),
    i = n(582128),
    r = n(554146),
    l = n(192308),
    s = n(376357),
    c = n(765178),
    u = n(131607),
    d = n(17928),
    o = n(688810),
    h = n(321191),
    p = n(808247),
    A = n(594832),
    f = n(240248),
    g = n(660183),
    R = n(49999);
function m(t) {
    let { userId: e, skuId: s, nuxGraphic: m, onNuxShow: I, location: E, onAddSuccess: P, onError: T } = t,
        [v, O] = (0, u.kn)([r.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], { bypassAutoDismiss: !0 }),
        w = v === r.M.WISHLIST_NUX_TOOLTIP_AND_MODAL;
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
                { analyticsLocations: R } = (0, o.Ay)((0, f.uJ)(a) ? [] : [a]),
                m = (0, d.bG)([h.A], () => h.A.getFirstWishlistId(e)),
                y = (0, A.rJ)(m, n),
                [I, E] = i.useState(null),
                [P, T] = i.useState(!1),
                v = null !== I ? I : y;
            i.useEffect(() => {
                (E(null), T(!1));
            }, [n]);
            let O = i.useCallback(async () => {
                if (!P)
                    if ((T(!0), v && null != m)) {
                        E(!1);
                        try {
                            (await p.A.removeSkuFromWishlist(m, n, R), c.O.announce(g.intl.string(g.t.DSXOiP)), l?.());
                        } catch (t) {
                            s?.(t);
                        } finally {
                            (E(null), T(!1));
                        }
                    } else {
                        E(!0);
                        try {
                            (await p.A.addSkuToWishlist(n, R), u || c.O.announce(g.intl.string(g.t["3T2jbf"])), r?.());
                        } catch (t) {
                            s?.(t);
                        } finally {
                            (E(null), T(!1));
                        }
                    }
            }, [P, v, m, n, R, r, l, s, u]);
            return { isWishlisted: v, isBusy: P, handleToggle: O };
        })({
            userId: e,
            skuId: s,
            location: E,
            onAddSuccess: i.useCallback(() => {
                (w &&
                    null != m &&
                    (I?.(),
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("454048"), n.e("864581")]).then(n.bind(n, 38884));
                        return (e) => (0, a.jsx)(t, { ...e, graphic: m });
                    }),
                    O(R.i.USER_DISMISS)),
                    P?.());
            }, [O, m, I, w, P]),
            onError: T ?? y,
        }),
        isFirstTimeWishlister: w,
    };
}
function y() {
    ((0, s.P0)((0, s.ox)(g.intl.string(g.t.F8FvUy), s.Ck.FAILURE)), c.O.announce(g.intl.string(g.t.F8FvUy)));
}
