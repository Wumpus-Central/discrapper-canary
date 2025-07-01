(n.d(e, { default: () => u }), n(388685), n(953529));
var i = n(255367),
    s = n(73800),
    l = n(481060),
    r = n(194359),
    a = n(313201),
    o = n(51144),
    c = n(388032),
    d = n(992089);
function u(t) {
    let { user: e, nickname: n, transitionState: u, onClose: x } = t,
        p = (0, a.Dt)(),
        [h, k] = s.useState(!1),
        [m, g] = s.useState(n),
        z = s.useRef(null),
        j = async (t) => {
            (t.preventDefault(), k(!0));
            try {
                (await r.Z.updateRelationship(e.id, m), x());
            } catch (t) {
            } finally {
                k(!1);
            }
        },
        N = null == n ? c.intl.string(c.t.BGYkaG) : c.intl.string(c.t['8pOYUF']);
    return (0, i.jsx)(l.Y0X, {
        transitionState: u,
        size: l.CgR.SMALL,
        'aria-labelledby': p,
        parentComponent: 'AddFriendNicknameModal',
        children: (0, i.jsxs)('form', {
            onSubmit: j,
            children: [
                (0, i.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        children: N
                    })
                }),
                (0, i.jsxs)(l.hzk, {
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: d.description,
                            children: c.intl.string(c.t['NdQ+lJ'])
                        }),
                        (0, i.jsx)(l.xJW, {
                            title: c.intl.string(c.t.pqG6GR),
                            children: (0, i.jsx)(l.oil, {
                                inputRef: z,
                                value: null != m ? m : '',
                                placeholder: o.ZP.getName(e),
                                onChange: g,
                                maxLength: 32,
                                className: d.input,
                                autoFocus: !0
                            })
                        }),
                        (0, i.jsx)(l.zxk, {
                            look: l.zxk.Looks.LINK,
                            color: l.zxk.Colors.LINK,
                            size: l.zxk.Sizes.NONE,
                            onClick: () => {
                                var t;
                                (g(null), null == (t = z.current) || t.focus());
                            },
                            className: d.reset,
                            children: c.intl.string(c.t['9qSBvL'])
                        })
                    ]
                }),
                (0, i.jsxs)(l.mzw, {
                    children: [
                        (0, i.jsx)(l.zxk, {
                            type: 'submit',
                            disabled: h,
                            children: c.intl.string(c.t.R3BPHx)
                        }),
                        (0, i.jsx)(l.zxk, {
                            onClick: x,
                            look: l.zxk.Looks.LINK,
                            color: l.zxk.Colors.PRIMARY,
                            children: c.intl.string(c.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
