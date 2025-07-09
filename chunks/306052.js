n.d(t, { g: () => h });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(755721),
    a = n(481060),
    l = n(246992),
    o = n(535664),
    c = n(502087),
    d = n(921801),
    u = n(594174),
    m = n(726985),
    p = n(474936),
    g = n(539525);
let h = (e) => {
    let { isDevTools: t = !1 } = e,
        n = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        h = (0, r.e7)([c.Z], () => {
            let e = c.Z.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : '';
        }),
        f = (0, r.e7)([c.Z], () => c.Z.getPremiumTypeOverride()),
        b = (e) => {
            (0, o.u)(new Date(e));
        };
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(d.F, {
                setting: m.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
                children: [
                    (0, i.jsx)(a.hjN, {
                        title: 'Override Client-Side Premium Type',
                        tag: a.RB0.H3,
                        children: (0, i.jsx)(a.q4e, {
                            options: p.b6,
                            value: f,
                            onChange: (e) => {
                                (0, o.C)(e, n);
                            },
                            popoutLayerContext: t ? l.O$ : void 0
                        })
                    }),
                    (0, i.jsx)(s.zx, {
                        look: s.zx.Looks.LINK,
                        style: { padding: '0' },
                        onClick: () => {
                            (0, o.C)(p.F_, n);
                        },
                        children: 'Reset premium type override'
                    })
                ]
            }),
            (0, i.jsxs)(d.F, {
                setting: m.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
                children: [
                    (0, i.jsx)(a.hjN, {
                        title: 'Override Client-Side Account Created At Date',
                        tag: a.RB0.H3,
                        children: (0, i.jsx)('input', {
                            type: 'date',
                            value: h,
                            onChange: (e) => b(e.target.value),
                            className: g.datePicker
                        })
                    }),
                    (0, i.jsx)(s.zx, {
                        look: s.zx.Looks.LINK,
                        style: { padding: '0' },
                        type: 'submit',
                        onClick: () => (0, o.u)(void 0),
                        children: 'Reset account created at override'
                    })
                ]
            })
        ]
    });
};
