r.d(n, {
    E: function () {
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
            d: 'm21.5 11.5-5.9-1.22 2.24-3.44a.5.5 0 0 0-.68-.68L13.72 8.4 12.5 2.5a.5.5 0 1 0-.98 0l-1.23 5.9-3.44-2.24a.5.5 0 0 0-.68.68l2.24 3.44-5.9 1.23a.5.5 0 1 0 0 .98l5.9 1.23-2.24 3.44a.48.48 0 0 0 .07.6.46.46 0 0 0 .35.16c.1 0 .18-.03.26-.08l3.44-2.24 1.23 5.9a.5.5 0 1 0 .98 0l1.23-5.9 3.44 2.24c.08.05.17.07.26.08a.46.46 0 0 0 .35-.15.48.48 0 0 0 .07-.61l-2.24-3.44 5.9-1.23a.5.5 0 0 0 0-.98Z',
            className: f
        })
    });
};
