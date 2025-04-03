n.d(t, {
    Z: () => v,
    j: () => _
});
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    s = n(442837),
    a = n(481060),
    o = n(367907),
    c = n(548473),
    d = n(721012),
    u = n(869764),
    m = n(150512),
    N = n(430824),
    h = n(594174),
    I = n(626135),
    g = n(999382),
    f = n(983135),
    p = n(84658),
    E = n(981631),
    S = n(388032),
    x = n(568614);
let T = () => [
        {
            emoji: '\uD83E\uDDD9',
            emojiDescription: S.NW.string(S.t.Jh9uiY),
            title: S.NW.string(S.t.ATF45u),
            selected: !0
        },
        {
            emoji: '\uD83C\uDFA4',
            emojiDescription: S.NW.string(S.t['nGt+MT']),
            title: S.NW.string(S.t['30uo7O']),
            selected: !1
        },
        {
            emoji: '\uD83D\uDC40',
            emojiDescription: S.NW.string(S.t.hOMH5u),
            title: S.NW.string(S.t['5Z5sgo']),
            selected: !1
        }
    ],
    O = () => [
        {
            channelIcon: () =>
                (0, l.jsx)(a.MqZ, {
                    size: 'xs',
                    color: 'currentColor',
                    className: x.channelIcon
                }),
            channel: S.NW.string(S.t.MXJozM),
            selected: !0
        },
        {
            channelIcon: () =>
                (0, l.jsx)(a.VL1, {
                    size: 'md',
                    color: 'currentColor',
                    className: x.channelIcon
                }),
            channel: S.NW.string(S.t.Pkj0f3),
            selected: !0
        },
        {
            channelIcon: () =>
                (0, l.jsx)(a.VL1, {
                    size: 'md',
                    color: 'currentColor',
                    className: x.channelIcon
                }),
            channel: S.NW.string(S.t['imVD+v']),
            selected: !1
        },
        {
            channelIcon: () =>
                (0, l.jsx)(a.Mmi, {
                    size: 'md',
                    color: 'currentColor',
                    className: x.channelIcon
                }),
            channel: S.NW.string(S.t['Pj/Wpq']),
            selected: !0
        }
    ];
