r.d(n, {
    D: function () {
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
                d: 'M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9.15a4.48 4.48 0 0 0-5.93-.06l-.72-.96a2 2 0 0 0-3.2 0L9.93 16.1l-.5-.64a1.5 1.5 0 0 0-2.35 0l-1.86 2.32A.75.75 0 0 0 5.81 19H13v3H5a3 3 0 0 1-3-3V5Zm8.2.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z',
                clipRule: 'evenodd',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M16 18h.5v-.5a2.5 2.5 0 0 1 5 0v.5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm4-.5v.5h-2v-.5a1 1 0 1 1 2 0Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
