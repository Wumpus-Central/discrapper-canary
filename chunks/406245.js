n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(534514),
    o = n(939249),
    d = n(834730),
    u = n(834040),
    c = n(307301),
    g = n(975571),
    m = n(652215),
    _ = n(985018),
    A = n(811227);
let h = [
        { getQuestion: () => _.intl.string(_.t.C4J8UB), getAnswer: () => _.intl.string(_.t.nhkk6k) },
        {
            getQuestion: () => _.intl.string(_.t.ai4ym2),
            getAnswer: () =>
                _.intl.format(_.t["8zlqlD"], { helpCenterUrl: g.A.getArticleURL(m.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => _.intl.string(_.t.kMVGsC), getAnswer: () => _.intl.string(_.t["Vz/SCQ"]) },
        { getQuestion: () => _.intl.string(_.t.kYmXWF), getAnswer: () => _.intl.string(_.t["+OURPp"]) },
        { getQuestion: () => _.intl.string(_.t["LsX/vb"]), getAnswer: () => _.intl.string(_.t["3TeauK"]) },
        { getQuestion: () => _.intl.string(_.t.fRlnXU), getAnswer: () => _.intl.string(_.t.bTRacj) },
        { getQuestion: () => _.intl.string(_.t["8Mu5Q9"]), getAnswer: () => _.intl.string(_.t["2T5iPo"]) },
        { getQuestion: () => _.intl.string(_.t["6EN+TZ"]), getAnswer: () => _.intl.string(_.t.NZax1u) },
        { getQuestion: () => _.intl.string(_.t.f5B4EW), getAnswer: () => _.intl.string(_.t.Aje8Pb) },
    ],
    p = function (e) {
        let { className: t } = e,
            [n, l] = s.useState(null);
        return (0, i.jsxs)("div", {
            className: a()(A.iE, t),
            children: [
                (0, i.jsx)(r.D, { className: A.R_, variant: "heading-xxl/bold", children: _.intl.string(_.t.HPJ6Nj) }),
                (0, i.jsx)("ul", {
                    className: A.p_,
                    children: h.map((e, t) => {
                        let s = n === t;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: A.Aw,
                                children: [
                                    (0, i.jsxs)(o.D, {
                                        className: a()(A.k7, { [A.lo]: s }),
                                        onClick: () => l((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, i.jsx)(d.E, {
                                                className: A.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, i.jsx)(u.Q, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: A.q4,
                                                  })
                                                : (0, i.jsx)(c.j, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: A.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, i.jsx)(d.E, {
                                            className: A.ZF,
                                            color: "text-default",
                                            variant: "text-md/normal",
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
    };
