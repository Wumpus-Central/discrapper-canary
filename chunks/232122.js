i.d(t, { A: () => _, m: () => p });
var s = i(477900),
    n = i(582128),
    r = i(503698),
    a = i.n(r),
    l = i(297264),
    o = i(696986),
    c = i(939249),
    d = i(834730),
    u = i(847374),
    m = i(661531),
    g = i(975571),
    T = i(652215),
    h = i(375708),
    E = i(462150);
let p = [
    { getQuestion: () => h.intl.string(h.t.C4J8UB), getAnswer: () => h.intl.string(h.t.nhkk6k) },
    {
        getQuestion: () => h.intl.string(h.t.ai4ym2),
        getAnswer: () => h.intl.format(h.t["8zlqlD"], { helpCenterUrl: g.A.getArticleURL(T.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => h.intl.string(h.t.kMVGsC), getAnswer: () => h.intl.string(h.t["Vz/SCQ"]) },
    { getQuestion: () => h.intl.string(h.t.kYmXWF), getAnswer: () => h.intl.string(h.t["+OURPp"]) },
    { getQuestion: () => h.intl.string(h.t["LsX/vb"]), getAnswer: () => h.intl.string(h.t["3TeauK"]) },
    { getQuestion: () => h.intl.string(h.t.fRlnXU), getAnswer: () => h.intl.string(h.t.bTRacj) },
    { getQuestion: () => h.intl.string(h.t["8Mu5Q9"]), getAnswer: () => h.intl.string(h.t["2T5iPo"]) },
    { getQuestion: () => h.intl.string(h.t["6EN+TZ"]), getAnswer: () => h.intl.string(h.t.NZax1u) },
    { getQuestion: () => h.intl.string(h.t.f5B4EW), getAnswer: () => h.intl.string(h.t.Aje8Pb) },
];
function _(e) {
    let { className: t } = e,
        [i, r] = n.useState(null),
        [g, T] = n.useState(null);
    return (0, s.jsxs)("div", {
        className: a()(E.iE, t),
        children: [
            (0, s.jsx)(l.D, { className: E.R_, variant: "heading-xxl/semibold", children: h.intl.string(h.t.HPJ6Nj) }),
            (0, s.jsx)(o.h, { size: 32 }),
            (0, s.jsx)("ul", {
                className: E.p_,
                children: p.map((e, t) => {
                    let n = i === t,
                        l = g === t,
                        o = n || l ? "text-default" : "text-muted";
                    return (0, s.jsxs)(
                        c.D,
                        {
                            tag: "li",
                            className: a()(E.Aw, { [E.$K]: n }),
                            onClick: () => r((e) => (e === t ? null : t)),
                            onMouseEnter: () => T(t),
                            onMouseLeave: () => T(null),
                            children: [
                                (0, s.jsxs)("div", {
                                    className: E.k7,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            className: E.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, s.jsx)(u.a, {
                                            size: "sm",
                                            color: m.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: E.q4,
                                            style: { transform: n ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                n &&
                                    (0, s.jsx)(d.E, {
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
