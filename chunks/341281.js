r.d(n, {
    z: function () {
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
                d: 'M4.5 5.04A3 3 0 0 0 2 8v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-2.5-2.96c-.27-.04-.5.18-.5.46V6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-.5c0-.28-.23-.5-.5-.46ZM7 14a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z',
                clipRule: 'evenodd',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M7 5a1 1 0 0 1 1-1h1c.55 0 .98-.47 1.24-.96a2 2 0 0 1 3.52 0c.26.49.69.96 1.24.96h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5Z',
                className: f
            })
        ]
    });
};
