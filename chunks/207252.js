c.d(t, { default: () => k });
var s = c(200651),
    i = c(192379),
    n = c(442837),
    l = c(780384),
    r = c(481060),
    o = c(313201),
    a = c(210887),
    d = c(450269),
    h = c(388032),
    x = c(265582),
    u = c(112847),
    m = c(516954);
function k(e) {
    let { guildId: t, transitionState: c, onClose: k, onConfirm: N } = e,
        _ = (0, o.Dt)(),
        C = (0, n.e7)([a.Z], () => a.Z.theme),
        b = (0, l.wj)(C) ? u : m,
        { rules: g, rulesAccepted: j } = (0, d.V)(t),
        p = i.useCallback(() => {
            k(), N();
        }, [k, N]);
    return (0, s.jsxs)(r.Y0X, {
        transitionState: c,
        'aria-labelledby': _,
        className: x.modal,
        children: [
            (0, s.jsx)(r.olH, {
                onClick: k,
                className: x.close
            }),
            (0, s.jsxs)(r.hzk, {
                className: x.content,
                children: [
                    (0, s.jsxs)('div', {
                        className: x.header,
                        children: [
                            (0, s.jsx)('img', {
                                alt: '',
                                src: b,
                                width: 80
                            }),
                            (0, s.jsx)(r.X6q, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                id: _,
                                children: h.NW.string(h.t.Q8OFNz)
                            })
                        ]
                    }),
                    (0, s.jsx)(r.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.centeredText,
                        children: h.NW.string(h.t['WT+829'])
                    }),
                    (0, s.jsx)('div', {
                        className: x.checkboxContainer,
                        children: g.map((e) =>
                            (0, s.jsxs)(
                                r.XZJ,
                                {
                                    className: x.checkbox,
                                    reverse: !0,
                                    value: e.checked,
                                    align: r.XZJ.Aligns.CENTER,
                                    onChange: e.onCheck,
                                    children: [
                                        (0, s.jsx)(r.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, s.jsx)(r.Text, {
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
            (0, s.jsx)(r.mzw, {
                children: (0, s.jsx)(r.zxk, {
                    fullWidth: !0,
                    disabled: !j,
                    color: r.zxk.Colors.BRAND,
                    onClick: p,
                    size: r.zxk.Sizes.LARGE,
                    children: (0, s.jsx)(r.Text, {
                        variant: 'text-sm/semibold',
                        color: 'currentColor',
                        children: h.NW.string(h.t['qjtt/v'])
                    })
                })
            })
        ]
    });
}
