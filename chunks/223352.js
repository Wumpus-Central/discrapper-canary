n.d(t, {
    A: () => b,
});
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(353709),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(341915),
    m = n(646764),
    p = n(568329),
    h = n(963713),
    x = n(772244),
    g = n(985018),
    f = n(355862);
let b = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        r = (0, x.qV)().label,
        b = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        { quest: v } = l.useContext(h.T),
        { expansionSpring: j } = l.useContext(p.PW),
        _ = r ? -4 : 6;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.animated.div, {
                className: f.tE,
                style: {
                    transform: (0, s.to)(
                        [
                            j.to({
                                range: [0, 1],
                                output: [0, 0],
                            }),
                            j.to({
                                range: [0, 1],
                                output: [0, 82],
                            }),
                            j.to({
                                range: [0, 1],
                                output: [1, 64 / 48],
                            }),
                        ],
                        (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"),
                    ),
                },
                children: (0, a.jsx)(m.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: v,
                    questContent: u.uF.QUEST_BAR_V2,
                    autoplay: t && !b,
                    sourceQuestContent: u.uF.QUEST_BAR_V2,
                    style: {
                        width: 48,
                        height: 48,
                        marginRight: 8,
                        borderRadius: 6,
                    },
                }),
            }),
            (0, a.jsxs)(s.animated.div, {
                className: i()(f.pm, {
                    [f.nd]: r,
                }),
                style: {
                    transform: (0, s.to)(
                        [
                            j.to({
                                range: [0, 1],
                                output: [0, -48],
                            }),
                            j.to({
                                range: [0, 1],
                                output: [0, _],
                            }),
                        ],
                        (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                    ),
                },
                children: [
                    (0, a.jsx)("div", {
                        className: i()({
                            [f.Iu]: !r,
                        }),
                        children: n,
                    }),
                    (0, a.jsx)(s.animated.div, {
                        className: i()(f.ol, {
                            [f.yZ]: r,
                        }),
                        style: {
                            opacity: j.to({
                                range: [0, 1],
                                output: [r ? 1 : 0.7, 0],
                            }),
                        },
                        children: (0, a.jsx)(c.Text, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: g.intl.string(g.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
