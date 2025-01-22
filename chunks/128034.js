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
    let { size: l = 'md', width: u, height: c, secondaryColor: d = 'transparent', secondaryColorClass: f = '', color: p = a.Z.colors.INTERACTIVE_NORMAL, colorClass: h = '', ..._ } = e,
        m = (0, s.m)(l),
        g = null !== (n = null == m ? void 0 : m.width) && void 0 !== n ? n : u,
        E = null !== (r = null == m ? void 0 : m.height) && void 0 !== r ? r : c;
    return (0, i.jsxs)('svg', {
        ...(0, o.Z)(_),
        xmlns: 'http://www.w3.org/2000/svg',
        width: g,
        height: E,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('circle', {
                cx: '12',
                cy: '12',
                r: '10',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof p ? p : p.css,
                fillRule: 'evenodd',
                d: 'M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z',
                clipRule: 'evenodd',
                className: h
            })
        ]
    });
};
