s.d(t, { default: () => u }), s(47120), s(266796);
var i = s(200651),
    n = s(192379),
    l = s(481060),
    r = s(194359),
    a = s(313201),
    o = s(51144),
    c = s(388032),
    d = s(992089);
function u(e) {
    let { user: t, nickname: s, transitionState: u, onClose: x } = e,
        h = (0, a.Dt)(),
        [p, k] = n.useState(!1),
        [N, g] = n.useState(s),
        z = n.useRef(null),
        j = async (e) => {
            e.preventDefault(), k(!0);
            try {
                await r.Z.updateRelationship(t.id, N), x();
            } catch (e) {
            } finally {
                k(!1);
            }
        },
        m = null == s ? c.NW.string(c.t.BGYkaG) : c.NW.string(c.t['8pOYUF']);
    return (0, i.jsx)(l.Y0X, {
        transitionState: u,
        size: l.CgR.SMALL,
        'aria-labelledby': h,
        children: (0, i.jsxs)('form', {
            onSubmit: j,
            children: [
                (0, i.jsx)(l.xBx, {
                    separator: !1,
                    children: (0, i.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        children: m
                    })
                }),
                (0, i.jsxs)(l.hzk, {
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            className: d.description,
                            children: c.NW.string(c.t['NdQ+lJ'])
                        }),
                        (0, i.jsx)(l.xJW, {
                            title: c.NW.string(c.t.pqG6GR),
                            children: (0, i.jsx)(l.oil, {
                                inputRef: z,
                                value: null != N ? N : '',
                                placeholder: o.ZP.getName(t),
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
                                var e;
                                g(null), null == (e = z.current) || e.focus();
                            },
                            className: d.reset,
                            children: c.NW.string(c.t['9qSBvL'])
                        })
                    ]
                }),
                (0, i.jsxs)(l.mzw, {
                    children: [
                        (0, i.jsx)(l.zxk, {
                            type: 'submit',
                            disabled: p,
                            children: c.NW.string(c.t.R3BPHx)
                        }),
                        (0, i.jsx)(l.zxk, {
                            onClick: x,
                            look: l.zxk.Looks.LINK,
                            color: l.zxk.Colors.PRIMARY,
                            children: c.NW.string(c.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
