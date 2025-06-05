n.d(t, {
    A: () => s,
    default: () => c
}),
    n(388685);
var r,
    A = n(255367),
    a = n(73800),
    l = n(481060),
    o = n(388032),
    i = n(683290),
    s = (((r = {}).DANGER = 'danger'), (r.WARNING = 'warning'), r);
function c(e) {
    let { transitionState: t, onClose: n, title: r, body: s, cta: c, closeLabel: d, onConfirm: u, iconVariant: g = 'warning' } = e,
        [f, p] = a.useState(!1),
        m = async () => {
            p(!0);
            try {
                await u(), n();
            } finally {
                p(!1);
            }
        },
        h = null != r ? r : o.intl.string(o.t.D94rwc);
    return (0, A.jsxs)(l.Y0X, {
        className: i.__invalid_container,
        size: l.CgR.DYNAMIC,
        transitionState: t,
        'aria-label': h,
        parentComponent: 'WarningModal',
        children: [
            (0, A.jsxs)(l.hzk, {
                className: i.content,
                children: [
                    (0, A.jsxs)('div', {
                        className: i.header,
                        children: [
                            (0, A.jsx)(l.P4T, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: (function (e) {
                                    switch (e) {
                                        case 'danger':
                                            return i.dangerIcon;
                                        case 'warning':
                                            return i.warningIcon;
                                    }
                                })(g)
                            }),
                            (0, A.jsx)(l.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, A.jsx)(l.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: h
                            })
                        ]
                    }),
                    (0, A.jsx)(l.LZC, { size: 12 }),
                    (0, A.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: i.__invalid_body,
                        children: s
                    })
                ]
            }),
            (0, A.jsxs)(l.mzw, {
                children: [
                    (0, A.jsx)(l.zxk, {
                        color: l.zxk.Colors.BRAND,
                        onClick: m,
                        submitting: f,
                        children: c
                    }),
                    (0, A.jsx)(l.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != d &&
                        (0, A.jsx)(l.zxk, {
                            color: l.zxk.Colors.PRIMARY,
                            look: l.zxk.Looks.OUTLINED,
                            onClick: n,
                            children: d
                        })
                ]
            })
        ]
    });
}
