t.d(r, { default: () => h });
var n = t(200651),
    a = t(192379),
    s = t(442837),
    o = t(481060),
    c = t(198993),
    l = t(639351),
    i = t(63063),
    d = t(258609),
    u = t(259408),
    m = t(893387),
    f = t(927923),
    x = t(981631),
    p = t(388032),
    _ = t(403883);
function N(e) {
    let { step: r, instructions: t } = e;
    return (0, n.jsxs)('div', {
        className: _.cardRow,
        children: [
            (0, n.jsx)('div', {
                className: _.stepNumberContainer,
                children: (0, n.jsx)(o.Text, {
                    variant: 'text-sm/semibold',
                    className: _.stepNumber,
                    children: r
                })
            }),
            (0, n.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'header-primary',
                className: _.instructions,
                children: t
            })
        ]
    });
}
function h(e) {
    let { channel: r, transitionState: t, onClose: h } = e,
        C = (0, s.e7)([d.Z], () => null != d.Z.getRemoteSessionId()),
        g = (0, u.Z)(r, { forQRCode: !0 });
    return (
        a.useEffect(() => {
            C && h();
        }, [C, h]),
        a.useEffect(() => {
            (0, m.Z)(r.id, f.YE.XBOX);
        }, [r.id]),
        (0, n.jsxs)(o.Y0X, {
            size: o.CgR.DYNAMIC,
            className: _.modalRoot,
            transitionState: t,
            children: [
                (0, n.jsxs)(o.xBx, {
                    separator: !1,
                    className: _.modalHeaderContainer,
                    children: [
                        (0, n.jsx)(o.X6q, {
                            className: _.modalHeader,
                            variant: 'heading-xl/extrabold',
                            children: p.NW.string(p.t['f+Aijo'])
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'header-secondary',
                            children: p.NW.string(p.t.mYFmDQ)
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
                                        children: [(0, n.jsx)(l.Z, { className: _.cardHeaderIcon }), p.NW.string(p.t.ZNlYbG)]
                                    }),
                                    (0, n.jsx)(N, {
                                        step: 1,
                                        instructions: p.NW.string(p.t.dDtkl5)
                                    }),
                                    (0, n.jsx)(N, {
                                        step: 2,
                                        instructions: p.NW.string(p.t.IWuXjI)
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-sm/medium',
                                        children: (0, n.jsx)(o.eee, {
                                            className: _.learnMore,
                                            href: i.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                                            children: p.NW.string(p.t.hvVgAQ)
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsx)(c.ZP, {
                                className: _.qrCode,
                                size: 120,
                                text: g
                            })
                        ]
                    })
                }),
                (0, n.jsx)(o.olH, {
                    className: _.closeButton,
                    onClick: h
                })
            ]
        })
    );
}
