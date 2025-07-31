n.d(e, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(469894);
function c(t) {
    let { tips: e, className: n, headerText: i } = t;
    return (0, r.jsxs)('div', {
        className: s()(o.tipsSection, n),
        children: [
            (0, r.jsx)('div', {
                className: o.tipsHeader,
                children: (0, r.jsx)(a.X6q, {
                    variant: 'heading-lg/bold',
                    className: o.headerText,
                    children: i
                })
            }),
            (0, r.jsx)('ul', {
                className: o.tipsList,
                children: e.map((t, e) =>
                    (0, r.jsxs)(
                        'li',
                        {
                            className: o.tipRow,
                            children: [
                                (0, r.jsx)(a.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-brand',
                                    className: o.tipNumber,
                                    children: e + 1
                                }),
                                (0, r.jsx)(a.Text, {
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
