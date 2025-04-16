n.d(e, { Z: () => a });
var r = n(200651);
n(192379);
var s = n(120356),
    o = n.n(s),
    i = n(481060),
    c = n(469894);
function a(t) {
    let { tips: e, className: n, headerText: s } = t;
    return (0, r.jsxs)('div', {
        className: o()(c.tipsSection, n),
        children: [
            (0, r.jsx)('div', {
                className: c.tipsHeader,
                children: (0, r.jsx)(i.X6q, {
                    variant: 'heading-lg/bold',
                    className: c.headerText,
                    children: s
                })
            }),
            (0, r.jsx)('ul', {
                className: c.tipsList,
                children: e.map((t, e) =>
                    (0, r.jsxs)(
                        'li',
                        {
                            className: c.tipRow,
                            children: [
                                (0, r.jsx)(i.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-brand',
                                    className: c.tipNumber,
                                    children: e + 1
                                }),
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-sm/medium',
                                    children: t
                                })
                            ]
                        },
                        'safety-tips-'.concat(e)
                    )
                )
            })
        ]
    });
}
