n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(63063),
    u = n(981631),
    c = n(388032),
    d = n(906054);
let f = [
        {
            getQuestion: () => c.intl.string(c.t.C4J8UF),
            getAnswer: () => c.intl.string(c.t.nhkk6u)
        },
        {
            getQuestion: () => c.intl.string(c.t.ai4ym5),
            getAnswer: () => c.intl.format(c.t['8zlqlJ'], { helpCenterUrl: l.Z.getArticleURL(u.BhN.GUILD_BOOSTING_FAQ) })
        },
        {
            getQuestion: () => c.intl.string(c.t.kMVGsL),
            getAnswer: () => c.intl.string(c.t['Vz/SCQ'])
        },
        {
            getQuestion: () => c.intl.string(c.t.kYmXWF),
            getAnswer: () => c.intl.string(c.t['+OURPj'])
        }
    ],
    _ = function (e) {
        let { className: t } = e,
            [n, a] = r.useState(null);
        return (0, i.jsxs)('div', {
            className: s()(d.wrapper, t),
            children: [
                (0, i.jsx)(o.X6q, {
                    className: d.heading,
                    variant: 'heading-xxl/bold',
                    children: c.intl.string(c.t.HPJ6Nj)
                }),
                (0, i.jsx)('ul', {
                    className: d.list,
                    children: f.map((e, t) => {
                        let r = n === t;
                        return (0, i.jsxs)(
                            'div',
                            {
                                className: d.listItem,
                                children: [
                                    (0, i.jsxs)(o.P3F, {
                                        className: s()(d.questionWrapper, { [d.questionWrapperExpanded]: r }),
                                        onClick: () => a((e) => (e === t ? null : t)),
                                        tag: 'li',
                                        children: [
                                            (0, i.jsx)(o.Text, {
                                                className: d.question,
                                                variant: 'text-lg/normal',
                                                children: e.getQuestion()
                                            }),
                                            r
                                                ? (0, i.jsx)(o.V_R, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: d.questionIcon
                                                  })
                                                : (0, i.jsx)(o.qJs, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: d.questionIcon
                                                  })
                                        ]
                                    }),
                                    r &&
                                        (0, i.jsx)(o.Text, {
                                            className: d.answer,
                                            color: 'text-normal',
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
