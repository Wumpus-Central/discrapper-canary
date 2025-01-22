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
    return (0, i.jsxs)('svg', {
        ...(0, o.Z)(p),
        xmlns: 'http://www.w3.org/2000/svg',
        width: _,
        height: m,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('path', {
                d: 'M12.2 22c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h5.84c.2 0 .38-.12.46-.3a10 10 0 1 0-17.74 1.66c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            }),
            (0, i.jsx)('path', {
                d: 'M15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            })
        ]
    });
};
