(n.d(r, { default: () => T }), n(388685));
var e = n(255367),
    i = n(73800),
    a = n(755721),
    o = n(481060),
    c = n(53365),
    s = n(377176),
    l = n(388032),
    E = n(339500);
function T(t) {
    let { guildId: r, transitionState: n, onClose: T } = t,
        [_, A] = i.useState(!1),
        [N, d] = i.useState(!1),
        u = async () => {
            A(!0);
            try {
                (await (0, c.zo)(r), T());
            } finally {
                A(!1);
            }
        },
        I = l.intl.string(l.t['22itmp']);
    return (0, e.jsxs)(o.Y0X, {
        className: E.__invalid_container,
        size: o.CgR.DYNAMIC,
        transitionState: n,
        'aria-label': I,
        parentComponent: 'TermsNotAcceptedErrorModal',
        children: [
            (0, e.jsxs)(o.hzk, {
                className: E.content,
                children: [
                    (0, e.jsxs)('div', {
                        className: E.header,
                        children: [
                            (0, e.jsx)(o.P4T, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: E.warningIcon
                            }),
                            (0, e.jsx)(o.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, e.jsx)(o.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: I
                            })
                        ]
                    }),
                    (0, e.jsx)(o.LZC, { size: 12 }),
                    (0, e.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: E.__invalid_body,
                        children: l.intl.string(l.t.kdbm9P)
                    }),
                    (0, e.jsx)(o.LZC, { size: 28 }),
                    (0, e.jsx)(o.XZJ, {
                        onChange: () => {
                            d((t) => !t);
                        },
                        size: 20,
                        type: o.XZJ.Types.INVERTED,
                        value: N,
                        children: (0, e.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: (0, s.f)()
                        })
                    })
                ]
            }),
            (0, e.jsxs)(o.mzw, {
                children: [
                    (0, e.jsx)(o.zxk, {
                        variant: 'primary',
                        text: l.intl.string(l.t['cY+Ooa']),
                        disabled: !N,
                        onClick: u,
                        loading: _
                    }),
                    (0, e.jsx)(o.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    (0, e.jsx)(a.zx, {
                        color: a.zx.Colors.PRIMARY,
                        look: a.zx.Looks.OUTLINED,
                        onClick: T,
                        children: l.intl.string(l.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
