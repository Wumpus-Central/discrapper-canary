n.d(t, {
    Ie: () => x,
    mv: () => j
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(692547),
    s = n(481060),
    c = n(239091),
    l = n(584511),
    a = n(118012),
    d = n(922611),
    u = n(699516),
    _ = n(51144),
    h = n(88751),
    b = n(930180),
    m = n(388032),
    p = n(458167);
function g(e) {
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
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = (e) => {
        let { channelId: t } = e,
            n = (0, b._d)(t);
        return (0, d.Do)({ location: 'blocked-users-notice' })
            ? (0, r.jsx)(N, { channelId: t })
            : 0 === n
              ? null
              : (0, r.jsxs)('div', {
                    className: p.blockedNotice,
                    children: [
                        (0, r.jsx)(s.t6m, {
                            size: 'lg',
                            className: p.__invalid_blockedIcon,
                            color: o.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: m.NW.format(m.t['6Tcdt7'], { number: n })
                        }),
                        (0, r.jsx)(s.P3F, {
                            className: p.blockedButton,
                            onClick: (e) => {
                                (0, c.vq)(e, (e) => (0, r.jsx)(O, f(g({}, e), { channelId: t })), {
                                    position: 'left',
                                    align: 'bottom'
                                });
                            },
                            children: m.NW.string(m.t.rUEjBQ)
                        })
                    ]
                });
    },
    N = (e) => {
        let { channelId: t } = e,
            n = (0, b._d)(t),
            i = (0, b.K3)(t);
        if (0 === n && 0 === i) return null;
        let l = (e) => {
            (0, c.vq)(e, (e) => (0, r.jsx)(O, f(g({}, e), { channelId: t })), {
                position: 'left',
                align: 'bottom'
            });
        };
        return n > 0 && i > 0
            ? (0, r.jsxs)('div', {
                  className: p.blockedNotice,
                  children: [
                      (0, r.jsx)(s.t6m, {
                          size: 'lg',
                          color: o.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: m.NW.string(m.t['P/KFX1'])
                      }),
                      (0, r.jsx)(s.P3F, {
                          className: p.blockedButton,
                          onClick: l,
                          children: m.NW.string(m.t.rUEjBQ)
                      })
                  ]
              })
            : i > 0
              ? (0, r.jsxs)('div', {
                    className: p.blockedNotice,
                    children: [
                        (0, r.jsx)(s.kZF, { size: 'lg' }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: m.NW.format(m.t.Ri3o39, { number: i })
                        }),
                        (0, r.jsx)(s.P3F, {
                            className: p.blockedButton,
                            onClick: l,
                            children: m.NW.string(m.t.rUEjBQ)
                        })
                    ]
                })
              : (0, r.jsxs)('div', {
                    className: p.blockedNotice,
                    children: [
                        (0, r.jsx)(s.t6m, {
                            size: 'lg',
                            color: o.Z.unsafe_rawColors.RED_400.css
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: m.NW.format(m.t['6Tcdt7'], { number: n })
                        }),
                        (0, r.jsx)(s.P3F, {
                            className: p.blockedButton,
                            onClick: l,
                            children: m.NW.string(m.t.rUEjBQ)
                        })
                    ]
                });
    },
    x = (e) => {
        let { user: t, showStatus: n, speaker: o, channelId: c } = e,
            d = (0, i.e7)([h.ZP], () => h.ZP.isModerator(t.id, c)),
            b = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.id)),
            g = null;
        return (
            n && (g = o ? m.NW.string(m.t.LqMmGx) : d ? m.NW.string(m.t.GMZqSk) : m.NW.string(m.t.suRAp6)),
            (0, r.jsxs)('div', {
                className: p.user,
                children: [
                    (0, r.jsx)(
                        l.Z,
                        {
                            src: t.getAvatarURL(null, 32),
                            size: s.EFr.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: o
                                ? () =>
                                      (0, r.jsx)(s.S6n, {
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
                                        children: _.ZP.getName(t)
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
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-xs/normal',
                                        color: b ? 'text-danger' : 'text-normal',
                                        children: b ? m.NW.string(m.t['4bDptL']) : m.NW.string(m.t.tFY5ZW)
                                    }),
                                    (0, r.jsxs)(s.Text, {
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
    O = (e) => {
        let { channelId: t } = e,
            n = (0, b.z)(t),
            i = (0, b.bA)(t);
        return (0, r.jsx)(s.Ttm, {
            className: p.container,
            children: [...n, ...i].map((e) => {
                let { user: n } = e;
                return (0, r.jsx)(
                    x,
                    {
                        user: n,
                        channelId: t
                    },
                    n.id
                );
            })
        });
    };
