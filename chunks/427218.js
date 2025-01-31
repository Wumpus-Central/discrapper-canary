n.d(t, { K: () => o });
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
    return (0, i.jsxs)('svg', {
        ...(0, a.Z)(f),
        xmlns: 'http://www.w3.org/2000/svg',
        width: p,
        height: h,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                fillRule: 'evenodd',
                d: 'M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 20.53A9.53 9.53 0 0 1 11.53 11h.94c1.28 0 2.5.25 3.61.7.41.18.36.77-.05.96a7 7 0 0 0-3.65 8.6c.11.36-.13.74-.5.74H6.15a.5.5 0 0 1-.5-.55l.27-2.6c.02-.26-.27-.37-.41-.16-.48.74-1.03 1.8-1.32 2.9a.53.53 0 0 1-.5.41h-.22C2.66 22 2 21.34 2 20.53Z',
                clipRule: 'evenodd',
                className: d
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof c ? c : c.css,
                d: 'M23.66 16.47c.13.57.34 1.69.34 3.23v2.23a1.4 1.4 0 0 1-2.66.63l-.8-1.6a.5.5 0 0 0-.56-.25c-.26.06-.62.12-.98.12s-.72-.06-.98-.12a.5.5 0 0 0-.56.25l-.8 1.6a1.4 1.4 0 0 1-2.66-.63V19.7c0-1.54.2-2.66.34-3.23.31-1.3 1.36-1.55 2.46-1.79.23-.05.46.03.62.18.16.16.35.33.58.32a19.25 19.25 0 0 1 2 0c.23 0 .42-.16.58-.32a.68.68 0 0 1 .62-.18c1.1.24 2.15.5 2.46 1.8Z',
                className: d
            })
        ]
    });
};
