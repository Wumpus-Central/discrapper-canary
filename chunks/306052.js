n.d(t, { g: () => _ });
var r = n(54381),
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(535664),
    c = n(502087),
    u = n(921801),
    d = n(594174),
    f = n(726985),
    p = n(474936);
let _ = () => {
    let e = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        t = (0, o.e7)([c.Z], () => {
            let e = c.Z.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        n = (0, o.e7)([c.Z], () => c.Z.getPremiumTypeOverride()),
        i = (e) => {
            (0, l.u)(new Date(e));
        };
    return (0, r.jsxs)(s.Kqy, {
        gap: 16,
        children: [
            (0, r.jsxs)(u.F, {
                setting: f.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
                children: [
                    (0, r.jsx)(s.PhF, {
                        label: "Override Client-Side Premium Type",
                        options: p.b6,
                        value: n,
                        onSelectionChange: (t) => {
                            (0, l.C)(t, e);
                        },
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    (0, r.jsx)(s.Avr, {
                        onClick: () => {
                            (0, l.C)(p.F_, e);
                        },
                        text: "Reset premium type override",
                    }),
                ],
            }),
            (0, r.jsxs)(u.F, {
                setting: f.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
                children: [
                    (0, r.jsx)(s.Wrb, {
                        label: "Override Client-Side Account Created At Date",
                        value: a()(t),
                        onSelect: (e) => i(e.toISOString()),
                    }),
                    (0, r.jsx)(s.Avr, {
                        onClick: () => (0, l.u)(void 0),
                        text: "Reset account created at override",
                    }),
                ],
            }),
        ],
    });
};
