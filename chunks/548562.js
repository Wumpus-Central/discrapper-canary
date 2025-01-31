n.d(t, { Q: () => o });
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
            d: 'M22.7 2.7a1 1 0 0 0-1.4-1.4l-20 20a1 1 0 1 0 1.4 1.4l20-20ZM4.5 1h13.17a.5.5 0 0 1 .36.85L4.62 15.25c-.2.22-.56.2-.6-.1A1 1 0 0 1 4 15v-.95a2 2 0 0 1 .61-1.44L8 9.35V5h-.91C5.39 5 4 3.48 4 1.6v-.1c0-.28.22-.5.5-.5ZM17.77 11.05a.5.5 0 0 0-.7 0l-4.1 4.1a.5.5 0 0 0 .36.85H19a1 1 0 0 0 1-1v-.95a2 2 0 0 0-.61-1.44l-1.62-1.56ZM11.08 17.25a.5.5 0 0 0-.36.15l-.36.37a.5.5 0 0 0-.14.46l.99 4.38a.5.5 0 0 0 .49.39h.6a.5.5 0 0 0 .49-.39l1.07-4.75a.5.5 0 0 0-.49-.61h-2.3Z',
            className: d
        })
    });
};
