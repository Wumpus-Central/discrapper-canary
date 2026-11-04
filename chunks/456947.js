var n = s(477900);
s(582128);
var r = s(834730),
    e = s(772707),
    c = s(83107),
    a = s(960027),
    o = s(297152),
    l = s(792996),
    d = s(756537),
    u = s(973324);
function x(t) {
    let { text: i, icon: s, foreground: e } = t;
    return (0, n.jsxs)("div", {
        className: d.OI,
        children: [
            (0, n.jsx)("div", {
                className: d.zc,
                children: (0, n.jsx)(s, {
                    color: e ?? "currentColor",
                    className: d.kZ,
                    size: "custom",
                    height: 40,
                    width: 40,
                }),
            }),
            (0, n.jsx)(r.E, { variant: "body-md/normal", color: "text-default", className: d.Ct, children: i }),
        ],
    });
}
s.d(
    i,
    {},
    {
        default: function (t) {
            let { transitionState: i, onClose: s, ...r } = t;
            return (0, n.jsxs)(e.k, {
                ...r,
                graphic: { type: "image", src: u.A },
                title: l.intl.string(l.t.UVuXCs),
                onClose: s,
                transitionState: i,
                actions: [{ text: l.intl.string(l.t.obLqZ8), variant: "primary", onClick: s }],
                children: [
                    (0, n.jsx)(x, {
                        text: l.intl.string(l.t.sBDfo6),
                        icon: c.z,
                        foreground: "var(--icon-feedback-critical)",
                    }),
                    (0, n.jsx)(x, { text: l.intl.string(l.t.x58YtH), icon: a.z }),
                    (0, n.jsx)(x, { text: l.intl.string(l.t.XtVqla), icon: o.E }),
                ],
            });
        },
    },
);
