c.d(t, { default: () => _ });
var n = c(200651),
    r = c(192379),
    i = c(442837),
    l = c(780384),
    s = c(481060),
    o = c(313201),
    a = c(210887),
    d = c(450269),
    h = c(388032),
    u = c(265582),
    x = c(112847),
    m = c(516954);
function _(e) {
    let { guildId: t, transitionState: c, onClose: _, onConfirm: k } = e,
        b = (0, o.Dt)(),
        g = (0, i.e7)([a.Z], () => a.Z.theme),
        C = (0, l.wj)(g) ? x : m,
        { rules: p, rulesAccepted: E } = (0, d.V)(t),
        f = r.useCallback(() => {
            _(), k();
        }, [_, k]);
    return (0, n.jsxs)(s.Y0X, {
        transitionState: c,
        'aria-labelledby': b,
        className: u.modal,
        children: [
            (0, n.jsx)(s.olH, {
                onClick: _,
                className: u.close
            }),
            (0, n.jsxs)(s.hzk, {
                className: u.content,
                children: [
                    (0, n.jsxs)('div', {
                        className: u.header,
                        children: [
                            (0, n.jsx)('img', {
                                alt: '',
                                src: C,
                                width: 80
                            }),
                            (0, n.jsx)(s.X6q, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                id: b,
                                children: h.NW.string(h.t.Q8OFNz)
                            })
                        ]
                    }),
                    (0, n.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: u.centeredText,
                        children: h.NW.string(h.t['WT+829'])
                    }),
                    (0, n.jsx)('div', {
                        className: u.checkboxContainer,
                        children: p.map((e) =>
                            (0, n.jsxs)(
                                s.XZJ,
                                {
                                    className: u.checkbox,
                                    reverse: !0,
                                    value: e.checked,
                                    align: s.XZJ.Aligns.CENTER,
                                    onChange: e.onCheck,
                                    children: [
                                        (0, n.jsx)(s.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, n.jsx)(s.Text, {
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
            (0, n.jsx)(s.mzw, {
                children: (0, n.jsx)(s.zxk, {
                    fullWidth: !0,
                    disabled: !E,
                    color: s.zxk.Colors.BRAND,
                    onClick: f,
                    size: s.zxk.Sizes.LARGE,
                    children: (0, n.jsx)(s.Text, {
                        variant: 'text-sm/semibold',
                        color: 'currentColor',
                        children: h.NW.string(h.t['qjtt/v'])
                    })
                })
            })
        ]
    });
}
