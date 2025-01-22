r.d(n, {
    k: function () {
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
            d: 'M9 19a3 3 0 0 0 3 3 1 1 0 0 0 1-1v-2a3 3 0 0 1 .19-1.05l4.26-2.88a7.9 7.9 0 0 0 3.26-8.4c-.43-1.77-1.44-3.42-3.14-4.07a8.3 8.3 0 0 0-2.95-.6H6.59a2.09 2.09 0 0 0-1.93 2.88l.4.97a.2.2 0 0 1-.08.24l-.54.33a1.99 1.99 0 0 0-.8 2.44l.43 1.02c.03.07.02.16-.03.23l-.6.9A1.92 1.92 0 0 0 5.04 14h5.39A8 8 0 0 0 9 18.56V19Z',
            className: f
        })
    });
};
