n.d(t, { Z: () => i });
var s = n(200651);
n(192379);
var r = n(866442),
    a = n(481060),
    o = n(970533);
let i = function (e) {
    let { colorKey: t, value: n, onChange: i, title: l } = e;
    return (0, s.jsxs)(a.xJW, {
        children: [
            (0, s.jsx)(a.vwX, {
                tag: a.RB0.H5,
                children: l
            }),
            (0, s.jsx)(a.yRy, {
                renderPopout: (e) =>
                    (0, s.jsx)(a.Z$W, {
                        ...e,
                        value: n,
                        onChange: (e) => i(t, (0, r.Rf)(e))
                    }),
                children: (e) =>
                    (0, s.jsx)(a.P3F, {
                        ...e,
                        tag: 'span',
                        'aria-label': 'Select a color',
                        className: o.swatchContainer,
                        style: { backgroundColor: n },
                        children: (0, s.jsx)(a.ilE, {
                            size: 'xs',
                            color: 'currentColor',
                            className: o.swatchIcon
                        })
                    })
            })
        ]
    });
};
