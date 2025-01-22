r.d(n, {
    R: function () {
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
                d: 'M7 2a1 1 0 0 0-2 0v3H2a1 1 0 1 0 0 2h3v8a4 4 0 0 0 4 4h8v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2H9a2 2 0 0 1-2-2V2Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M9 7h6a2 2 0 0 1 2 2v6h2V9a4 4 0 0 0-4-4H9v2Z',
                className: f
            })
        ]
    });
};
