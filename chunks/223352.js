n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(419354),
    o = n(311907),
    d = n(834730),
    c = n(775602),
    u = n(341915),
    p = n(646764),
    h = n(398025),
    m = n(568329),
    _ = n(963713),
    A = n(772244);
n(272111);
var f = n(985018),
    g = n(173399);
let x = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        l = (0, A.q)().label,
        x = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        { quest: E } = s.useContext(_.T),
        { expansionSpring: C } = s.useContext(m.PW),
        T = l ? -4 : 6;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                className: g.tE,
                style: {
                    transform: (0, r.to)(
                        [
                            C.to({ range: [0, 1], output: [0, 0] }),
                            C.to({ range: [0, 1], output: [0, 82] }),
                            C.to({ range: [0, 1], output: [1, 1.3333333333333333] }),
                        ],
                        (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`,
                    ),
                },
                children: (0, i.jsx)(p.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: E,
                    questContent: u.uF.QUEST_BAR_V2,
                    autoplay: t && !x,
                    sourceQuestContent: u.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, i.jsxs)(r.animated.div, {
                className: a()(g.pm, { [g.nd]: l }),
                style: {
                    transform: (0, r.to)(
                        [C.to({ range: [0, 1], output: [0, -48] }), C.to({ range: [0, 1], output: [0, T] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, i.jsx)("div", { className: a()({ [g.Iu]: !l }), children: n }),
                    (0, i.jsx)(r.animated.div, {
                        className: a()(g.ol, { [g.yZ]: l }),
                        style: { opacity: (0, h.a)(C.to({ range: [0, 1], output: [l ? 1 : 0.7, 0] })) },
                        children: (0, i.jsx)(d.E, {
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
