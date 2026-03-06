e.d(i, { default: () => k });
var s = e(627968),
    r = e(64700),
    a = e(311907),
    n = e(397927),
    l = e(793574),
    c = e(688810),
    o = e(979286),
    _ = e(408166),
    d = e(976860),
    u = e(12901),
    C = e(166403),
    p = e(954571),
    E = e(580630),
    f = e(652215),
    A = e(985018),
    D = e(886928),
    g = e(495995);
function k(t) {
    let { transitionState: i, onClose: e, amountRedeemed: k, currencyCode: T, loadId: I } = t,
        R = (0, E.$g)(k, T),
        S = null != (0, a.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        { analyticsLocations: M } = (0, c.Ay)(),
        O = r.useRef(!1);
    r.useEffect(() => {
        O.current ||
            ((O.current = !0),
            p.default.track(f.HAw.IMPRESSION_GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL, { is_nitro_user: S, load_id: I }));
    }, [S, I]);
    let h = r.useCallback(() => {
            p.default.track(f.HAw.GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL_CTA_CLICKED, { is_nitro_user: S, load_id: I }),
                S
                    ? (0, o.Cz)({ analyticsLocations: M, analyticsSource: l.A.GIFT_CARD_REDEMPTION_SUCCESS_MODAL })
                    : ((0, u.default)(), (0, _.default)(), (0, d.pX)(f.BVt.NITRO_HOME)),
                e();
        }, [M, S, I, e]),
        m = [
            { variant: "secondary", size: "md", text: A.intl.string(A.t["ETE/oC"]), onClick: e },
            {
                variant: "expressive",
                size: "md",
                text: S ? A.intl.string(A.t.wEQi1r) : A.intl.string(A.t["8x0jKT"]),
                onClick: h,
            },
        ];
    return (0, s.jsx)("div", {
        className: D.A,
        children: (0, s.jsx)(n.kpP, {
            transitionState: i,
            onClose: e,
            title: A.intl.string(A.t.D5lKY1),
            subtitle: A.intl.format(A.t.f3YCs1, { price: R, link: "https://discord.com/nitro" }),
            graphic: { type: "image", src: g },
            gradientColor: "purple",
            actions: m,
        }),
    });
}
