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
    return (0, i.jsxs)('svg', {
        ...(0, o.Z)(p),
        xmlns: 'http://www.w3.org/2000/svg',
        width: _,
        height: m,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M12 22c.32 0 .52-.33.41-.63A6.99 6.99 0 0 1 19 12c.83 0 1.63.14 2.37.41.3.1.63-.1.63-.41a10 10 0 1 0-18.45 5.36c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M24 19a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-5-3a1 1 0 0 1 1 1v1.59l.7.7a1 1 0 1 1-1.4 1.42l-1-1A1 1 0 0 1 18 19v-2a1 1 0 0 1 1-1Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
