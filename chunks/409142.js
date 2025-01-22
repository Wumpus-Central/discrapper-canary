r.d(n, {
    a: function () {
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
            d: 'M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm4.8 4H6.5a.5.5 0 0 0-.5.5v3.3c0 .44.54.66.85.35l.8-.8 1.29 1.3c.2.2.51.2.7 0l1-1a.5.5 0 0 0 0-.71l-1.29-1.3.8-.79A.5.5 0 0 0 9.79 6Zm.35 11.15-.8-.8 1.3-1.29a.5.5 0 0 0 0-.7l-1-1a.5.5 0 0 0-.71 0l-1.3 1.29-.79-.8a.5.5 0 0 0-.85.36v3.29c0 .28.22.5.5.5h3.3a.5.5 0 0 0 .35-.85Zm6.2-7.8-1.29 1.3a.5.5 0 0 1-.7 0l-1-1a.5.5 0 0 1 0-.71l1.29-1.3-.8-.79a.5.5 0 0 1 .36-.85h3.29c.28 0 .5.22.5.5v3.3a.5.5 0 0 1-.85.35l-.8-.8Zm-1.29 4 1.3 1.3.79-.8a.5.5 0 0 1 .85.36v3.29a.5.5 0 0 1-.5.5h-3.3a.5.5 0 0 1-.35-.85l.8-.8-1.3-1.29a.5.5 0 0 1 0-.7l1-1c.2-.2.52-.2.71 0Z',
            clipRule: 'evenodd',
            className: f
        })
    });
};
