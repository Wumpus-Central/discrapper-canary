r.d(n, {
    F: function () {
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
            d: 'M2.1 8.83C2.03 9.21 2 9.6 2 10v2c0 1.85.72 3.54 1.9 4.79l1.82 3.66a1 1 0 0 0 .9.55h1.76a1 1 0 0 0 .9-.55L10 19h4l.72 1.45a1 1 0 0 0 .9.55h1.76a1 1 0 0 0 .9-.55L20.5 16h.5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.29c-.27-.9-.7-1.72-1.29-2.42l1.09-1.09A.87.87 0 0 0 19.89 3h-1.48c-.63 0-1.25.18-1.79.5-.8-.32-1.7-.5-2.62-.5H9a7 7 0 0 0-6.3 3.93 2 2 0 0 1-.87-.52L1.7 6.3A1 1 0 0 0 .29 7.71l.12.12a4 4 0 0 0 1.69 1ZM9 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
