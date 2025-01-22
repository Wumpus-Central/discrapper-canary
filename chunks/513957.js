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
    return (0, i.jsx)('svg', {
        ...(0, o.Z)(p),
        xmlns: 'http://www.w3.org/2000/svg',
        width: _,
        height: m,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: (0, i.jsx)('path', {
            fill: 'string' == typeof d ? d : d.css,
            d: 'M18.31 6.2A5.04 5.04 0 0 1 16.06 2h-3.55v14.47a3 3 0 0 1-2.98 2.92 3.04 3.04 0 0 1 0-6.07c.3 0 .6.05.88.14V9.77A6.6 6.6 0 0 0 3 16.35c0 2.25 1.1 4.24 2.79 5.45A6.42 6.42 0 0 0 9.53 23a6.6 6.6 0 0 0 6.53-6.65V9.02A8.34 8.34 0 0 0 21 10.63v-3.6c-1 0-1.91-.3-2.69-.82Z',
            className: f
        })
    });
};
