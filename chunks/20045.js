r.d(n, {
    u: function () {
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
    return (0, i.jsx)('svg', {
        ...(0, o.Z)(p),
        xmlns: 'http://www.w3.org/2000/svg',
        width: _,
        height: m,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: (0, i.jsx)('path', {
            fill: 'string' == typeof d ? d : d.css,
            d: 'M4 2a1 1 0 0 0-2 0v19a1 1 0 1 0 2 0v-6.82l8.2-1.37c.37-.06.65.28.47.6a5.01 5.01 0 0 1-1.94 1.94c-.26.14-.38.47-.18.68a2 2 0 0 0 1.78.6l9-1.5A2 2 0 0 0 23 13.15v-7.3a2 2 0 0 0-2.33-1.98L15 4.82V3.35a2 2 0 0 0-2.33-1.98L4 2.82V2ZM15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z',
            className: f
        })
    });
};
