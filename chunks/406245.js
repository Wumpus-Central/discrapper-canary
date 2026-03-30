n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(975571),
    d = n(652215),
    c = n(985018),
    u = n(192971);
let m = [
        { getQuestion: () => c.intl.string(c.t.C4J8UB), getAnswer: () => c.intl.string(c.t.nhkk6k) },
        {
            getQuestion: () => c.intl.string(c.t.ai4ym2),
            getAnswer: () =>
                c.intl.format(c.t["8zlqlD"], { helpCenterUrl: o.A.getArticleURL(d.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => c.intl.string(c.t.kMVGsC), getAnswer: () => c.intl.string(c.t["Vz/SCQ"]) },
        { getQuestion: () => c.intl.string(c.t.kYmXWF), getAnswer: () => c.intl.string(c.t["+OURPp"]) },
        { getQuestion: () => c.intl.string(c.t["LsX/vb"]), getAnswer: () => c.intl.string(c.t["3TeauK"]) },
        { getQuestion: () => c.intl.string(c.t.fRlnXU), getAnswer: () => c.intl.string(c.t.bTRacj) },
        { getQuestion: () => c.intl.string(c.t["8Mu5Q9"]), getAnswer: () => c.intl.string(c.t["2T5iPo"]) },
        { getQuestion: () => c.intl.string(c.t["6EN+TZ"]), getAnswer: () => c.intl.string(c.t.NZax1u) },
        { getQuestion: () => c.intl.string(c.t.f5B4EW), getAnswer: () => c.intl.string(c.t.Aje8Pb) },
    ],
    _ = function (e) {
        let { className: t } = e,
            [n, l] = s.useState(null);
        return (0, i.jsxs)("div", {
            className: a()(u.iE, t),
            children: [
                (0, i.jsx)(r.Heading, {
                    className: u.R_,
                    variant: "heading-xxl/bold",
                    children: c.intl.string(c.t.HPJ6Nj),
                }),
                (0, i.jsx)("ul", {
                    className: u.p_,
                    children: m.map((e, t) => {
                        let s = n === t;
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: u.Aw,
                                children: [
                                    (0, i.jsxs)(r.DUT, {
                                        className: a()(u.k7, { [u.lo]: s }),
                                        onClick: () => l((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, i.jsx)(r.Text, {
                                                className: u.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            s
                                                ? (0, i.jsx)(r.QGg, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: u.q4,
                                                  })
                                                : (0, i.jsx)(r.j96, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: u.q4,
                                                  }),
                                        ],
                                    }),
                                    s &&
                                        (0, i.jsx)(r.Text, {
                                            className: u.ZF,
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
