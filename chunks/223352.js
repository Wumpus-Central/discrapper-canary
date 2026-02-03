n.d(t, {
    A: () => v,
});
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(92674),
    o = n(311907),
    c = n(397927),
    d = n(775602),
    u = n(341915),
    m = n(646764),
    p = n(398025),
    h = n(568329),
    x = n(963713),
    g = n(772244),
    f = n(985018),
    b = n(355862);
let v = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        r = (0, g.qV)().label,
        v = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        { quest: j } = l.useContext(x.T),
        { expansionSpring: _ } = l.useContext(h.PW),
        y = r ? -4 : 6;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.animated.div, {
                className: b.tE,
                style: {
                    transform: (0, s.to)(
                        [
                            _.to({
                                range: [0, 1],
                                output: [0, 0],
                            }),
                            _.to({
                                range: [0, 1],
                                output: [0, 82],
                            }),
                            _.to({
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
                    quest: j,
                    questContent: u.uF.QUEST_BAR_V2,
                    autoplay: t && !v,
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
                className: i()(b.pm, {
                    [b.nd]: r,
                }),
                style: {
                    transform: (0, s.to)(
                        [
                            _.to({
                                range: [0, 1],
                                output: [0, -48],
                            }),
                            _.to({
                                range: [0, 1],
                                output: [0, y],
                            }),
                        ],
                        (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"),
                    ),
                },
                children: [
                    (0, a.jsx)("div", {
                        className: i()({
                            [b.Iu]: !r,
                        }),
                        children: n,
                    }),
                    (0, a.jsx)(s.animated.div, {
                        className: i()(b.ol, {
                            [b.yZ]: r,
                        }),
                        style: {
                            opacity: (0, p.a)(
                                _.to({
                                    range: [0, 1],
                                    output: [r ? 1 : 0.7, 0],
                                }),
                            ),
                        },
                        children: (0, a.jsx)(c.Text, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: f.intl.string(f.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
