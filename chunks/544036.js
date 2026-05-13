i.d(e, { default: () => S });
var a = i(627968),
    s = i(64700),
    n = i(17928),
    r = i(772707),
    l = i(793574),
    d = i(688810),
    c = i(859040),
    u = i(408166),
    o = i(976860),
    _ = i(830543),
    p = i(166403),
    C = i(174459),
    f = i(580630),
    E = i(652215),
    A = i(375708),
    D = i(776409),
    g = i(808205),
    T = i(441301);
function S(t) {
    let { transitionState: e, onClose: i, amountRedeemed: S, currencyCode: I, loadId: k } = t,
        O = (0, f.$g)(S, I),
        R = null != (0, n.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        { analyticsLocations: b } = (0, d.Ay)(),
        h = s.useRef(!1);
    s.useEffect(() => {
        h.current ||
            ((h.current = !0),
            C.default.track(E.HAw.IMPRESSION_GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL, { is_nitro_user: R, load_id: k }));
    }, [R, k]);
    let m = s.useCallback(() => {
            C.default.track(E.HAw.GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL_CTA_CLICKED, { is_nitro_user: R, load_id: k }),
                R
                    ? (0, c.Cz)({ analyticsLocations: b, analyticsSource: l.A.GIFT_CARD_REDEMPTION_SUCCESS_MODAL })
                    : ((0, _.default)(), (0, u.default)(), (0, o.pX)(E.BVt.NITRO_HOME)),
                i();
        }, [b, R, k, i]),
        x = [
            { variant: "secondary", size: "md", text: A.intl.string(A.t["ETE/oC"]), onClick: i },
            {
                variant: "expressive",
                size: "md",
                text: R ? A.intl.string(D.default["9OxfNK"]) : A.intl.string(A.t["8x0jKT"]),
                onClick: m,
            },
        ];
    return (0, a.jsx)("div", {
        className: g.A,
        children: (0, a.jsx)(r.k, {
            transitionState: e,
            onClose: i,
            title: A.intl.formatToPlainString(D.default.Afx5yS, { price: O }),
            subtitle: R ? A.intl.string(D.default.VJXTzd) : A.intl.string(D.default["+fIPjg"]),
            graphic: { type: "image", src: T.A, aspectRatio: "6/4" },
            gradientColor: "purple",
            actions: x,
        }),
    });
}
