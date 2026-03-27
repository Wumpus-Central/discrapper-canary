n.d(t, { A: () => v });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(880013),
    o = n(311907),
    d = n(397927),
    c = n(775602),
    u = n(341915),
    m = n(646764),
    h = n(398025),
    x = n(568329),
    p = n(963713),
    g = n(772244);
n(272111);
var _ = n(985018),
    f = n(624076);
let v = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        s = (0, g.q)().label,
        v = (0, o.bG)([c.A], () => c.A.useReducedMotion),
        { quest: b } = i.useContext(p.T),
        { expansionSpring: j } = i.useContext(x.PW),
        A = s ? -4 : 6;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.animated.div, {
                className: f.tE,
                style: {
                    transform: (0, r.to)(
                        [
                            j.to({ range: [0, 1], output: [0, 0] }),
                            j.to({ range: [0, 1], output: [0, 82] }),
                            j.to({ range: [0, 1], output: [1, 1.3333333333333333] }),
                        ],
                        (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`,
                    ),
                },
                children: (0, a.jsx)(m.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: b,
                    questContent: u.uF.QUEST_BAR_V2,
                    autoplay: t && !v,
                    sourceQuestContent: u.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, a.jsxs)(r.animated.div, {
                className: l()(f.pm, { [f.nd]: s }),
                style: {
                    transform: (0, r.to)(
                        [j.to({ range: [0, 1], output: [0, -48] }), j.to({ range: [0, 1], output: [0, A] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, a.jsx)("div", { className: l()({ [f.Iu]: !s }), children: n }),
                    (0, a.jsx)(r.animated.div, {
                        className: l()(f.ol, { [f.yZ]: s }),
                        style: { opacity: (0, h.a)(j.to({ range: [0, 1], output: [s ? 1 : 0.7, 0] })) },
                        children: (0, a.jsx)(d.Text, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: _.intl.string(_.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
