i.d(t, { A: () => _, m: () => E });
var s = i(477900),
    n = i(582128),
    r = i(503698),
    l = i.n(r),
    a = i(297264),
    o = i(696986),
    c = i(939249),
    d = i(834730),
    u = i(847374),
    m = i(661531),
    g = i(975571),
    h = i(652215),
    p = i(375708),
    T = i(673631);
let E = [
    { getQuestion: () => p.intl.string(p.t.C4J8UB), getAnswer: () => p.intl.string(p.t.nhkk6k) },
    {
        getQuestion: () => p.intl.string(p.t.ai4ym2),
        getAnswer: () => p.intl.format(p.t["8zlqlD"], { helpCenterUrl: g.A.getArticleURL(h.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => p.intl.string(p.t.kMVGsC), getAnswer: () => p.intl.string(p.t["Vz/SCQ"]) },
    { getQuestion: () => p.intl.string(p.t.kYmXWF), getAnswer: () => p.intl.string(p.t["+OURPp"]) },
    { getQuestion: () => p.intl.string(p.t["LsX/vb"]), getAnswer: () => p.intl.string(p.t["3TeauK"]) },
    { getQuestion: () => p.intl.string(p.t.fRlnXU), getAnswer: () => p.intl.string(p.t.bTRacj) },
    { getQuestion: () => p.intl.string(p.t["8Mu5Q9"]), getAnswer: () => p.intl.string(p.t["2T5iPo"]) },
    { getQuestion: () => p.intl.string(p.t["6EN+TZ"]), getAnswer: () => p.intl.string(p.t.NZax1u) },
    { getQuestion: () => p.intl.string(p.t.f5B4EW), getAnswer: () => p.intl.string(p.t.Aje8Pb) },
];
function _(e) {
    let { className: t } = e,
        [i, r] = n.useState(null),
        [g, h] = n.useState(null);
    return (0, s.jsxs)("div", {
        className: l()(T.iE, t),
        children: [
            (0, s.jsx)(a.D, { className: T.R_, variant: "heading-xxl/semibold", children: p.intl.string(p.t.HPJ6Nj) }),
            (0, s.jsx)(o.h, { size: 32 }),
            (0, s.jsx)("ul", {
                className: T.p_,
                children: E.map((e, t) => {
                    let n = i === t,
                        a = g === t,
                        o = n || a ? "text-default" : "text-muted";
                    return (0, s.jsxs)(
                        c.D,
                        {
                            tag: "li",
                            className: l()(T.Aw, { [T.$K]: n }),
                            onClick: () => r((e) => (e === t ? null : t)),
                            onMouseEnter: () => h(t),
                            onMouseLeave: () => h(null),
                            children: [
                                (0, s.jsxs)("div", {
                                    className: T.k7,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            className: T.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, s.jsx)(u.a, {
                                            size: "sm",
                                            color: m.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: T.q4,
                                            style: { transform: n ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                n &&
                                    (0, s.jsx)(d.E, {
                                        className: T.ZF,
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
