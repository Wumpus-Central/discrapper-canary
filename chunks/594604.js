r.d(n, {
    P: function () {
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
                d: 'M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1c.35 0 .7.02 1.04.07.4.05.53.56.26.87a5.45 5.45 0 0 0-1.3 3.54 7.63 7.63 0 0 0 1.72 4.64c.26.35.03.88-.4.88H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M19.87 21.73c.9-.7 3.13-2.7 3.13-5.25a3.5 3.5 0 0 0-7 0c0 2.56 2.24 4.55 3.13 5.25.22.17.52.17.74 0ZM19.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
