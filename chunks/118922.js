r.d(e, { default: () => c }), r(388685);
var t = r(255367),
    i = r(73800),
    o = r(481060),
    a = r(388032),
    s = r(421690);
function c(n) {
    let { transitionState: e, onClose: r, title: c, body: l, cta: d, closeLabel: h, onConfirm: x, iconVariant: u = 'warning' } = n,
        [g, k] = i.useState(!1),
        z = null != c ? c : a.intl.string(a.t.HMrgcn);
    return (0, t.jsxs)(o.Y0X, {
        size: o.CgR.DYNAMIC,
        transitionState: e,
        'aria-label': z,
        parentComponent: 'PollCreationExitWarningModal',
        children: [
            (0, t.jsxs)(o.hzk, {
                className: s.content,
                children: [
                    (0, t.jsxs)('div', {
                        className: s.header,
                        children: [
                            (0, t.jsx)(o.P4T, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: (function (n) {
                                    switch (n) {
                                        case 'danger':
                                            return s.dangerIcon;
                                        case 'warning':
                                            return s.warningIcon;
                                    }
                                })(u)
                            }),
                            (0, t.jsx)(o.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, t.jsx)(o.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: z
                            })
                        ]
                    }),
                    (0, t.jsx)(o.LZC, { size: 12 }),
                    (0, t.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: l
                    })
                ]
            }),
            (0, t.jsxs)(o.mzw, {
                children: [
                    (0, t.jsx)(o.zxk, {
                        color: o.zxk.Colors.BRAND,
                        onClick: () => {
                            k(!0);
                            try {
                                x(), r();
                            } finally {
                                k(!1);
                            }
                        },
                        submitting: g,
                        children: d
                    }),
                    (0, t.jsx)(o.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != h &&
                        (0, t.jsx)(o.zxk, {
                            color: o.zxk.Colors.PRIMARY,
                            look: o.zxk.Looks.OUTLINED,
                            onClick: r,
                            children: h
                        })
                ]
            })
        ]
    });
}
