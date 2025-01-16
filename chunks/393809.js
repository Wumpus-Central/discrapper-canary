r.r(n),
    r.d(n, {
        default: function () {
            return s;
        }
    }),
    r(47120);
var e = r(200651),
    i = r(192379),
    o = r(481060),
    a = r(53365),
    c = r(377176),
    l = r(388032),
    u = r(722657);
function s(t) {
    let { guildId: n, transitionState: r, onClose: s } = t,
        [E, T] = i.useState(!1),
        [_, A] = i.useState(!1),
        N = async () => {
            T(!0);
            try {
                await (0, a.zo)(n), s();
            } finally {
                T(!1);
            }
        },
        d = l.intl.string(l.t['22itmp']);
    return (0, e.jsxs)(o.ModalRoot, {
        className: u.__invalid_container,
        size: o.ModalSize.DYNAMIC,
        transitionState: r,
        'aria-label': d,
        children: [
            (0, e.jsxs)(o.ModalContent, {
                className: u.content,
                children: [
                    (0, e.jsxs)('div', {
                        className: u.header,
                        children: [
                            (0, e.jsx)(o.CircleWarningIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: u.warningIcon
                            }),
                            (0, e.jsx)(o.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, e.jsx)(o.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: d
                            })
                        ]
                    }),
                    (0, e.jsx)(o.Spacer, { size: 12 }),
                    (0, e.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: u.__invalid_body,
                        children: l.intl.string(l.t.kdbm9P)
                    }),
                    (0, e.jsx)(o.Spacer, { size: 28 }),
                    (0, e.jsx)(o.Checkbox, {
                        onChange: () => {
                            A((t) => !t);
                        },
                        size: 20,
                        type: o.Checkbox.Types.INVERTED,
                        value: _,
                        children: (0, e.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: (0, c.f)()
                        })
                    })
                ]
            }),
            (0, e.jsxs)(o.ModalFooter, {
                children: [
                    (0, e.jsx)(o.Button, {
                        color: o.Button.Colors.BRAND,
                        disabled: !_,
                        onClick: N,
                        submitting: E,
                        children: l.intl.string(l.t['cY+Ooa'])
                    }),
                    (0, e.jsx)(o.Spacer, {
                        size: 12,
                        horizontal: !0
                    }),
                    (0, e.jsx)(o.Button, {
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.OUTLINED,
                        onClick: s,
                        children: l.intl.string(l.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
