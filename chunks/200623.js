r.d(t, { default: () => C });
var n = r(255367),
    s = r(73800),
    i = r(442837),
    a = r(82659),
    c = r(481060),
    o = r(198993),
    l = r(639351),
    d = r(63063),
    u = r(258609),
    f = r(259408),
    m = r(893387),
    p = r(927923),
    x = r(981631),
    b = r(388032),
    g = r(403883);
function h(e) {
    let { step: t, instructions: r } = e;
    return (0, n.jsxs)('div', {
        className: g.cardRow,
        children: [
            (0, n.jsx)('div', {
                className: g.stepNumberContainer,
                children: (0, n.jsx)(c.Text, {
                    variant: 'text-sm/semibold',
                    className: g.stepNumber,
                    children: t
                })
            }),
            (0, n.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'header-primary',
                className: g.instructions,
                children: r
            })
        ]
    });
}
function C(e) {
    let { channel: t, transitionState: r, onClose: C } = e,
        _ = (0, i.e7)([u.Z], () => null != u.Z.getRemoteSessionId()),
        j = (0, f.Z)(t, { forQRCode: !0 });
    return (
        s.useEffect(() => {
            _ && C();
        }, [_, C]),
        s.useEffect(() => {
            (0, m.Z)(t.id, p.YE.XBOX);
        }, [t.id]),
        (0, n.jsx)(a.Modal, {
            title: b.intl.string(b.t['f+Aijo']),
            subtitle: b.intl.string(b.t.mYFmDQ),
            actions: [],
            onClose: C,
            transitionState: r,
            children: (0, n.jsxs)('div', {
                className: g.card,
                children: [
                    (0, n.jsxs)('div', {
                        className: g.cardText,
                        children: [
                            (0, n.jsxs)(c.Text, {
                                variant: 'text-lg/semibold',
                                color: 'header-primary',
                                className: g.cardRow,
                                children: [(0, n.jsx)(l.Z, { className: g.cardHeaderIcon }), b.intl.string(b.t.ZNlYbG)]
                            }),
                            (0, n.jsx)(h, {
                                step: 1,
                                instructions: b.intl.string(b.t.dDtkl5)
                            }),
                            (0, n.jsx)(h, {
                                step: 2,
                                instructions: b.intl.string(b.t.IWuXjI)
                            }),
                            (0, n.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                children: (0, n.jsx)(c.eee, {
                                    className: g.learnMore,
                                    href: d.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
                                    children: b.intl.string(b.t.hvVgAQ)
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.ZP, {
                        className: g.qrCode,
                        size: 120,
                        text: j
                    })
                ]
            })
        })
    );
}
