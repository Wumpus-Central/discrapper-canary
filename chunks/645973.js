a.d(t, { Z: () => u });
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(481060),
    o = a(90641),
    c = a(355730),
    d = a(616257);
function u() {
    let e = r.useRef(null);
    return (0, n.jsx)('div', {
        ref: e,
        className: i()(d.panel, c.panel),
        children: (0, n.jsx)(s.zxk, {
            variant: 'primary',
            size: 'sm',
            text: 'Reset Uploaded Key Versions Cache',
            onClick: o.Z.clearUploadedKeyVersions
        })
    });
}
