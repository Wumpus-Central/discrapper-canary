r.d(n, {
    G: function () {
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
                fillRule: 'evenodd',
                d: 'M8.62 4.51A2 2 0 0 1 10.56 3h2.88a2 2 0 0 1 1.94 1.51c.06.27.28.49.55.49H17a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1.07c.27 0 .49-.22.55-.49ZM12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
                clipRule: 'evenodd',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M4 10.35c-1.18.94-2 2.18-2 3.65 0 1.78 1.2 3.22 2.79 4.2 1.15.71 2.6 1.24 4.21 1.53v2.06c0 .45.54.67.85.36l2.8-2.8a.5.5 0 0 0 0-.7l-2.8-2.8a.5.5 0 0 0-.85.36v1.48a10.06 10.06 0 0 1-3.16-1.2C4.54 15.7 4 14.8 4 14v-3.65ZM20 14c0 .61-.31 1.27-1.05 1.92a8.23 8.23 0 0 1-3.22 1.6 1 1 0 0 0 .54 1.92 10.2 10.2 0 0 0 4-2.02A4.59 4.59 0 0 0 22 14c0-1.47-.82-2.7-2-3.65V14Z',
                className: f
            })
        ]
    });
};
