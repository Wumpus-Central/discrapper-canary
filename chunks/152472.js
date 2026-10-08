n.d(e, { c: () => I });
var a = n(477900),
    i = n(582128),
    r = n(554146),
    l = n(192308),
    s = n(739187),
    c = n(857250),
    u = n(97483),
    d = n(765178),
    o = n(131607),
    h = n(17928),
    p = n(688810),
    A = n(321191),
    f = n(808247),
    g = n(594832),
    R = n(240248),
    m = n(660183),
    y = n(49999);
function I(t) {
    let { userId: e, skuId: s, nuxGraphic: c, onNuxShow: u, location: I, onAddSuccess: P, onError: T } = t,
        [v, O] = (0, o.kn)([r.M.WISHLIST_NUX_TOOLTIP_AND_MODAL], { bypassAutoDismiss: !0 }),
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
                    skipAddAnnouncement: c,
                } = t,
                { analyticsLocations: u } = (0, p.Ay)((0, R.uJ)(a) ? [] : [a]),
                o = (0, h.bG)([A.A], () => A.A.getFirstWishlistId(e)),
                y = (0, g.rJ)(o, n),
                [I, E] = i.useState(null),
                [P, T] = i.useState(!1),
                v = null !== I ? I : y;
            i.useEffect(() => {
                (E(null), T(!1));
            }, [n]);
            let O = i.useCallback(async () => {
                if (!P)
                    if ((T(!0), v && null != o)) {
                        E(!1);
                        try {
                            (await f.A.removeSkuFromWishlist(o, n, u), d.O.announce(m.intl.string(m.t.DSXOiP)), l?.());
                        } catch (t) {
                            s?.(t);
                        } finally {
                            (E(null), T(!1));
                        }
                    } else {
                        E(!0);
                        try {
                            (await f.A.addSkuToWishlist(n, u), c || d.O.announce(m.intl.string(m.t["3T2jbf"])), r?.());
                        } catch (t) {
                            s?.(t);
                        } finally {
                            (E(null), T(!1));
                        }
                    }
            }, [P, v, o, n, u, r, l, s, c]);
            return { isWishlisted: v, isBusy: P, handleToggle: O };
        })({
            userId: e,
            skuId: s,
            location: I,
            onAddSuccess: i.useCallback(() => {
                (w &&
                    null != c &&
                    (u?.(),
                    (0, l.openModalLazy)(async () => {
                        let { default: t } = await Promise.all([n.e("454048"), n.e("864581")]).then(n.bind(n, 38884));
                        return (e) => (0, a.jsx)(t, { ...e, graphic: c });
                    }),
                    O(y.i.USER_DISMISS)),
                    P?.());
            }, [O, c, u, w, P]),
            onError: T ?? E,
        }),
        isFirstTimeWishlister: w,
    };
}
function E() {
    ((0, s.P)((0, c.o)(m.intl.string(m.t.F8FvUy), u.Ck.FAILURE)), d.O.announce(m.intl.string(m.t.F8FvUy)));
}
