a.d(t, { Z: () => c });
var n = a(255367);
a(73800);
var r = a(442837),
    l = a(481060),
    i = a(335131),
    s = a(597688),
    o = a(23721);
let c = () => {
    let e = (0, r.e7)([s.Z], () => s.Z.skipNumCategories);
    return (0, n.jsxs)('div', {
        className: o.container,
        children: [
            (0, n.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: 'Hide first # of categories'
            }),
            (0, n.jsx)(l.FiK, {
                className: o.numberInputStepper,
                value: e,
                onChange: (e) => {
                    (0, i.p8)(e);
                },
                minValue: 0,
                maxValue: 100
            })
        ]
    });
};
