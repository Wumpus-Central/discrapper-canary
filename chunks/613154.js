r.d(n, {
    x: function () {
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
            d: 'M12 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM2 5a3 3 0 0 1 3-3h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5ZM15 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM19 3a1 1 0 0 1 1-1 2 2 0 0 1 2 2 1 1 0 1 1-2 0 1 1 0 0 1-1-1ZM21 19a1 1 0 0 1 1 1 2 2 0 0 1-2 2 1 1 0 1 1 0-2 1 1 0 0 1 1-1ZM18 21a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM22 8a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V8ZM21 13a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Z',
            className: f
        })
    });
};
