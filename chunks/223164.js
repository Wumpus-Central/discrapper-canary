n.r(a),
    n.d(a, {
        default: function () {
            return C;
        }
    });
var t = n(200651),
    r = n(192379),
    o = n(120356),
    d = n.n(o),
    i = n(481060),
    s = n(313201),
    c = n(454585),
    l = n(585483),
    h = n(981631),
    u = n(388032),
    p = n(851938),
    x = n(665162);
function C(e) {
    let { channel: a, isFromComposer: n, transitionState: o, onClose: C } = e,
        j = (0, s.Dt)();
    return (
        r.useEffect(
            () => () => {
                n && l.S.dispatch(h.CkL.FOCUS_COMPOSER_TITLE);
            },
            [n]
        ),
        (0, t.jsxs)(i.ModalRoot, {
            transitionState: o,
            'aria-labelledby': j,
            size: i.ModalSize.DYNAMIC,
            className: p.container,
            children: [
                (0, t.jsxs)(i.ModalHeader, {
                    className: p.header,
                    separator: !1,
                    children: [
                        (0, t.jsx)(i.BookCheckIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            className: p.rulesIcon,
                            width: 24,
                            height: 24
                        }),
                        (0, t.jsx)(i.Heading, {
                            variant: 'heading-lg/extrabold',
                            children: u.intl.string(u.t['4d4T4u'])
                        })
                    ]
                }),
                (0, t.jsx)(i.ModalContent, {
                    children: (0, t.jsx)(i.Text, {
                        className: d()(p.content, x.markup),
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: (0, t.jsx)('div', {
                            children: c.Z.parseForumPostGuidelines(a.topic, !0, {
                                channelId: a.id,
                                allowHeading: !0,
                                allowList: !0
                            })
                        })
                    })
                }),
                (0, t.jsx)(i.ModalFooter, {
                    children: (0, t.jsx)(i.Button, {
                        onClick: C,
                        children: u.intl.string(u.t['NX+WJC'])
                    })
                })
            ]
        })
    );
}
