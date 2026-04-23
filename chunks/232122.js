"use strict";
n.d(t, { A: () => g, m: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(534514),
    l = n(696986),
    u = n(939249),
    c = n(834730),
    d = n(847374),
    _ = n(827734),
    f = n(975571),
    p = n(652215),
    h = n(985018),
    E = n(159607);
let m = [
    { getQuestion: () => h.intl.string(h.t.C4J8UB), getAnswer: () => h.intl.string(h.t.nhkk6k) },
    {
        getQuestion: () => h.intl.string(h.t.ai4ym2),
        getAnswer: () => h.intl.format(h.t["8zlqlD"], { helpCenterUrl: f.A.getArticleURL(p.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => h.intl.string(h.t.kMVGsC), getAnswer: () => h.intl.string(h.t["Vz/SCQ"]) },
    { getQuestion: () => h.intl.string(h.t.kYmXWF), getAnswer: () => h.intl.string(h.t["+OURPp"]) },
    { getQuestion: () => h.intl.string(h.t["LsX/vb"]), getAnswer: () => h.intl.string(h.t["3TeauK"]) },
    { getQuestion: () => h.intl.string(h.t.fRlnXU), getAnswer: () => h.intl.string(h.t.bTRacj) },
    { getQuestion: () => h.intl.string(h.t["8Mu5Q9"]), getAnswer: () => h.intl.string(h.t["2T5iPo"]) },
    { getQuestion: () => h.intl.string(h.t["6EN+TZ"]), getAnswer: () => h.intl.string(h.t.NZax1u) },
    { getQuestion: () => h.intl.string(h.t.f5B4EW), getAnswer: () => h.intl.string(h.t.Aje8Pb) },
];
function g(e) {
    let { className: t } = e,
        [n, s] = i.useState(null),
        [f, p] = i.useState(null);
    return (0, r.jsxs)("div", {
        className: a()(E.iE, t),
        children: [
            (0, r.jsx)(o.D, { className: E.R_, variant: "heading-xxl/semibold", children: h.intl.string(h.t.HPJ6Nj) }),
            (0, r.jsx)(l.h, { size: 32 }),
            (0, r.jsx)("ul", {
                className: E.p_,
                children: m.map((e, t) => {
                    let i = n === t,
                        o = f === t,
                        l = i || o ? "text-default" : "text-muted";
                    return (0, r.jsxs)(
                        u.D,
                        {
                            tag: "li",
                            className: a()(E.Aw, { [E.$K]: i }),
                            onClick: () => s((e) => (e === t ? null : t)),
                            onMouseEnter: () => p(t),
                            onMouseLeave: () => p(null),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: E.k7,
                                    children: [
                                        (0, r.jsx)(c.E, {
                                            className: E.b1,
                                            color: l,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, r.jsx)(d.a, {
                                            size: "sm",
                                            color: _.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: E.q4,
                                            style: { transform: i ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                i &&
                                    (0, r.jsx)(c.E, {
                                        className: E.ZF,
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
