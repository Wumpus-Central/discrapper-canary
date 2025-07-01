(t.d(n, { default: () => m }), t(388685), t(953529));
var s = t(255367),
    i = t(73800),
    l = t(442837),
    o = t(481060),
    r = t(933557),
    a = t(600164),
    c = t(313201),
    d = t(592125),
    x = t(853856),
    u = t(117984),
    h = t(388032),
    k = t(64460);
function m(e) {
    let { channelId: n, onClose: t, transitionState: m, heading: p, formTitle: j, allowReset: f = !1 } = e,
        z = (0, c.Dt)(),
        N = (0, l.e7)([d.Z], () => d.Z.getChannel(n)),
        C = (0, r.ZP)(N),
        g = x.Z.getNickname(n),
        [v, b] = i.useState(null != g ? g : '');
    return (0, s.jsx)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), (0, u.UT)(n, v), t());
        },
        children: (0, s.jsxs)(o.Y0X, {
            transitionState: m,
            'aria-labelledby': z,
            parentComponent: 'FavoritesSetNicknameModal',
            children: [
                (0, s.jsxs)(o.xBx, {
                    separator: !0,
                    justify: a.Z.Justify.BETWEEN,
                    children: [
                        (0, s.jsx)(o.X6q, {
                            id: z,
                            variant: 'heading-lg/semibold',
                            children: p
                        }),
                        (0, s.jsx)(o.olH, { onClick: t })
                    ]
                }),
                (0, s.jsxs)(o.hzk, {
                    children: [
                        (0, s.jsx)(o.xJW, {
                            className: k.name,
                            title: j,
                            children: (0, s.jsx)(o.oil, {
                                value: v,
                                onChange: b,
                                placeholder: null != C ? C : void 0,
                                maxLength: 100,
                                autoFocus: !0
                            })
                        }),
                        f && null != g
                            ? (0, s.jsx)(o.zxk, {
                                  look: o.zxk.Looks.LINK,
                                  color: o.zxk.Colors.LINK,
                                  size: o.zxk.Sizes.NONE,
                                  onClick: function () {
                                      ((0, u.UT)(n, null), t());
                                  },
                                  className: k.reset,
                                  children: h.intl.string(h.t.aE02R0)
                              })
                            : null,
                        (0, s.jsx)(o.Text, {
                            className: k.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: h.intl.string(h.t['2vyz+P'])
                        })
                    ]
                }),
                (0, s.jsxs)(o.mzw, {
                    children: [
                        (0, s.jsx)(o.zxk, {
                            type: 'submit',
                            children: p
                        }),
                        (0, s.jsx)(o.zxk, {
                            onClick: t,
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            children: h.intl.string(h.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
