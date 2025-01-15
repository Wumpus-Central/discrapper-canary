var o = t(200651);
t(192379);
var l = t(120356),
    i = t.n(l),
    r = t(772848),
    a = t(716886);
let s = (0, r.Z)();
n.Z = (e) => {
    let { open: n, className: t, withHighlight: l = !1 } = e;
    return (0, o.jsxs)('svg', {
        width: '18',
        height: '18',
        className: i()(a.button, t, {
            [a.open]: n,
            [a.withHighlight]: l
        }),
        children: [
            l &&
                (0, o.jsx)('defs', {
                    children: (0, o.jsxs)('linearGradient', {
                        id: s,
                        x1: '0',
                        y1: '0',
                        x2: '0',
                        y2: '18',
                        gradientUnits: 'userSpaceOnUse',
                        children: [
                            (0, o.jsx)('stop', {
                                offset: '0',
                                stopColor: '#B473F5'
                            }),
                            (0, o.jsx)('stop', {
                                offset: '1',
                                stopColor: '#E292AA'
                            })
                        ]
                    })
                }),
            (0, o.jsxs)('g', {
                fill: 'none',
                fillRule: 'evenodd',
                children: [
                    (0, o.jsx)('path', { d: 'M0 0h18v18H0' }),
                    (0, o.jsx)('path', {
                        stroke: l ? 'url(#'.concat(s, ')') : 'currentColor',
                        d: 'M4.5 4.5l9 9',
                        strokeLinecap: 'round'
                    }),
                    (0, o.jsx)('path', {
                        stroke: l ? 'url(#'.concat(s, ')') : 'currentColor',
                        d: 'M13.5 4.5l-9 9',
                        strokeLinecap: 'round'
                    })
                ]
            })
        ]
    });
};
