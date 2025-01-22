r.d(n, {
    O: function () {
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
                d: 'M22.52 13.17c-.2.41-.87.35-1.15 0a3.02 3.02 0 0 0-.45-.48.47.47 0 0 1-.13-.54c.04-.1.04-.2-.01-.31-.4-.9-1.18-2.4-2.4-3.76C16.89 6.38 14.82 5 12 5 9.2 5 7.13 6.38 5.61 8.08a15.05 15.05 0 0 0-2.37 3.72.48.48 0 0 0 0 .4c.4.9 1.18 2.37 2.37 3.72a8.46 8.46 0 0 0 5.89 3.07c.28.01.5.24.54.5.05.31.15.6.29.87.13.27-.03.64-.33.64-7.11 0-10.27-7.11-10.89-8.7a.83.83 0 0 1 0-.6C1.73 10.1 4.9 3 12 3c7.11 0 10.27 7.11 10.89 8.7.07.2.07.4 0 .6-.08.21-.2.5-.37.87Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M15.56 11.77c.2-.1.44.02.44.23a4 4 0 1 1-4-4c.21 0 .33.25.23.44a2.5 2.5 0 0 0 3.32 3.32ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z',
                className: f
            })
        ]
    });
};
