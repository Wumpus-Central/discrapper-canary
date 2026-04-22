a.d(t, { M: () => x });
var n = a(627968),
    l = a(989349),
    i = a.n(l),
    s = a(311907),
    r = a(331322),
    o = a(691885),
    d = a(123292),
    c = a(582306),
    u = a(10094),
    m = a(683760),
    h = a(287809),
    p = a(788868);
let x = () => {
    let e = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
        t = (0, s.bG)([m.A], () => {
            let e = m.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, s.bG)([m.A], () => m.A.getPremiumTypeOverride());
    return (0, n.jsxs)(r.B, {
        gap: 16,
        children: [
            (0, n.jsx)(o.l, {
                label: "Override Client-Side Premium Type",
                options: p.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, u.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, n.jsx)(d.Q, {
                onClick: () => {
                    (0, u.O)(p.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, n.jsx)(c.J, {
                label: "Override Client-Side Account Created At Date",
                value: i()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, u.Y)(new Date(t));
                },
            }),
            (0, n.jsx)(d.Q, { onClick: () => (0, u.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
