A.r(t),
    A.d(t, {
        IconVariant: function () {
            return n;
        },
        default: function () {
            return d;
        }
    }),
    A(47120);
var n,
    r,
    a = A(200651),
    i = A(192379),
    l = A(481060),
    o = A(388032),
    s = A(764162);
((r = n || (n = {})).DANGER = 'danger'), (r.WARNING = 'warning');
function d(e) {
    let { transitionState: t, onClose: A, title: n, body: r, cta: d, closeLabel: c, onConfirm: u, iconVariant: g = 'warning' } = e,
        [h, p] = i.useState(!1),
        m = async () => {
            p(!0);
            try {
                await u(), A();
            } finally {
                p(!1);
            }
        },
        f = null != n ? n : o.intl.string(o.t.D94rwc);
    return (0, a.jsxs)(l.ModalRoot, {
        className: s.__invalid_container,
        size: l.ModalSize.DYNAMIC,
        transitionState: t,
        'aria-label': f,
        children: [
            (0, a.jsxs)(l.ModalContent, {
                className: s.content,
                children: [
                    (0, a.jsxs)('div', {
                        className: s.header,
                        children: [
                            (0, a.jsx)(l.CircleWarningIcon, {
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
                            (0, a.jsx)(l.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, a.jsx)(l.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: f
                            })
                        ]
                    }),
                    (0, a.jsx)(l.Spacer, { size: 12 }),
                    (0, a.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: s.__invalid_body,
                        children: r
                    })
                ]
            }),
            (0, a.jsxs)(l.ModalFooter, {
                children: [
                    (0, a.jsx)(l.Button, {
                        color: l.Button.Colors.BRAND,
                        onClick: m,
                        submitting: h,
                        children: d
                    }),
                    (0, a.jsx)(l.Spacer, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != c &&
                        (0, a.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            look: l.Button.Looks.OUTLINED,
                            onClick: A,
                            children: c
                        })
                ]
            })
        ]
    });
}
