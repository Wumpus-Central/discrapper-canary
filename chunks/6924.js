r.d(n, {
    U: function () {
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
                d: 'M19 16A3 3 0 1 0 21 21.25a1 1 0 1 1 1.32 1.5A4.98 4.98 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.23A3 3 0 0 0 19 16Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            }),
            (0, i.jsx)('path', {
                d: 'M22 12c0 .1-.06.2-.16.23l-.19.09a.58.58 0 0 1-.44.04 7 7 0 0 0-8.8 9c.1.3-.09.64-.4.64H2.2a1 1 0 0 1-.76-1.66l2.07-2.37a.52.52 0 0 0 .04-.61A10 10 0 1 1 22 12Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            })
        ]
    });
};
