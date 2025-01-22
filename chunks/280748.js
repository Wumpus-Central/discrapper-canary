r.d(n, {
    a: function () {
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
                d: 'M12.2 22c.5-.01.66-.84.37-1.24A3 3 0 0 1 15 16h.46c.35 0 .6-.34.56-.69a3 3 0 0 1 5.1-2.43l.06.06c.29.28.77.12.8-.28L22 12a10 10 0 1 0-18.45 5.36c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22h10Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            }),
            (0, i.jsx)('path', {
                d: 'M19.7 14.3a1 1 0 0 0-1.4 1.4l.29.3 2 2H15a1 1 0 0 0 0 2h5.59l-2.3 2.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 0-1.4l-2.57-2.58-1.43-1.43Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            })
        ]
    });
};
