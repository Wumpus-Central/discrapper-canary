n.d(t, {
    Ie: () => f,
    mv: () => g
}),
    n(388685);
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(692547),
    l = n(481060),
    s = n(239091),
    c = n(584511),
    a = n(118012),
    u = n(699516),
    d = n(51144),
    h = n(88751),
    _ = n(930180),
    b = n(388032),
    p = n(193132);
let g = (e) => {
        let { channelId: t } = e;
        return (0, r.jsx)(m, { channelId: t });
    },
    m = (e) => {
        let { channelId: t } = e,
            n = (0, _._d)(t),
            i = (0, _.K3)(t);
        if (0 === n && 0 === i) return null;
        let c = (e) => {
            (0, s.vq)(
                e,
                (e) => {
                    var n, i;
                    return (0, r.jsx)(
                        j,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, e)),
                        (i = i = { channelId: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n)
                    );
                },
                {
                    position: 'left',
                    align: 'bottom'
                }
            );
        };
        return n > 0 && i > 0
            ? (0, r.jsxs)('div', {
                  className: p.blockedNotice,
                  children: [
                      (0, r.jsx)(l.t6m, {
                          size: 'lg',
                          color: o.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, r.jsx)(l.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: b.intl.string(b.t['P/KFX1'])
                      }),
                      (0, r.jsx)(l.P3F, {
                          className: p.blockedButton,
                          onClick: c,
                          children: b.intl.string(b.t.rUEjBQ)
                      })
                  ]
              })
            : i > 0
              ? (0, r.jsxs)('div', {
                    className: p.blockedNotice,
                    children: [
                        (0, r.jsx)(l.kZF, { size: 'lg' }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: b.intl.format(b.t.Ri3o39, { number: i })
                        }),
                        (0, r.jsx)(l.P3F, {
                            className: p.blockedButton,
                            onClick: c,
                            children: b.intl.string(b.t.rUEjBQ)
                        })
                    ]
                })
              : (0, r.jsxs)('div', {
                    className: p.blockedNotice,
                    children: [
                        (0, r.jsx)(l.t6m, {
                            size: 'lg',
                            color: o.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: b.intl.format(b.t['6Tcdt7'], { number: n })
                        }),
                        (0, r.jsx)(l.P3F, {
                            className: p.blockedButton,
                            onClick: c,
                            children: b.intl.string(b.t.rUEjBQ)
                        })
                    ]
                });
    },
    f = (e) => {
        let { user: t, showStatus: n, speaker: o, channelId: s } = e,
            _ = (0, i.e7)([h.ZP], () => h.ZP.isModerator(t.id, s)),
            g = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.id)),
            m = null;
        return (
            n && (m = o ? b.intl.string(b.t.LqMmGx) : _ ? b.intl.string(b.t.GMZqSk) : b.intl.string(b.t.suRAp6)),
            (0, r.jsxs)('div', {
                className: p.user,
                children: [
                    (0, r.jsx)(
                        c.Z,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: l.EFr.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: o
                                ? () =>
                                      (0, r.jsx)(l.S6n, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: p.icon
                                      })
                                : null
                        },
                        t.id
                    ),
                    (0, r.jsxs)('div', {
                        className: p.userInfo,
                        children: [
                            (0, r.jsxs)('div', {
                                className: p.username,
                                children: [
                                    (0, r.jsx)(a.Z, {
                                        size: n ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                        children: d.ZP.getName(t)
                                    }),
                                    (0, r.jsx)(a.Z, {
                                        size: n ? a.Z.Sizes.SIZE_16 : a.Z.Sizes.SIZE_14,
                                        color: a.Z.Colors.HEADER_SECONDARY,
                                        children: '#'.concat(t.discriminator)
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: p.username,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: g ? 'text-danger' : 'text-normal',
                                        children: g ? b.intl.string(b.t['4bDptL']) : b.intl.string(b.t.tFY5ZW)
                                    }),
                                    (0, r.jsxs)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        children: ['| ', m]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        );
    },
    j = (e) => {
        let { channelId: t } = e,
            n = (0, _.z)(t),
            i = (0, _.bA)(t);
        return (0, r.jsx)(l.Ttm, {
            className: p.container,
            children: [...n, ...i].map((e) => {
                let { user: n } = e;
                return (0, r.jsx)(
                    f,
                    {
                        user: n,
                        channelId: t
                    },
                    n.id
                );
            })
        });
    };
