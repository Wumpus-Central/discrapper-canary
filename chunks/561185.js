r.d(n, {
    v: function () {
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
                d: 'M6.69 2A3 3 0 0 0 3.7 4.67l-.33 3A3 3 0 0 0 6.35 11H7V9a1 1 0 0 1 2 0v2h6V9a1 1 0 1 1 2 0v2h.65a3.05 3.05 0 0 0 .9-.14 3 3 0 0 0 2.08-3.2l-.33-3A3 3 0 0 0 17.3 2H6.7Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M15 13v1a1 1 0 1 0 2 0v-1h.65c1.43 0 2.72-.6 3.62-1.56l.04.22.68 5.88A4 4 0 0 1 18 22H6A4 4 0 0 1 2 17.54l.68-5.88.04-.22c.9.96 2.19 1.56 3.62 1.56H7v1a1 1 0 1 0 2 0v-1h6Zm-6 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
