var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(63063),
    d = r(981631),
    f = r(388032),
    _ = r(208802);
let h = [
    {
        getQuestion: () => f.intl.string(f.t.C4J8UF),
        getAnswer: () => f.intl.string(f.t.nhkk6u)
    },
    {
        getQuestion: () => f.intl.string(f.t.ai4ym5),
        getAnswer: () => f.intl.format(f.t['8zlqlJ'], { helpCenterUrl: c.Z.getArticleURL(d.BhN.GUILD_BOOSTING_FAQ) })
    },
    {
        getQuestion: () => f.intl.string(f.t.kMVGsL),
        getAnswer: () => f.intl.string(f.t['Vz/SCQ'])
    },
    {
        getQuestion: () => f.intl.string(f.t.kYmXWF),
        getAnswer: () => f.intl.string(f.t['+OURPj'])
    }
];
function p(e) {
    let { className: n } = e,
        [r, i] = s.useState(null);
    return (0, a.jsxs)('div', {
        className: l()(_.wrapper, n),
        children: [
            (0, a.jsx)(u.Heading, {
                className: _.heading,
                variant: 'heading-xxl/bold',
                children: f.intl.string(f.t.HPJ6Nj)
            }),
            (0, a.jsx)('ul', {
                className: _.list,
                children: h.map((e, n) => {
                    let s = r === n;
                    return (0, a.jsxs)(
                        'div',
                        {
                            className: _.listItem,
                            children: [
                                (0, a.jsxs)(u.Clickable, {
                                    className: l()(_.questionWrapper, { [_.questionWrapperExpanded]: s }),
                                    onClick: () => i((e) => (e === n ? null : n)),
                                    tag: 'li',
                                    children: [
                                        (0, a.jsx)(u.Text, {
                                            className: _.question,
                                            variant: 'text-lg/normal',
                                            children: e.getQuestion()
                                        }),
                                        s
                                            ? (0, a.jsx)(u.MinusIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: _.questionIcon
                                              })
                                            : (0, a.jsx)(u.PlusSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: _.questionIcon
                                              })
                                    ]
                                }),
                                s &&
                                    (0, a.jsx)(u.Text, {
                                        className: _.answer,
                                        color: 'text-normal',
                                        variant: 'text-md/normal',
                                        children: e.getAnswer()
                                    })
                            ]
                        },
                        n
                    );
                })
            })
        ]
    });
}
n.Z = p;
