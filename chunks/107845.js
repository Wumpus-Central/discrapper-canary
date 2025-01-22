r.d(n, {
    _: function () {
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
                d: 'M19 16a3 3 0 1 0 1.98 5.25 1 1 0 0 1 1.33 1.5A4.99 4.99 0 0 1 14 19a5 5 0 0 1 8-4 1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h1.24A3 3 0 0 0 19 16Z',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            }),
            (0, i.jsx)('path', {
                fillRule: 'evenodd',
                d: 'M22 11.82c0 .2-.14.4-.33.49h-.02a.58.58 0 0 1-.44.05 6.99 6.99 0 0 0-8.83 8.9c.11.36-.13.74-.5.74H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6.82ZM17.57 5c.2 0 .31.2.22.37l-7.57 13.25a.75.75 0 0 1-.66.38H6.43c-.2 0-.31-.2-.22-.37l7.57-13.25a.75.75 0 0 1 .66-.38h3.13Z',
                clipRule: 'evenodd',
                fill: 'string' == typeof d ? d : d.css,
                className: f
            })
        ]
    });
};
