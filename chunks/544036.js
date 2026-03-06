e.d(i, { default: () => D });
var r = e(627968),
    n = e(64700),
    s = e(877227),
    a = e(311907),
    l = e(397927),
    o = e(793574),
    c = e(688810),
    u = e(979286),
    _ = e(166403),
    d = e(954571),
    p = e(580630),
    C = e(652215),
    E = e(985018),
    f = e(886928),
    A = e(495995);
function D(t) {
    let { transitionState: i, onClose: e, amountRedeemed: D, currencyCode: g, loadId: h } = t,
        k = (0, p.$g)(D, g),
        I = null != (0, a.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        { analyticsLocations: R } = (0, c.Ay)(),
        T = n.useRef(!1);
    n.useEffect(() => {
        T.current ||
            ((T.current = !0),
            d.default.track(C.HAw.IMPRESSION_GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL, { is_nitro_user: I, load_id: h }));
    }, [I, h]);
    let S = n.useCallback(() => {
            d.default.track(C.HAw.GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL_CTA_CLICKED, { is_nitro_user: I, load_id: h }),
                I
                    ? (0, u.Cz)({ analyticsLocations: R, analyticsSource: o.A.GIFT_CARD_REDEMPTION_SUCCESS_MODAL })
                    : (0, s.pX)(C.BVt.NITRO_HOME),
                e();
        }, [R, I, h, e]),
        m = [
            { variant: "secondary", size: "md", text: E.intl.string(E.t["ETE/oC"]), onClick: e },
            {
                variant: "expressive",
                size: "md",
                text: I ? E.intl.string(E.t.wEQi1r) : E.intl.string(E.t["8x0jKT"]),
                onClick: S,
            },
        ];
    return (0, r.jsx)("div", {
        className: f.A,
        children: (0, r.jsx)(l.kpP, {
            transitionState: i,
            onClose: e,
            title: E.intl.string(E.t.D5lKY1),
            subtitle: E.intl.format(E.t.f3YCs1, { price: k, link: "https://discord.com/nitro" }),
            graphic: { type: "image", src: A },
            gradientColor: "purple",
            actions: m,
        }),
    });
}
