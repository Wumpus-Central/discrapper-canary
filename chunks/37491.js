r.d(n, {
    c: function () {
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
                d: 'M1 6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v1H1V6Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M1 10h22v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-8Zm4 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Zm-1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm13-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
