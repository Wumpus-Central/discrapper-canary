n.d(e, { Z: () => a });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    o = n(469894);
function a(t) {
    let { tips: e, className: n, headerText: r } = t;
    return (0, i.jsxs)('div', {
        className: s()(o.tipsSection, n),
        children: [
            (0, i.jsx)('div', {
                className: o.tipsHeader,
                children: (0, i.jsx)(l.X6q, {
                    variant: 'heading-lg/bold',
                    className: o.headerText,
                    children: r
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
                                (0, i.jsx)(l.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-brand',
                                    className: o.tipNumber,
                                    children: e + 1
                                }),
                                (0, i.jsx)(l.Text, {
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
