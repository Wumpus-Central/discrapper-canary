n.d(t, { default: () => _ });
var c = n(255367),
    i = n(73800),
    r = n(442837),
    l = n(780384),
    s = n(481060),
    o = n(313201),
    a = n(210887),
    d = n(450269),
    h = n(388032),
    u = n(265582),
    x = n(112847),
    m = n(516954);
function _(e) {
    let { guildId: t, transitionState: n, onClose: _, onConfirm: k } = e,
        b = (0, o.Dt)(),
        g = (0, r.e7)([a.Z], () => a.Z.theme),
        C = (0, l.wj)(g) ? x : m,
        { rules: p, rulesAccepted: E } = (0, d.V)(t),
        f = i.useCallback(() => {
            _(), k();
        }, [_, k]);
    return (0, c.jsxs)(s.Y0X, {
        transitionState: n,
        'aria-labelledby': b,
        className: u.modal,
        children: [
            (0, c.jsx)(s.olH, {
                onClick: _,
                className: u.close
            }),
            (0, c.jsxs)(s.hzk, {
                className: u.content,
                children: [
                    (0, c.jsxs)('div', {
                        className: u.header,
                        children: [
                            (0, c.jsx)('img', {
                                alt: '',
                                src: C,
                                width: 80
                            }),
                            (0, c.jsx)(s.X6q, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                id: b,
                                children: h.intl.string(h.t.Q8OFNz)
                            })
                        ]
                    }),
                    (0, c.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: u.centeredText,
                        children: h.intl.string(h.t['WT+829'])
                    }),
                    (0, c.jsx)('div', {
                        className: u.checkboxContainer,
                        children: p.map((e) =>
                            (0, c.jsxs)(
                                s.XZJ,
                                {
                                    className: u.checkbox,
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
                children: (0, c.jsx)(s.zxk, {
                    fullWidth: !0,
                    disabled: !E,
                    color: s.zxk.Colors.BRAND,
                    onClick: f,
                    size: s.zxk.Sizes.LARGE,
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
