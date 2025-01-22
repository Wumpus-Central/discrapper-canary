r.d(n, {
    h: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(692547),
    o = r(331595),
    s = r(267843);
let l = (e) => {
    var n, r;
    let { size: l = 'md', width: u, height: c, color: d = a.Z.colors.INTERACTIVE_NORMAL, colorClass: f = '', ...p } = e,
        h = (0, s.m)(l),
        _ = null !== (n = null == h ? void 0 : h.width) && void 0 !== n ? n : u,
        m = null !== (r = null == h ? void 0 : h.height) && void 0 !== r ? r : c;
    return (0, i.jsxs)('svg', {
        ...(0, o.Z)(p),
        xmlns: 'http://www.w3.org/2000/svg',
        width: _,
        height: m,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M10.07 9.4a.6.6 0 0 0-1.14 0l-.1.25a2 2 0 0 1-1.18 1.19l-.25.1a.6.6 0 0 0 0 1.13l.25.1a2 2 0 0 1 1.19 1.18l.1.25a.6.6 0 0 0 1.13 0l.1-.25a2 2 0 0 1 1.18-1.19l.25-.1a.6.6 0 0 0 0-1.13l-.25-.1a2 2 0 0 1-1.19-1.18l-.1-.25Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M14 0h-4v2H8v2h1v1.51A8.94 8.94 0 0 0 7.87 6 9 9 0 1 0 15 5.51V4h1V2h-2V0Zm-1 4h-2v2.93l-1.33.47a7 7 0 0 0-4.63 5.84c.25.11.47.27.67.47l1.23 1.23a3.62 3.62 0 0 0 5.12 0l.44-.44a5.12 5.12 0 0 1 3.62-1.5h2.8a7 7 0 0 0-4.59-5.6L13 6.93V4Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
