n.d(t, {
    Z: () => v,
    j: () => _
});
var l = n(255367);
n(73800);
var i = n(120356),
    r = n.n(i),
    s = n(442837),
    a = n(481060),
    o = n(367907),
    c = n(548473),
    d = n(721012),
    u = n(869764),
    m = n(150512),
    I = n(430824),
    h = n(594174),
    g = n(626135),
    N = n(999382),
    f = n(983135),
    S = n(84658),
    p = n(981631),
    E = n(388032),
    T = n(568614);
let x = () => [
        {
            emoji: '\uD83E\uDDD9',
            emojiDescription: E.intl.string(E.t.Jh9uiY),
            title: E.intl.string(E.t.ATF45u),
            selected: !0
        },
        {
            emoji: '\uD83C\uDFA4',
            emojiDescription: E.intl.string(E.t['nGt+MT']),
            title: E.intl.string(E.t['30uo7O']),
            selected: !1
        },
        {
            emoji: '\uD83D\uDC40',
            emojiDescription: E.intl.string(E.t.hOMH5u),
            title: E.intl.string(E.t['5Z5sgo']),
            selected: !1
        }
    ],
    O = () => [
        {
            channelIcon: () =>
                (0, l.jsx)(a.MqZ, {
                    size: 'xs',
                    color: 'currentColor',
                    className: T.channelIcon
                }),
            channel: E.intl.string(E.t.MXJozM),
            selected: !0
        },
        {
            channelIcon: () =>
                (0, l.jsx)(a.VL1, {
                    size: 'md',
                    color: 'currentColor',
                    className: T.channelIcon
                }),
            channel: E.intl.string(E.t.Pkj0f3),
            selected: !0
        },
        {
            channelIcon: () =>
                (0, l.jsx)(a.VL1, {
                    size: 'md',
                    color: 'currentColor',
                    className: T.channelIcon
                }),
            channel: E.intl.string(E.t['imVD+v']),
            selected: !1
        },
        {
            channelIcon: () =>
                (0, l.jsx)(a.Mmi, {
                    size: 'md',
                    color: 'currentColor',
                    className: T.channelIcon
                }),
            channel: E.intl.string(E.t['Pj/Wpq']),
            selected: !0
        }
    ];
