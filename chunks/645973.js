n.d(t, { Z: () => u });
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(90641),
    c = n(355730),
    d = n(616257);
function u() {
    let e = a.useRef(null);
    return (0, r.jsx)('div', {
        ref: e,
        className: i()(d.panel, c.panel),
        children: (0, r.jsx)(o.zxk, {
            size: o.zxk.Sizes.SMALL,
            onClick: s.Z.clearUploadedKeyVersions,
            children: 'Reset Uploaded Key Versions Cache'
        })
    });
}
