"use strict";
n.d(t, { A: () => p, m: () => f });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(297264),
    o = n(696986),
    d = n(939249),
    c = n(834730),
    u = n(847374),
    _ = n(661531),
    E = n(975571),
    A = n(652215),
    h = n(375708),
    I = n(673631);
let f = [
    { getQuestion: () => h.intl.string(h.t.C4J8UB), getAnswer: () => h.intl.string(h.t.nhkk6k) },
    {
        getQuestion: () => h.intl.string(h.t.ai4ym2),
        getAnswer: () => h.intl.format(h.t["8zlqlD"], { helpCenterUrl: E.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => h.intl.string(h.t.kMVGsC), getAnswer: () => h.intl.string(h.t["Vz/SCQ"]) },
    { getQuestion: () => h.intl.string(h.t.kYmXWF), getAnswer: () => h.intl.string(h.t["+OURPp"]) },
    { getQuestion: () => h.intl.string(h.t["LsX/vb"]), getAnswer: () => h.intl.string(h.t["3TeauK"]) },
    { getQuestion: () => h.intl.string(h.t.fRlnXU), getAnswer: () => h.intl.string(h.t.bTRacj) },
    { getQuestion: () => h.intl.string(h.t["8Mu5Q9"]), getAnswer: () => h.intl.string(h.t["2T5iPo"]) },
    { getQuestion: () => h.intl.string(h.t["6EN+TZ"]), getAnswer: () => h.intl.string(h.t.NZax1u) },
    { getQuestion: () => h.intl.string(h.t.f5B4EW), getAnswer: () => h.intl.string(h.t.Aje8Pb) },
];
function p(e) {
    let { className: t } = e,
        [n, a] = r.useState(null),
        [E, A] = r.useState(null);
    return (0, i.jsxs)("div", {
        className: s()(I.iE, t),
        children: [
            (0, i.jsx)(l.D, { className: I.R_, variant: "heading-xxl/semibold", children: h.intl.string(h.t.HPJ6Nj) }),
            (0, i.jsx)(o.h, { size: 32 }),
            (0, i.jsx)("ul", {
                className: I.p_,
                children: f.map((e, t) => {
                    let r = n === t,
                        l = E === t,
                        o = r || l ? "text-default" : "text-muted";
                    return (0, i.jsxs)(
                        d.D,
                        {
                            tag: "li",
                            className: s()(I.Aw, { [I.$K]: r }),
                            onClick: () => a((e) => (e === t ? null : t)),
                            onMouseEnter: () => A(t),
                            onMouseLeave: () => A(null),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: I.k7,
                                    children: [
                                        (0, i.jsx)(c.E, {
                                            className: I.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, i.jsx)(u.a, {
                                            size: "sm",
                                            color: _.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: I.q4,
                                            style: { transform: r ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                r &&
                                    (0, i.jsx)(c.E, {
                                        className: I.ZF,
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
