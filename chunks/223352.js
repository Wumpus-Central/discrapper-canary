n.d(t, {
    A: () => g,
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(108531),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(341915),
    m = n(646764),
    p = n(568329),
    h = n(963713),
    f = n(772244),
    x = n(985018),
    b = n(355862);
let g = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        i = (0, f.qV)().label,
        g = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        { quest: v } = l.useContext(h.T),
        { expansionSpring: j } = l.useContext(p.PW),
        y = i ? -4 : 6;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.animated.div, {
                className: b.tE,
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
                    autoplay: t && !g,
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
                className: r()(b.pm, {
                    [b.nd]: i,
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
                                output: [0, y],
                            }),
                        ],
                        (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                    ),
                },
                children: [
                    (0, a.jsx)("div", {
                        className: r()({
                            [b.Iu]: !i,
                        }),
                        children: n,
                    }),
                    (0, a.jsx)(s.animated.div, {
                        className: r()(b.ol, {
                            [b.yZ]: i,
                        }),
                        style: {
                            opacity: j.to({
                                range: [0, 1],
                                output: [i ? 1 : 0.7, 0],
                            }),
                        },
                        children: (0, a.jsx)(c.Text, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: x.intl.string(x.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
