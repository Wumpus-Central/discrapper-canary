r.d(t, {
    Ie: () => p,
    mv: () => b
}),
    r(388685);
var n = r(200651);
r(192379);
var l = r(442837),
    s = r(692547),
    i = r(481060),
    c = r(239091),
    a = r(584511),
    o = r(118012),
    d = r(699516),
    u = r(51144),
    x = r(88751),
    j = r(930180),
    h = r(388032),
    m = r(193132);
let b = (e) => {
        let { channelId: t } = e;
        return (0, n.jsx)(g, { channelId: t });
    },
    g = (e) => {
        let { channelId: t } = e,
            r = (0, j._d)(t),
            l = (0, j.K3)(t);
        if (0 === r && 0 === l) return null;
        let a = (e) => {
            (0, c.vq)(
                e,
                (e) => {
                    var r, l;
                    return (0, n.jsx)(
                        f,
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
                          children: h.intl.string(h.t['P/KFX1'])
                      }),
                      (0, n.jsx)(i.P3F, {
                          className: m.blockedButton,
                          onClick: a,
                          children: h.intl.string(h.t.rUEjBQ)
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
                            children: h.intl.format(h.t.Ri3o39, { number: l })
                        }),
                        (0, n.jsx)(i.P3F, {
                            className: m.blockedButton,
                            onClick: a,
                            children: h.intl.string(h.t.rUEjBQ)
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
                            children: h.intl.format(h.t['6Tcdt7'], { number: r })
                        }),
                        (0, n.jsx)(i.P3F, {
                            className: m.blockedButton,
                            onClick: a,
                            children: h.intl.string(h.t.rUEjBQ)
                        })
                    ]
                });
    },
    p = (e) => {
        let { user: t, showStatus: r, speaker: s, channelId: c } = e,
            j = (0, l.e7)([x.ZP], () => x.ZP.isModerator(t.id, c)),
            b = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.id)),
            g = null;
        return (
            r && (g = s ? h.intl.string(h.t.LqMmGx) : j ? h.intl.string(h.t.GMZqSk) : h.intl.string(h.t.suRAp6)),
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
                                    (0, n.jsx)(o.Z, {
                                        size: r ? o.Z.Sizes.SIZE_16 : o.Z.Sizes.SIZE_14,
                                        children: u.ZP.getName(t)
                                    }),
                                    (0, n.jsx)(o.Z, {
                                        size: r ? o.Z.Sizes.SIZE_16 : o.Z.Sizes.SIZE_14,
                                        color: o.Z.Colors.HEADER_SECONDARY,
                                        children: '#'.concat(t.discriminator)
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: m.username,
                                children: [
                                    (0, n.jsx)(i.Text, {
                                        variant: 'text-xs/normal',
                                        color: b ? 'text-danger' : 'text-normal',
                                        children: b ? h.intl.string(h.t['4bDptL']) : h.intl.string(h.t.tFY5ZW)
                                    }),
                                    (0, n.jsxs)(i.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ['| ', g]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    f = (e) => {
        let { channelId: t } = e,
            r = (0, j.z)(t),
            l = (0, j.bA)(t);
        return (0, n.jsx)(i.Ttm, {
            className: m.container,
            children: [...r, ...l].map((e) => {
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
