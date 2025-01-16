n.r(t),
    n.d(t, {
        IconVariant: function () {
            return A;
        },
        default: function () {
            return d;
        }
    }),
    n(47120);
var A,
    r,
    a = n(200651),
    l = n(192379),
    i = n(481060),
    o = n(388032),
    s = n(764162);
((r = A || (A = {})).DANGER = 'danger'), (r.WARNING = 'warning');
function d(e) {
    let { transitionState: t, onClose: n, title: A, body: r, cta: d, closeLabel: c, onConfirm: u, iconVariant: g = 'warning' } = e,
        [h, p] = l.useState(!1),
        m = async () => {
            p(!0);
            try {
                await u(), n();
            } finally {
                p(!1);
            }
        },
        f = null != A ? A : o.intl.string(o.t.D94rwc);
    return (0, a.jsxs)(i.ModalRoot, {
        className: s.__invalid_container,
        size: i.ModalSize.DYNAMIC,
        transitionState: t,
        'aria-label': f,
        children: [
            (0, a.jsxs)(i.ModalContent, {
                className: s.content,
                children: [
                    (0, a.jsxs)('div', {
                        className: s.header,
                        children: [
                            (0, a.jsx)(i.CircleWarningIcon, {
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
                            (0, a.jsx)(i.Spacer, {
                                size: 8,
                                horizontal: !0
                            }),
                            (0, a.jsx)(i.Heading, {
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: f
                            })
                        ]
                    }),
                    (0, a.jsx)(i.Spacer, { size: 12 }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        className: s.__invalid_body,
                        children: r
                    })
                ]
            }),
            (0, a.jsxs)(i.ModalFooter, {
                children: [
                    (0, a.jsx)(i.Button, {
                        color: i.Button.Colors.BRAND,
                        onClick: m,
                        submitting: h,
                        children: d
                    }),
                    (0, a.jsx)(i.Spacer, {
                        size: 12,
                        horizontal: !0
                    }),
                    null != c &&
                        (0, a.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.OUTLINED,
                            onClick: n,
                            children: c
                        })
                ]
            })
        ]
    });
}
