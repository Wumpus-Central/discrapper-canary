r.d(n, {
    d: function () {
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
                d: 'M3 15.5V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v.5a.5.5 0 0 1-.5.5H17a4 4 0 0 0-4 4v4.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5ZM12.5 18H2a1 1 0 1 0 0 2h10.48c.33 0 .57-.3.54-.63A4.08 4.08 0 0 1 13 19v-.5a.5.5 0 0 0-.5-.5Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M15 11c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8Zm2 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
