t.d(n, {
    Z: function () {
        return j;
    },
    j: function () {
        return p;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    s = t(442837),
    a = t(481060),
    o = t(367907),
    c = t(548473),
    d = t(721012),
    u = t(869764),
    m = t(150512),
    I = t(430824),
    h = t(594174),
    N = t(626135),
    g = t(999382),
    T = t(983135),
    f = t(84658),
    S = t(981631),
    x = t(388032),
    E = t(798623);
let _ = () => [
        {
            emoji: '\uD83E\uDDD9',
            emojiDescription: x.intl.string(x.t.Jh9uiY),
            title: x.intl.string(x.t.ATF45u),
            selected: !0
        },
        {
            emoji: '\uD83C\uDFA4',
            emojiDescription: x.intl.string(x.t['nGt+MT']),
            title: x.intl.string(x.t['30uo7O']),
            selected: !1
        },
        {
            emoji: '\uD83D\uDC40',
            emojiDescription: x.intl.string(x.t.hOMH5u),
            title: x.intl.string(x.t['5Z5sgo']),
            selected: !1
        }
    ],
    v = () => [
        {
            channelIcon: () =>
                (0, i.jsx)(a.AnnouncementsIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.channelIcon
                }),
            channel: x.intl.string(x.t.MXJozM),
            selected: !0
        },
        {
            channelIcon: () =>
                (0, i.jsx)(a.TextIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.channelIcon
                }),
            channel: x.intl.string(x.t.Pkj0f3),
            selected: !0
        },
        {
            channelIcon: () =>
                (0, i.jsx)(a.TextIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.channelIcon
                }),
            channel: x.intl.string(x.t['imVD+v']),
            selected: !1
        },
        {
            channelIcon: () =>
                (0, i.jsx)(a.ForumIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.channelIcon
                }),
            channel: x.intl.string(x.t['Pj/Wpq']),
            selected: !0
        }
    ];
