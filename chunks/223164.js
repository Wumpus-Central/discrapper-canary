a.d(n, { default: () => _ });
var s = a(200651),
    t = a(192379),
    r = a(120356),
    i = a.n(r),
    c = a(481060),
    l = a(313201),
    o = a(454585),
    d = a(585483),
    h = a(981631),
    u = a(388032),
    x = a(44534),
    p = a(73433);
function _(e) {
    let { channel: n, isFromComposer: a, transitionState: r, onClose: _ } = e,
        C = (0, l.Dt)();
    return (
        t.useEffect(
            () => () => {
                a && d.S.dispatch(h.CkL.FOCUS_COMPOSER_TITLE);
            },
            [a]
        ),
        (0, s.jsxs)(c.Y0X, {
            transitionState: r,
            'aria-labelledby': C,
            size: c.CgR.DYNAMIC,
            className: x.container,
            children: [
                (0, s.jsxs)(c.xBx, {
                    className: x.header,
                    separator: !1,
                    children: [
                        (0, s.jsx)(c.snC, {
                            size: 'custom',
                            color: 'currentColor',
                            className: x.rulesIcon,
                            width: 24,
                            height: 24
                        }),
                        (0, s.jsx)(c.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: u.NW.string(u.t['4d4T4u'])
                        })
                    ]
                }),
                (0, s.jsx)(c.hzk, {
                    children: (0, s.jsx)(c.Text, {
                        className: i()(x.content, p.markup),
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: (0, s.jsx)('div', {
                            children: o.Z.parseForumPostGuidelines(n.topic, !0, {
                                channelId: n.id,
                                allowHeading: !0,
                                allowList: !0
                            })
                        })
                    })
                }),
                (0, s.jsx)(c.mzw, {
                    children: (0, s.jsx)(c.zxk, {
                        onClick: _,
                        children: u.NW.string(u.t['NX+WJC'])
                    })
                })
            ]
        })
    );
}
