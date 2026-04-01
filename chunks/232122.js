"use strict";
n.d(t, { A: () => f, m: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(975571),
    u = n(652215),
    c = n(985018),
    d = n(440263);
let _ = [
    { getQuestion: () => c.intl.string(c.t.C4J8UB), getAnswer: () => c.intl.string(c.t.nhkk6k) },
    {
        getQuestion: () => c.intl.string(c.t.ai4ym2),
        getAnswer: () => c.intl.format(c.t["8zlqlD"], { helpCenterUrl: l.A.getArticleURL(u.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => c.intl.string(c.t.kMVGsC), getAnswer: () => c.intl.string(c.t["Vz/SCQ"]) },
    { getQuestion: () => c.intl.string(c.t.kYmXWF), getAnswer: () => c.intl.string(c.t["+OURPp"]) },
    { getQuestion: () => c.intl.string(c.t["LsX/vb"]), getAnswer: () => c.intl.string(c.t["3TeauK"]) },
    { getQuestion: () => c.intl.string(c.t.fRlnXU), getAnswer: () => c.intl.string(c.t.bTRacj) },
    { getQuestion: () => c.intl.string(c.t["8Mu5Q9"]), getAnswer: () => c.intl.string(c.t["2T5iPo"]) },
    { getQuestion: () => c.intl.string(c.t["6EN+TZ"]), getAnswer: () => c.intl.string(c.t.NZax1u) },
    { getQuestion: () => c.intl.string(c.t.f5B4EW), getAnswer: () => c.intl.string(c.t.Aje8Pb) },
];
function f(e) {
    let { className: t } = e,
        [n, s] = i.useState(null),
        [l, u] = i.useState(null);
    return (0, r.jsxs)("div", {
        className: a()(d.iE, t),
        children: [
            (0, r.jsx)(o.Heading, {
                className: d.R_,
                variant: "heading-xxl/semibold",
                children: c.intl.string(c.t.HPJ6Nj),
            }),
            (0, r.jsx)(o.hKd, { size: 32 }),
            (0, r.jsx)("ul", {
                className: d.p_,
                children: _.map((e, t) => {
                    let i = n === t,
                        c = l === t,
                        _ = i || c ? "text-default" : "text-muted";
                    return (0, r.jsxs)(
                        o.DUT,
                        {
                            tag: "li",
                            className: a()(d.Aw, { [d.$K]: i }),
                            onClick: () => s((e) => (e === t ? null : t)),
                            onMouseEnter: () => u(t),
                            onMouseLeave: () => u(null),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: d.k7,
                                    children: [
                                        (0, r.jsx)(o.Text, {
                                            className: d.b1,
                                            color: _,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, r.jsx)(o.abt, {
                                            size: "sm",
                                            color: o.LU0.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: d.q4,
                                            style: { transform: i ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                i &&
                                    (0, r.jsx)(o.Text, {
                                        className: d.ZF,
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
