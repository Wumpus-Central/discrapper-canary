t.d(r, { default: () => N });
var n = t(200651),
    a = t(192379),
    s = t(442837),
    o = t(481060),
    i = t(198993),
    c = t(639351),
    l = t(63063),
    d = t(258609),
    u = t(259408),
    m = t(893387),
    x = t(927923),
    f = t(981631),
    _ = t(388032),
    C = t(327179);
function h(e) {
    let { step: r, instructions: t } = e;
    return (0, n.jsxs)('div', {
        className: C.cardRow,
        children: [
            (0, n.jsx)('div', {
                className: C.stepNumberContainer,
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-sm/semibold',
                    className: C.stepNumber,
                    children: r
                })
            }),
            (0, n.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'header-primary',
                className: C.instructions,
                children: t
            })
        ]
    });
}
function N(e) {
    let { channel: r, transitionState: t, onClose: N } = e,
        p = (0, s.e7)([d.Z], () => null != d.Z.getRemoteSessionId()),
        v = (0, u.Z)(r, { forQRCode: !0 });
    return (
        a.useEffect(() => {
            p && N();
        }, [p, N]),
        a.useEffect(() => {
            (0, m.Z)(r.id, x.YE.XBOX);
        }, [r.id]),
        (0, n.jsxs)(o.Y0X, {
            size: o.CgR.DYNAMIC,
            className: C.modalRoot,
            transitionState: t,
            children: [
                (0, n.jsxs)(o.xBx, {
                    separator: !1,
                    className: C.modalHeaderContainer,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            className: C.modalHeader,
                            variant: 'heading-xl/extrabold',
                            children: _.intl.string(_.t['f+Aijo'])
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: _.intl.string(_.t.mYFmDQ)
                        })
                    ]
                }),
                (0, n.jsx)(o.hzk, {
                    className: C.content,
                    children: (0, n.jsxs)('div', {
                        className: C.card,
                        children: [
                            (0, n.jsxs)('div', {
                                className: C.cardText,
                                children: [
                                    (0, n.jsxs)(o.Text, {
                                        variant: 'text-lg/semibold',
                                        color: 'header-primary',
                                        className: C.cardRow,
                                        children: [(0, n.jsx)(c.Z, { className: C.cardHeaderIcon }), _.intl.string(_.t.ZNlYbG)]
                                    }),
                                    (0, n.jsx)(h, {
                                        step: 1,
                                        instructions: _.intl.string(_.t.dDtkl5)
                                    }),
                                    (0, n.jsx)(h, {
                                        step: 2,
                                        instructions: _.intl.string(_.t.IWuXjI)
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-sm/medium',
                                        children: (0, n.jsx)(o.eee, {
                                            className: C.learnMore,
                                            href: l.Z.getArticleURL(f.BhN.XBOX_CONNECTION),
                                            children: _.intl.string(_.t.hvVgAQ)
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsx)(i.ZP, {
                                className: C.qrCode,
                                size: 120,
                                text: v
                            })
                        ]
                    })
                }),
                (0, n.jsx)(o.olH, {
                    className: C.closeButton,
                    onClick: N
                })
            ]
        })
    );
}
