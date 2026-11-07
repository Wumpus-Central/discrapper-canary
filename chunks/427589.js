var n = i(477900);
i(582128);
var l = i(627363),
    a = i(522265),
    r = i(104299),
    o = i(486020);
i.d(
    e,
    {},
    {
        A: function (t) {
            let { project: e, size: i, className: s } = t,
                u = e.application_id,
                { data: c } = (0, l.YY)(u),
                d = c?.icon != null ? o.Ay.getApplicationIconURL({ id: u, icon: c.icon, size: i }) : null;
            return null != d
                ? (0, n.jsx)("img", { src: d, alt: "", className: s })
                : (0, n.jsx)(r.A, { applicationId: u, name: e.name, glyphSize: (0, a.w)(i).glyphSize, className: s });
        },
    },
);
