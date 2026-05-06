i.d(e, { default: () => T });
var a = i(627968),
    s = i(64700),
    n = i(17928),
    r = i(772707),
    l = i(793574),
    c = i(688810),
    d = i(859040),
    u = i(408166),
    o = i(976860),
    _ = i(779733),
    p = i(166403),
    C = i(174459),
    f = i(580630),
    E = i(652215),
    A = i(375708),
    D = i(776409),
    g = i(808205);
function T(t) {
    let { transitionState: e, onClose: i, amountRedeemed: T, currencyCode: S, loadId: I } = t,
        k = (0, f.$g)(T, S),
        O = null != (0, n.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        { analyticsLocations: R } = (0, c.Ay)(),
        b = s.useRef(!1);
    s.useEffect(() => {
        b.current ||
            ((b.current = !0),
            C.default.track(E.HAw.IMPRESSION_GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL, { is_nitro_user: O, load_id: I }));
    }, [O, I]);
    let h = s.useCallback(() => {
            C.default.track(E.HAw.GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL_CTA_CLICKED, { is_nitro_user: O, load_id: I }),
                O
                    ? (0, d.Cz)({ analyticsLocations: R, analyticsSource: l.A.GIFT_CARD_REDEMPTION_SUCCESS_MODAL })
                    : ((0, _.default)(), (0, u.default)(), (0, o.pX)(E.BVt.NITRO_HOME)),
                i();
        }, [R, O, I, i]),
        m = [
            { variant: "secondary", size: "md", text: A.intl.string(A.t["ETE/oC"]), onClick: i },
            {
                variant: "expressive",
                size: "md",
                text: O ? A.intl.string(D.default["9OxfNK"]) : A.intl.string(A.t["8x0jKT"]),
                onClick: h,
            },
        ];
    return (0, a.jsx)("div", {
        className: g.A,
        children: (0, a.jsx)(r.k, {
            transitionState: e,
            onClose: i,
            title: A.intl.formatToPlainString(D.default.Afx5yS, { price: k }),
            subtitle: O ? A.intl.string(D.default.VJXTzd) : A.intl.string(D.default["+fIPjg"]),
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/893fda69d22dc9085adeb61e2b3656e8ccea5345e2f2143862066a9423345a98.png",
                aspectRatio: "6/4",
            },
            gradientColor: "purple",
            actions: m,
        }),
    });
}
