c.d(t, { default: () => k });
var i = c(200651),
    n = c(192379),
    l = c(442837),
    s = c(780384),
    r = c(481060),
    o = c(313201),
    a = c(210887),
    d = c(450269),
    h = c(388032),
    x = c(42129),
    u = c(112847),
    m = c(516954);
function k(e) {
    let { guildId: t, transitionState: c, onClose: k, onConfirm: _ } = e,
        C = (0, o.Dt)(),
        b = (0, l.e7)([a.Z], () => a.Z.theme),
        g = (0, s.wj)(b) ? u : m,
        { rules: j, rulesAccepted: p } = (0, d.V)(t),
        y = n.useCallback(() => {
            k(), _();
        }, [k, _]);
    return (0, i.jsxs)(r.Y0X, {
        transitionState: c,
        'aria-labelledby': C,
        className: x.modal,
        children: [
            (0, i.jsx)(r.olH, {
                onClick: k,
                className: x.close
            }),
            (0, i.jsxs)(r.hzk, {
                className: x.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: x.header,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: g,
                                width: 80
                            }),
                            (0, i.jsx)(r.X6q, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                id: C,
                                children: h.intl.string(h.t.Q8OFNz)
                            })
                        ]
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.centeredText,
                        children: h.intl.string(h.t['WT+829'])
                    }),
                    (0, i.jsx)('div', {
                        className: x.checkboxContainer,
                        children: j.map((e) =>
                            (0, i.jsxs)(
                                r.XZJ,
                                {
                                    className: x.checkbox,
                                    reverse: !0,
                                    value: e.checked,
                                    align: r.XZJ.Aligns.CENTER,
                                    onChange: e.onCheck,
                                    children: [
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, i.jsx)(r.Text, {
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
            (0, i.jsx)(r.mzw, {
                children: (0, i.jsx)(r.zxk, {
                    fullWidth: !0,
                    disabled: !p,
                    color: r.zxk.Colors.BRAND,
                    onClick: y,
                    size: r.zxk.Sizes.LARGE,
                    children: (0, i.jsx)(r.Text, {
                        variant: 'text-sm/semibold',
                        color: 'currentColor',
                        children: h.intl.string(h.t['qjtt/v'])
                    })
                })
            })
        ]
    });
}
