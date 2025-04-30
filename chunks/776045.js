r.d(t, {
    A: () => s,
    default: () => c
}),
    r(388685);
var n,
    A = r(200651),
    a = r(192379),
    l = r(481060),
    o = r(388032),
    i = r(683290),
    s = (((n = {}).DANGER = 'danger'), (n.WARNING = 'warning'), n);
function c(e) {
    let { transitionState: t, onClose: r, title: n, body: s, cta: c, closeLabel: d, onConfirm: u, iconVariant: g = 'warning' } = e,
        [f, p] = a.useState(!1),
        m = async () => {
            p(!0);
            try {
                await u(), r();
            } finally {
                p(!1);
            }
        },
        h = null != n ? n : o.intl.string(o.t.D94rwc);
    return (0, A.jsxs)(l.Y0X, {
        className: i.__invalid_container,
        size: l.CgR.DYNAMIC,
        transitionState: t,
        'aria-label': h,
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
                            onClick: r,
                            children: d
                        })
                ]
            })
        ]
    });
}
