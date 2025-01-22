r.d(n, {
    R: function () {
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
            d: 'M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-.13l.96 1.45a1 1 0 0 1-1.66 1.1L15.47 20H8.53l-1.7 2.55a1 1 0 0 1-1.67-1.1L6.13 20H6a3 3 0 0 1-3-3V5Zm5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 5a1 1 0 0 1 1-1h5v8H6a1 1 0 0 1-1-1V5Zm8 7h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5v8Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
