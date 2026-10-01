i.d(t, { A: () => h, m: () => A });
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
    T = i(975571),
    _ = i(652215),
    E = i(375708),
    g = i(462150);
let A = [
    { getQuestion: () => E.intl.string(E.t.C4J8UB), getAnswer: () => E.intl.string(E.t.nhkk6k) },
    {
        getQuestion: () => E.intl.string(E.t.ai4ym2),
        getAnswer: () => E.intl.format(E.t["8zlqlD"], { helpCenterUrl: T.A.getArticleURL(_.MVz.GUILD_BOOSTING_FAQ) }),
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
        [i, r] = n.useState(null),
        [T, _] = n.useState(null);
    return (0, s.jsxs)("div", {
        className: l()(g.iE, t),
        children: [
            (0, s.jsx)(a.D, { className: g.R_, variant: "heading-xxl/semibold", children: E.intl.string(E.t.HPJ6Nj) }),
            (0, s.jsx)(o.h, { size: 32 }),
            (0, s.jsx)("ul", {
                className: g.p_,
                children: A.map((e, t) => {
                    let n = i === t,
                        a = T === t,
                        o = n || a ? "text-default" : "text-muted";
                    return (0, s.jsxs)(
                        c.D,
                        {
                            tag: "li",
                            className: l()(g.Aw, { [g.$K]: n }),
                            onClick: () => r((e) => (e === t ? null : t)),
                            onMouseEnter: () => _(t),
                            onMouseLeave: () => _(null),
                            children: [
                                (0, s.jsxs)("div", {
                                    className: g.k7,
                                    children: [
                                        (0, s.jsx)(d.E, {
                                            className: g.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, s.jsx)(u.a, {
                                            size: "sm",
                                            color: m.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: g.q4,
                                            style: { transform: n ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                n &&
                                    (0, s.jsx)(d.E, {
                                        className: g.ZF,
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
