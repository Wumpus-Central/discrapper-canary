var a = i(477900),
    s = i(582128),
    n = i(855986),
    r = i(772707),
    d = i(793574),
    l = i(688810),
    c = i(110676),
    u = i(408166),
    o = i(976860),
    _ = i(830543),
    f = i(166403),
    p = i(129230),
    C = i(580630),
    A = i(652215),
    E = i(792996),
    D = i(140624),
    g = i(628532),
    I = i(441301);
i.d(
    e,
    {},
    {
        default: function (t) {
            let { transitionState: e, onClose: i, amountRedeemed: S, currencyCode: T, loadId: k } = t,
                O = (0, C.$g)(S, T),
                R = null != (0, n.bG)([f.A], () => f.A.getPremiumTypeSubscription()),
                { analyticsLocations: b } = (0, l.Ay)(),
                x = s.useRef(!1);
            s.useEffect(() => {
                x.current ||
                    ((x.current = !0),
                    p.default.track(A.HAw.IMPRESSION_GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL, {
                        is_nitro_user: R,
                        load_id: k,
                    }));
            }, [R, k]);
            let h = s.useCallback(() => {
                    (p.default.track(A.HAw.GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL_CTA_CLICKED, {
                        is_nitro_user: R,
                        load_id: k,
                    }),
                        R
                            ? (0, c.Cz)({
                                  analyticsLocations: b,
                                  analyticsSource: d.A.GIFT_CARD_REDEMPTION_SUCCESS_MODAL,
                              })
                            : ((0, _.default)(), (0, u.default)(), (0, o.pX)(A.BVt.NITRO_HOME)),
                        i());
                }, [b, R, k, i]),
                m = [
                    { variant: "secondary", size: "md", text: E.intl.string(E.t.WAI6xu), onClick: i },
                    {
                        variant: "expressive",
                        size: "md",
                        text: R ? E.intl.string(D.default["9OxfNK"]) : E.intl.string(E.t["8x0jKT"]),
                        onClick: h,
                    },
                ];
            return (0, a.jsx)("div", {
                className: g.A,
                children: (0, a.jsx)(r.k, {
                    transitionState: e,
                    onClose: i,
                    title: E.intl.formatToPlainString(D.default.Afx5yS, { price: O }),
                    subtitle: R ? E.intl.string(D.default.VJXTzd) : E.intl.string(D.default["+fIPjg"]),
                    graphic: { type: "image", src: I.A, aspectRatio: "6/4" },
                    gradientColor: "purple",
                    actions: m,
                }),
            });
        },
    },
);
