(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(63063),
    c = n(981631),
    u = n(388032),
    d = n(388272);
let f = [
        {
            getQuestion: () => u.intl.string(u.t.C4J8UF),
            getAnswer: () => u.intl.string(u.t.nhkk6u)
        },
        {
            getQuestion: () => u.intl.string(u.t.ai4ym5),
            getAnswer: () => u.intl.format(u.t['8zlqlJ'], { helpCenterUrl: l.Z.getArticleURL(c.BhN.GUILD_BOOSTING_FAQ) })
        },
        {
            getQuestion: () => u.intl.string(u.t.kMVGsL),
            getAnswer: () => u.intl.string(u.t['Vz/SCQ'])
        },
        {
            getQuestion: () => u.intl.string(u.t.kYmXWF),
            getAnswer: () => u.intl.string(u.t['+OURPj'])
        }
    ],
    _ = [
        ...f,
        {
            getQuestion: () => u.intl.string(u.t['LsX/vb']),
            getAnswer: () => u.intl.string(u.t['3TeauL'])
        },
        {
            getQuestion: () => u.intl.string(u.t.fRlnXV),
            getAnswer: () => u.intl.string(u.t.bTRacn)
        },
        {
            getQuestion: () => u.intl.string(u.t['8Mu5Q0']),
            getAnswer: () => u.intl.string(u.t['2T5iPj'])
        },
        {
            getQuestion: () => u.intl.string(u.t['6EN+TU']),
            getAnswer: () => u.intl.string(u.t.NZax1t)
        },
        {
            getQuestion: () => u.intl.string(u.t.f5B4ER),
            getAnswer: () => u.intl.string(u.t.Aje8PT)
        }
    ],
    p = function (e) {
        let { className: t, isGuildPowerupsExperimentEnabled: n } = e,
            [a, l] = i.useState(null),
            c = n ? _ : f;
        return (0, r.jsxs)('div', {
            className: o()(d.wrapper, t),
            children: [
                (0, r.jsx)(s.X6q, {
                    className: d.heading,
                    variant: 'heading-xxl/bold',
                    children: u.intl.string(u.t.HPJ6Nj)
                }),
                (0, r.jsx)('ul', {
                    className: d.list,
                    children: c.map((e, t) => {
                        let n = a === t;
                        return (0, r.jsxs)(
                            'div',
                            {
                                className: d.listItem,
                                children: [
                                    (0, r.jsxs)(s.P3F, {
                                        className: o()(d.questionWrapper, { [d.questionWrapperExpanded]: n }),
                                        onClick: () => l((e) => (e === t ? null : t)),
                                        tag: 'li',
                                        children: [
                                            (0, r.jsx)(s.Text, {
                                                className: d.question,
                                                variant: 'text-lg/normal',
                                                children: e.getQuestion()
                                            }),
                                            n
                                                ? (0, r.jsx)(s.V_R, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: d.questionIcon
                                                  })
                                                : (0, r.jsx)(s.qJs, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: d.questionIcon
                                                  })
                                        ]
                                    }),
                                    n &&
                                        (0, r.jsx)(s.Text, {
                                            className: d.answer,
                                            color: 'text-default',
                                            variant: 'text-md/normal',
                                            children: e.getAnswer()
                                        })
                                ]
                            },
                            t
                        );
                    })
                })
            ]
        });
    };
