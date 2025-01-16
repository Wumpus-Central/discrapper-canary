n.r(t),
    n.d(t, {
        default: function () {
            return f;
        }
    });
var c = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(561716),
    r = n(721383),
    o = n(313201),
    s = n(63063),
    u = n(857595),
    d = n(981631),
    _ = n(388032),
    h = n(549164);
function f(e) {
    let { transitionState: t, onClose: n } = e,
        f = (0, o.Dt)();
    return (
        i.useEffect(() => {
            u.r_();
        }, []),
        (0, c.jsxs)(l.ModalRoot, {
            transitionState: t,
            role: 'alertdialog',
            'aria-labelledby': f,
            children: [
                (0, c.jsxs)(l.ModalContent, {
                    className: h.content,
                    children: [
                        (0, c.jsx)(l.Heading, {
                            variant: 'heading-xl/semibold',
                            id: f,
                            className: h.header,
                            children: _.intl.format(_.t.V4fxrq, {
                                tab: (e, t) =>
                                    (0, c.jsx)(
                                        l.KeyCombo,
                                        {
                                            shortcut: 'tab',
                                            className: h.headerShortcut
                                        },
                                        t
                                    )
                            })
                        }),
                        (0, c.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: _.intl.string(_.t['oQA/OD'])
                        }),
                        (0, c.jsxs)('ul', {
                            className: h.tips,
                            children: [
                                (0, c.jsxs)('li', {
                                    children: [
                                        (0, c.jsx)(l.KeyCombo, { shortcut: r._.binds['0'] }),
                                        (0, c.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            children: _.intl.string(_.t['43Qn2t'])
                                        })
                                    ]
                                }),
                                (0, c.jsxs)('li', {
                                    children: [
                                        (0, c.jsx)(l.KeyCombo, { shortcut: a.$.binds['0'] }),
                                        (0, c.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            children: _.intl.string(_.t.zJg4FR)
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, c.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            children: _.intl.format(_.t.EWFVSU, { link: s.Z.getArticleURL(d.BhN.KEYBOARD_NAVIGATION) })
                        })
                    ]
                }),
                (0, c.jsx)(l.ModalFooter, {
                    children: (0, c.jsx)(l.Button, {
                        onClick: n,
                        color: l.Button.Colors.BRAND,
                        size: l.Button.Sizes.SMALL,
                        autoFocus: !0,
                        children: _.intl.string(_.t.BddRzc)
                    })
                })
            ]
        })
    );
}
