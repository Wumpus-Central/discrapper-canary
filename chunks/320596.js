(r.d(t, {
    Ie: () => g,
    mv: () => h
}),
    r(388685));
var n = r(255367);
r(73800);
var l = r(442837),
    s = r(692547),
    i = r(481060),
    c = r(239091),
    a = r(584511),
    o = r(699516),
    d = r(51144),
    u = r(88751),
    x = r(930180),
    j = r(388032),
    m = r(193132);
let h = (e) => {
        let { channelId: t } = e;
        return (0, n.jsx)(b, { channelId: t });
    },
    b = (e) => {
        let { channelId: t } = e,
            r = (0, x._d)(t),
            l = (0, x.K3)(t);
        if (0 === r && 0 === l) return null;
        let a = (e) => {
            (0, c.vq)(
                e,
                (e) => {
                    var r, l;
                    return (0, n.jsx)(
                        p,
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
                        (l = l = { channelId: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
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
        return r > 0 && l > 0
            ? (0, n.jsxs)('div', {
                  className: m.blockedNotice,
                  children: [
                      (0, n.jsx)(i.t6m, {
                          size: 'lg',
                          color: s.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, n.jsx)(i.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: j.intl.string(j.t['P/KFX1'])
                      }),
                      (0, n.jsx)(i.P3F, {
                          className: m.blockedButton,
                          onClick: a,
                          children: j.intl.string(j.t.rUEjBQ)
                      })
                  ]
              })
            : l > 0
              ? (0, n.jsxs)('div', {
                    className: m.blockedNotice,
                    children: [
                        (0, n.jsx)(i.kZF, { size: 'lg' }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: j.intl.format(j.t.Ri3o39, { number: l })
                        }),
                        (0, n.jsx)(i.P3F, {
                            className: m.blockedButton,
                            onClick: a,
                            children: j.intl.string(j.t.rUEjBQ)
                        })
                    ]
                })
              : (0, n.jsxs)('div', {
                    className: m.blockedNotice,
                    children: [
                        (0, n.jsx)(i.t6m, {
                            size: 'lg',
                            color: s.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: j.intl.format(j.t['6Tcdt7'], { number: r })
                        }),
                        (0, n.jsx)(i.P3F, {
                            className: m.blockedButton,
                            onClick: a,
                            children: j.intl.string(j.t.rUEjBQ)
                        })
                    ]
                });
    },
    g = (e) => {
        let { user: t, showStatus: r, speaker: s, channelId: c } = e,
            x = (0, l.e7)([u.ZP], () => u.ZP.isModerator(t.id, c)),
            h = (0, l.e7)([o.Z], () => o.Z.isBlocked(t.id)),
            b = null;
        return (
            r && (b = s ? j.intl.string(j.t.LqMmGx) : x ? j.intl.string(j.t.GMZqSk) : j.intl.string(j.t.suRAp6)),
            (0, n.jsxs)('div', {
                className: m.user,
                children: [
                    (0, n.jsx)(
                        a.Z,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: i.EFr.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: s
                                ? () =>
                                      (0, n.jsx)(i.S6n, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: m.icon
                                      })
                                : null
                        },
                        t.id
                    ),
                    (0, n.jsxs)('div', {
                        className: m.userInfo,
                        children: [
                            (0, n.jsxs)('div', {
                                className: m.username,
                                children: [
                                    (0, n.jsx)(i.Text, {
                                        variant: r ? 'text-md/normal' : 'text-sm/normal',
                                        children: d.ZP.getName(t)
                                    }),
                                    (0, n.jsx)(i.Text, {
                                        variant: r ? 'text-md/normal' : 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: '#'.concat(t.discriminator)
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: m.username,
                                children: [
                                    (0, n.jsx)(i.Text, {
                                        variant: 'text-xs/normal',
                                        color: h ? 'text-danger' : 'text-default',
                                        children: h ? j.intl.string(j.t['4bDptL']) : j.intl.string(j.t.tFY5ZW)
                                    }),
                                    (0, n.jsxs)(i.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ['| ', b]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    p = (e) => {
        let { channelId: t } = e,
            r = (0, x.z)(t),
            l = (0, x.bA)(t);
        return (0, n.jsx)(i.Ttm, {
            className: m.container,
            children: [...r, ...l].map((e) => {
                let { user: r } = e;
                return (0, n.jsx)(
                    g,
                    {
                        user: r,
                        channelId: t
                    },
                    r.id
                );
            })
        });
    };
