l.d(a, { X: () => n });
var r = l(477900);
l(582128);
var c = l(834730),
    i = l(122203);
function n(s) {
    let { title: a, subtitle: l, icon: n } = s;
    return (0, r.jsxs)("div", {
        className: i.iE,
        children: [
            null != n && (0, r.jsx)(n, { size: "xs", color: "currentColor", className: i.Kk }),
            (0, r.jsx)(c.E, { variant: "body-md/normal", className: i.DD, children: a }),
            null != l && "" !== l
                ? (0, r.jsx)(c.E, { variant: "body-xs/semibold", className: i.VA, children: l })
                : null,
        ],
    });
}
