n.d(t, { Z: () => u });
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(90641),
    c = n(886795),
    d = n(663618);
function u() {
    let e = r.useRef(null);
    return (0, a.jsx)("div", {
        ref: e,
        className: i()(d.panel, c.panel),
        children: (0, a.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: o.Z.clearUploadedKeyVersions,
        }),
    });
}
