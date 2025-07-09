(i.d(e, { default: () => x }), i(388685), i(953529));
var n = i(255367),
    s = i(73800),
    r = i(755721),
    l = i(481060),
    a = i(194359),
    o = i(313201),
    d = i(51144),
    c = i(388032),
    u = i(992089);
function x(t) {
    let { user: e, nickname: i, transitionState: x, onClose: p } = t,
        h = (0, o.Dt)(),
        [m, g] = s.useState(!1),
        [j, k] = s.useState(i),
        z = s.useRef(null),
        f = async (t) => {
            (t.preventDefault(), g(!0));
            try {
                (await a.Z.updateRelationship(e.id, j), p());
            } catch (t) {
            } finally {
                g(!1);
            }
        },
        v = null == i ? c.intl.string(c.t.BGYkaG) : c.intl.string(c.t['8pOYUF']);
    return (0, n.jsx)(l.Y0X, {
        transitionState: x,
        size: l.CgR.SMALL,
        'aria-labelledby': h,
        parentComponent: 'AddFriendNicknameModal',
        children: (0, n.jsxs)('form', {
            onSubmit: f,
            children: [
                (0, n.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        children: v
                    })
                }),
                (0, n.jsxs)(l.hzk, {
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: u.description,
                            children: c.intl.string(c.t['NdQ+lJ'])
                        }),
                        (0, n.jsx)(l.xJW, {
                            title: c.intl.string(c.t.pqG6GR),
                            children: (0, n.jsx)(l.oil, {
                                inputRef: z,
                                value: null != j ? j : '',
                                placeholder: d.ZP.getName(e),
                                onChange: k,
                                maxLength: 32,
                                className: u.input,
                                autoFocus: !0
                            })
                        }),
                        (0, n.jsx)(r.zx, {
                            look: r.zx.Looks.LINK,
                            color: r.zx.Colors.LINK,
                            size: r.zx.Sizes.NONE,
                            onClick: () => {
                                var t;
                                (k(null), null == (t = z.current) || t.focus());
                            },
                            className: u.reset,
                            children: c.intl.string(c.t['9qSBvL'])
                        })
                    ]
                }),
                (0, n.jsx)(l.mzw, {
                    children: (0, n.jsxs)(l.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, n.jsx)(l.zxk, {
                                variant: 'primary',
                                text: c.intl.string(c.t.R3BPHx),
                                type: 'submit',
                                disabled: m
                            }),
                            (0, n.jsx)(l.zxk, {
                                variant: 'secondary',
                                text: c.intl.string(c.t['ETE/oK']),
                                onClick: p
                            })
                        ]
                    })
                })
            ]
        })
    });
}
