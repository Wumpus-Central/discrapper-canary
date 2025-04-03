s.d(n, { default: () => m }), s(47120), s(266796);
var i = s(200651),
    t = s(192379),
    l = s(442837),
    o = s(481060),
    r = s(933557),
    a = s(600164),
    c = s(313201),
    d = s(592125),
    x = s(853856),
    u = s(117984),
    h = s(388032),
    k = s(64460);
function m(e) {
    let { channelId: n, onClose: s, transitionState: m, heading: p, formTitle: j, allowReset: f = !1 } = e,
        z = (0, c.Dt)(),
        N = (0, l.e7)([d.Z], () => d.Z.getChannel(n)),
        g = (0, r.ZP)(N),
        C = x.Z.getNickname(n),
        [b, v] = t.useState(null != C ? C : '');
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            e.preventDefault(), (0, u.UT)(n, b), s();
        },
        children: (0, i.jsxs)(o.Y0X, {
            transitionState: m,
            'aria-labelledby': z,
            children: [
                (0, i.jsxs)(o.xBx, {
                    separator: !0,
                    justify: a.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            id: z,
                            variant: 'heading-lg/semibold',
                            children: p
                        }),
                        (0, i.jsx)(o.olH, { onClick: s })
                    ]
                }),
                (0, i.jsxs)(o.hzk, {
                    children: [
                        (0, i.jsx)(o.xJW, {
                            className: k.name,
                            title: j,
                            children: (0, i.jsx)(o.oil, {
                                value: b,
                                onChange: v,
                                placeholder: null != g ? g : void 0,
                                maxLength: 100,
                                autoFocus: !0
                            })
                        }),
                        f && null != C
                            ? (0, i.jsx)(o.zxk, {
                                  look: o.zxk.Looks.LINK,
                                  color: o.zxk.Colors.LINK,
                                  size: o.zxk.Sizes.NONE,
                                  onClick: function () {
                                      (0, u.UT)(n, null), s();
                                  },
                                  className: k.reset,
                                  children: h.NW.string(h.t.aE02R0)
                              })
                            : null,
                        (0, i.jsx)(o.Text, {
                            className: k.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: h.NW.string(h.t['2vyz+P'])
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    children: [
                        (0, i.jsx)(o.zxk, {
                            type: 'submit',
                            children: p
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: s,
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            children: h.NW.string(h.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
