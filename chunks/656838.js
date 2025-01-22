r.d(n, {
    k: function () {
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
            d: 'M16.91 5C18.61 5 20 3.48 20 1.6v-.1a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5v.1C4 3.49 5.38 5 7.09 5H8v4.35l-3.39 3.26A2 2 0 0 0 4 14.05V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-.95a2 2 0 0 0-.61-1.44L16 9.35V5h.91ZM13.37 17.25c.33 0 .56.3.5.61l-1.08 4.75a.5.5 0 0 1-.49.39h-.6a.5.5 0 0 1-.49-.39l-1.07-4.75a.5.5 0 0 1 .49-.61h2.74Z',
            className: f
        })
    });
};
