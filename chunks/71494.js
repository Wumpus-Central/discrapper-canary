r.d(n, {
    t: function () {
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
            fillRule: 'evenodd',
            d: 'M4.56 4.22A2.83 2.83 0 0 0 3 6.75v3.03c0 5.6 3.3 10.69 8.42 12.96.37.17.79.17 1.16 0A14.18 14.18 0 0 0 21 9.78V6.75c0-1.07-.6-2.05-1.56-2.53l-6.1-3.05a3 3 0 0 0-2.68 0l-6.1 3.05ZM15 11a3 3 0 0 1-2 2.83v2.67a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2.67A3 3 0 1 1 15 11Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
