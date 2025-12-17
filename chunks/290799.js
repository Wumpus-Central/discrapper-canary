n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(63063),
    c = n(981631),
    u = n(388032),
    d = n(991021);
let f = [
        {
            getQuestion: () => u.intl.string(u.t.C4J8UB),
            getAnswer: () => u.intl.string(u.t.nhkk6k),
        },
        {
            getQuestion: () => u.intl.string(u.t.ai4ym2),
            getAnswer: () =>
                u.intl.format(u.t["8zlqlD"], { helpCenterUrl: l.Z.getArticleURL(c.BhN.GUILD_BOOSTING_FAQ) }),
        },
        {
            getQuestion: () => u.intl.string(u.t.kMVGsC),
            getAnswer: () => u.intl.string(u.t["Vz/SCQ"]),
        },
        {
            getQuestion: () => u.intl.string(u.t.kYmXWF),
            getAnswer: () => u.intl.string(u.t["+OURPp"]),
        },
        {
            getQuestion: () => u.intl.string(u.t["LsX/vb"]),
            getAnswer: () => u.intl.string(u.t["3TeauK"]),
        },
        {
            getQuestion: () => u.intl.string(u.t.fRlnXU),
            getAnswer: () => u.intl.string(u.t.bTRacj),
        },
        {
            getQuestion: () => u.intl.string(u.t["8Mu5Q9"]),
            getAnswer: () => u.intl.string(u.t["2T5iPo"]),
        },
        {
            getQuestion: () => u.intl.string(u.t["6EN+TZ"]),
            getAnswer: () => u.intl.string(u.t.NZax1u),
        },
        {
            getQuestion: () => u.intl.string(u.t.f5B4EW),
            getAnswer: () => u.intl.string(u.t.Aje8Pb),
        },
    ],
    p = function (e) {
        let { className: t } = e,
            [n, a] = i.useState(null);
        return (0, r.jsxs)("div", {
            className: o()(d.wrapper, t),
            children: [
                (0, r.jsx)(s.Heading, {
                    className: d.heading,
                    variant: "heading-xxl/bold",
                    children: u.intl.string(u.t.HPJ6Nj),
                }),
                (0, r.jsx)("ul", {
                    className: d.list,
                    children: f.map((e, t) => {
                        let i = n === t;
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: d.listItem,
                                children: [
                                    (0, r.jsxs)(s.P3F, {
                                        className: o()(d.questionWrapper, { [d.questionWrapperExpanded]: i }),
                                        onClick: () => a((e) => (e === t ? null : t)),
                                        tag: "li",
                                        children: [
                                            (0, r.jsx)(s.Text, {
                                                className: d.question,
                                                variant: "text-lg/normal",
                                                children: e.getQuestion(),
                                            }),
                                            i
                                                ? (0, r.jsx)(s.V_R, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: d.questionIcon,
                                                  })
                                                : (0, r.jsx)(s.qJs, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: d.questionIcon,
                                                  }),
                                        ],
                                    }),
                                    i &&
                                        (0, r.jsx)(s.Text, {
                                            className: d.answer,
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
