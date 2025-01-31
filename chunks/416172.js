n.d(t, { a: () => o });
var i = n(200651);
n(192379);
var r = n(692547),
    a = n(331595),
    s = n(267843);
let o = (e) => {
    var t, n;
    let { size: o = 'md', width: l, height: u, color: c = r.Z.colors.INTERACTIVE_NORMAL, colorClass: d = '', ...f } = e,
        _ = (0, s.m)(o),
        p = null !== (t = null == _ ? void 0 : _.width) && void 0 !== t ? t : l,
        h = null !== (n = null == _ ? void 0 : _.height) && void 0 !== n ? n : u;
    return (0, i.jsx)('svg', {
        ...(0, a.Z)(f),
        xmlns: 'http://www.w3.org/2000/svg',
        width: p,
        height: h,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: (0, i.jsx)('path', {
            fill: 'string' == typeof c ? c : c.css,
            d: 'M10.04 20.25H7.12a3.5 3.5 0 0 1-2.48-1.03A3.37 3.37 0 0 1 3.6 16.8V7.21a3.48 3.48 0 0 1 3.52-3.45h2.92v16.49ZM11.5 2.18H7.12A5.08 5.08 0 0 0 2 7.2v9.58c0 2.78 2.3 5.03 5.12 5.03h4.38c.08 0 .15-.06.15-.14V2.32c0-.08-.07-.14-.15-.14ZM5.1 8.07c0 1.02.85 1.85 1.89 1.85s1.88-.83 1.88-1.85S8.03 6.22 7 6.22s-1.88.83-1.88 1.85ZM17.6 11a2 2 0 0 1 2.02 1.98 2 2 0 0 1-2.01 2 2 2 0 0 1-2.03-2A2 2 0 0 1 17.61 11ZM13.8 21.82h3.09A5.08 5.08 0 0 0 22 16.8V7.21c0-2.78-2.3-5.03-5.12-5.03h-3.1c-.07 0-.13.05-.13.12v19.38c0 .08.06.14.14.14Z',
            className: d
        })
    });
};
