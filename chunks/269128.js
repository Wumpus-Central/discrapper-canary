var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(772848),
    l = r(363969);
let u = (0, s.Z)(),
    c = (e) => {
        let { open: n, className: r, withHighlight: a = !1 } = e;
        return (0, i.jsxs)('svg', {
            width: '18',
            height: '18',
            className: o()(l.button, r, {
                [l.open]: n,
                [l.withHighlight]: a
            }),
            children: [
                a &&
                    (0, i.jsx)('defs', {
                        children: (0, i.jsxs)('linearGradient', {
                            id: u,
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
                            stroke: a ? 'url(#'.concat(u, ')') : 'currentColor',
                            d: 'M4.5 4.5l9 9',
                            strokeLinecap: 'round'
                        }),
                        (0, i.jsx)('path', {
                            stroke: a ? 'url(#'.concat(u, ')') : 'currentColor',
                            d: 'M13.5 4.5l-9 9',
                            strokeLinecap: 'round'
                        })
                    ]
                })
            ]
        });
    };
n.Z = c;
