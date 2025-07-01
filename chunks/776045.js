(A.d(t, {
    A: () => s,
    default: () => c
}),
    A(388685));
var n,
    r = A(255367),
    a = A(73800),
    l = A(481060),
    i = A(388032),
    o = A(683290),
    s = (((n = {}).DANGER = 'danger'), (n.WARNING = 'warning'), n);
function c(e) {
    let { transitionState: t, onClose: A, title: n, body: s, cta: c, closeLabel: d, onConfirm: u, iconVariant: f = 'warning' } = e,
        [g, p] = a.useState(!1),
        h = async () => {
            p(!0);
            try {
                (await u(), A());
            } finally {
                p(!1);
            }
        },
        m = null != n ? n : i.intl.string(i.t.D94rwc);
    return (0, r.jsxs)(l.Y0X, {
        className: o.__invalid_container,
        size: l.CgR.DYNAMIC,
        transitionState: t,
        'aria-label': m,
        parentComponent: 'WarningModal',
        children: [
            (0, r.jsxs)(l.hzk, {
                className: o.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: o.header,
                        children: [
                            (0, r.jsx)(l.P4T, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: (function (e) {
                                    switch (e) {
                                        case 'danger':
                                            return o.dangerIcon;
                                        case 'warning':
                                            return o.warningIcon;
                                    }
                                })(f)
                            }),
                            (0, r.jsx)(l.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: m
                            })
                        ]
                    }),
                    (0, r.jsx)(l.LZC, { size: 12 }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: o.__invalid_body,
                        children: s
                    })
                ]
            }),
            (0, r.jsxs)(l.mzw, {
                children: [
                    (0, r.jsx)(l.zxk, {
                        color: l.zxk.Colors.BRAND,
                        onClick: h,
                        submitting: g,
                        children: c
                    }),
                    (0, r.jsx)(l.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != d &&
                        (0, r.jsx)(l.zxk, {
                            color: l.zxk.Colors.PRIMARY,
                            look: l.zxk.Looks.OUTLINED,
                            onClick: A,
                            children: d
                        })
                ]
            })
        ]
    });
}