function p(e) {
    let { isTooltip: n = !1 } = e,
        t = _();
    n && t.pop();
    let l = n
            ? (0, i.jsx)(a.Text, {
                  variant: 'text-sm/semibold',
                  color: 'header-primary',
                  children: x.intl.string(x.t.nTI2mZ)
              })
            : (0, i.jsx)(a.Heading, {
                  variant: 'heading-md/semibold',
                  children: x.intl.string(x.t.g1OQtr)
              }),
        s = n
            ? (0, i.jsx)(a.Text, {
                  variant: 'text-xxs/normal',
                  children: x.intl.format(x.t.hGwDPT, {})
              })
            : (0, i.jsx)(a.Text, {
                  variant: 'text-xs/normal',
                  children: x.intl.format(x.t['8XLD3t'], {})
              });
    return (0, i.jsxs)('div', {
        className: r()(E.upsellPreview, E.spacingLarge, { [E.tooltip]: n }),
        children: [
            l,
            (0, i.jsx)('div', {
                className: E.spacingSmall,
                children: t.map((e, n) => {
                    let { emoji: t, emojiDescription: l, title: s, selected: o } = e;
                    return (0, i.jsxs)(
                        'div',
                        {
                            className: r()(E.previewListItem, { [E.selected]: o }),
                            children: [
                                (0, i.jsx)('span', {
                                    role: 'img',
                                    'aria-label': l,
                                    children: t
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-primary',
                                    children: s
                                }),
                                o &&
                                    (0, i.jsx)('div', {
                                        className: E.checkboxCircle,
                                        children: (0, i.jsx)(a.CheckmarkLargeIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: E.checkmark
                                        })
                                    })
                            ]
                        },
                        n
                    );
                })
            }),
            s
        ]
    });
}
function C() {
    let e = [
        {
            message: x.t.FUUXXl,
            profilePic: 'https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80',
            adminTitle: x.intl.string(x.t.RZVpur)
        },
        {
            message: x.t.JAXvDQ,
            profilePic: 'https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80',
            adminTitle: x.intl.string(x.t.xyrlg4)
        },
        {
            message: x.t.Wj9Djo,
            profilePic: 'https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80',
            adminTitle: x.intl.string(x.t['o/LQMj'])
        },
        {
            message: x.t.ALsMNT,
            profilePic: 'https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80',
            adminTitle: x.intl.string(x.t['uvM+xc'])
        }
    ];
    return (0, i.jsx)(d.i, { testimonials: e });
}
function j() {
    let e = (0, s.e7)([g.Z], () => g.Z.getGuildId()),
        n = (0, s.e7)([I.Z], () => I.Z.getGuild(e)),
        t = (0, s.e7)([h.default], () => h.default.getCurrentUser());
    return null == e || null == n || null == t
        ? null
        : (0, i.jsxs)('div', {
              className: E.upsellContainer,
              children: [
                  (0, i.jsxs)('div', {
                      className: E.upsellHeader,
                      children: [
                          (0, i.jsxs)('div', {
                              className: E.islands,
                              children: [
                                  (0, i.jsx)(c.xm, {}),
                                  (0, i.jsx)(c._I, {
                                      guild: n,
                                      mainIslandClassName: E.mainIsland,
                                      balloonDogClassName: E.balloonDog
                                  }),
                                  (0, i.jsx)(c.B0, {})
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: E.upsellHeaderText,
                              children: [
                                  (0, i.jsx)(a.Heading, {
                                      variant: 'heading-xl/semibold',
                                      children: x.intl.string(x.t.GnKOAw)
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: x.intl.string(x.t.SJRFJi)
                                  })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              className: E.upsellButtons,
                              children: (0, i.jsx)(a.Button, {
                                  onClick: function () {
                                      null != e &&
                                          (N.default.track(S.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
                                              ...(0, o.hH)(e),
                                              step: f.PG[f.PG.LANDING],
                                              back: !1,
                                              skip: !1
                                          }),
                                          (0, T.IG)(e, f.PG.LANDING));
                                  },
                                  color: a.Button.Colors.BRAND,
                                  disabled: !1,
                                  children: x.intl.string(x.t.RzWDqa)
                              })
                          })
                      ]
                  }),
                  (0, i.jsx)(a.FormDivider, {}),
                  (0, i.jsx)(C, {}),
                  (0, i.jsx)(a.FormDivider, {}),
                  (0, i.jsxs)('div', {
                      className: E.valuesContainer,
                      children: [
                          (0, i.jsxs)('div', {
                              className: E.valueContainer,
                              children: [
                                  (0, i.jsx)(p, {}),
                                  (0, i.jsxs)('div', {
                                      className: E.valueText,
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: 'heading-md/semibold',
                                              children: x.intl.string(x.t.Z7kqKS)
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: x.intl.string(x.t.di3UCw)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsxs)('div', {
                                  className: E.valueContainer,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: E.valueText,
                                          children: [
                                              (0, i.jsx)(a.Heading, {
                                                  variant: 'heading-md/semibold',
                                                  children: x.intl.string(x.t.O4jYEh)
                                              }),
                                              (0, i.jsx)(a.Text, {
                                                  variant: 'text-sm/normal',
                                                  children: x.intl.string(x.t['l/l/Gx'])
                                              })
                                          ]
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: r()(E.upsellPreview, E.spacingLarge),
                                          children: [
                                              (0, i.jsx)(m.Z, {
                                                  guildId: e,
                                                  welcomeMessage: {
                                                      authorIds: [t.id],
                                                      message: x.intl.string(x.t.hIWAfn)
                                                  }
                                              }),
                                              (0, i.jsx)(u.k, {
                                                  title: x.intl.string(x.t['47zu7O']),
                                                  subtitle: x.intl.string(x.t.amoSNz),
                                                  completed: !0,
                                                  Icon: a.TextIcon,
                                                  variant: 'static'
                                              }),
                                              (0, i.jsx)(u.k, {
                                                  title: x.intl.string(x.t.EZfTKC),
                                                  subtitle: x.intl.string(x.t['/sYelZ']),
                                                  completed: !0,
                                                  Icon: a.TextIcon,
                                                  variant: 'static'
                                              })
                                          ]
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsxs)('div', {
                              className: E.valueContainer,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: r()(E.upsellPreview, E.spacingLarge),
                                      children: v().map((e, n) => {
                                          let { channelIcon: t, channel: l, selected: s } = e;
                                          return (0, i.jsxs)(
                                              'div',
                                              {
                                                  className: r()(E.previewListItem, E.spaceBetween, { [E.selected]: s }),
                                                  children: [
                                                      (0, i.jsxs)('div', {
                                                          className: E.channel,
                                                          children: [
                                                              t(),
                                                              (0, i.jsx)(a.Text, {
                                                                  variant: 'text-md/medium',
                                                                  color: 'header-primary',
                                                                  children: l
                                                              })
                                                          ]
                                                      }),
                                                      (0, i.jsx)('div', {
                                                          className: r()(E.checkbox, { [E.selected]: s }),
                                                          children:
                                                              s &&
                                                              (0, i.jsx)(a.CheckmarkLargeIcon, {
                                                                  size: 'md',
                                                                  color: 'currentColor',
                                                                  className: E.checkmark
                                                              })
                                                      })
                                                  ]
                                              },
                                              n
                                          );
                                      })
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: E.valueText,
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: 'heading-md/semibold',
                                              children: x.intl.string(x.t['3T9aHB'])
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: 'text-sm/normal',
                                              children: x.intl.string(x.t.dA7Cam)
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
