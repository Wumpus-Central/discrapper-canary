n.d(t, { g: () => h });
var r = n(54381),
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(246992),
    c = n(535664),
    u = n(502087),
    d = n(921801),
    f = n(594174),
    _ = n(726985),
    p = n(474936);
let h = (e) => {
    let { isDevTools: t = !1 } = e,
        n = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        i = (0, o.e7)([u.Z], () => {
            let e = u.Z.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        h = (0, o.e7)([u.Z], () => u.Z.getPremiumTypeOverride()),
        m = (e) => {
            (0, c.u)(new Date(e));
        };
    return (0, r.jsxs)(s.Kqy, {
        gap: 16,
        children: [
            (0, r.jsxs)(d.F, {
                setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
                children: [
                    (0, r.jsx)(s.q4e, {
                        label: "Override Client-Side Premium Type",
                        options: p.b6,
                        value: h,
                        onChange: (e) => {
                            (0, c.C)(e, n);
                        },
                        popoutLayerContext: t ? l.O$ : void 0,
                    }),
                    (0, r.jsx)(s.Avr, {
                        onClick: () => {
                            (0, c.C)(p.F_, n);
                        },
                        text: "Reset premium type override",
                    }),
                ],
            }),
            (0, r.jsxs)(d.F, {
                setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
                children: [
                    (0, r.jsx)(s.Wrb, {
                        label: "Override Client-Side Account Created At Date",
                        value: a()(i),
                        onSelect: (e) => m(e.toISOString()),
                    }),
                    (0, r.jsx)(s.Avr, {
                        onClick: () => (0, c.u)(void 0),
                        text: "Reset account created at override",
                    }),
                ],
            }),
        ],
    });
};
