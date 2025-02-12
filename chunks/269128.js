n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(772848),
    o = n(779958);
let l = (0, s.Z)(),
    u = (e) => {
        let { open: t, className: n, withHighlight: r = !1 } = e;
        return (0, i.jsxs)('svg', {
            width: '18',
            height: '18',
            className: a()(o.button, n, {
                [o.open]: t,
                [o.withHighlight]: r
            }),
            children: [
                r &&
                    (0, i.jsx)('defs', {
                        children: (0, i.jsxs)('linearGradient', {
                            id: l,
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
                            stroke: r ? 'url(#'.concat(l, ')') : 'currentColor',
                            d: 'M4.5 4.5l9 9',
                            strokeLinecap: 'round'
                        }),
                        (0, i.jsx)('path', {
                            stroke: r ? 'url(#'.concat(l, ')') : 'currentColor',
                            d: 'M13.5 4.5l-9 9',
                            strokeLinecap: 'round'
                        })
                    ]
                })
            ]
        });
    };
