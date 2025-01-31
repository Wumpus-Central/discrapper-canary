i.d(t, { default: () => k });
var n = i(200651),
    c = i(192379),
    s = i(442837),
    l = i(780384),
    a = i(481060),
    r = i(313201),
    d = i(210887),
    o = i(450269),
    h = i(388032),
    x = i(42129),
    u = i(112847),
    m = i(516954);
function k(e) {
    let { guildId: t, transitionState: i, onClose: k, onConfirm: _ } = e,
        C = (0, r.Dt)(),
        b = (0, s.e7)([d.Z], () => d.Z.theme),
        g = (0, l.wj)(b) ? u : m,
        { rules: j, rulesAccepted: p } = (0, o.V)(t),
        y = c.useCallback(() => {
            k(), _();
        }, [k, _]);
    return (0, n.jsxs)(a.Y0X, {
        transitionState: i,
        'aria-labelledby': C,
        className: x.modal,
        children: [
            (0, n.jsx)(a.olH, {
                onClick: k,
                className: x.close
            }),
            (0, n.jsxs)(a.hzk, {
                className: x.content,
                children: [
                    (0, n.jsxs)('div', {
                        className: x.header,
                        children: [
                            (0, n.jsx)('img', {
                                alt: '',
                                src: g,
                                width: 80
                            }),
                            (0, n.jsx)(a.X6q, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                id: C,
                                children: h.intl.string(h.t.Q8OFNz)
                            })
                        ]
                    }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.centeredText,
                        children: h.intl.string(h.t['WT+829'])
                    }),
                    (0, n.jsx)('div', {
                        className: x.checkboxContainer,
                        children: j.map((e) =>
                            (0, n.jsxs)(
                                a.XZJ,
                                {
                                    className: x.checkbox,
                                    reverse: !0,
                                    value: e.checked,
                                    align: a.XZJ.Aligns.CENTER,
                                    onChange: e.onCheck,
                                    children: [
                                        (0, n.jsx)(a.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, n.jsx)(a.Text, {
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
            (0, n.jsx)(a.mzw, {
                children: (0, n.jsx)(a.zxk, {
                    fullWidth: !0,
                    disabled: !p,
                    color: a.zxk.Colors.BRAND,
                    onClick: y,
                    size: a.zxk.Sizes.LARGE,
                    children: (0, n.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        children: h.intl.string(h.t['qjtt/v'])
                    })
                })
            })
        ]
    });
}
