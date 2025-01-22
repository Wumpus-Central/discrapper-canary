r.d(n, {
    p: function () {
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
            d: 'M19.94 7.03c.58-.28 1.27.01 1.46.62l1 3.1c.2.6-.19 1.25-.81 1.36l-6.73 1.2 4.71 4.98c.44.46.37 1.2-.14 1.57l-2.62 1.92c-.52.38-1.25.21-1.55-.35l-3.22-6.06-3.29 6.07c-.3.56-1.03.72-1.54.35l-2.63-1.93a1.05 1.05 0 0 1-.14-1.57l4.7-4.98-6.72-1.2c-.62-.11-1-.75-.81-1.36l1-3.1c.2-.61.88-.9 1.45-.63l6.24 3.01-.93-6.84C9.28 2.56 9.77 2 10.41 2h3.2c.63 0 1.12.56 1.04 1.18l-.88 6.85 6.17-3Z',
            className: f
        })
    });
};
