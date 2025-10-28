n.d(t, { Z: () => u });
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(90641),
    c = n(55989),
    d = n(451429);
function u() {
    let e = r.useRef(null);
    return (0, a.jsx)("div", {
        ref: e,
        className: i()(d.panel, c.panel),
        children: (0, a.jsx)(o.Button, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: s.Z.clearUploadedKeyVersions,
        }),
    });
}
