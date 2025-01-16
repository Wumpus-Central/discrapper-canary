n.d(e, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    o = n.n(s),
    l = n(481060),
    r = n(437323);
function a(t) {
    let { tips: e, className: n, headerText: s } = t;
    return (0, i.jsxs)('div', {
        className: o()(r.tipsSection, n),
        children: [
            (0, i.jsx)('div', {
                className: r.tipsHeader,
                children: (0, i.jsx)(l.Heading, {
                    variant: 'heading-lg/bold',
                    className: r.headerText,
                    children: s
                })
            }),
            (0, i.jsx)('ul', {
                className: r.tipsList,
                children: e.map((t, e) =>
                    (0, i.jsxs)(
                        'li',
                        {
                            className: r.tipRow,
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'text-brand',
                                    className: r.tipNumber,
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
