(A.d(t, {
    A: () => c,
    default: () => d
}),
    A(388685));
var n,
    r = A(255367),
    a = A(73800),
    l = A(755721),
    i = A(481060),
    o = A(388032),
    s = A(683290),
    c = (((n = {}).DANGER = 'danger'), (n.WARNING = 'warning'), n);
function d(e) {
    let { transitionState: t, onClose: A, title: n, body: c, cta: d, closeLabel: u, onConfirm: f, iconVariant: g = 'warning' } = e,
        [p, h] = a.useState(!1),
        m = async () => {
            h(!0);
            try {
                (await f(), A());
            } finally {
                h(!1);
            }
        },
        b = null != n ? n : o.intl.string(o.t.D94rwc);
    return (0, r.jsxs)(i.Y0X, {
        className: s.__invalid_container,
        size: i.CgR.DYNAMIC,
        transitionState: t,
        'aria-label': b,
        parentComponent: 'WarningModal',
        children: [
            (0, r.jsxs)(i.hzk, {
                className: s.content,
                children: [
                    (0, r.jsxs)('div', {
                        className: s.header,
                        children: [
                            (0, r.jsx)(i.P4T, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: (function (e) {
                                    switch (e) {
                                        case 'danger':
                                            return s.dangerIcon;
                                        case 'warning':
                                            return s.warningIcon;
                                    }
                                })(g)
                            }),
                            (0, r.jsx)(i.LZC, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, r.jsx)(i.X6q, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: b
                            })
                        ]
                    }),
                    (0, r.jsx)(i.LZC, { size: 12 }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: s.__invalid_body,
                        children: c
                    })
                ]
            }),
            (0, r.jsxs)(i.mzw, {
                children: [
                    (0, r.jsx)(i.zxk, {
                        variant: 'primary',
                        text: d,
                        onClick: m,
                        loading: p
                    }),
                    (0, r.jsx)(i.LZC, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != u &&
                        (0, r.jsx)(l.zx, {
                            color: l.zx.Colors.PRIMARY,
                            look: l.zx.Looks.OUTLINED,
                            onClick: A,
                            children: u
                        })
                ]
            })
        ]
    });
}
