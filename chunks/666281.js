n.d(t, { v: () => c });
var r = n(477900),
    i = n(661531),
    a = n(452027),
    l = n(834730),
    s = n(105292),
    u = n(795043);
function c(e) {
    let {
        fieldLabel: t = s.intl.string(s.t["u+Cw58"]),
        label: n,
        value: c,
        Icon: o,
        iconColor: d = i.A.colors.ICON_SUBTLE,
    } = e;
    return (0, r.jsx)(a.D, {
        label: t,
        children: (0, r.jsxs)("div", {
            className: u.nQ,
            children: [
                (0, r.jsx)(l.E, { className: u.OL, variant: "text-md/normal", children: n }),
                (0, r.jsx)("span", {
                    className: u.OL,
                    children: (0, r.jsxs)(l.E, {
                        variant: "text-md/normal",
                        className: u.Kk,
                        children: [(0, r.jsx)(o, { color: d, size: "sm" }), c],
                    }),
                }),
            ],
        }),
    });
}