function _(e) {
    let { isTooltip: t = !1 } = e,
        n = x();
    t && n.pop();
    let i = t
            ? (0, l.jsx)(a.Text, {
                  variant: 'text-sm/semibold',
                  color: 'header-primary',
                  children: E.intl.string(E.t.nTI2mZ)
              })
            : (0, l.jsx)(a.X6q, {
                  variant: 'heading-md/semibold',
                  children: E.intl.string(E.t.g1OQtr)
              }),
        s = t
            ? (0, l.jsx)(a.Text, {
                  variant: 'text-xxs/normal',
                  children: E.intl.format(E.t.hGwDPT, {})
              })
            : (0, l.jsx)(a.Text, {
                  variant: 'text-xs/normal',
                  children: E.intl.format(E.t['8XLD3t'], {})
              });
    return (0, l.jsxs)('div', {
        className: r()(T.upsellPreview, T.spacingLarge, { [T.tooltip]: t }),
        children: [
            i,
            (0, l.jsx)('div', {
                className: T.spacingSmall,
                children: n.map((e, t) => {
                    let { emoji: n, emojiDescription: i, title: s, selected: o } = e;
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: r()(T.previewListItem, { [T.selected]: o }),
                            children: [
                                (0, l.jsx)('span', {
                                    role: 'img',
                                    'aria-label': i,
                                    children: n
                                }),
                                (0, l.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-primary',
                                    children: s
                                }),
                                o &&
                                    (0, l.jsx)('div', {
                                        className: T.checkboxCircle,
                                        children: (0, l.jsx)(a.dz2, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: T.checkmark
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
            message: E.t.FUUXXl,
            profilePic: 'https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80',
            adminTitle: E.intl.string(E.t.RZVpur)
        },
        {
            message: E.t.JAXvDQ,
            profilePic: 'https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80',
            adminTitle: E.intl.string(E.t.xyrlg4)
        },
        {
            message: E.t.Wj9Djo,
            profilePic: 'https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80',
            adminTitle: E.intl.string(E.t['o/LQMj'])
        },
        {
            message: E.t.ALsMNT,
            profilePic: 'https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80',
            adminTitle: E.intl.string(E.t['uvM+xc'])
        }
    ];
    return (0, l.jsx)(d.i, { testimonials: e });
}
function v() {
    let e = (0, s.e7)([N.Z], () => N.Z.getGuildId()),
        t = (0, s.e7)([I.Z], () => I.Z.getGuild(e)),
        n = (0, s.e7)([h.default], () => h.default.getCurrentUser());
    return null == e || null == t || null == n
        ? null
        : (0, l.jsxs)('div', {
              className: T.upsellContainer,
              children: [
                  (0, l.jsxs)('div', {
                      className: T.upsellHeader,
                      children: [
                          (0, l.jsxs)('div', {
                              className: T.islands,
                              children: [
                                  (0, l.jsx)(c.xm, {}),
                                  (0, l.jsx)(c._I, {
                                      guild: t,
                                      mainIslandClassName: T.mainIsland,
                                      balloonDogClassName: T.balloonDog
                                  }),
                                  (0, l.jsx)(c.B0, {})
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: T.upsellHeaderText,
                              children: [
                                  (0, l.jsx)(a.X6q, {
                                      variant: 'heading-xl/semibold',
                                      children: E.intl.string(E.t.GnKOAw)
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: E.intl.string(E.t.SJRFJi)
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: T.upsellButtons,
                              children: (0, l.jsx)(a.zxk, {
                                  variant: 'primary',
                                  text: E.intl.string(E.t.RzWDqa),
                                  onClick: function () {
                                      if (null != e) {
                                          var t, n;
                                          (g.default.track(
                                              p.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                                              ((t = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          l = Object.keys(n);
                                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                                          (l = l.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                              })
                                                          )),
                                                          l.forEach(function (t) {
                                                              var l;
                                                              ((l = n[t]),
                                                                  t in e
                                                                      ? Object.defineProperty(e, t, {
                                                                            value: l,
                                                                            enumerable: !0,
                                                                            configurable: !0,
                                                                            writable: !0
                                                                        })
                                                                      : (e[t] = l));
                                                          }));
                                                  }
                                                  return e;
                                              })({}, (0, o.hH)(e))),
                                              (n = n =
                                                  {
                                                      step: S.PG[S.PG.LANDING],
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
                                              (0, f.IG)(e, S.PG.LANDING));
                                      }
                                  },
                                  disabled: !1
                              })
                          })
                      ]
                  }),
                  (0, l.jsx)(a.$i$, {}),
                  (0, l.jsx)(j, {}),
                  (0, l.jsx)(a.$i$, {}),
                  (0, l.jsxs)('div', {
                      className: T.valuesContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: T.valueContainer,
                              children: [
                                  (0, l.jsx)(_, {}),
                                  (0, l.jsxs)('div', {
                                      className: T.valueText,
                                      children: [
                                          (0, l.jsx)(a.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: E.intl.string(E.t.Z7kqKS)
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: E.intl.string(E.t.di3UCw)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: T.valueContainer,
                              children: [
                                  (0, l.jsxs)('div', {
                                      className: T.valueText,
                                      children: [
                                          (0, l.jsx)(a.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: E.intl.string(E.t.O4jYEh)
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: E.intl.string(E.t['l/l/Gx'])
                                          })
                                      ]
                                  }),
                                  (0, l.jsxs)('div', {
                                      className: r()(T.upsellPreview, T.spacingLarge),
                                      children: [
                                          (0, l.jsx)(m.Z, {
                                              guildId: e,
                                              welcomeMessage: {
                                                  authorIds: [n.id],
                                                  message: E.intl.string(E.t.hIWAfn)
                                              }
                                          }),
                                          (0, l.jsx)(u.k, {
                                              title: E.intl.string(E.t['47zu7O']),
                                              subtitle: E.intl.string(E.t.amoSNz),
                                              completed: !0,
                                              Icon: a.VL1,
                                              variant: 'static'
                                          }),
                                          (0, l.jsx)(u.k, {
                                              title: E.intl.string(E.t.EZfTKC),
                                              subtitle: E.intl.string(E.t['/sYelZ']),
                                              completed: !0,
                                              Icon: a.VL1,
                                              variant: 'static'
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: T.valueContainer,
                              children: [
                                  (0, l.jsx)('div', {
                                      className: r()(T.upsellPreview, T.spacingLarge),
                                      children: O().map((e, t) => {
                                          let { channelIcon: n, channel: i, selected: s } = e;
                                          return (0, l.jsxs)(
                                              'div',
                                              {
                                                  className: r()(T.previewListItem, T.spaceBetween, { [T.selected]: s }),
                                                  children: [
                                                      (0, l.jsxs)('div', {
                                                          className: T.channel,
                                                          children: [
                                                              n(),
                                                              (0, l.jsx)(a.Text, {
                                                                  variant: 'text-md/medium',
                                                                  color: 'header-primary',
                                                                  children: i
                                                              })
                                                          ]
                                                      }),
                                                      (0, l.jsx)('div', {
                                                          className: r()(T.checkbox, { [T.selected]: s }),
                                                          children:
                                                              s &&
                                                              (0, l.jsx)(a.dz2, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: T.checkmark
                                                              })
                                                      })
                                                  ]
                                              },
                                              t
                                          );
                                      })
                                  }),
                                  (0, l.jsxs)('div', {
                                      className: T.valueText,
                                      children: [
                                          (0, l.jsx)(a.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: E.intl.string(E.t['3T9aHB'])
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: E.intl.string(E.t.dA7Cam)
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
