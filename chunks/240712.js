r.d(n, {
    A: function () {
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
            d: 'M14 10a1 1 0 1 1 0-2h3.59l-4.3-4.3a1 1 0 0 1 1.42-1.4L19 6.58V3a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1h-6ZM4 2a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM15 14a2 2 0 0 0-2 2v5c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5ZM11 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-3.59l4.3 4.3a1 1 0 0 0 1.4-1.42L6.42 16H10a1 1 0 0 0 1-1Z',
            className: f
        })
    });
};
