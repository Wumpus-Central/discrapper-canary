n.d(t, { Z: () => u });
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(90641),
    c = n(886795),
    d = n(663618);
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
