n.d(t, { M: () => _ });
var r = n(627968),
    i = n(989349),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(10094),
    c = n(683760),
    u = n(195043),
    d = n(287809),
    f = n(531525),
    p = n(788868);
let _ = () => {
    let e = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        t = (0, s.bG)([c.A], () => {
            let e = c.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        n = (0, s.bG)([c.A], () => c.A.getPremiumTypeOverride()),
        i = (e) => {
            (0, l.Y)(new Date(e));
        };
    return (0, r.jsxs)(o.BJc, {
        gap: 16,
        children: [
            (0, r.jsxs)(u.x, {
                setting: f.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
                children: [
                    (0, r.jsx)(o.l6P, {
                        label: "Override Client-Side Premium Type",
                        options: p.Jm,
                        value: n,
                        onSelectionChange: (t) => {
                            (0, l.O)(t, e);
                        },
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(o.QWc, {
                        onClick: () => {
                            (0, l.O)(p.$I, e);
                        },
                        text: "Reset premium type override",
                    }),
                ],
            }),
            (0, r.jsxs)(u.x, {
                setting: f.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
                children: [
                    (0, r.jsx)(o.J3s, {
                        label: "Override Client-Side Account Created At Date",
                        value: a()(t),
                        onSelect: (e) => i(e.toISOString()),
                    }),
                    (0, r.jsx)(o.QWc, {
                        onClick: () => (0, l.Y)(void 0),
                        text: "Reset account created at override",
                    }),
                ],
            }),
        ],
    });
};
