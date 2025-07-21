(n.d(t, {
    Ie: () => g,
    mv: () => p
}),
    n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(692547),
    l = n(481060),
    c = n(239091),
    s = n(584511),
    a = n(699516),
    u = n(51144),
    d = n(88751),
    h = n(930180),
    b = n(388032),
    _ = n(193132);
let p = (e) => {
        let { channelId: t } = e;
        return (0, r.jsx)(m, { channelId: t });
    },
    m = (e) => {
        let { channelId: t } = e,
            n = (0, h._d)(t),
            i = (0, h.K3)(t);
        if (0 === n && 0 === i) return null;
        let s = (e) => {
            (0, c.vq)(
                e,
                (e) => {
                    var n, i;
                    return (0, r.jsx)(
                        f,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
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
                  className: _.blockedNotice,
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
                          className: _.blockedButton,
                          onClick: s,
                          children: b.intl.string(b.t.rUEjBQ)
                      })
                  ]
              })
            : i > 0
              ? (0, r.jsxs)('div', {
                    className: _.blockedNotice,
                    children: [
                        (0, r.jsx)(l.kZF, { size: 'lg' }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: b.intl.format(b.t.Ri3o39, { number: i })
                        }),
                        (0, r.jsx)(l.P3F, {
                            className: _.blockedButton,
                            onClick: s,
                            children: b.intl.string(b.t.rUEjBQ)
                        })
                    ]
                })
              : (0, r.jsxs)('div', {
                    className: _.blockedNotice,
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
                            className: _.blockedButton,
                            onClick: s,
                            children: b.intl.string(b.t.rUEjBQ)
                        })
                    ]
                });
    },
    g = (e) => {
        let { user: t, showStatus: n, speaker: o, channelId: c } = e,
            h = (0, i.e7)([d.ZP], () => d.ZP.isModerator(t.id, c)),
            p = (0, i.e7)([a.Z], () => a.Z.isBlocked(t.id)),
            m = null;
        return (
            n && (m = o ? b.intl.string(b.t.LqMmGx) : h ? b.intl.string(b.t.GMZqSk) : b.intl.string(b.t.suRAp6)),
            (0, r.jsxs)('div', {
                className: _.user,
                children: [
                    (0, r.jsx)(
                        s.Z,
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
                                          className: _.icon
                                      })
                                : null
                        },
                        t.id
                    ),
                    (0, r.jsxs)('div', {
                        className: _.userInfo,
                        children: [
                            (0, r.jsxs)('div', {
                                className: _.username,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: n ? 'text-md/normal' : 'text-sm/normal',
                                        children: u.ZP.getName(t)
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: n ? 'text-md/normal' : 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: '#'.concat(t.discriminator)
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: _.username,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: p ? 'text-danger' : 'text-default',
                                        children: p ? b.intl.string(b.t['4bDptL']) : b.intl.string(b.t.tFY5ZW)
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
    f = (e) => {
        let { channelId: t } = e,
            n = (0, h.z)(t),
            i = (0, h.bA)(t);
        return (0, r.jsx)(l.Ttm, {
            className: _.container,
            children: [...n, ...i].map((e) => {
                let { user: n } = e;
                return (0, r.jsx)(
                    g,
                    {
                        user: n,
                        channelId: t
                    },
                    n.id
                );
            })
        });
    };
