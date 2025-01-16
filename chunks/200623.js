r.r(t),
    r.d(t, {
        default: function () {
            return N;
        }
    });
var n = r(200651),
    a = r(192379),
    s = r(442837),
    c = r(481060),
    o = r(198993),
    d = r(639351),
    i = r(63063),
    l = r(258609),
    f = r(259408),
    u = r(893387),
    m = r(927923),
    x = r(981631),
    C = r(388032),
    h = r(327179);
function b(e) {
    let { step: t, instructions: r } = e;
    return (0, n.jsxs)('div', {
        className: h.cardRow,
        children: [
            (0, n.jsx)('div', {
                className: h.stepNumberContainer,
                children: (0, n.jsx)(c.Text, {
                    variant: 'text-sm/semibold',
                    className: h.stepNumber,
                    children: t
                })
            }),
            (0, n.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'header-primary',
                className: h.instructions,
                children: r
            })
        ]
    });
}
function N(e) {
    let { channel: t, transitionState: r, onClose: N } = e,
        p = (0, s.e7)([l.Z], () => null != l.Z.getRemoteSessionId()),
        _ = (0, f.Z)(t, { forQRCode: !0 });
    return (
        a.useEffect(() => {
            p && N();
        }, [p, N]),
        a.useEffect(() => {
            (0, u.Z)(t.id, m.YE.XBOX);
        }, [t.id]),
        (0, n.jsxs)(c.ModalRoot, {
            size: c.ModalSize.DYNAMIC,
            className: h.modalRoot,
            transitionState: r,
            children: [
                (0, n.jsxs)(c.ModalHeader, {
                    separator: !1,
                    className: h.modalHeaderContainer,
                    children: [
                        (0, n.jsx)(c.Heading, {
                            className: h.modalHeader,
                            variant: 'heading-xl/extrabold',
                            children: C.intl.string(C.t['f+Aijo'])
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: C.intl.string(C.t.mYFmDQ)
                        })
                    ]
                }),
                (0, n.jsx)(c.ModalContent, {
                    className: h.content,
                    children: (0, n.jsxs)('div', {
                        className: h.card,
                        children: [
                            (0, n.jsxs)('div', {
                                className: h.cardText,
                                children: [
                                    (0, n.jsxs)(c.Text, {
                                        variant: 'text-lg/semibold',
                                        color: 'header-primary',
                                        className: h.cardRow,
                                        children: [(0, n.jsx)(d.Z, { className: h.cardHeaderIcon }), C.intl.string(C.t.ZNlYbG)]
                                    }),
                                    (0, n.jsx)(b, {
                                        step: 1,
                                        instructions: C.intl.string(C.t.dDtkl5)
                                    }),
                                    (0, n.jsx)(b, {
                                        step: 2,
                                        instructions: C.intl.string(C.t.IWuXjI)
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        children: (0, n.jsx)(c.Anchor, {
                                            className: h.learnMore,
                                            href: i.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                                            children: C.intl.string(C.t.hvVgAQ)
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsx)(o.ZP, {
                                className: h.qrCode,
                                size: 120,
                                text: _
                            })
                        ]
                    })
                }),
                (0, n.jsx)(c.ModalCloseButton, {
                    className: h.closeButton,
                    onClick: N
                })
            ]
        })
    );
}
