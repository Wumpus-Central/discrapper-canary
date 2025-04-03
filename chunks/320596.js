n.d(t, {
    Ie: () => m,
    mv: () => g
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
    u = n(699516),
    d = n(51144),
    _ = n(88751),
    h = n(930180),
    b = n(388032),
    p = n(193132);
let g = (e) => {
        let { channelId: t } = e;
        return (0, r.jsx)(f, { channelId: t });
    },
    f = (e) => {
        let { channelId: t } = e,
            n = (0, h._d)(t),
            i = (0, h.K3)(t);
        if (0 === n && 0 === i) return null;
        let l = (e) => {
            (0, c.vq)(
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
                      (0, r.jsx)(s.t6m, {
                          size: 'lg',
                          color: o.Z.unsafe_rawColors.RED_400.css
                      }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: b.NW.string(b.t['P/KFX1'])
                      }),
                      (0, r.jsx)(s.P3F, {
                          className: p.blockedButton,
                          onClick: l,
                          children: b.NW.string(b.t.rUEjBQ)
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
                            children: b.NW.format(b.t.Ri3o39, { number: i })
                        }),
                        (0, r.jsx)(s.P3F, {
                            className: p.blockedButton,
                            onClick: l,
                            children: b.NW.string(b.t.rUEjBQ)
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
                            children: b.NW.format(b.t['6Tcdt7'], { number: n })
                        }),
                        (0, r.jsx)(s.P3F, {
                            className: p.blockedButton,
                            onClick: l,
                            children: b.NW.string(b.t.rUEjBQ)
                        })
                    ]
                });
    },
    m = (e) => {
        let { user: t, showStatus: n, speaker: o, channelId: c } = e,
            h = (0, i.e7)([_.ZP], () => _.ZP.isModerator(t.id, c)),
            g = (0, i.e7)([u.Z], () => u.Z.isBlocked(t.id)),
            f = null;
        return (
            n && (f = o ? b.NW.string(b.t.LqMmGx) : h ? b.NW.string(b.t.GMZqSk) : b.NW.string(b.t.suRAp6)),
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
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-xs/normal',
                                        color: g ? 'text-danger' : 'text-normal',
                                        children: g ? b.NW.string(b.t['4bDptL']) : b.NW.string(b.t.tFY5ZW)
                                    }),
                                    (0, r.jsxs)(s.Text, {
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
    j = (e) => {
        let { channelId: t } = e,
            n = (0, h.z)(t),
            i = (0, h.bA)(t);
        return (0, r.jsx)(s.Ttm, {
            className: p.container,
            children: [...n, ...i].map((e) => {
                let { user: n } = e;
                return (0, r.jsx)(
                    m,
                    {
                        user: n,
                        channelId: t
                    },
                    n.id
                );
            })
        });
    };
