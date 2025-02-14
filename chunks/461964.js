n.d(e, { default: () => p });
var l = n(200651),
    i = n(192379),
    c = n(481060),
    a = n(561716),
    r = n(721383),
    o = n(313201),
    s = n(63063),
    _ = n(857595),
    d = n(981631),
    u = n(388032),
    h = n(164048);
function p(t) {
    let { transitionState: e, onClose: n } = t,
        p = (0, o.Dt)();
    return (
        i.useEffect(() => {
            _.r_();
        }, []),
        (0, l.jsxs)(c.Y0X, {
            transitionState: e,
            role: 'alertdialog',
            'aria-labelledby': p,
            children: [
                (0, l.jsxs)(c.hzk, {
                    className: h.content,
                    children: [
                        (0, l.jsx)(c.X6q, {
                            variant: 'heading-xl/semibold',
                            id: p,
                            className: h.header,
                            children: u.intl.format(u.t.V4fxrq, {
                                tab: (t, e) =>
                                    (0, l.jsx)(
                                        c.M2$,
                                        {
                                            shortcut: 'tab',
                                            className: h.headerShortcut
                                        },
                                        e
                                    )
                            })
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: u.intl.string(u.t['oQA/OD'])
                        }),
                        (0, l.jsxs)('ul', {
                            className: h.tips,
                            children: [
                                (0, l.jsxs)('li', {
                                    children: [
                                        (0, l.jsx)(c.M2$, { shortcut: r._.binds['0'] }),
                                        (0, l.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: u.intl.string(u.t['43Qn2t'])
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('li', {
                                    children: [
                                        (0, l.jsx)(c.M2$, { shortcut: a.$.binds['0'] }),
                                        (0, l.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: u.intl.string(u.t.zJg4FR)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: u.intl.format(u.t.EWFVSU, { link: s.Z.getArticleURL(d.BhN.KEYBOARD_NAVIGATION) })
                        })
                    ]
                }),
                (0, l.jsx)(c.mzw, {
                    children: (0, l.jsx)(c.zxk, {
                        onClick: n,
                        color: c.zxk.Colors.BRAND,
                        size: c.zxk.Sizes.SMALL,
                        autoFocus: !0,
                        children: u.intl.string(u.t.BddRzc)
                    })
                })
            ]
        })
    );
}
