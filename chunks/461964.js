n.d(e, { default: () => p });
var l = n(255367),
    i = n(73800),
    c = n(481060),
    a = n(561716),
    r = n(721383),
    o = n(313201),
    s = n(63063),
    _ = n(857595),
    u = n(981631),
    d = n(388032),
    h = n(961686);
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
            parentComponent: 'KeyboardNavigationModal',
            children: [
                (0, l.jsxs)(c.hzk, {
                    className: h.content,
                    children: [
                        (0, l.jsx)(c.X6q, {
                            variant: 'heading-xl/semibold',
                            id: p,
                            className: h.header,
                            children: d.intl.format(d.t.V4fxrq, {
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
                            children: d.intl.string(d.t['oQA/OD'])
                        }),
                        (0, l.jsxs)('ul', {
                            className: h.tips,
                            children: [
                                (0, l.jsxs)('li', {
                                    children: [
                                        (0, l.jsx)(c.M2$, { shortcut: r._.binds['0'] }),
                                        (0, l.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: d.intl.string(d.t['43Qn2t'])
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('li', {
                                    children: [
                                        (0, l.jsx)(c.M2$, { shortcut: a.$.binds['0'] }),
                                        (0, l.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: d.intl.string(d.t.zJg4FR)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: d.intl.format(d.t.EWFVSU, { link: s.Z.getArticleURL(u.BhN.KEYBOARD_NAVIGATION) })
                        })
                    ]
                }),
                (0, l.jsx)(c.mzw, {
                    children: (0, l.jsx)(c.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: d.intl.string(d.t.BddRzc),
                        onClick: n,
                        autoFocus: !0
                    })
                })
            ]
        })
    );
}
