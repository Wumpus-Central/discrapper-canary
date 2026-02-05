"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(975571),
    u = n(652215),
    c = n(985018),
    d = n(943216);
let _ = [
        { getQuestion: () => c.intl.string(c.t.C4J8UB), getAnswer: () => c.intl.string(c.t.nhkk6k) },
        {
            getQuestion: () => c.intl.string(c.t.ai4ym2),
            getAnswer: () =>
                c.intl.format(c.t["8zlqlD"], { helpCenterUrl: l.A.getArticleURL(u.MVz.GUILD_BOOSTING_FAQ) }),
        },
        { getQuestion: () => c.intl.string(c.t.kMVGsC), getAnswer: () => c.intl.string(c.t["Vz/SCQ"]) },
        { getQuestion: () => c.intl.string(c.t.kYmXWF), getAnswer: () => c.intl.string(c.t["+OURPp"]) },
        { getQuestion: () => c.intl.string(c.t["LsX/vb"]), getAnswer: () => c.intl.string(c.t["3TeauK"]) },
        { getQuestion: () => c.intl.string(c.t.fRlnXU), getAnswer: () => c.intl.string(c.t.bTRacj) },
        { getQuestion: () => c.intl.string(c.t["8Mu5Q9"]), getAnswer: () => c.intl.string(c.t["2T5iPo"]) },
        { getQuestion: () => c.intl.string(c.t["6EN+TZ"]), getAnswer: () => c.intl.string(c.t.NZax1u) },
        { getQuestion: () => c.intl.string(c.t.f5B4EW), getAnswer: () => c.intl.string(c.t.Aje8Pb) },
    ],
    f = function (e) {
        let { className: t } = e,
            [n, a] = i.useState(null);
        return (0, r.jsxs)("div", {
            className: s()(d.iE, t),
            children: [
                (0, r.jsx)(o.Heading, {
                    className: d.R_,
                    variant: "heading-xxl/bold",
                    children: c.intl.string(c.t.HPJ6Nj),
                }),
                (0, r.jsx)("ul", {
                    className: d.p_,
                    children: _.map((e, t) => {
                        let i = n === t;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: d.Aw,
                                children: [
                                    (0, r.jsxs)(o.DUT, {
                                        className: s()(d.k7, { [d.lo]: i }),
                                        onClick: () => a((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, r.jsx)(o.Text, {
                                                className: d.b1,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            i
                                                ? (0, r.jsx)(o.QGg, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: d.q4,
                                                  })
                                                : (0, r.jsx)(o.j96, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: d.q4,
                                                  }),
                                        ],
                                    }),
                                    i &&
                                        (0, r.jsx)(o.Text, {
                                            className: d.ZF,
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
