t.d(n, {
    Z: () => j,
    j: () => v
});
var l = t(200651);
t(192379);
var i = t(120356),
    s = t.n(i),
    r = t(442837),
    a = t(481060),
    o = t(367907),
    d = t(548473),
    c = t(721012),
    u = t(869764),
    m = t(150512),
    I = t(430824),
    h = t(594174),
    N = t(626135),
    g = t(999382),
    x = t(983135),
    E = t(84658),
    T = t(981631),
    S = t(388032),
    _ = t(461973);
let f = () => [
        {
            emoji: '\uD83E\uDDD9',
            emojiDescription: S.intl.string(S.t.Jh9uiY),
            title: S.intl.string(S.t.ATF45u),
            selected: !0
        },
        {
            emoji: '\uD83C\uDFA4',
            emojiDescription: S.intl.string(S.t['nGt+MT']),
            title: S.intl.string(S.t['30uo7O']),
            selected: !1
        },
        {
            emoji: '\uD83D\uDC40',
            emojiDescription: S.intl.string(S.t.hOMH5u),
            title: S.intl.string(S.t['5Z5sgo']),
            selected: !1
        }
    ],
    p = () => [
        {
            channelIcon: () =>
                (0, l.jsx)(a.MqZ, {
                    size: 'xs',
                    color: 'currentColor',
                    className: _.channelIcon
                }),
            channel: S.intl.string(S.t.MXJozM),
            selected: !0
        },
        {
            channelIcon: () =>
                (0, l.jsx)(a.VL1, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.channelIcon
                }),
            channel: S.intl.string(S.t.Pkj0f3),
            selected: !0
        },
        {
            channelIcon: () =>
                (0, l.jsx)(a.VL1, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.channelIcon
                }),
            channel: S.intl.string(S.t['imVD+v']),
            selected: !1
        },
        {
            channelIcon: () =>
                (0, l.jsx)(a.Mmi, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.channelIcon
                }),
            channel: S.intl.string(S.t['Pj/Wpq']),
            selected: !0
        }
    ];
