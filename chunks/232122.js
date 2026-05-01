"use strict";
n.d(t, { A: () => g, m: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(534514),
    l = n(696986),
    u = n(939249),
    c = n(834730),
    d = n(847374),
    _ = n(661531),
    f = n(975571),
    h = n(652215),
    p = n(375708),
    E = n(159607);
let m = [
    { getQuestion: () => p.intl.string(p.t.C4J8UB), getAnswer: () => p.intl.string(p.t.nhkk6k) },
    {
        getQuestion: () => p.intl.string(p.t.ai4ym2),
        getAnswer: () => p.intl.format(p.t["8zlqlD"], { helpCenterUrl: f.A.getArticleURL(h.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => p.intl.string(p.t.kMVGsC), getAnswer: () => p.intl.string(p.t["Vz/SCQ"]) },
    { getQuestion: () => p.intl.string(p.t.kYmXWF), getAnswer: () => p.intl.string(p.t["+OURPp"]) },
    { getQuestion: () => p.intl.string(p.t["LsX/vb"]), getAnswer: () => p.intl.string(p.t["3TeauK"]) },
    { getQuestion: () => p.intl.string(p.t.fRlnXU), getAnswer: () => p.intl.string(p.t.bTRacj) },
    { getQuestion: () => p.intl.string(p.t["8Mu5Q9"]), getAnswer: () => p.intl.string(p.t["2T5iPo"]) },
    { getQuestion: () => p.intl.string(p.t["6EN+TZ"]), getAnswer: () => p.intl.string(p.t.NZax1u) },
    { getQuestion: () => p.intl.string(p.t.f5B4EW), getAnswer: () => p.intl.string(p.t.Aje8Pb) },
];
function g(e) {
    let { className: t } = e,
        [n, s] = r.useState(null),
        [f, h] = r.useState(null);
    return (0, i.jsxs)("div", {
        className: a()(E.iE, t),
        children: [
            (0, i.jsx)(o.D, { className: E.R_, variant: "heading-xxl/semibold", children: p.intl.string(p.t.HPJ6Nj) }),
            (0, i.jsx)(l.h, { size: 32 }),
            (0, i.jsx)("ul", {
                className: E.p_,
                children: m.map((e, t) => {
                    let r = n === t,
                        o = f === t,
                        l = r || o ? "text-default" : "text-muted";
                    return (0, i.jsxs)(
                        u.D,
                        {
                            tag: "li",
                            className: a()(E.Aw, { [E.$K]: r }),
                            onClick: () => s((e) => (e === t ? null : t)),
                            onMouseEnter: () => h(t),
                            onMouseLeave: () => h(null),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: E.k7,
                                    children: [
                                        (0, i.jsx)(c.E, {
                                            className: E.b1,
                                            color: l,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, i.jsx)(d.a, {
                                            size: "sm",
                                            color: _.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: E.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, i.jsx)(c.E, {
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
