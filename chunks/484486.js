n.d(t, { Z: () => c });
var a = n(951288);
n(647438);
var r = n(442837),
    i = n(481060),
    l = n(335131),
    o = n(597688),
    s = n(851339);
let c = () => {
    let e = (0, r.e7)([o.Z], () => o.Z.skipNumCategories);
    return (0, a.jsxs)("div", {
        className: s.container,
        children: [
            (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                children: "Hide first # of categories",
            }),
            (0, a.jsx)(i.FiK, {
                className: s.numberInputStepper,
                value: e,
                onChange: (e) => {
                    (0, l.p8)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
