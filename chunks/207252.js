n.r(t),
    n.d(t, {
        default: function () {
            return m;
        }
    });
var i = n(200651);
n(192379);
var a = n(442837),
    l = n(780384),
    o = n(481060),
    s = n(313201),
    c = n(210887),
    r = n(450269),
    d = n(388032),
    h = n(42129),
    u = n(112847),
    x = n(516954);
function m(e) {
    let { guildId: t, transitionState: n, onClose: m, onConfirm: k } = e,
        C = (0, s.Dt)(),
        b = (0, a.e7)([c.Z], () => c.Z.theme),
        g = (0, l.wj)(b) ? u : x,
        { rules: p, rulesAccepted: y } = (0, r.V)(t);
    return (0, i.jsxs)(o.ModalRoot, {
        transitionState: n,
        'aria-labelledby': C,
        className: h.modal,
        children: [
            (0, i.jsx)(o.ModalCloseButton, {
                onClick: m,
                className: h.close
            }),
            (0, i.jsxs)(o.ModalContent, {
                className: h.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: h.header,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: g,
                                width: 80
                            }),
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-xxl/semibold',
                                color: 'header-primary',
                                id: C,
                                children: d.intl.string(d.t.Q8OFNz)
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: h.centeredText,
                        children: d.intl.string(d.t['WT+829'])
                    }),
                    (0, i.jsx)('div', {
                        className: h.checkboxContainer,
                        children: p.map((e) =>
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
                    disabled: !y,
                    color: o.Button.Colors.BRAND,
                    onClick: k,
                    size: o.Button.Sizes.LARGE,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        children: d.intl.string(d.t['qjtt/v'])
                    })
                })
            })
        ]
    });
}
