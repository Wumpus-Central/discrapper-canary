r.d(n, {
    K: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(331595),
    o = r(249849);
let s = ['#ff1b90', '#ff7fc0', '#f0f0f0'],
    l = [0.2, 0.52, 1],
    u = [
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
    c = (e) => {
        let { width: n = 24, height: r = 24, primaryTintColor: c, ...d } = e,
            { primaryColorsTransformed: f } = (0, o.s)({
                primaryBaseColors: s,
                primaryTintColor: c,
                primaryTintLuminances: l,
                primaryLuminanceWeights: u
            });
        return (0, i.jsxs)('svg', {
            ...(0, a.Z)(d),
            width: n,
            height: r,
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
                    fill: f[1]
                }),
                (0, i.jsx)('path', {
                    d: 'M15 4h-1v5h1V4ZM14 9h-1v2h1V9ZM3 9H2v2h1V9ZM13 11h-2v1h2v-1ZM11 12H9v1h2v-1ZM9 13H7v1h2v-1ZM7 12H5v1h2v-1ZM5 11H3v1h2v-1Z',
                    fill: f[0]
                }),
                (0, i.jsx)('path', {
                    d: 'M3 1v1h4V1H3ZM2 2v1h1V2H2ZM1 3v1h1V3H1ZM0 4v5h1V4H0ZM1 9v2h1V9H1ZM2 11v1h1v-1H2ZM3 12v1h2v-1H3ZM5 13v1h2v-1H5Z',
                    fill: '#000'
                }),
                (0, i.jsx)('path', {
                    d: 'M3 2v1h4V2H3ZM9 2v1h4V2H9ZM7 3v1h2V3H7Z',
                    fill: f[2]
                }),
                (0, i.jsx)('path', {
                    opacity: '.6',
                    d: 'M11 6V5H9v1H7V5H5v1H4v3h1v1h2.01v1h2v-1H11V9h1V6h-1Z',
                    fill: '#fff'
                }),
                (0, i.jsx)('path', {
                    d: 'M13 3v1h1V3h-1ZM2 3v1h1V3H2ZM3 4v1h1V4H3ZM1 4v2h1V4H1Z',
                    fill: f[2]
                })
            ]
        });
    };
