n.d(t, { h: () => o });
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
                d: 'M10.07 9.4a.6.6 0 0 0-1.14 0l-.1.25a2 2 0 0 1-1.18 1.19l-.25.1a.6.6 0 0 0 0 1.13l.25.1a2 2 0 0 1 1.19 1.18l.1.25a.6.6 0 0 0 1.13 0l.1-.25a2 2 0 0 1 1.18-1.19l.25-.1a.6.6 0 0 0 0-1.13l-.25-.1a2 2 0 0 1-1.19-1.18l-.1-.25Z',
                className: d
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                d: 'M14 0h-4v2H8v2h1v1.51A8.94 8.94 0 0 0 7.87 6 9 9 0 1 0 15 5.51V4h1V2h-2V0Zm-1 4h-2v2.93l-1.33.47a7 7 0 0 0-4.63 5.84c.25.11.47.27.67.47l1.23 1.23a3.62 3.62 0 0 0 5.12 0l.44-.44a5.12 5.12 0 0 1 3.62-1.5h2.8a7 7 0 0 0-4.59-5.6L13 6.93V4Z',
                clipRule: 'evenodd',
                className: d
            })
        ]
    });
};
