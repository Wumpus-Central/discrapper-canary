r.d(t, {
    A: () => s,
    default: () => c
}),
    r(388685);
var n,
    i = r(255367),
    a = r(73800),
    l = r(481060),
    o = r(388032),
    A = r(683290),
    s = (((n = {}).DANGER = 'danger'), (n.WARNING = 'warning'), n);
function c(e) {
    let { transitionState: t, onClose: r, title: n, body: s, cta: c, closeLabel: d, onConfirm: u, iconVariant: f = 'warning' } = e,
        [g, h] = a.useState(!1),
        p = async () => {
            h(!0);
            try {
                await u(), r();
            } finally {
                h(!1);
            }
        },
        m = null != n ? n : o.intl.string(o.t.D94rwc);
    return (0, i.jsxs)(l.Y0X, {
        className: A.__invalid_container,
        size: l.CgR.DYNAMIC,
        transitionState: t,
        'aria-label': m,
        children: [
            (0, i.jsxs)(l.hzk, {
                className: A.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: A.header,
                        children: [
                            (0, i.jsx)(l.P4T, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: (function (e) {
                                    switch (e) {
                                        case 'danger':
                                            return A.dangerIcon;
                                        case 'warning':
                                            return A.warningIcon;
                                    }
                                })(f)
                            }),
                            (0, i.jsx)(l.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, i.jsx)(l.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: m
                            })
                        ]
                    }),
                    (0, i.jsx)(l.LZC, { size: 12 }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: A.__invalid_body,
                        children: s
                    })
                ]
            }),
            (0, i.jsxs)(l.mzw, {
                children: [
                    (0, i.jsx)(l.zxk, {
                        color: l.zxk.Colors.BRAND,
                        onClick: p,
                        submitting: g,
                        children: c
                    }),
                    (0, i.jsx)(l.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != d &&
                        (0, i.jsx)(l.zxk, {
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
