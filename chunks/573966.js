n.d(t, { m: () => o });
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
            d: 'M5.42 22a.9.9 0 0 1-.91-.9V2.9c0-.5.4-.9.9-.9h7.94c1.62 0 2.93.46 3.91 1.4 1 .92 1.5 2.15 1.5 3.67 0 1.2-.28 2.17-.86 2.9a4.8 4.8 0 0 1-2.23 1.57c1.18.25 2.1.78 2.78 1.59.7.8 1.04 1.9 1.04 3.33 0 1.86-.56 3.25-1.68 4.18-1.12.9-2.7 1.36-4.75 1.36H5.42Zm6.42-12c1.84 0 2.75-.73 2.75-2.2 0-1.47-.91-2.2-2.75-2.2h-3.1V10h3.1Zm.2 8.4c2.15 0 3.22-.8 3.22-2.4 0-1.6-1.07-2.4-3.22-2.4h-3.3v4.8h3.3Z',
            className: d
        })
    });
};
