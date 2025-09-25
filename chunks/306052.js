n.d(t, { g: () => p });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(246992),
    s = n(535664),
    l = n(502087),
    c = n(921801),
    u = n(594174),
    d = n(726985),
    f = n(474936),
    _ = n(131662);
let p = (e) => {
    let { isDevTools: t = !1 } = e,
        n = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        p = (0, i.e7)([l.Z], () => {
            let e = l.Z.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        h = (0, i.e7)([l.Z], () => l.Z.getPremiumTypeOverride()),
        m = (e) => {
            (0, s.u)(new Date(e));
        };
    return (0, r.jsxs)("div", {
        className: _.container,
        children: [
            (0, r.jsxs)(c.F, {
                setting: d.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
                children: [
                    (0, r.jsx)(a.hjN, {
                        title: "Override Client-Side Premium Type",
                        tag: a.RB0.H3,
                        children: (0, r.jsx)(a.q4e, {
                            options: f.b6,
                            value: h,
                            onChange: (e) => {
                                (0, s.C)(e, n);
                            },
                            popoutLayerContext: t ? o.O$ : void 0,
                        }),
                    }),
                    (0, r.jsx)(a.Avr, {
                        onClick: () => {
                            (0, s.C)(f.F_, n);
                        },
                        text: "Reset premium type override",
                    }),
                ],
            }),
            (0, r.jsxs)(c.F, {
                setting: d.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
                children: [
                    (0, r.jsx)(a.hjN, {
                        title: "Override Client-Side Account Created At Date",
                        tag: a.RB0.H3,
                        children: (0, r.jsx)("input", {
                            type: "date",
                            value: p,
                            onChange: (e) => m(e.target.value),
                            className: _.datePicker,
                        }),
                    }),
                    (0, r.jsx)(a.Avr, {
                        onClick: () => (0, s.u)(void 0),
                        text: "Reset account created at override",
                    }),
                ],
            }),
        ],
    });
};
