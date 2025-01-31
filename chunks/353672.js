n.d(e, { Z: () => a });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    o = n(437323);
function a(t) {
    let { tips: e, className: n, headerText: s } = t;
    return (0, i.jsxs)('div', {
        className: l()(o.tipsSection, n),
        children: [
            (0, i.jsx)('div', {
                className: o.tipsHeader,
                children: (0, i.jsx)(r.X6q, {
                    variant: 'heading-lg/bold',
                    className: o.headerText,
                    children: s
                })
            }),
            (0, i.jsx)('ul', {
                className: o.tipsList,
                children: e.map((t, e) =>
                    (0, i.jsxs)(
                        'li',
                        {
                            className: o.tipRow,
                            children: [
                                (0, i.jsx)(r.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-brand',
                                    className: o.tipNumber,
                                    children: e + 1
                                }),
                                (0, i.jsx)(r.Text, {
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
