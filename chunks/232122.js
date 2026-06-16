n.d(t, { A: () => A, m: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(534514),
    o = n(696986),
    c = n(939249),
    d = n(834730),
    u = n(847374),
    m = n(661531),
    h = n(975571),
    g = n(652215),
    f = n(375708),
    x = n(159607);
let p = [
    { getQuestion: () => f.intl.string(f.t.C4J8UB), getAnswer: () => f.intl.string(f.t.nhkk6k) },
    {
        getQuestion: () => f.intl.string(f.t.ai4ym2),
        getAnswer: () => f.intl.format(f.t["8zlqlD"], { helpCenterUrl: h.A.getArticleURL(g.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => f.intl.string(f.t.kMVGsC), getAnswer: () => f.intl.string(f.t["Vz/SCQ"]) },
    { getQuestion: () => f.intl.string(f.t.kYmXWF), getAnswer: () => f.intl.string(f.t["+OURPp"]) },
    { getQuestion: () => f.intl.string(f.t["LsX/vb"]), getAnswer: () => f.intl.string(f.t["3TeauK"]) },
    { getQuestion: () => f.intl.string(f.t.fRlnXU), getAnswer: () => f.intl.string(f.t.bTRacj) },
    { getQuestion: () => f.intl.string(f.t["8Mu5Q9"]), getAnswer: () => f.intl.string(f.t["2T5iPo"]) },
    { getQuestion: () => f.intl.string(f.t["6EN+TZ"]), getAnswer: () => f.intl.string(f.t.NZax1u) },
    { getQuestion: () => f.intl.string(f.t.f5B4EW), getAnswer: () => f.intl.string(f.t.Aje8Pb) },
];
function A(e) {
    let { className: t } = e,
        [n, s] = l.useState(null),
        [h, g] = l.useState(null);
    return (0, i.jsxs)("div", {
        className: r()(x.iE, t),
        children: [
            (0, i.jsx)(a.D, { className: x.R_, variant: "heading-xxl/semibold", children: f.intl.string(f.t.HPJ6Nj) }),
            (0, i.jsx)(o.h, { size: 32 }),
            (0, i.jsx)("ul", {
                className: x.p_,
                children: p.map((e, t) => {
                    let l = n === t,
                        a = h === t,
                        o = l || a ? "text-default" : "text-muted";
                    return (0, i.jsxs)(
                        c.D,
                        {
                            tag: "li",
                            className: r()(x.Aw, { [x.$K]: l }),
                            onClick: () => s((e) => (e === t ? null : t)),
                            onMouseEnter: () => g(t),
                            onMouseLeave: () => g(null),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: x.k7,
                                    children: [
                                        (0, i.jsx)(d.E, {
                                            className: x.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, i.jsx)(u.a, {
                                            size: "sm",
                                            color: m.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: x.q4,
                                            style: { transform: l ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                l &&
                                    (0, i.jsx)(d.E, {
                                        className: x.ZF,
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
