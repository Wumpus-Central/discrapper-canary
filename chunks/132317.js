r.d(n, {
    b: function () {
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
            d: 'M4.27 5.22A2.66 2.66 0 0 0 3 7.5v2.3c0 5.6 3.3 10.68 8.42 12.95.37.17.79.17 1.16 0A14.18 14.18 0 0 0 21 9.78V7.5c0-.93-.48-1.78-1.27-2.27l-6.17-3.76a3 3 0 0 0-3.12 0L4.27 5.22ZM6 7.68l6-3.66V12H6.22C6.08 11.28 6 10.54 6 9.78v-2.1Zm6 12.01V12h5.78A11.19 11.19 0 0 1 12 19.7Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
