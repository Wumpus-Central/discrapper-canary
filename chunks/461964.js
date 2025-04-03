n.d(t, { default: () => p });
var l = n(200651),
    i = n(192379),
    c = n(481060),
    a = n(561716),
    r = n(721383),
    o = n(313201),
    s = n(63063),
    _ = n(857595),
    u = n(981631),
    d = n(388032),
    h = n(961686);
function p(e) {
    let { transitionState: t, onClose: n } = e,
        p = (0, o.Dt)();
    return (
        i.useEffect(() => {
            _.r_();
        }, []),
        (0, l.jsxs)(c.Y0X, {
            transitionState: t,
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
                            children: d.NW.format(d.t.V4fxrq, {
                                tab: (e, t) =>
                                    (0, l.jsx)(
                                        c.M2$,
                                        {
                                            shortcut: 'tab',
                                            className: h.headerShortcut
                                        },
                                        t
                                    )
                            })
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: d.NW.string(d.t['oQA/OD'])
                        }),
                        (0, l.jsxs)('ul', {
                            className: h.tips,
                            children: [
                                (0, l.jsxs)('li', {
                                    children: [
                                        (0, l.jsx)(c.M2$, { shortcut: r._.binds['0'] }),
                                        (0, l.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: d.NW.string(d.t['43Qn2t'])
                                        })
                                    ]
                                }),
                                (0, l.jsxs)('li', {
                                    children: [
                                        (0, l.jsx)(c.M2$, { shortcut: a.$.binds['0'] }),
                                        (0, l.jsx)(c.Text, {
                                            variant: 'text-md/normal',
                                            children: d.NW.string(d.t.zJg4FR)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: d.NW.format(d.t.EWFVSU, { link: s.Z.getArticleURL(u.BhN.KEYBOARD_NAVIGATION) })
                        })
                    ]
                }),
                (0, l.jsx)(c.mzw, {
                    children: (0, l.jsx)(c.zxk, {
                        onClick: n,
                        color: c.zxk.Colors.BRAND,
                        size: c.zxk.Sizes.SMALL,
                        autoFocus: !0,
                        children: d.NW.string(d.t.BddRzc)
                    })
                })
            ]
        })
    );
}
