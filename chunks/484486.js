n.d(t, { Z: () => c });
var a = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    i = n(335131),
    s = n(597688),
    o = n(23721);
let c = () => {
    let e = (0, r.e7)([s.Z], () => s.Z.skipNumCategories);
    return (0, a.jsxs)('div', {
        className: o.container,
        children: [
            (0, a.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: 'Hide first # of categories'
            }),
            (0, a.jsx)(l.FiK, {
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