function v(e) {
    let { isTooltip: n = !1 } = e,
        t = f();
    n && t.pop();
    let i = n
            ? (0, l.jsx)(a.Text, {
                  variant: 'text-sm/semibold',
                  color: 'header-primary',
                  children: S.intl.string(S.t.nTI2mZ)
              })
            : (0, l.jsx)(a.X6q, {
                  variant: 'heading-md/semibold',
                  children: S.intl.string(S.t.g1OQtr)
              }),
        r = n
            ? (0, l.jsx)(a.Text, {
                  variant: 'text-xxs/normal',
                  children: S.intl.format(S.t.hGwDPT, {})
              })
            : (0, l.jsx)(a.Text, {
                  variant: 'text-xs/normal',
                  children: S.intl.format(S.t['8XLD3t'], {})
              });
    return (0, l.jsxs)('div', {
        className: s()(_.upsellPreview, _.spacingLarge, { [_.tooltip]: n }),
        children: [
            i,
            (0, l.jsx)('div', {
                className: _.spacingSmall,
                children: t.map((e, n) => {
                    let { emoji: t, emojiDescription: i, title: r, selected: o } = e;
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: s()(_.previewListItem, { [_.selected]: o }),
                            children: [
                                (0, l.jsx)('span', {
                                    role: 'img',
                                    'aria-label': i,
                                    children: t
                                }),
                                (0, l.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-primary',
                                    children: r
                                }),
                                o &&
                                    (0, l.jsx)('div', {
                                        className: _.checkboxCircle,
                                        children: (0, l.jsx)(a.dz2, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: _.checkmark
                                        })
                                    })
                            ]
                        },
                        n
                    );
                })
            }),
            r
        ]
    });
}
function C() {
    let e = [
        {
            message: S.t.FUUXXl,
            profilePic: 'https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80',
            adminTitle: S.intl.string(S.t.RZVpur)
        },
        {
            message: S.t.JAXvDQ,
            profilePic: 'https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80',
            adminTitle: S.intl.string(S.t.xyrlg4)
        },
        {
            message: S.t.Wj9Djo,
            profilePic: 'https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80',
            adminTitle: S.intl.string(S.t['o/LQMj'])
        },
        {
            message: S.t.ALsMNT,
            profilePic: 'https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80',
            adminTitle: S.intl.string(S.t['uvM+xc'])
        }
    ];
    return (0, l.jsx)(c.i, { testimonials: e });
}
function j() {
    let e = (0, r.e7)([g.Z], () => g.Z.getGuildId()),
        n = (0, r.e7)([I.Z], () => I.Z.getGuild(e)),
        t = (0, r.e7)([h.default], () => h.default.getCurrentUser());
    return null == e || null == n || null == t
        ? null
        : (0, l.jsxs)('div', {
              className: _.upsellContainer,
              children: [
                  (0, l.jsxs)('div', {
                      className: _.upsellHeader,
                      children: [
                          (0, l.jsxs)('div', {
                              className: _.islands,
                              children: [
                                  (0, l.jsx)(d.xm, {}),
                                  (0, l.jsx)(d._I, {
                                      guild: n,
                                      mainIslandClassName: _.mainIsland,
                                      balloonDogClassName: _.balloonDog
                                  }),
                                  (0, l.jsx)(d.B0, {})
                              ]
                          }),
                          (0, l.jsxs)('div', {
                              className: _.upsellHeaderText,
                              children: [
                                  (0, l.jsx)(a.X6q, {
                                      variant: 'heading-xl/semibold',
                                      children: S.intl.string(S.t.GnKOAw)
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: S.intl.string(S.t.SJRFJi)
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: _.upsellButtons,
                              children: (0, l.jsx)(a.zxk, {
                                  onClick: function () {
                                      null != e &&
                                          (N.default.track(T.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                                              ...(0, o.hH)(e),
                                              step: E.PG[E.PG.LANDING],
                                              back: !1,
                                              skip: !1
                                          }),
                                          (0, x.IG)(e, E.PG.LANDING));
                                  },
                                  color: a.zxk.Colors.BRAND,
                                  disabled: !1,
                                  children: S.intl.string(S.t.RzWDqa)
                              })
                          })
                      ]
                  }),
                  (0, l.jsx)(a.$i$, {}),
                  (0, l.jsx)(C, {}),
                  (0, l.jsx)(a.$i$, {}),
                  (0, l.jsxs)('div', {
                      className: _.valuesContainer,
                      children: [
                          (0, l.jsxs)('div', {
                              className: _.valueContainer,
                              children: [
                                  (0, l.jsx)(v, {}),
                                  (0, l.jsxs)('div', {
                                      className: _.valueText,
                                      children: [
                                          (0, l.jsx)(a.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: S.intl.string(S.t.Z7kqKS)
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: S.intl.string(S.t.di3UCw)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, l.jsx)(l.Fragment, {
                              children: (0, l.jsxs)('div', {
                                  className: _.valueContainer,
                                  children: [
                                      (0, l.jsxs)('div', {
                                          className: _.valueText,
                                          children: [
                                              (0, l.jsx)(a.X6q, {
                                                  variant: 'heading-md/semibold',
                                                  children: S.intl.string(S.t.O4jYEh)
                                              }),
                                              (0, l.jsx)(a.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: S.intl.string(S.t['l/l/Gx'])
                                              })
                                          ]
                                      }),
                                      (0, l.jsxs)('div', {
                                          className: s()(_.upsellPreview, _.spacingLarge),
                                          children: [
                                              (0, l.jsx)(m.Z, {
                                                  guildId: e,
                                                  welcomeMessage: {
                                                      authorIds: [t.id],
                                                      message: S.intl.string(S.t.hIWAfn)
                                                  }
                                              }),
                                              (0, l.jsx)(u.k, {
                                                  title: S.intl.string(S.t['47zu7O']),
                                                  subtitle: S.intl.string(S.t.amoSNz),
                                                  completed: !0,
                                                  Icon: a.VL1,
                                                  variant: 'static'
                                              }),
                                              (0, l.jsx)(u.k, {
                                                  title: S.intl.string(S.t.EZfTKC),
                                                  subtitle: S.intl.string(S.t['/sYelZ']),
                                                  completed: !0,
                                                  Icon: a.VL1,
                                                  variant: 'static'
                                              })
                                          ]
                                      })
                                  ]
                              })
                          }),
                          (0, l.jsxs)('div', {
                              className: _.valueContainer,
                              children: [
                                  (0, l.jsx)('div', {
                                      className: s()(_.upsellPreview, _.spacingLarge),
                                      children: p().map((e, n) => {
                                          let { channelIcon: t, channel: i, selected: r } = e;
                                          return (0, l.jsxs)(
                                              'div',
                                              {
                                                  className: s()(_.previewListItem, _.spaceBetween, { [_.selected]: r }),
                                                  children: [
                                                      (0, l.jsxs)('div', {
                                                          className: _.channel,
                                                          children: [
                                                              t(),
                                                              (0, l.jsx)(a.Text, {
                                                                  variant: 'text-md/medium',
                                                                  color: 'header-primary',
                                                                  children: i
                                                              })
                                                          ]
                                                      }),
                                                      (0, l.jsx)('div', {
                                                          className: s()(_.checkbox, { [_.selected]: r }),
                                                          children:
                                                              r &&
                                                              (0, l.jsx)(a.dz2, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: _.checkmark
                                                              })
                                                      })
                                                  ]
                                              },
                                              n
                                          );
                                      })
                                  }),
                                  (0, l.jsxs)('div', {
                                      className: _.valueText,
                                      children: [
                                          (0, l.jsx)(a.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: S.intl.string(S.t['3T9aHB'])
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: S.intl.string(S.t.dA7Cam)
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
