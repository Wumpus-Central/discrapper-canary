n.d(t, { A: () => p, m: () => A });
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
    x = n(375708),
    f = n(159607);
let A = [
    { getQuestion: () => x.intl.string(x.t.C4J8UB), getAnswer: () => x.intl.string(x.t.nhkk6k) },
    {
        getQuestion: () => x.intl.string(x.t.ai4ym2),
        getAnswer: () => x.intl.format(x.t["8zlqlD"], { helpCenterUrl: h.A.getArticleURL(g.MVz.GUILD_BOOSTING_FAQ) }),
    },
    { getQuestion: () => x.intl.string(x.t.kMVGsC), getAnswer: () => x.intl.string(x.t["Vz/SCQ"]) },
    { getQuestion: () => x.intl.string(x.t.kYmXWF), getAnswer: () => x.intl.string(x.t["+OURPp"]) },
    { getQuestion: () => x.intl.string(x.t["LsX/vb"]), getAnswer: () => x.intl.string(x.t["3TeauK"]) },
    { getQuestion: () => x.intl.string(x.t.fRlnXU), getAnswer: () => x.intl.string(x.t.bTRacj) },
    { getQuestion: () => x.intl.string(x.t["8Mu5Q9"]), getAnswer: () => x.intl.string(x.t["2T5iPo"]) },
    { getQuestion: () => x.intl.string(x.t["6EN+TZ"]), getAnswer: () => x.intl.string(x.t.NZax1u) },
    { getQuestion: () => x.intl.string(x.t.f5B4EW), getAnswer: () => x.intl.string(x.t.Aje8Pb) },
];
function p(e) {
    let { className: t } = e,
        [n, s] = l.useState(null),
        [h, g] = l.useState(null);
    return (0, i.jsxs)("div", {
        className: r()(f.iE, t),
        children: [
            (0, i.jsx)(a.D, { className: f.R_, variant: "heading-xxl/semibold", children: x.intl.string(x.t.HPJ6Nj) }),
            (0, i.jsx)(o.h, { size: 32 }),
            (0, i.jsx)("ul", {
                className: f.p_,
                children: A.map((e, t) => {
                    let l = n === t,
                        a = h === t,
                        o = l || a ? "text-default" : "text-muted";
                    return (0, i.jsxs)(
                        c.D,
                        {
                            tag: "li",
                            className: r()(f.Aw, { [f.$K]: l }),
                            onClick: () => s((e) => (e === t ? null : t)),
                            onMouseEnter: () => g(t),
                            onMouseLeave: () => g(null),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: f.k7,
                                    children: [
                                        (0, i.jsx)(d.E, {
                                            className: f.b1,
                                            color: o,
                                            variant: "heading-md/semibold",
                                            tag: "span",
                                            children: e.getQuestion(),
                                        }),
                                        (0, i.jsx)(u.a, {
                                            size: "sm",
                                            color: m.A.colors.INTERACTIVE_ICON_DEFAULT,
                                            className: f.q4,
                                            style: { transform: l ? "rotate(180deg)" : "rotate(0deg)" },
                                        }),
                                    ],
                                }),
                                l &&
                                    (0, i.jsx)(d.E, {
                                        className: f.ZF,
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
