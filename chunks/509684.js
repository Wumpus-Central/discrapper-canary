r.d(n, {
    s: function () {
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
                d: 'M5 2a3 3 0 0 0-3 3v4.7l3.33 3.33 3.39-3.38a1.5 1.5 0 0 1 2.12 0l3.38 3.38 3.39-3.38a1.5 1.5 0 0 1 2.12 0L22 11.92V5a3 3 0 0 0-3-3H5Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'm22 14.75-3.33-3.34-3.39 3.39a1.5 1.5 0 0 1-2.12 0L9.78 11.4 6.39 14.8a1.5 1.5 0 0 1-2.12 0L2 12.53V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.25Z',
                className: f
            })
        ]
    });
};
