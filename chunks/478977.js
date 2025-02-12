a.d(s, { Z: () => r });
var i = a(200651);
a(192379);
var t = a(866442),
    n = a(481060),
    l = a(970533);
let r = function (e) {
    let { colorKey: s, value: a, onChange: r, title: o } = e;
    return (0, i.jsxs)(n.xJW, {
        children: [
            (0, i.jsx)(n.vwX, {
                tag: n.RB0.H5,
                children: o
            }),
            (0, i.jsx)(n.yRy, {
                renderPopout: (e) =>
                    (0, i.jsx)(n.Z$W, {
                        ...e,
                        value: a,
                        onChange: (e) => r(s, (0, t.Rf)(e))
                    }),
                children: (e) =>
                    (0, i.jsx)(n.P3F, {
                        ...e,
                        tag: 'span',
                        'aria-label': 'Select a color',
                        className: l.swatchContainer,
                        style: { backgroundColor: a },
                        children: (0, i.jsx)(n.ilE, {
                            size: 'xs',
                            color: 'currentColor',
                            className: l.swatchIcon
                        })
                    })
            })
        ]
    });
};
