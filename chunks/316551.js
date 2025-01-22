r.d(n, {
    i: function () {
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
            d: 'M21.7 16.7a1 1 0 0 0 0-1.4l-5-5a1 1 0 0 0-1.4 1.4l3.29 3.3H13a7 7 0 0 1-7-7V4a1 1 0 1 0-2 0v4a9 9 0 0 0 9 9h5.59l-3.3 3.3a1 1 0 0 0 1.42 1.4l5-5Z',
            className: f
        })
    });
};
