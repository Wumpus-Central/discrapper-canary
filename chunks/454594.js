r.d(n, {
    l: function () {
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
                d: 'm3.83 1.23.53 1.41 1.41.53c.3.12.3.54 0 .66l-1.41.53-.53 1.41c-.12.3-.54.3-.66 0l-.53-1.41-1.41-.53a.35.35 0 0 1 0-.66l1.41-.53.53-1.41c.12-.3.54-.3.66 0Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                fillRule: 'evenodd',
                d: 'M12 4a8 8 0 0 0-7.67 5.7c-2.88 2.8-4.11 5.97-2.82 8.12 1.23 2.04 4.43 2.64 8.16 1.84a8 8 0 0 0 10-5.36c2.88-2.8 4.11-5.97 2.82-8.12-1.23-2.04-4.43-2.64-8.16-1.84A8 8 0 0 0 12 4Zm8.06 6.7c1.14-1.78 1.05-2.93.72-3.48-.36-.59-1.38-1.24-3.49-1.22.8.71 1.47 1.58 1.94 2.57l-.24.4a16.52 16.52 0 0 1-5.91 5.21 17.33 17.33 0 0 1-7.7 2.32 7.95 7.95 0 0 1-1.3-3.41l-.14.21c-1.14 1.78-1.05 2.93-.72 3.48.36.6 1.43 1.27 3.65 1.22 2.12-.05 4.8-.78 7.46-2.26a16.02 16.02 0 0 0 5.73-5.04ZM13.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
                clipRule: 'evenodd',
                className: f
            })
        ]
    });
};
