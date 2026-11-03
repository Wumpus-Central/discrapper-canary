n.d(t, { v: () => o });
var r = n(477900),
    i = n(661531),
    a = n(452027),
    l = n(834730),
    s = n(105292),
    u = n(795043);
function o(e) {
    let {
        fieldLabel: t = s.intl.string(s.t["u+Cw58"]),
        label: n,
        value: o,
        Icon: c,
        iconColor: d = i.A.colors.ICON_SUBTLE,
    } = e;
    return (0, r.jsx)(a.D, {
        label: t,
        children: (0, r.jsxs)("div", {
            className: u.nQ,
            children: [
                (0, r.jsx)(l.E, { className: u.OL, variant: "body-md/normal", children: n }),
                (0, r.jsx)("span", {
                    className: u.OL,
                    children: (0, r.jsxs)(l.E, {
                        variant: "body-md/normal",
                        className: u.Kk,
                        children: [(0, r.jsx)(c, { color: d, size: "sm" }), o],
                    }),
                }),
            ],
        }),
    });
}
