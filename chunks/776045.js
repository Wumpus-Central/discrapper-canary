r.d(t, {
    A: () => s,
    default: () => c
}),
    r(47120);
var n,
    A = r(200651),
    a = r(192379),
    o = r(481060),
    l = r(388032),
    i = r(683290),
    s = (((n = {}).DANGER = 'danger'), (n.WARNING = 'warning'), n);
function c(e) {
    let { transitionState: t, onClose: r, title: n, body: s, cta: c, closeLabel: d, onConfirm: u, iconVariant: g = 'warning' } = e,
        [f, p] = a.useState(!1),
        h = async () => {
            p(!0);
            try {
                await u(), r();
            } finally {
                p(!1);
            }
        },
        m = null != n ? n : l.NW.string(l.t.D94rwc);
    return (0, A.jsxs)(o.Y0X, {
        className: i.__invalid_container,
        size: o.CgR.DYNAMIC,
        transitionState: t,
        'aria-label': m,
        children: [
            (0, A.jsxs)(o.hzk, {
                className: i.content,
                children: [
                    (0, A.jsxs)('div', {
                        className: i.header,
                        children: [
                            (0, A.jsx)(o.P4T, {
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
                            (0, A.jsx)(o.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, A.jsx)(o.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: m
                            })
                        ]
                    }),
                    (0, A.jsx)(o.LZC, { size: 12 }),
                    (0, A.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: i.__invalid_body,
                        children: s
                    })
                ]
            }),
            (0, A.jsxs)(o.mzw, {
                children: [
                    (0, A.jsx)(o.zxk, {
                        color: o.zxk.Colors.BRAND,
                        onClick: h,
                        submitting: f,
                        children: c
                    }),
                    (0, A.jsx)(o.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != d &&
                        (0, A.jsx)(o.zxk, {
                            color: o.zxk.Colors.PRIMARY,
                            look: o.zxk.Looks.OUTLINED,
                            onClick: r,
                            children: d
                        })
                ]
            })
        ]
    });
}
