n.d(t, { default: () => b });
var c = n(255367),
    i = n(73800),
    r = n(442837),
    l = n(780384),
    o = n(755721),
    s = n(481060),
    a = n(313201),
    d = n(210887),
    u = n(450269),
    h = n(388032),
    x = n(265582),
    m = n(112847),
    _ = n(516954);
function b(e) {
    let { guildId: t, transitionState: n, onClose: b, onConfirm: g } = e,
        k = (0, a.Dt)(),
        C = (0, r.e7)([d.Z], () => d.Z.theme),
        p = (0, l.wj)(C) ? m : _,
        { rules: y, rulesAccepted: E } = (0, u.V)(t),
        f = i.useCallback(() => {
            (b(), g());
        }, [b, g]);
    return (0, c.jsxs)(s.Y0X, {
        transitionState: n,
        'aria-labelledby': k,
        className: x.modal,
        parentComponent: 'GuildSettingsJoinRulesDiscoveryModal',
        children: [
            (0, c.jsx)(s.olH, {
                onClick: b,
                className: x.close
            }),
            (0, c.jsxs)(s.hzk, {
                className: x.content,
                children: [
                    (0, c.jsxs)('div', {
                        className: x.header,
                        children: [
                            (0, c.jsx)('img', {
                                alt: '',
                                src: p,
                                width: 80
                            }),
                            (0, c.jsx)(s.X6q, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                id: k,
                                children: h.intl.string(h.t.Q8OFNz)
                            })
                        ]
                    }),
                    (0, c.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.centeredText,
                        children: h.intl.string(h.t['WT+829'])
                    }),
                    (0, c.jsx)('div', {
                        className: x.checkboxContainer,
                        children: y.map((e) =>
                            (0, c.jsxs)(
                                s.XZJ,
                                {
                                    className: x.checkbox,
                                    reverse: !0,
                                    value: e.checked,
                                    align: s.XZJ.Aligns.CENTER,
                                    onChange: e.onCheck,
                                    children: [
                                        (0, c.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, c.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            color: 'text-secondary',
                                            children: e.body
                                        })
                                    ]
                                },
                                e.key
                            )
                        )
                    })
                ]
            }),
            (0, c.jsx)(s.mzw, {
                children: (0, c.jsx)(o.zx, {
                    fullWidth: !0,
                    disabled: !E,
                    color: o.zx.Colors.BRAND,
                    onClick: f,
                    size: o.zx.Sizes.LARGE,
                    children: (0, c.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'currentColor',
                        children: h.intl.string(h.t['qjtt/v'])
                    })
                })
            })
        ]
    });
}
