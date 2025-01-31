n.d(r, { default: () => E }), n(47120);
var i = n(200651),
    e = n(192379),
    a = n(481060),
    o = n(53365),
    c = n(377176),
    s = n(388032),
    l = n(722657);
function E(t) {
    let { guildId: r, transitionState: n, onClose: E } = t,
        [T, _] = e.useState(!1),
        [A, N] = e.useState(!1),
        u = async () => {
            _(!0);
            try {
                await (0, o.zo)(r), E();
            } finally {
                _(!1);
            }
        },
        d = s.intl.string(s.t['22itmp']);
    return (0, i.jsxs)(a.Y0X, {
        className: l.__invalid_container,
        size: a.CgR.DYNAMIC,
        transitionState: n,
        'aria-label': d,
        children: [
            (0, i.jsxs)(a.hzk, {
                className: l.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: l.header,
                        children: [
                            (0, i.jsx)(a.P4T, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: l.warningIcon
                            }),
                            (0, i.jsx)(a.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, i.jsx)(a.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: d
                            })
                        ]
                    }),
                    (0, i.jsx)(a.LZC, { size: 12 }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: l.__invalid_body,
                        children: s.intl.string(s.t.kdbm9P)
                    }),
                    (0, i.jsx)(a.LZC, { size: 28 }),
                    (0, i.jsx)(a.XZJ, {
                        onChange: () => {
                            N((t) => !t);
                        },
                        size: 20,
                        type: a.XZJ.Types.INVERTED,
                        value: A,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: (0, c.f)()
                        })
                    })
                ]
            }),
            (0, i.jsxs)(a.mzw, {
                children: [
                    (0, i.jsx)(a.zxk, {
                        color: a.zxk.Colors.BRAND,
                        disabled: !A,
                        onClick: u,
                        submitting: T,
                        children: s.intl.string(s.t['cY+Ooa'])
                    }),
                    (0, i.jsx)(a.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    (0, i.jsx)(a.zxk, {
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.OUTLINED,
                        onClick: E,
                        children: s.intl.string(s.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
