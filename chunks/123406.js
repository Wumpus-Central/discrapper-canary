r.d(n, {
    P: function () {
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
            d: 'M2.35 19.44A4.75 4.75 0 0 0 6.07 21c1.43 0 2.58-.43 3.44-1.3.9-.9 1.35-2.06 1.35-3.5 0-1.43-.43-2.58-1.3-3.45a4.63 4.63 0 0 0-3.5-1.34c.6-1.6 1.99-3.1 4.16-4.49a.8.8 0 0 0 .1-1.3l-2.68-2.2a.76.76 0 0 0-.98 0C2.89 6.78 1 10.64 1 15.02c0 1.9.45 3.38 1.35 4.42ZM14.16 19.44A4.75 4.75 0 0 0 17.88 21c1.43 0 2.58-.43 3.45-1.3.9-.9 1.34-2.06 1.34-3.5 0-1.43-.43-2.58-1.3-3.45a4.63 4.63 0 0 0-3.5-1.34c.6-1.6 1.99-3.1 4.16-4.49a.8.8 0 0 0 .1-1.3l-2.68-2.2a.76.76 0 0 0-.98 0c-3.77 3.36-5.66 7.22-5.66 11.6 0 1.9.45 3.38 1.35 4.42Z',
            className: f
        })
    });
};
