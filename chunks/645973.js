n.d(t, { Z: () => u });
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(90641),
    c = n(55989),
    d = n(451429);
function u() {
    let e = r.useRef(null);
    return (0, a.jsx)("div", {
        ref: e,
        className: l()(d.panel, c.panel),
        children: (0, a.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: o.Z.clearUploadedKeyVersions,
        }),
    });
}
