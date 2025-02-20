r.d(t, {
    A: () => s,
    default: () => c
}),
    r(47120);
var A,
    n = r(200651),
    o = r(192379),
    a = r(481060),
    l = r(388032),
    i = r(589992),
    s = (((A = {}).DANGER = 'danger'), (A.WARNING = 'warning'), A);
function c(e) {
    let { transitionState: t, onClose: r, title: A, body: s, cta: c, closeLabel: d, onConfirm: u, iconVariant: f = 'warning' } = e,
        [g, p] = o.useState(!1),
        m = async () => {
            p(!0);
            try {
                await u(), r();
            } finally {
                p(!1);
            }
        },
        h = null != A ? A : l.NW.string(l.t.D94rwc);
    return (0, n.jsxs)(a.Y0X, {
        className: i.__invalid_container,
        size: a.CgR.DYNAMIC,
        transitionState: t,
        'aria-label': h,
        children: [
            (0, n.jsxs)(a.hzk, {
                className: i.content,
                children: [
                    (0, n.jsxs)('div', {
                        className: i.header,
                        children: [
                            (0, n.jsx)(a.P4T, {
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
                                })(f)
                            }),
                            (0, n.jsx)(a.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, n.jsx)(a.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: h
                            })
                        ]
                    }),
                    (0, n.jsx)(a.LZC, { size: 12 }),
                    (0, n.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: i.__invalid_body,
                        children: s
                    })
                ]
            }),
            (0, n.jsxs)(a.mzw, {
                children: [
                    (0, n.jsx)(a.zxk, {
                        color: a.zxk.Colors.BRAND,
                        onClick: m,
                        submitting: g,
                        children: c
                    }),
                    (0, n.jsx)(a.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != d &&
                        (0, n.jsx)(a.zxk, {
                            color: a.zxk.Colors.PRIMARY,
                            look: a.zxk.Looks.OUTLINED,
                            onClick: r,
                            children: d
                        })
                ]
            })
        ]
    });
}
