n.d(e, { c: () => y });
var a = n(477900),
    i = n(582128),
    r = n(554146),
    l = n(192308),
    s = n(858899),
    c = n(765178),
    u = n(131607),
    d = n(17928),
    o = n(688810),
    h = n(321191),
    p = n(808247),
    A = n(594832),
    f = n(240248),
    g = n(660183),
    m = n(49999);
function y(t) {
    let { userId: e, skuId: s, nuxGraphic: y, onNuxShow: I, location: P, onAddSuccess: T, onError: v } = t,
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
                { analyticsLocations: m } = (0, o.Ay)((0, f.uJ)(a) ? [] : [a]),
                y = (0, d.bG)([h.A], () => h.A.getFirstWishlistId(e)),
                R = (0, A.rJ)(y, n),
                [I, P] = i.useState(null),
                [T, v] = i.useState(!1),
                E = null !== I ? I : R;
            i.useEffect(() => {
                (P(null), v(!1));
            }, [n]);
            let O = i.useCallback(async () => {
                if (!T)
                    if ((v(!0), E && null != y)) {
                        P(!1);
                        try {
                            (await p.A.removeSkuFromWishlist(y, n, m), c.O.announce(g.intl.string(g.t.DSXOiP)), l?.());
                        } catch (t) {
                            s?.(t);
                        } finally {
                            (P(null), v(!1));
                        }
                    } else {
                        P(!0);
                        try {
                            (await p.A.addSkuToWishlist(n, m), u || c.O.announce(g.intl.string(g.t["3T2jbf"])), r?.());
                        } catch (t) {
                            s?.(t);
                        } finally {
                            (P(null), v(!1));
                        }
                    }
            }, [T, E, y, n, m, r, l, s, u]);
            return { isWishlisted: E, isBusy: T, handleToggle: O };
        })({
            userId: e,
            skuId: s,
            location: P,
            onAddSuccess: i.useCallback(() => {
                (w &&
                    null != y &&
                    (I?.(),
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("454048"), n.e("864581")]).then(n.bind(n, 38884));
                        return (e) => (0, a.jsx)(t, { ...e, graphic: y });
                    }),
                    O(m.i.USER_DISMISS)),
                    T?.());
            }, [O, y, I, w, T]),
            onError: v ?? R,
        }),
        isFirstTimeWishlister: w,
    };
}
function R() {
    ((0, s.P0)({ text: g.intl.string(g.t.F8FvUy), variant: "critical" }), c.O.announce(g.intl.string(g.t.F8FvUy)));
}
