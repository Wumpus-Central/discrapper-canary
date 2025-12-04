n.d(t, { g: () => h });
var r = n(54381),
    i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(199849),
    l = n(481060),
    c = n(246992),
    u = n(535664),
    d = n(502087),
    f = n(921801),
    p = n(594174),
    _ = n(726985),
    m = n(474936);
let h = (e) => {
    let { isDevTools: t = !1 } = e,
        n = (0, o.e7)([p.default], () => p.default.getCurrentUser()),
        i = (0, o.e7)([d.Z], () => {
            let e = d.Z.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        h = (0, o.e7)([d.Z], () => d.Z.getPremiumTypeOverride()),
        g = (e) => {
            (0, u.u)(new Date(e));
        };
    return (0, r.jsxs)(l.Kqy, {
        gap: 16,
        children: [
            (0, r.jsxs)(f.F, {
                setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
                children: [
                    (0, r.jsx)(s.y6, {
                        label: "Override Client-Side Premium Type",
                        options: m.b6,
                        value: h,
                        onChange: (e) => {
                            (0, u.C)(e, n);
                        },
                        popoutLayerContext: t ? c.O$ : void 0,
                    }),
                    (0, r.jsx)(l.Avr, {
                        onClick: () => {
                            (0, u.C)(m.F_, n);
                        },
                        text: "Reset premium type override",
                    }),
                ],
            }),
            (0, r.jsxs)(f.F, {
                setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
                children: [
                    (0, r.jsx)(l.Wrb, {
                        label: "Override Client-Side Account Created At Date",
                        value: a()(i),
                        onSelect: (e) => g(e.toISOString()),
                    }),
                    (0, r.jsx)(l.Avr, {
                        onClick: () => (0, u.u)(void 0),
                        text: "Reset account created at override",
                    }),
                ],
            }),
        ],
    });
};
