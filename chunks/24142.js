r.d(n, {
    v: function () {
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
                d: 'M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            }),
            (0, i.jsx)('path', {
                fillRule: 'evenodd',
                d: 'M21.6 13.54c.05.1.4.05.4-.07V6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4 11299.06 11299.06 0 0 0 7.76 0c.12 0 .17-.3.06-.36-1-.5-1.82-1.44-1.82-2.64a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 3-3c1.17 0 2.08.6 2.6 1.54ZM6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z',
                clipRule: 'evenodd',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            })
        ]
    });
};
