(r.d(t, {
    Ie: () => p,
    mv: () => j
}),
    r(388685));
var n = r(255367);
r(73800);
var o = r(442837),
    s = r(692547),
    c = r(481060),
    i = r(239091),
    l = r(584511),
    a = r(699516),
    d = r(51144),
    u = r(88751),
    b = r(930180),
    m = r(388032),
    x = r(193132);
let j = (e) => {
        let { channelId: t } = e;
        return (0, n.jsx)(f, { channelId: t });
    },
    f = (e) => {
        let { channelId: t } = e,
            r = (0, b._d)(t),
            o = (0, b.K3)(t);
        if (0 === r && 0 === o) return null;
        let l = (e) => {
            (0, i.vq)(
                e,
                (e) => {
                    var r, o;
                    return (0, n.jsx)(
                        h,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        ((n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n));
                                    }));
                            }
                            return e;
                        })({}, e)),
                        (o = o = { channelId: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        r)
                    );
                },
                {
                    position: 'left',
                    align: 'bottom'
                }
            );
        };
        return r > 0 && o > 0
            ? (0, n.jsxs)('div', {
                  className: x.blockedNotice,
                  children: [
                      (0, n.jsx)(c.t6m, {
                          size: 'lg',
                          color: s.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, n.jsx)(c.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: m.intl.string(m.t['P/KFX1'])
                      }),
                      (0, n.jsx)(c.P3F, {
                          className: x.blockedButton,
                          onClick: l,
                          children: m.intl.string(m.t.rUEjBQ)
                      })
                  ]
              })
            : o > 0
              ? (0, n.jsxs)('div', {
                    className: x.blockedNotice,
                    children: [
                        (0, n.jsx)(c.kZF, { size: 'lg' }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: m.intl.format(m.t.Ri3o39, { number: o })
                        }),
                        (0, n.jsx)(c.P3F, {
                            className: x.blockedButton,
                            onClick: l,
                            children: m.intl.string(m.t.rUEjBQ)
                        })
                    ]
                })
              : (0, n.jsxs)('div', {
                    className: x.blockedNotice,
                    children: [
                        (0, n.jsx)(c.t6m, {
                            size: 'lg',
                            color: s.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, n.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: m.intl.format(m.t['6Tcdt7'], { number: r })
                        }),
                        (0, n.jsx)(c.P3F, {
                            className: x.blockedButton,
                            onClick: l,
                            children: m.intl.string(m.t.rUEjBQ)
                        })
                    ]
                });
    },
    p = (e) => {
        let { user: t, showStatus: r, speaker: s, channelId: i } = e,
            b = (0, o.e7)([u.ZP], () => u.ZP.isModerator(t.id, i)),
            j = (0, o.e7)([a.Z], () => a.Z.isBlocked(t.id)),
            f = null;
        return (
            r && (f = s ? m.intl.string(m.t.LqMmGx) : b ? m.intl.string(m.t.GMZqSk) : m.intl.string(m.t.suRAp6)),
            (0, n.jsxs)('div', {
                className: x.user,
                children: [
                    (0, n.jsx)(
                        l.Z,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: c.EFr.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: s
                                ? () =>
                                      (0, n.jsx)(c.S6n, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: x.icon
                                      })
                                : null
                        },
                        t.id
                    ),
                    (0, n.jsxs)('div', {
                        className: x.userInfo,
                        children: [
                            (0, n.jsxs)('div', {
                                className: x.username,
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        variant: r ? 'text-md/normal' : 'text-sm/normal',
                                        children: d.ZP.getName(t)
                                    }),
                                    (0, n.jsx)(c.Text, {
                                        variant: r ? 'text-md/normal' : 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: '#'.concat(t.discriminator)
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: x.username,
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: j ? 'text-danger' : 'text-default',
                                        children: j ? m.intl.string(m.t['4bDptL']) : m.intl.string(m.t.tFY5ZW)
                                    }),
                                    (0, n.jsxs)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ['| ', f]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    h = (e) => {
        let { channelId: t } = e,
            r = (0, b.z)(t),
            o = (0, b.bA)(t);
        return (0, n.jsx)(c.Ttm, {
            className: x.container,
            children: [...r, ...o].map((e) => {
                let { user: r } = e;
                return (0, n.jsx)(
                    p,
                    {
                        user: r,
                        channelId: t
                    },
                    r.id
                );
            })
        });
    };
