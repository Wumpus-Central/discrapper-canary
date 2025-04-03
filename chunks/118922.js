r.d(e, { default: () => a }), r(47120);
var i = r(200651),
    t = r(192379),
    s = r(481060),
    c = r(388032),
    o = r(421690);
function a(n) {
    let { transitionState: e, onClose: r, title: a, body: l, cta: d, closeLabel: h, onConfirm: x, iconVariant: u = 'warning' } = n,
        [g, k] = t.useState(!1),
        z = null != a ? a : c.NW.string(c.t.HMrgcn);
    return (0, i.jsxs)(s.Y0X, {
        size: s.CgR.DYNAMIC,
        transitionState: e,
        'aria-label': z,
        children: [
            (0, i.jsxs)(s.hzk, {
                className: o.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.header,
                        children: [
                            (0, i.jsx)(s.P4T, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: (function (n) {
                                    switch (n) {
                                        case 'danger':
                                            return o.dangerIcon;
                                        case 'warning':
                                            return o.warningIcon;
                                    }
                                })(u)
                            }),
                            (0, i.jsx)(s.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, i.jsx)(s.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: z
                            })
                        ]
                    }),
                    (0, i.jsx)(s.LZC, { size: 12 }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: l
                    })
                ]
            }),
            (0, i.jsxs)(s.mzw, {
                children: [
                    (0, i.jsx)(s.zxk, {
                        color: s.zxk.Colors.BRAND,
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
                    (0, i.jsx)(s.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != h &&
                        (0, i.jsx)(s.zxk, {
                            color: s.zxk.Colors.PRIMARY,
                            look: s.zxk.Looks.OUTLINED,
                            onClick: r,
                            children: h
                        })
                ]
            })
        ]
    });
}
