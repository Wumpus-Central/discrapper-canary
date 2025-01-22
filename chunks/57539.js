r.d(n, {
    t: function () {
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
                d: 'M21 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 9.27a4.77 4.77 0 0 1 4.77-4.77h.46A4.77 4.77 0 0 1 24 9.27c0 .4-.33.73-.73.73h-.11a.26.26 0 0 1-.26-.2 5.17 5.17 0 0 0-.66-1.46c-.06-.1-.21-.04-.2.08l.13 1.3c.02.15-.1.28-.25.28h-5.84a.25.25 0 0 1-.25-.27l.13-1.3c.01-.13-.14-.2-.2-.09-.24.37-.52.9-.66 1.46a.26.26 0 0 1-.26.2h-.1a.73.73 0 0 1-.74-.73Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M10.18 8h1.33c.27 0 .5.22.54.49.03.21.09.43.16.63.15.39-.1.88-.52.88H9.85l-.67 4h4.97l.37-2.23c.05-.29.33-.47.62-.45l.26.02h.63c.31 0 .55.27.5.58L16.18 14H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 0 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8Z',
                className: f
            })
        ]
    });
};
