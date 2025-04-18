n.d(e, { Z: () => a });
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(481060),
    l = n(469894);
function a(t) {
    let { tips: e, className: n, headerText: s } = t;
    return (0, r.jsxs)('div', {
        className: i()(l.tipsSection, n),
        children: [
            (0, r.jsx)('div', {
                className: l.tipsHeader,
                children: (0, r.jsx)(o.X6q, {
                    variant: 'heading-lg/bold',
                    className: l.headerText,
                    children: s
                })
            }),
            (0, r.jsx)('ul', {
                className: l.tipsList,
                children: e.map((t, e) =>
                    (0, r.jsxs)(
                        'li',
                        {
                            className: l.tipRow,
                            children: [
                                (0, r.jsx)(o.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-brand',
                                    className: l.tipNumber,
                                    children: e + 1
                                }),
                                (0, r.jsx)(o.Text, {
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
