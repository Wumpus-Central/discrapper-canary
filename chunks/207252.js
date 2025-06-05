n.d(t, { default: () => _ });
var c = n(255367),
    i = n(73800),
    r = n(442837),
    l = n(780384),
    o = n(481060),
    s = n(313201),
    a = n(210887),
    d = n(450269),
    u = n(388032),
    h = n(265582),
    x = n(112847),
    m = n(516954);
function _(e) {
    let { guildId: t, transitionState: n, onClose: _, onConfirm: k } = e,
        b = (0, s.Dt)(),
        g = (0, r.e7)([a.Z], () => a.Z.theme),
        C = (0, l.wj)(g) ? x : m,
        { rules: p, rulesAccepted: y } = (0, d.V)(t),
        E = i.useCallback(() => {
            _(), k();
        }, [_, k]);
    return (0, c.jsxs)(o.Y0X, {
        transitionState: n,
        'aria-labelledby': b,
        className: h.modal,
        parentComponent: 'GuildSettingsJoinRulesDiscoveryModal',
        children: [
            (0, c.jsx)(o.olH, {
                onClick: _,
                className: h.close
            }),
            (0, c.jsxs)(o.hzk, {
                className: h.content,
                children: [
                    (0, c.jsxs)('div', {
                        className: h.header,
                        children: [
                            (0, c.jsx)('img', {
                                alt: '',
                                src: C,
                                width: 80
                            }),
                            (0, c.jsx)(o.X6q, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                id: b,
                                children: u.intl.string(u.t.Q8OFNz)
                            })
                        ]
                    }),
                    (0, c.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: h.centeredText,
                        children: u.intl.string(u.t['WT+829'])
                    }),
                    (0, c.jsx)('div', {
                        className: h.checkboxContainer,
                        children: p.map((e) =>
                            (0, c.jsxs)(
                                o.XZJ,
                                {
                                    className: h.checkbox,
                                    reverse: !0,
                                    value: e.checked,
                                    align: o.XZJ.Aligns.CENTER,
                                    onChange: e.onCheck,
                                    children: [
                                        (0, c.jsx)(o.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, c.jsx)(o.Text, {
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
            (0, c.jsx)(o.mzw, {
                children: (0, c.jsx)(o.zxk, {
                    fullWidth: !0,
                    disabled: !y,
                    color: o.zxk.Colors.BRAND,
                    onClick: E,
                    size: o.zxk.Sizes.LARGE,
                    children: (0, c.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        color: 'currentColor',
                        children: u.intl.string(u.t['qjtt/v'])
                    })
                })
            })
        ]
    });
}
