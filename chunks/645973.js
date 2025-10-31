n.d(t, { Z: () => u });
var a = n(951288),
    i = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(481060),
    o = n(90641),
    c = n(55989),
    d = n(451429);
function u() {
    let e = i.useRef(null);
    return (0, a.jsx)("div", {
        ref: e,
        className: r()(d.panel, c.panel),
        children: (0, a.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: o.Z.clearUploadedKeyVersions,
        }),
    });
}
