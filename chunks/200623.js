r.d(t, { default: () => C });
var n = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    c = r(198993),
    l = r(639351),
    i = r(63063),
    d = r(258609),
    u = r(259408),
    m = r(893387),
    f = r(927923),
    x = r(981631),
    p = r(388032),
    _ = r(403883);
function h(e) {
    let { step: t, instructions: r } = e;
    return (0, n.jsxs)('div', {
        className: _.cardRow,
        children: [
            (0, n.jsx)('div', {
                className: _.stepNumberContainer,
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-sm/semibold',
                    className: _.stepNumber,
                    children: t
                })
            }),
            (0, n.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'header-primary',
                className: _.instructions,
                children: r
            })
        ]
    });
}
function C(e) {
    let { channel: t, transitionState: r, onClose: C } = e,
        g = (0, s.e7)([d.Z], () => null != d.Z.getRemoteSessionId()),
        j = (0, u.Z)(t, { forQRCode: !0 });
    return (
        a.useEffect(() => {
            g && C();
        }, [g, C]),
        a.useEffect(() => {
            (0, m.Z)(t.id, f.YE.XBOX);
        }, [t.id]),
        (0, n.jsxs)(o.Y0X, {
            size: o.CgR.DYNAMIC,
            className: _.modalRoot,
            transitionState: r,
            children: [
                (0, n.jsxs)(o.xBx, {
                    separator: !1,
                    className: _.modalHeaderContainer,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            className: _.modalHeader,
                            variant: 'heading-xl/extrabold',
                            children: p.intl.string(p.t['f+Aijo'])
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: p.intl.string(p.t.mYFmDQ)
                        })
                    ]
                }),
                (0, n.jsx)(o.hzk, {
                    className: _.content,
                    children: (0, n.jsxs)('div', {
                        className: _.card,
                        children: [
                            (0, n.jsxs)('div', {
                                className: _.cardText,
                                children: [
                                    (0, n.jsxs)(o.Text, {
                                        variant: 'text-lg/semibold',
                                        color: 'header-primary',
                                        className: _.cardRow,
                                        children: [(0, n.jsx)(l.Z, { className: _.cardHeaderIcon }), p.intl.string(p.t.ZNlYbG)]
                                    }),
                                    (0, n.jsx)(h, {
                                        step: 1,
                                        instructions: p.intl.string(p.t.dDtkl5)
                                    }),
                                    (0, n.jsx)(h, {
                                        step: 2,
                                        instructions: p.intl.string(p.t.IWuXjI)
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-sm/medium',
                                        children: (0, n.jsx)(o.eee, {
                                            className: _.learnMore,
                                            href: i.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                                            children: p.intl.string(p.t.hvVgAQ)
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsx)(c.ZP, {
                                className: _.qrCode,
                                size: 120,
                                text: j
                            })
                        ]
                    })
                }),
                (0, n.jsx)(o.olH, {
                    className: _.closeButton,
                    onClick: C
                })
            ]
        })
    );
}
