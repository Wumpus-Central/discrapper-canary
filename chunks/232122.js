i.d(t, { A: () => h, m: () => p });
var s = i(477900),
    r = i(582128),
    n = i(503698),
    a = i.n(n),
    l = i(297264),
    o = i(696986),
    c = i(939249),
    d = i(834730),
    u = i(847374),
    m = i(661531),
    g = i(975571),
    T = i(652215),
    E = i(375708),
    _ = i(462150);
let p = [
    { getQuestion: () => E.intl.string(E.t.C4J8UB), getAnswer: () => E.intl.string(E.t.nhkk6k) },
    {
        getQuestion: () => E.intl.string(E.t.ai4ym2),
        getAnswer: () => E.intl.format(E.t["8zlqlD"], { helpCenterUrl: g.A.getArticleURL(T.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => E.intl.string(E.t.kMVGsC), getAnswer: () => E.intl.string(E.t["Vz/SCQ"]) },
    { getQuestion: () => E.intl.string(E.t.kYmXWF), getAnswer: () => E.intl.string(E.t["+OURPp"]) },
    { getQuestion: () => E.intl.string(E.t["LsX/vb"]), getAnswer: () => E.intl.string(E.t["3TeauK"]) },
    { getQuestion: () => E.intl.string(E.t.fRlnXU), getAnswer: () => E.intl.string(E.t.bTRacj) },
    { getQuestion: () => E.intl.string(E.t["8Mu5Q9"]), getAnswer: () => E.intl.string(E.t["2T5iPo"]) },
    { getQuestion: () => E.intl.string(E.t["6EN+TZ"]), getAnswer: () => E.intl.string(E.t.NZax1u) },
    { getQuestion: () => E.intl.string(E.t.f5B4EW), getAnswer: () => E.intl.string(E.t.Aje8Pb) },
];
function h(e) {
    let { className: t } = e,
        [i, n] = r.useState(null),
        [g, T] = r.useState(null);
    return (0, s.jsxs)("div", {
        className: a()(_.iE, t),
        children: [
            (0, s.jsx)(l.D, { className: _.R_, variant: "heading-xxl/semibold", children: E.intl.string(E.t.HPJ6Nj) }),
            (0, s.jsx)(o.h, { size: 32 }),
            (0, s.jsx)("ul", {
                className: _.p_,
                children: p.map((e, t) => {
                    let r = i === t,
                        l = g === t,
                        o = r || l ? "text-default" : "text-muted";
                    return (0, s.jsxs)(
                        c.D,
                        {
                            tag: "li",
                            className: a()(_.Aw, { [_.$K]: r }),
                            onClick: () => n((e) => (e === t ? null : t)),
                            onMouseEnter: () => T(t),
                            onMouseLeave: () => T(null),
                            children: [
                                (0, s.jsxs)("div", {
                                    className: _.k7,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            className: _.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, s.jsx)(u.a, {
                                            size: "sm",
                                            color: m.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: _.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, s.jsx)(d.E, {
                                        className: _.ZF,
                                        color: "text-muted",
                                        variant: "text-sm/medium",
                                        children: e.getAnswer(),
                                    }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
