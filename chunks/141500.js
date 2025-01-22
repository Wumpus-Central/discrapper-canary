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
            d: 'M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-2.06-3.65a1 1 0 0 1-1.88-.7l1.9-5.08a.5.5 0 0 0 .04-.18v-2.22a.5.5 0 0 0-.38-.48l-2.86-.72a1 1 0 0 1 .48-1.94l3.55.89a5 5 0 0 0 2.42 0l3.55-.89a1 1 0 1 1 .48 1.94l-2.86.72a.5.5 0 0 0-.38.48v2.22l.03.18 1.9 5.08a1 1 0 0 1-1.87.7l-1.6-4.25a.5.5 0 0 0-.93 0l-1.6 4.25ZM14 6a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
