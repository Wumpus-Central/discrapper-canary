r.d(n, {
    x: function () {
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
            d: 'M7.75 2a.75.75 0 0 0-.75.75V7H2.75a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75H7v4H2.75a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75H7v4.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75V17h4v4.25c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75V17h4.25c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H17v-4h4.25c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H17V2.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V7h-4V2.75A.75.75 0 0 0 9.25 2h-1.5ZM14 14v-4h-4v4h4Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
