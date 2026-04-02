n.d(t, { M: () => m });
var a = n(627968),
    i = n(989349),
    s = n.n(i),
    l = n(311907),
    r = n(397927),
    o = n(10094),
    d = n(683760),
    c = n(287809),
    u = n(788868);
let m = () => {
    let e = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        t = (0, l.bG)([d.A], () => {
            let e = d.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        n = (0, l.bG)([d.A], () => d.A.getPremiumTypeOverride());
    return (0, a.jsxs)(r.BJc, {
        gap: 16,
        children: [
            (0, a.jsx)(r.l6P, {
                label: "Override Client-Side Premium Type",
                options: u.Jm,
                value: n,
                onSelectionChange: (t) => {
                    (0, o.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, a.jsx)(r.QWc, {
                onClick: () => {
                    (0, o.O)(u.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, a.jsx)(r.J3s, {
                label: "Override Client-Side Account Created At Date",
                value: s()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, o.Y)(new Date(t));
                },
            }),
            (0, a.jsx)(r.QWc, { onClick: () => (0, o.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
