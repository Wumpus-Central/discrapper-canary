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
                fill: 'string' == typeof d ? d : d.css,
                d: 'M1.16 5.02c-.1.28.04.58.29.74l10.27 6.85a.5.5 0 0 0 .56 0l10.27-6.85c.25-.16.38-.46.29-.74A3 3 0 0 0 20 3H4a3 3 0 0 0-2.84 2.02Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M23 8.8a.5.5 0 0 0-.78-.41l-9.53 6.35c-.42.28-.96.28-1.38 0L1.78 8.39A.5.5 0 0 0 1 8.8V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8.8Z',
                className: f
            })
        ]
    });
};
