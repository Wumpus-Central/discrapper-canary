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
    return (0, i.jsx)('svg', {
        ...(0, o.Z)(p),
        xmlns: 'http://www.w3.org/2000/svg',
        width: _,
        height: m,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: (0, i.jsx)('path', {
            fill: 'string' == typeof d ? d : d.css,
            fillRule: 'evenodd',
            d: 'M12 8.07 10.6 6.7A5 5 0 0 0 6.75 5 3.75 3.75 0 0 0 3 8.75c0 2.32 1.59 4.76 3.87 6.96A31.87 31.87 0 0 0 12 19.67c1.2-.74 3.26-2.14 5.13-3.96 2.28-2.2 3.87-4.64 3.87-6.96A3.75 3.75 0 0 0 17.25 5a5 5 0 0 0-3.85 1.69L12 8.07Zm0-2.8A6.98 6.98 0 0 0 6.75 3 5.75 5.75 0 0 0 1 8.75c0 6.34 8.42 11.73 10.53 12.98.29.17.65.17.94 0C14.57 20.48 23 15.09 23 8.75A5.75 5.75 0 0 0 17.25 3c-2.34 0-3.88.9-5.25 2.26Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
