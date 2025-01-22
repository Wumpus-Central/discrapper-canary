r.d(n, {
    l: function () {
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
            d: 'M15 5a3 3 0 0 0-3-3 1 1 0 0 0-1 1v2a3 3 0 0 1-.19 1.05L6.55 8.93a7.9 7.9 0 0 0-3.26 8.4c.43 1.77 1.44 3.42 3.14 4.07.86.34 1.89.6 2.95.6h8.03a2.09 2.09 0 0 0 1.93-2.88l-.4-.97a.2.2 0 0 1 .08-.24l.54-.33a1.99 1.99 0 0 0 .8-2.44l-.43-1.02a.25.25 0 0 1 .03-.23l.6-.9a1.92 1.92 0 0 0-1.6-2.99h-5.39A8 8 0 0 0 15 5.44V5Z',
            className: f
        })
    });
};
