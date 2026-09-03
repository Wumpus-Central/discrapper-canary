i.d(t, { A: () => p, m: () => h });
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
    g = i(652215),
    _ = i(375708),
    E = i(462150);
let h = [
    { getQuestion: () => _.intl.string(_.t.C4J8UB), getAnswer: () => _.intl.string(_.t.nhkk6k) },
    {
        getQuestion: () => _.intl.string(_.t.ai4ym2),
        getAnswer: () => _.intl.format(_.t["8zlqlD"], { helpCenterUrl: T.A.getArticleURL(g.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => _.intl.string(_.t.kMVGsC), getAnswer: () => _.intl.string(_.t["Vz/SCQ"]) },
    { getQuestion: () => _.intl.string(_.t.kYmXWF), getAnswer: () => _.intl.string(_.t["+OURPp"]) },
    { getQuestion: () => _.intl.string(_.t["LsX/vb"]), getAnswer: () => _.intl.string(_.t["3TeauK"]) },
    { getQuestion: () => _.intl.string(_.t.fRlnXU), getAnswer: () => _.intl.string(_.t.bTRacj) },
    { getQuestion: () => _.intl.string(_.t["8Mu5Q9"]), getAnswer: () => _.intl.string(_.t["2T5iPo"]) },
    { getQuestion: () => _.intl.string(_.t["6EN+TZ"]), getAnswer: () => _.intl.string(_.t.NZax1u) },
    { getQuestion: () => _.intl.string(_.t.f5B4EW), getAnswer: () => _.intl.string(_.t.Aje8Pb) },
];
function p(e) {
    let { className: t } = e,
        [i, r] = n.useState(null),
        [T, g] = n.useState(null);
    return (0, s.jsxs)("div", {
        className: l()(E.iE, t),
        children: [
            (0, s.jsx)(a.D, { className: E.R_, variant: "heading-xxl/semibold", children: _.intl.string(_.t.HPJ6Nj) }),
            (0, s.jsx)(o.h, { size: 32 }),
            (0, s.jsx)("ul", {
                className: E.p_,
                children: h.map((e, t) => {
                    let n = i === t,
                        a = T === t,
                        o = n || a ? "text-default" : "text-muted";
                    return (0, s.jsxs)(
                        c.D,
                        {
                            tag: "li",
                            className: l()(E.Aw, { [E.$K]: n }),
                            onClick: () => r((e) => (e === t ? null : t)),
                            onMouseEnter: () => g(t),
                            onMouseLeave: () => g(null),
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
