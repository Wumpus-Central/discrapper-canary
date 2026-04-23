n.d(t, { A: () => A, m: () => m });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    o = n.n(i),
    l = n(534514),
    s = n(696986),
    d = n(939249),
    u = n(834730),
    c = n(847374),
    _ = n(661531),
    p = n(975571),
    C = n(652215),
    h = n(985018),
    E = n(159607);
let m = [
    { getQuestion: () => h.intl.string(h.t.C4J8UB), getAnswer: () => h.intl.string(h.t.nhkk6k) },
    {
        getQuestion: () => h.intl.string(h.t.ai4ym2),
        getAnswer: () => h.intl.format(h.t["8zlqlD"], { helpCenterUrl: p.A.getArticleURL(C.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => h.intl.string(h.t.kMVGsC), getAnswer: () => h.intl.string(h.t["Vz/SCQ"]) },
    { getQuestion: () => h.intl.string(h.t.kYmXWF), getAnswer: () => h.intl.string(h.t["+OURPp"]) },
    { getQuestion: () => h.intl.string(h.t["LsX/vb"]), getAnswer: () => h.intl.string(h.t["3TeauK"]) },
    { getQuestion: () => h.intl.string(h.t.fRlnXU), getAnswer: () => h.intl.string(h.t.bTRacj) },
    { getQuestion: () => h.intl.string(h.t["8Mu5Q9"]), getAnswer: () => h.intl.string(h.t["2T5iPo"]) },
    { getQuestion: () => h.intl.string(h.t["6EN+TZ"]), getAnswer: () => h.intl.string(h.t.NZax1u) },
    { getQuestion: () => h.intl.string(h.t.f5B4EW), getAnswer: () => h.intl.string(h.t.Aje8Pb) },
];
function A(e) {
    let { className: t } = e,
        [n, i] = a.useState(null),
        [p, C] = a.useState(null);
    return (0, r.jsxs)("div", {
        className: o()(E.iE, t),
        children: [
            (0, r.jsx)(l.D, { className: E.R_, variant: "heading-xxl/semibold", children: h.intl.string(h.t.HPJ6Nj) }),
            (0, r.jsx)(s.h, { size: 32 }),
            (0, r.jsx)("ul", {
                className: E.p_,
                children: m.map((e, t) => {
                    let a = n === t,
                        l = p === t,
                        s = a || l ? "text-default" : "text-muted";
                    return (0, r.jsxs)(
                        d.D,
                        {
                            tag: "li",
                            className: o()(E.Aw, { [E.$K]: a }),
                            onClick: () => i((e) => (e === t ? null : t)),
                            onMouseEnter: () => C(t),
                            onMouseLeave: () => C(null),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: E.k7,
                                    children: [
                                        (0, r.jsx)(u.E, {
                                            className: E.b1,
                                            color: s,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, r.jsx)(c.a, {
                                            size: "sm",
                                            color: _.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: E.q4,
                                            style: { transform: a ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                a &&
                                    (0, r.jsx)(u.E, {
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
