n.d(t, { S: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(246992),
    a = n(535664),
    o = n(502087),
    c = n(921801),
    d = n(594174),
    u = n(726985),
    m = n(474936),
    g = n(179164);
let p = (e) => {
    let { isDevTools: t = !1 } = e,
        n = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        p = (0, r.e7)([o.Z], () => {
            let e = o.Z.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : '';
        }),
        h = (0, r.e7)([o.Z], () => o.Z.getPremiumTypeOverride()),
        f = (e) => {
            (0, a.u)(new Date(e));
        };
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(c.F, {
                setting: u.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
                children: [
                    (0, i.jsx)(s.hjN, {
                        title: 'Override Client-Side Premium Type',
                        tag: s.RB0.H3,
                        children: (0, i.jsx)(s.q4e, {
                            options: m.b6,
                            value: h,
                            onChange: (e) => {
                                (0, a.C)(e, n);
                            },
                            popoutLayerContext: t ? l.O$ : void 0
                        })
                    }),
                    (0, i.jsx)(s.zxk, {
                        look: s.zxk.Looks.LINK,
                        style: { padding: '0' },
                        onClick: () => {
                            (0, a.C)(m.F_, n);
                        },
                        children: 'Reset premium type override'
                    })
                ]
            }),
            (0, i.jsxs)(c.F, {
                setting: u.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
                children: [
                    (0, i.jsx)(s.hjN, {
                        title: 'Override Client-Side Account Created At Date',
                        tag: s.RB0.H3,
                        children: (0, i.jsx)('input', {
                            type: 'date',
                            value: p,
                            onChange: (e) => f(e.target.value),
                            className: g.datePicker
                        })
                    }),
                    (0, i.jsx)(s.zxk, {
                        look: s.zxk.Looks.LINK,
                        style: { padding: '0' },
                        type: 'submit',
                        onClick: () => (0, a.u)(void 0),
                        children: 'Reset account created at override'
                    })
                ]
            })
        ]
    });
};
