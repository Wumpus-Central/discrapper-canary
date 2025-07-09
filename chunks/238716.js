(t.d(n, { default: () => j }), t(388685), t(953529));
var i = t(255367),
    s = t(73800),
    r = t(442837),
    a = t(755721),
    l = t(481060),
    o = t(933557),
    c = t(600164),
    d = t(313201),
    x = t(592125),
    u = t(853856),
    h = t(117984),
    m = t(388032),
    p = t(64460);
function j(e) {
    let { channelId: n, onClose: t, transitionState: j, heading: k, formTitle: f, allowReset: z = !1 } = e,
        v = (0, d.Dt)(),
        N = (0, r.e7)([x.Z], () => x.Z.getChannel(n)),
        g = (0, o.ZP)(N),
        C = u.Z.getNickname(n),
        [y, E] = s.useState(null != C ? C : '');
    return (0, i.jsx)('form', {
        onSubmit: function (e) {
            (e.preventDefault(), (0, h.UT)(n, y), t());
        },
        children: (0, i.jsxs)(l.Y0X, {
            transitionState: j,
            'aria-labelledby': v,
            parentComponent: 'FavoritesSetNicknameModal',
            children: [
                (0, i.jsxs)(l.xBx, {
                    separator: !0,
                    justify: c.Z.Justify.BETWEEN,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            id: v,
                            variant: 'heading-lg/semibold',
                            children: k
                        }),
                        (0, i.jsx)(l.olH, { onClick: t })
                    ]
                }),
                (0, i.jsxs)(l.hzk, {
                    children: [
                        (0, i.jsx)(l.xJW, {
                            className: p.name,
                            title: f,
                            children: (0, i.jsx)(l.oil, {
                                value: y,
                                onChange: E,
                                placeholder: null != g ? g : void 0,
                                maxLength: 100,
                                autoFocus: !0
                            })
                        }),
                        z && null != C
                            ? (0, i.jsx)(a.zx, {
                                  look: a.zx.Looks.LINK,
                                  color: a.zx.Colors.LINK,
                                  size: a.zx.Sizes.NONE,
                                  onClick: function () {
                                      ((0, h.UT)(n, null), t());
                                  },
                                  className: p.reset,
                                  children: m.intl.string(m.t.aE02R0)
                              })
                            : null,
                        (0, i.jsx)(l.Text, {
                            className: p.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            children: m.intl.string(m.t['2vyz+P'])
                        })
                    ]
                }),
                (0, i.jsx)(l.mzw, {
                    children: (0, i.jsxs)(l.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, i.jsx)(l.zxk, {
                                variant: 'primary',
                                text: k,
                                type: 'submit'
                            }),
                            (0, i.jsx)(l.zxk, {
                                variant: 'secondary',
                                text: m.intl.string(m.t['ETE/oK']),
                                onClick: t
                            })
                        ]
                    })
                })
            ]
        })
    });
}
