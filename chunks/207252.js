n.r(t),
    n.d(t, {
        default: function () {
            return k;
        }
    });
var i = n(200651),
    a = n(192379),
    l = n(442837),
    s = n(780384),
    o = n(481060),
    c = n(313201),
    r = n(210887),
    d = n(450269),
    h = n(388032),
    u = n(855339),
    x = n(112847),
    m = n(516954);
function k(e) {
    let { guildId: t, transitionState: n, onClose: k, onConfirm: C } = e,
        b = (0, c.Dt)(),
        g = (0, l.e7)([r.Z], () => r.Z.theme),
        p = (0, s.wj)(g) ? x : m,
        { rules: y, rulesAccepted: j } = (0, d.V)(t),
        E = a.useCallback(() => {
            k(), C();
        }, [k, C]);
    return (0, i.jsxs)(o.ModalRoot, {
        transitionState: n,
        'aria-labelledby': b,
        className: u.modal,
        children: [
            (0, i.jsx)(o.ModalCloseButton, {
                onClick: k,
                className: u.close
            }),
            (0, i.jsxs)(o.ModalContent, {
                className: u.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: u.header,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: p,
                                width: 80
                            }),
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                id: b,
                                children: h.intl.string(h.t.Q8OFNz)
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: u.centeredText,
                        children: h.intl.string(h.t['WT+829'])
                    }),
                    (0, i.jsx)('div', {
                        className: u.checkboxContainer,
                        children: y.map((e) =>
                            (0, i.jsxs)(
                                o.Checkbox,
                                {
                                    reverse: !0,
                                    type: o.Checkbox.Types.ROW,
                                    value: e.checked,
                                    align: o.Checkbox.Aligns.CENTER,
                                    onChange: e.onCheck,
                                    children: [
                                        (0, i.jsx)(o.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, i.jsx)(o.Text, {
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
            (0, i.jsx)(o.ModalFooter, {
                children: (0, i.jsx)(o.Button, {
                    fullWidth: !0,
                    disabled: !j,
                    color: o.Button.Colors.BRAND,
                    onClick: E,
                    size: o.Button.Sizes.LARGE,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        children: h.intl.string(h.t['qjtt/v'])
                    })
                })
            })
        ]
    });
}
