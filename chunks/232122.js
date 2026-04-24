i.d(t, { A: () => h, m: () => A });
var s = i(627968),
    l = i(64700),
    a = i(503698),
    n = i.n(a),
    r = i(534514),
    c = i(696986),
    o = i(939249),
    d = i(834730),
    u = i(847374),
    m = i(661531),
    T = i(975571),
    g = i(652215),
    x = i(985018),
    f = i(159607);
let A = [
    { getQuestion: () => x.intl.string(x.t.C4J8UB), getAnswer: () => x.intl.string(x.t.nhkk6k) },
    {
        getQuestion: () => x.intl.string(x.t.ai4ym2),
        getAnswer: () => x.intl.format(x.t["8zlqlD"], { helpCenterUrl: T.A.getArticleURL(g.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => x.intl.string(x.t.kMVGsC), getAnswer: () => x.intl.string(x.t["Vz/SCQ"]) },
    { getQuestion: () => x.intl.string(x.t.kYmXWF), getAnswer: () => x.intl.string(x.t["+OURPp"]) },
    { getQuestion: () => x.intl.string(x.t["LsX/vb"]), getAnswer: () => x.intl.string(x.t["3TeauK"]) },
    { getQuestion: () => x.intl.string(x.t.fRlnXU), getAnswer: () => x.intl.string(x.t.bTRacj) },
    { getQuestion: () => x.intl.string(x.t["8Mu5Q9"]), getAnswer: () => x.intl.string(x.t["2T5iPo"]) },
    { getQuestion: () => x.intl.string(x.t["6EN+TZ"]), getAnswer: () => x.intl.string(x.t.NZax1u) },
    { getQuestion: () => x.intl.string(x.t.f5B4EW), getAnswer: () => x.intl.string(x.t.Aje8Pb) },
];
function h(e) {
    let { className: t } = e,
        [i, a] = l.useState(null),
        [T, g] = l.useState(null);
    return (0, s.jsxs)("div", {
        className: n()(f.iE, t),
        children: [
            (0, s.jsx)(r.D, { className: f.R_, variant: "heading-xxl/semibold", children: x.intl.string(x.t.HPJ6Nj) }),
            (0, s.jsx)(c.h, { size: 32 }),
            (0, s.jsx)("ul", {
                className: f.p_,
                children: A.map((e, t) => {
                    let l = i === t,
                        r = T === t,
                        c = l || r ? "text-default" : "text-muted";
                    return (0, s.jsxs)(
                        o.D,
                        {
                            tag: "li",
                            className: n()(f.Aw, { [f.$K]: l }),
                            onClick: () => a((e) => (e === t ? null : t)),
                            onMouseEnter: () => g(t),
                            onMouseLeave: () => g(null),
                            children: [
                                (0, s.jsxs)("div", {
                                    className: f.k7,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            className: f.b1,
                                            color: c,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, s.jsx)(u.a, {
                                            size: "sm",
                                            color: m.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: f.q4,
                                            style: { transform: l ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                l &&
                                    (0, s.jsx)(d.E, {
                                        className: f.ZF,
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
