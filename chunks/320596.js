r.d(t, {
    Ie: () => h,
    mv: () => f
}),
    r(388685);
var n = r(255367);
r(73800);
var o = r(442837),
    s = r(692547),
    c = r(481060),
    i = r(239091),
    l = r(584511),
    a = r(118012),
    d = r(699516),
    u = r(51144),
    b = r(88751),
    m = r(930180),
    j = r(388032),
    x = r(193132);
let f = (e) => {
        let { channelId: t } = e;
        return (0, n.jsx)(p, { channelId: t });
    },
    p = (e) => {
        let { channelId: t } = e,
            r = (0, m._d)(t),
            o = (0, m.K3)(t);
        if (0 === r && 0 === o) return null;
        let l = (e) => {
            (0, i.vq)(
                e,
                (e) => {
                    var r, o;
                    return (0, n.jsx)(
                        g,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
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
                          children: j.intl.string(j.t['P/KFX1'])
                      }),
                      (0, n.jsx)(c.P3F, {
                          className: x.blockedButton,
                          onClick: l,
                          children: j.intl.string(j.t.rUEjBQ)
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
                            children: j.intl.format(j.t.Ri3o39, { number: o })
                        }),
                        (0, n.jsx)(c.P3F, {
                            className: x.blockedButton,
                            onClick: l,
                            children: j.intl.string(j.t.rUEjBQ)
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
                            children: j.intl.format(j.t['6Tcdt7'], { number: r })
                        }),
                        (0, n.jsx)(c.P3F, {
                            className: x.blockedButton,
                            onClick: l,
                            children: j.intl.string(j.t.rUEjBQ)
                        })
                    ]
                });
    },
    h = (e) => {
        let { user: t, showStatus: r, speaker: s, channelId: i } = e,
            m = (0, o.e7)([b.ZP], () => b.ZP.isModerator(t.id, i)),
            f = (0, o.e7)([d.Z], () => d.Z.isBlocked(t.id)),
            p = null;
        return (
            r && (p = s ? j.intl.string(j.t.LqMmGx) : m ? j.intl.string(j.t.GMZqSk) : j.intl.string(j.t.suRAp6)),
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
                                    (0, n.jsx)(a.Z, {
                                        size: r ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                        children: u.ZP.getName(t)
                                    }),
                                    (0, n.jsx)(a.Z, {
                                        size: r ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                        color: a.Z.Colors.HEADER_SECONDARY,
                                        children: '#'.concat(t.discriminator)
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: x.username,
                                children: [
                                    (0, n.jsx)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: f ? 'text-danger' : 'text-normal',
                                        children: f ? j.intl.string(j.t['4bDptL']) : j.intl.string(j.t.tFY5ZW)
                                    }),
                                    (0, n.jsxs)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ['| ', p]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    g = (e) => {
        let { channelId: t } = e,
            r = (0, m.z)(t),
            o = (0, m.bA)(t);
        return (0, n.jsx)(c.Ttm, {
            className: x.container,
            children: [...r, ...o].map((e) => {
                let { user: r } = e;
                return (0, n.jsx)(
                    h,
                    {
                        user: r,
                        channelId: t
                    },
                    r.id
                );
            })
        });
    };
