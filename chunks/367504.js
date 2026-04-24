e.d(i, { default: () => g });
var s = e(627968),
    r = e(64700),
    a = e(17928),
    n = e(772707),
    l = e(793574),
    c = e(688810),
    o = e(29292),
    _ = e(408166),
    d = e(976860),
    u = e(779733),
    C = e(166403),
    E = e(954571),
    p = e(580630),
    f = e(652215),
    A = e(985018),
    D = e(808205);
function g(t) {
    let { transitionState: i, onClose: e, amountRedeemed: g, currencyCode: k, loadId: T } = t,
        I = (0, p.$g)(g, k),
        R = null != (0, a.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        { analyticsLocations: S } = (0, c.Ay)(),
        M = r.useRef(!1);
    r.useEffect(() => {
        M.current ||
            ((M.current = !0),
            E.default.track(f.HAw.IMPRESSION_GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL, { is_nitro_user: R, load_id: T }));
    }, [R, T]);
    let O = r.useCallback(() => {
            E.default.track(f.HAw.GIFT_CARD_REDEMPTION_SUCCEEDED_MODAL_CTA_CLICKED, { is_nitro_user: R, load_id: T }),
                R
                    ? (0, o.Cz)({ analyticsLocations: S, analyticsSource: l.A.GIFT_CARD_REDEMPTION_SUCCESS_MODAL })
                    : ((0, u.default)(), (0, _.default)(), (0, d.pX)(f.BVt.NITRO_HOME)),
                e();
        }, [S, R, T, e]),
        h = [
            { variant: "secondary", size: "md", text: A.intl.string(A.t["ETE/oC"]), onClick: e },
            {
                variant: "expressive",
                size: "md",
                text: R ? A.intl.string(A.t.wEQi1r) : A.intl.string(A.t["8x0jKT"]),
                onClick: O,
            },
        ];
    return (0, s.jsx)("div", {
        className: D.A,
        children: (0, s.jsx)(n.k, {
            transitionState: i,
            onClose: e,
            title: A.intl.string(A.t.D5lKY1),
            subtitle: A.intl.format(A.t.f3YCs1, { price: I, link: "https://discord.com/nitro" }),
            graphic: { type: "image", src: "/assets/07396f7a5caffcfa.svg" },
            gradientColor: "purple",
            actions: h,
        }),
    });
}
