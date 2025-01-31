n.d(t, { K: () => u });
var i = n(200651);
n(192379);
var r = n(331595),
    a = n(249849);
let s = ['#ff1b90', '#ff7fc0', '#f0f0f0'],
    o = [0.2, 0.52, 1],
    l = [
        {
            base: 3,
            tint: 1
        },
        {
            base: 2,
            tint: 1
        },
        {
            base: 5,
            tint: 1
        }
    ],
    u = (e) => {
        let { width: t = 24, height: n = 24, primaryTintColor: u, ...c } = e,
            { primaryColorsTransformed: d } = (0, a.s)({
                primaryBaseColors: s,
                primaryTintColor: u,
                primaryTintLuminances: o,
                primaryLuminanceWeights: l
            });
        return (0, i.jsxs)('svg', {
            ...(0, r.Z)(c),
            width: t,
            height: n,
            viewBox: '0 0 16 16',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
                (0, i.jsx)('path', {
                    d: 'M7 2v1h2V2H7ZM9 1v1h4V1H9ZM13 2v1h1V2h-1ZM14 3v1h1V3h-1ZM15 4v5h1V4h-1ZM14 9v2h1V9h-1ZM13 11v1h1v-1h-1ZM11 12v1h2v-1h-2ZM9 13v1h2v-1H9ZM7 14v1h2v-1H7Z',
                    fill: '#000'
                }),
                (0, i.jsx)('path', {
                    d: 'M15 4h-1V3h-1V2H9v1H7V2H3v1H2v1H1v5h1v2h1v1h2v1h2v1h2v-1h2v-1h2v-1h1V9h1V4Z',
                    fill: d[1]
                }),
                (0, i.jsx)('path', {
                    d: 'M15 4h-1v5h1V4ZM14 9h-1v2h1V9ZM3 9H2v2h1V9ZM13 11h-2v1h2v-1ZM11 12H9v1h2v-1ZM9 13H7v1h2v-1ZM7 12H5v1h2v-1ZM5 11H3v1h2v-1Z',
                    fill: d[0]
                }),
                (0, i.jsx)('path', {
                    d: 'M3 1v1h4V1H3ZM2 2v1h1V2H2ZM1 3v1h1V3H1ZM0 4v5h1V4H0ZM1 9v2h1V9H1ZM2 11v1h1v-1H2ZM3 12v1h2v-1H3ZM5 13v1h2v-1H5Z',
                    fill: '#000'
                }),
                (0, i.jsx)('path', {
                    d: 'M3 2v1h4V2H3ZM9 2v1h4V2H9ZM7 3v1h2V3H7Z',
                    fill: d[2]
                }),
                (0, i.jsx)('path', {
                    opacity: '.6',
                    d: 'M11 6V5H9v1H7V5H5v1H4v3h1v1h2.01v1h2v-1H11V9h1V6h-1Z',
                    fill: '#fff'
                }),
                (0, i.jsx)('path', {
                    d: 'M13 3v1h1V3h-1ZM2 3v1h1V3H2ZM3 4v1h1V4H3ZM1 4v2h1V4H1Z',
                    fill: d[2]
                })
            ]
        });
    };
