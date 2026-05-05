i.d(e, { default: () => T });
var a = i(627968),
    s = i(64700),
    r = i(17928),
    n = i(772707),
    c = i(793574),
    l = i(688810),
    d = i(859040),
    o = i(408166),
    u = i(976860),
    _ = i(779733),
    C = i(166403),
    p = i(174459),
    E = i(580630),
    D = i(652215),
    A = i(375708),
    f = i(808205);
function T(t) {
    let { transitionState: e, onClose: i, amountRedeemed: T, currencyCode: g, loadId: S } = t,
        k = (0, E.$g)(T, g),
        I = null != (0, r.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        { analyticsLocations: R } = (0, l.Ay)(),
        O = s.useRef(!1);
    s.useEffect(() => {
        O.current ||
            ((O.current = !0),
            p.default.track(D.HAw.IMPRESSION_GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL, { is_nitro_user: I, load_id: S }));
    }, [I, S]);
    let b = s.useCallback(() => {
            p.default.track(D.HAw.GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL_CTA_CLICKED, { is_nitro_user: I, load_id: S }),
                I
                    ? (0, d.Cz)({ analyticsLocations: R, analyticsSource: c.A.GIFT_CARD_REDEMPTION_SUCCESS_MODAL })
                    : ((0, _.default)(), (0, o.default)(), (0, u.pX)(D.BVt.NITRO_HOME)),
                i();
        }, [R, I, S, i]),
        h = [
            { variant: "secondary", size: "md", text: A.intl.string(A.t["ETE/oC"]), onClick: i },
            {
                variant: "expressive",
                size: "md",
                text: I ? A.intl.string(A.t.wEQi1r) : A.intl.string(A.t["8x0jKT"]),
                onClick: b,
            },
        ];
    return (0, a.jsx)("div", {
        className: f.A,
        children: (0, a.jsx)(n.k, {
            transitionState: e,
            onClose: i,
            title: A.intl.formatToPlainString(A.t.D5lKY1, { price: k }),
            subtitle: A.intl.string(A.t.f3YCs1),
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/893fda69d22dc9085adeb61e2b3656e8ccea5345e2f2143862066a9423345a98.png",
                aspectRatio: "6/4",
            },
            gradientColor: "purple",
            actions: h,
        }),
    });
}
