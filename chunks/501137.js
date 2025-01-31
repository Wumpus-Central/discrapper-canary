n.d(t, { I: () => o });
var i = n(200651);
n(192379);
var r = n(692547),
    a = n(331595),
    s = n(267843);
let o = (e) => {
    var t, n;
    let { size: o = 'md', width: l, height: u, color: c = r.Z.colors.INTERACTIVE_NORMAL, colorClass: d = '', ...f } = e,
        _ = (0, s.m)(o),
        p = null !== (t = null == _ ? void 0 : _.width) && void 0 !== t ? t : l,
        h = null !== (n = null == _ ? void 0 : _.height) && void 0 !== n ? n : u;
    return (0, i.jsxs)('svg', {
        ...(0, a.Z)(f),
        xmlns: 'http://www.w3.org/2000/svg',
        width: p,
        height: h,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M5.32 2.27a1 1 0 1 1 1.36 1.46A8.55 8.55 0 0 0 4 10c0 2.5 1.04 4.74 2.68 6.27a1 1 0 1 1-1.36 1.46A10.55 10.55 0 0 1 2 10c0-3.06 1.28-5.82 3.32-7.73Z',
                className: d
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M8 10a6 6 0 0 1 12 0v1a1 1 0 1 0 2 0v-1a8 8 0 1 0-16 0c0 3.85 3.04 6.56 4.85 7.84.69.49 1.15 1.34 1.68 2.4A5 5 0 0 0 22 18a1 1 0 1 0-2 0 3 3 0 0 1-5.68 1.34l-.02-.03c-.49-.97-1.14-2.28-2.3-3.1-1.74-1.24-4-3.42-4-6.21Z',
                className: d
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M16 11.17V10a2 2 0 1 0-4 0 1 1 0 1 1-2 0 4 4 0 0 1 8 0v2a1 1 0 0 1-1 1 1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 0 1 2-2.83Z',
                className: d
            })
        ]
    });
};
