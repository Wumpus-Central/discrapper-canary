n.d(t, { Z: () => u });
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(90641),
    c = n(116266),
    d = n(482479);
function u() {
    let e = r.useRef(null);
    return (0, a.jsx)('div', {
        ref: e,
        className: i()(d.panel, c.panel),
        children: (0, a.jsx)(s.zxk, {
            size: s.zxk.Sizes.SMALL,
            onClick: o.Z.clearUploadedKeyVersions,
            children: 'Reset Uploaded Key Versions Cache'
        })
    });
}
