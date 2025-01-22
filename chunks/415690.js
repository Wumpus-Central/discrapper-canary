r.d(n, {
    $: function () {
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
            d: 'M23.5 5.65a3.02 3.02 0 0 0-2.12-2.14C19.5 3 12 3 12 3s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 5.66C0 7.55 0 11.5 0 11.5s0 3.95.5 5.85a3.02 3.02 0 0 0 2.12 2.14C4.5 20 12 20 12 20s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.15c.5-1.9.5-5.85.5-5.85s0-3.95-.5-5.85ZM9.55 15.1V7.9l6.27 3.59-6.27 3.59Z',
            className: f
        })
    });
};
