r.d(n, {
    f: function () {
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
            d: 'M12 1.4a1 1 0 0 0 0 1.41l.35.35-1 1.01a1 1 0 0 0 .08 1.58l9.54 6.72a1 1 0 0 0 1.3-.13l.7-.7a1 1 0 0 0 0-1.4l-9.2-9.2a1 1 0 0 0-1.41 0L12 1.4ZM12 22.61a1 1 0 0 0 0-1.41l-.35-.36.37-.37a.56.56 0 0 0 .12-.56 3 3 0 0 1-.06-1.57.56.56 0 0 0-.21-.58l-8.84-6.22a1 1 0 0 0-1.3.13l-.69.69a1 1 0 0 0 0 1.41l9.2 9.2a1 1 0 0 0 1.4 0l.36-.36ZM15 16h.16c.33 0 .56-.32.3-.53a.98.98 0 0 0-.07-.06L6.9 9.76a1 1 0 1 0-1.1 1.66l7.3 4.88c.17.1.39.1.56.02.4-.2.86-.32 1.34-.32ZM18.5 13.97a1 1 0 0 1-1.4.28L8.63 8.59a1 1 0 0 1 1.1-1.66l8.5 5.66a1 1 0 0 1 .27 1.38ZM15 18a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Z',
            fill: 'string' == typeof d ? d : d.css,
            className: f
        })
    });
};
