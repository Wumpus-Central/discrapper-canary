n.d(t, { g: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(246992),
    l = n(535664),
    c = n(502087),
    u = n(921801),
    d = n(594174),
    f = n(726985),
    _ = n(474936),
    p = n(131662);
let h = (e) => {
    let { isDevTools: t = !1 } = e,
        n = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        h = (0, i.e7)([c.Z], () => {
            let e = c.Z.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        m = (0, i.e7)([c.Z], () => c.Z.getPremiumTypeOverride()),
        g = (e) => {
            (0, l.u)(new Date(e));
        };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(u.F, {
                setting: f.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
                children: [
                    (0, r.jsx)(o.hjN, {
                        title: "Override Client-Side Premium Type",
                        tag: o.RB0.H3,
                        children: (0, r.jsx)(o.q4e, {
                            options: _.b6,
                            value: m,
                            onChange: (e) => {
                                (0, l.C)(e, n);
                            },
                            popoutLayerContext: t ? s.O$ : void 0,
                        }),
                    }),
                    (0, r.jsx)(a.zx, {
                        look: a.zx.Looks.LINK,
                        style: { padding: "0" },
                        onClick: () => {
                            (0, l.C)(_.F_, n);
                        },
                        children: "Reset premium type override",
                    }),
                ],
            }),
            (0, r.jsxs)(u.F, {
                setting: f.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
                children: [
                    (0, r.jsx)(o.hjN, {
                        title: "Override Client-Side Account Created At Date",
                        tag: o.RB0.H3,
                        children: (0, r.jsx)("input", {
                            type: "date",
                            value: h,
                            onChange: (e) => g(e.target.value),
                            className: p.datePicker,
                        }),
                    }),
                    (0, r.jsx)(a.zx, {
                        look: a.zx.Looks.LINK,
                        style: { padding: "0" },
                        type: "submit",
                        onClick: () => (0, l.u)(void 0),
                        children: "Reset account created at override",
                    }),
                ],
            }),
        ],
    });
};
