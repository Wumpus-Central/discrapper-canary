r.d(n, {
    A: function () {
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
                d: 'M8 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h2.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5c0 .28.22.5.5.5h1a.5.5 0 0 0 .5-.5V4a3 3 0 0 0-3-3H8ZM18 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M14 10a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1h-6Zm5.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM18 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
