n.d(t, { S: () => g });
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(246992),
    a = n(535664),
    o = n(502087),
    c = n(921801),
    d = n(594174),
    u = n(726985),
    h = n(474936),
    m = n(70108);
let g = (e) => {
    let { isDevTools: t = !1 } = e,
        n = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        g = (0, s.e7)([o.Z], () => {
            let e = o.Z.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : '';
        }),
        x = (0, s.e7)([o.Z], () => o.Z.getPremiumTypeOverride()),
        _ = (e) => {
            (0, a.u)(new Date(e));
        };
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(c.F, {
                setting: u.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
                children: [
                    (0, i.jsx)(l.hjN, {
                        title: 'Override Client-Side Premium Type',
                        tag: l.RB0.H3,
                        children: (0, i.jsx)(l.q4e, {
                            options: h.b6,
                            value: x,
                            onChange: (e) => {
                                (0, a.C)(e, n);
                            },
                            popoutLayerContext: t ? r.O$ : void 0
                        })
                    }),
                    (0, i.jsx)(l.zxk, {
                        look: l.zxk.Looks.LINK,
                        style: { padding: '0' },
                        onClick: () => {
                            (0, a.C)(h.F_, n);
                        },
                        children: 'Reset premium type override'
                    })
                ]
            }),
            (0, i.jsxs)(c.F, {
                setting: u.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
                children: [
                    (0, i.jsx)(l.hjN, {
                        title: 'Override Client-Side Account Created At Date',
                        tag: l.RB0.H3,
                        children: (0, i.jsx)('input', {
                            type: 'date',
                            value: g,
                            onChange: (e) => _(e.target.value),
                            className: m.datePicker
                        })
                    }),
                    (0, i.jsx)(l.zxk, {
                        look: l.zxk.Looks.LINK,
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
