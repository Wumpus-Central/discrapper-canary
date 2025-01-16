var i = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    r = n(772848),
    c = n(363969);
let d = (0, r.Z)();
t.Z = (e) => {
    let { open: t, className: n, withHighlight: o = !1 } = e;
    return (0, i.jsxs)('svg', {
        width: '18',
        height: '18',
        className: a()(c.button, n, {
            [c.open]: t,
            [c.withHighlight]: o
        }),
        children: [
            o &&
                (0, i.jsx)('defs', {
                    children: (0, i.jsxs)('linearGradient', {
                        id: d,
                        x1: '0',
                        y1: '0',
                        x2: '0',
                        y2: '18',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, i.jsx)('stop', {
                                offset: '0',
                                stopColor: '#B473F5'
                            }),
                            (0, i.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E292AA'
                            })
                        ]
                    })
                }),
            (0, i.jsxs)('g', {
                fill: 'none',
                fillRule: 'evenodd',
                children: [
                    (0, i.jsx)('path', { d: 'M0 0h18v18H0' }),
                    (0, i.jsx)('path', {
                        stroke: o ? 'url(#'.concat(d, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, i.jsx)('path', {
                        stroke: o ? 'url(#'.concat(d, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
