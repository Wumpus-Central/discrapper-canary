r.d(n, {
    n: function () {
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
                d: 'M2 18a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1ZM1 13a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M8.67 2A6.67 6.67 0 0 0 2 8.67C2 9.4 2.6 10 3.33 10h17.34C21.4 10 22 9.4 22 8.67A6.67 6.67 0 0 0 15.33 2H8.67ZM14 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
