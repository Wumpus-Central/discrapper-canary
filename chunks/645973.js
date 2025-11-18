n.d(t, { Z: () => u });
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(481060),
    o = n(90641),
    c = n(418472),
    d = n(866403);
function u() {
    let e = l.useRef(null);
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
