r.d(n, {
    O: function () {
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
            d: 'M9.35 3A3 3 0 0 0 7.1 4l-5.34 6a3 3 0 0 0 0 4l5.34 6a3 3 0 0 0 2.24 1H20a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H9.35Zm1.94 5.3a1 1 0 0 1 1.42 0L15 10.58l2.3-2.3a1 1 0 1 1 1.4 1.42L16.42 12l2.3 2.3a1 1 0 0 1-1.42 1.4L15 13.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L13.58 12l-2.3-2.3a1 1 0 0 1 0-1.4Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