function _(e) {
    let { isTooltip: t = !1 } = e,
        n = T();
    t && n.pop();
    let r = t
            ? (0, l.jsx)(a.Text, {
                  variant: 'text-sm/semibold',
                  color: 'header-primary',
                  children: S.NW.string(S.t.nTI2mZ)
              })
            : (0, l.jsx)(a.X6q, {
                  variant: 'heading-md/semibold',
                  children: S.NW.string(S.t.g1OQtr)
              }),
        s = t
            ? (0, l.jsx)(a.Text, {
                  variant: 'text-xxs/normal',
                  children: S.NW.format(S.t.hGwDPT, {})
              })
            : (0, l.jsx)(a.Text, {
                  variant: 'text-xs/normal',
                  children: S.NW.format(S.t['8XLD3t'], {})
              });
    return (0, l.jsxs)('div', {
        className: i()(x.upsellPreview, x.spacingLarge, { [x.tooltip]: t }),
        children: [
            r,
            (0, l.jsx)('div', {
                className: x.spacingSmall,
                children: n.map((e, t) => {
                    let { emoji: n, emojiDescription: r, title: s, selected: o } = e;
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: i()(x.previewListItem, { [x.selected]: o }),
                            children: [
                                (0, l.jsx)('span', {
                                    role: 'img',
                                    'aria-label': r,
                                    children: n
                                }),
                                (0, l.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-primary',
                                    children: s
                                }),
                                o &&
                                    (0, l.jsx)('div', {
                                        className: x.checkboxCircle,
                                        children: (0, l.jsx)(a.dz2, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: x.checkmark
                                        })
                                    })
                            ]
                        },
                        t
                    );
                })
            }),
            s
        ]
    });
}
function j() {
    let e = [
        {
            message: S.t.FUUXXl,
            profilePic: 'https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80',
            adminTitle: S.NW.string(S.t.RZVpur)
        },
        {
            message: S.t.JAXvDQ,
            profilePic: 'https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80',
            adminTitle: S.NW.string(S.t.xyrlg4)
        },
        {
            message: S.t.Wj9Djo,
            profilePic: 'https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80',
            adminTitle: S.NW.string(S.t['o/LQMj'])
        },
        {
            message: S.t.ALsMNT,
            profilePic: 'https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80',
            adminTitle: S.NW.string(S.t['uvM+xc'])
        }
    ];
    return (0, l.jsx)(d.i, { testimonials: e });
}
function v() {
    let e = (0, s.e7)([g.Z], () => g.Z.getGuildId()),
        t = (0, s.e7)([N.Z], () => N.Z.getGuild(e)),
        n = (0, s.e7)([h.default], () => h.default.getCurrentUser());
    return null == e || null == t || null == n
        ? null
        : (0, l.jsxs)('div', {
              className: x.upsellContainer,
              children: [
                  (0, l.jsxs)('div', {
                      className: x.upsellHeader,
                      children: [
                          (0, l.jsxs)('div', {
                              className: x.islands,
                              children: [
                                  (0, l.jsx)(c.xm, {}),
                                  (0, l.jsx)(c._I, {
                                      guild: t,
                                      mainIslandClassName: x.mainIsland,
                                      balloonDogClassName: x.balloonDog
                                  }),
                                  (0, l.jsx)(c.B0, {})
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: x.upsellHeaderText,
                              children: [
                                  (0, l.jsx)(a.X6q, {
                                      variant: 'heading-xl/semibold',
                                      children: S.NW.string(S.t.GnKOAw)
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: S.NW.string(S.t.SJRFJi)
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: x.upsellButtons,
                              children: (0, l.jsx)(a.zxk, {
                                  onClick: function () {
                                      if (null != e) {
                                          var t, n;
                                          I.default.track(
                                              E.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                                              ((t = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          l = Object.keys(n);
                                                      'function' == typeof Object.getOwnPropertySymbols &&
                                                          (l = l.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                              })
                                                          )),
                                                          l.forEach(function (t) {
                                                              var l;
                                                              (l = n[t]),
                                                                  t in e
                                                                      ? Object.defineProperty(e, t, {
                                                                            value: l,
                                                                            enumerable: !0,
                                                                            configurable: !0,
                                                                            writable: !0
                                                                        })
                                                                      : (e[t] = l);
                                                          });
                                                  }
                                                  return e;
                                              })({}, (0, o.hH)(e))),
                                              (n = n =
                                                  {
                                                      step: p.PG[p.PG.LANDING],
                                                      back: !1,
                                                      skip: !1
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var l = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, l);
                                                        }
                                                        return n;
                                                    })(Object(n)).forEach(function (e) {
                                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                    }),
                                              t)
                                          ),
                                              (0, f.IG)(e, p.PG.LANDING);
                                      }
                                  },
                                  color: a.zxk.Colors.BRAND,
                                  disabled: !1,
                                  children: S.NW.string(S.t.RzWDqa)
                              })
                          })
                      ]
                  }),
                  (0, l.jsx)(a.$i$, {}),
                  (0, l.jsx)(j, {}),
                  (0, l.jsx)(a.$i$, {}),
                  (0, l.jsxs)('div', {
                      className: x.valuesContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: x.valueContainer,
                              children: [
                                  (0, l.jsx)(_, {}),
                                  (0, l.jsxs)('div', {
                                      className: x.valueText,
                                      children: [
                                          (0, l.jsx)(a.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: S.NW.string(S.t.Z7kqKS)
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: S.NW.string(S.t.di3UCw)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: x.valueContainer,
                              children: [
                                  (0, l.jsxs)('div', {
                                      className: x.valueText,
                                      children: [
                                          (0, l.jsx)(a.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: S.NW.string(S.t.O4jYEh)
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: S.NW.string(S.t['l/l/Gx'])
                                          })
                                      ]
                                  }),
                                  (0, l.jsxs)('div', {
                                      className: i()(x.upsellPreview, x.spacingLarge),
                                      children: [
                                          (0, l.jsx)(m.Z, {
                                              guildId: e,
                                              welcomeMessage: {
                                                  authorIds: [n.id],
                                                  message: S.NW.string(S.t.hIWAfn)
                                              }
                                          }),
                                          (0, l.jsx)(u.k, {
                                              title: S.NW.string(S.t['47zu7O']),
                                              subtitle: S.NW.string(S.t.amoSNz),
                                              completed: !0,
                                              Icon: a.VL1,
                                              variant: 'static'
                                          }),
                                          (0, l.jsx)(u.k, {
                                              title: S.NW.string(S.t.EZfTKC),
                                              subtitle: S.NW.string(S.t['/sYelZ']),
                                              completed: !0,
                                              Icon: a.VL1,
                                              variant: 'static'
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: x.valueContainer,
                              children: [
                                  (0, l.jsx)('div', {
                                      className: i()(x.upsellPreview, x.spacingLarge),
                                      children: O().map((e, t) => {
                                          let { channelIcon: n, channel: r, selected: s } = e;
                                          return (0, l.jsxs)(
                                              'div',
                                              {
                                                  className: i()(x.previewListItem, x.spaceBetween, { [x.selected]: s }),
                                                  children: [
                                                      (0, l.jsxs)('div', {
                                                          className: x.channel,
                                                          children: [
                                                              n(),
                                                              (0, l.jsx)(a.Text, {
                                                                  variant: 'text-md/medium',
                                                                  color: 'header-primary',
                                                                  children: r
                                                              })
                                                          ]
                                                      }),
                                                      (0, l.jsx)('div', {
                                                          className: i()(x.checkbox, { [x.selected]: s }),
                                                          children:
                                                              s &&
                                                              (0, l.jsx)(a.dz2, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: x.checkmark
                                                              })
                                                      })
                                                  ]
                                              },
                                              t
                                          );
                                      })
                                  }),
                                  (0, l.jsxs)('div', {
                                      className: x.valueText,
                                      children: [
                                          (0, l.jsx)(a.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: S.NW.string(S.t['3T9aHB'])
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: S.NW.string(S.t.dA7Cam)
                                          })
                                      ]
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
}
