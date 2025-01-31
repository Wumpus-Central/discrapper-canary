t.d(e, {
    A: () => s,
    default: () => d
}),
    t(47120);
var n,
    a = t(200651),
    l = t(192379),
    r = t(481060),
    i = t(388032),
    o = t(764162),
    s = (((n = {}).DANGER = 'danger'), (n.WARNING = 'warning'), n);
function d(A) {
    let { transitionState: e, onClose: t, title: n, body: s, cta: d, closeLabel: c, onConfirm: u, iconVariant: g = 'warning' } = A,
        [m, h] = l.useState(!1),
        f = async () => {
            h(!0);
            try {
                await u(), t();
            } finally {
                h(!1);
            }
        },
        C = null != n ? n : i.intl.string(i.t.D94rwc);
    return (0, a.jsxs)(r.Y0X, {
        className: o.__invalid_container,
        size: r.CgR.DYNAMIC,
        transitionState: e,
        'aria-label': C,
        children: [
            (0, a.jsxs)(r.hzk, {
                className: o.content,
                children: [
                    (0, a.jsxs)('div', {
                        className: o.header,
                        children: [
                            (0, a.jsx)(r.P4T, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: (function (A) {
                                    switch (A) {
                                        case 'danger':
                                            return o.dangerIcon;
                                        case 'warning':
                                            return o.warningIcon;
                                    }
                                })(g)
                            }),
                            (0, a.jsx)(r.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, a.jsx)(r.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: C
                            })
                        ]
                    }),
                    (0, a.jsx)(r.LZC, { size: 12 }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: o.__invalid_body,
                        children: s
                    })
                ]
            }),
            (0, a.jsxs)(r.mzw, {
                children: [
                    (0, a.jsx)(r.zxk, {
                        color: r.zxk.Colors.BRAND,
                        onClick: f,
                        submitting: m,
                        children: d
                    }),
                    (0, a.jsx)(r.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != c &&
                        (0, a.jsx)(r.zxk, {
                            color: r.zxk.Colors.PRIMARY,
                            look: r.zxk.Looks.OUTLINED,
                            onClick: t,
                            children: c
                        })
                ]
            })
        ]
    });
}
