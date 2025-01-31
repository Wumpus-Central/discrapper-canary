i.d(e, { default: () => u }), i(47120);
var n = i(200651),
    s = i(192379),
    l = i(481060),
    r = i(194359),
    a = i(313201),
    o = i(51144),
    c = i(388032),
    d = i(154210);
function u(t) {
    let { user: e, nickname: i, transitionState: u, onClose: x } = t,
        h = (0, a.Dt)(),
        [p, k] = s.useState(!1),
        [g, z] = s.useState(i),
        j = s.useRef(null),
        m = async (t) => {
            t.preventDefault(), k(!0);
            try {
                await r.Z.updateRelationship(e.id, g), x();
            } catch (t) {
            } finally {
                k(!1);
            }
        },
        f = null == i ? c.intl.string(c.t.BGYkaG) : c.intl.string(c.t['8pOYUF']);
    return (0, n.jsx)(l.Y0X, {
        transitionState: u,
        size: l.CgR.SMALL,
        'aria-labelledby': h,
        children: (0, n.jsxs)('form', {
            onSubmit: m,
            children: [
                (0, n.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        children: f
                    })
                }),
                (0, n.jsxs)(l.hzk, {
                    children: [
                        (0, n.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: d.description,
                            children: c.intl.string(c.t['NdQ+lJ'])
                        }),
                        (0, n.jsx)(l.xJW, {
                            title: c.intl.string(c.t.pqG6GR),
                            children: (0, n.jsx)(l.oil, {
                                inputRef: j,
                                value: null != g ? g : '',
                                placeholder: o.ZP.getName(e),
                                onChange: z,
                                maxLength: 32,
                                className: d.input,
                                autoFocus: !0
                            })
                        }),
                        (0, n.jsx)(l.zxk, {
                            look: l.zxk.Looks.LINK,
                            color: l.zxk.Colors.LINK,
                            size: l.zxk.Sizes.NONE,
                            onClick: () => {
                                var t;
                                z(null), null === (t = j.current) || void 0 === t || t.focus();
                            },
                            className: d.reset,
                            children: c.intl.string(c.t['9qSBvL'])
                        })
                    ]
                }),
                (0, n.jsxs)(l.mzw, {
                    children: [
                        (0, n.jsx)(l.zxk, {
                            type: 'submit',
                            disabled: p,
                            children: c.intl.string(c.t.R3BPHx)
                        }),
                        (0, n.jsx)(l.zxk, {
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
