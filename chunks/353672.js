n.d(e, { Z: () => o });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(469894);
function o(t) {
    let { tips: e, className: n, headerText: r } = t;
    return (0, i.jsxs)('div', {
        className: s()(a.tipsSection, n),
        children: [
            (0, i.jsx)('div', {
                className: a.tipsHeader,
                children: (0, i.jsx)(l.X6q, {
                    variant: 'heading-lg/bold',
                    className: a.headerText,
                    children: r
                })
            }),
            (0, i.jsx)('ul', {
                className: a.tipsList,
                children: e.map((t, e) =>
                    (0, i.jsxs)(
                        'li',
                        {
                            className: a.tipRow,
                            children: [
                                (0, i.jsx)(l.X6q, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-brand',
                                    className: a.tipNumber,
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
