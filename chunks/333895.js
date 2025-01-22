r.d(n, {
    B: function () {
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
    return (0, i.jsxs)('svg', {
        ...(0, o.Z)(p),
        xmlns: 'http://www.w3.org/2000/svg',
        width: _,
        height: m,
        fill: 'none',
        viewBox: '0 0 24 24',
        children: [
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M16 4a3 3 0 1 1-5.98-.31c.03-.35-.21-.69-.56-.69H7a3 3 0 0 0-3 3v2.5c0 .28-.23.5-.5.54a3 3 0 0 0 0 5.92c.27.04.5.26.5.54V18a3 3 0 0 0 3 3h4.65c.43 0 .69-.55.54-.95A3 3 0 0 1 15 16h6.5a.5.5 0 0 0 .5-.5V6a3 3 0 0 0-3-3h-2.46c-.35 0-.6.34-.56.69L16 4Z',
                className: f
            }),
            (0, i.jsx)('path', {
                fill: 'string' == typeof d ? d : d.css,
                d: 'M15 18a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z',
                className: f
            })
        ]
    });
};
