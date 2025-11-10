n.d(t, {
    Z: () => _,
    j: () => x,
});
var l = n(951288);
n(647438);
var r = n(120356),
    i = n.n(r),
    a = n(442837),
    s = n(481060),
    o = n(367907),
    c = n(548473),
    d = n(721012),
    u = n(869764),
    m = n(150512),
    g = n(430824),
    h = n(594174),
    f = n(626135),
    N = n(999382),
    I = n(983135),
    p = n(84658),
    O = n(981631),
    E = n(388032),
    S = n(473450);
function x(e) {
    let { isTooltip: t = !1 } = e,
        n = [
            {
                emoji: "\uD83E\uDDD9",
                emojiDescription: E.intl.string(E.t.Jh9uif),
                title: E.intl.string(E.t.ATF45v),
                selected: !0,
            },
            {
                emoji: "\uD83C\uDFA4",
                emojiDescription: E.intl.string(E.t["nGt+MV"]),
                title: E.intl.string(E.t["30uo7D"]),
                selected: !1,
            },
            {
                emoji: "\uD83D\uDC40",
                emojiDescription: E.intl.string(E.t.hOMH5o),
                title: E.intl.string(E.t["5Z5sgj"]),
                selected: !1,
            },
        ];
    t && n.pop();
    let r = t
            ? (0, l.jsx)(s.Text, {
                  variant: "text-sm/semibold",
                  color: "header-primary",
                  children: E.intl.string(E.t.nTI2mQ),
              })
            : (0, l.jsx)(s.Heading, {
                  variant: "heading-md/semibold",
                  children: E.intl.string(E.t.g1OQtu),
              }),
        a = t
            ? (0, l.jsx)(s.Text, {
                  variant: "text-xxs/normal",
                  children: E.intl.format(E.t.hGwDPV, {}),
              })
            : (0, l.jsx)(s.Text, {
                  variant: "text-xs/normal",
                  children: E.intl.format(E.t["8XLD3r"], {}),
              });
    return (0, l.jsxs)("div", {
        className: i()(S.upsellPreview, S.spacingLarge, { [S.tooltip]: t }),
        children: [
            r,
            (0, l.jsx)("div", {
                className: S.spacingSmall,
                children: n.map((e, t) => {
                    let { emoji: n, emojiDescription: r, title: a, selected: o } = e;
                    return (0, l.jsxs)(
                        "div",
                        {
                            className: i()(S.previewListItem, { [S.selected]: o }),
                            children: [
                                (0, l.jsx)("span", {
                                    role: "img",
                                    "aria-label": r,
                                    children: n,
                                }),
                                (0, l.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "header-primary",
                                    children: a,
                                }),
                                o &&
                                    (0, l.jsx)("div", {
                                        className: S.checkboxCircle,
                                        children: (0, l.jsx)(s.dz2, {
                                            size: "md",
                                            color: "currentColor",
                                            className: S.checkmark,
                                        }),
                                    }),
                            ],
                        },
                        t,
                    );
                }),
            }),
            a,
        ],
    });
}
function T() {
    let e = [
        {
            message: E.t.FUUXXk,
            profilePic:
                "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
            adminTitle: E.intl.string(E.t.RZVpuo),
        },
        {
            message: E.t.JAXvDe,
            profilePic:
                "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
            adminTitle: E.intl.string(E.t.xyrlg7),
        },
        {
            message: E.t.Wj9Djq,
            profilePic:
                "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
            adminTitle: E.intl.string(E.t["o/LQMi"]),
        },
        {
            message: E.t.ALsMNZ,
            profilePic:
                "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
            adminTitle: E.intl.string(E.t["uvM+xc"]),
        },
    ];
    return (0, l.jsx)(d.i, { testimonials: e });
}
function _() {
    let e = (0, a.e7)([N.Z], () => N.Z.getGuildId()),
        t = (0, a.e7)([g.Z], () => g.Z.getGuild(e)),
        n = (0, a.e7)([h.default], () => h.default.getCurrentUser());
    return null == e || null == t || null == n
        ? null
        : (0, l.jsxs)("div", {
              className: S.upsellContainer,
              children: [
                  (0, l.jsxs)("div", {
                      className: S.upsellHeader,
                      children: [
                          (0, l.jsxs)("div", {
                              className: S.islands,
                              children: [
                                  (0, l.jsx)(c.xm, {}),
                                  (0, l.jsx)(c._I, {
                                      guild: t,
                                      mainIslandClassName: S.mainIsland,
                                      balloonDogClassName: S.balloonDog,
                                  }),
                                  (0, l.jsx)(c.B0, {}),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: S.upsellHeaderText,
                              children: [
                                  (0, l.jsx)(s.Heading, {
                                      variant: "heading-xl/semibold",
                                      children: E.intl.string(E.t.GnKOAx),
                                  }),
                                  (0, l.jsx)(s.Text, {
                                      variant: "text-md/normal",
                                      children: E.intl.string(E.t.SJRFJj),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: S.upsellButtons,
                              children: (0, l.jsx)(s.Button, {
                                  variant: "primary",
                                  text: E.intl.string(E.t.RzWDqY),
                                  onClick: function () {
                                      if (null != e) {
                                          var t, n;
                                          f.default.track(
                                              O.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                                              ((t = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          l = Object.keys(n);
                                                      "function" == typeof Object.getOwnPropertySymbols &&
                                                          (l = l.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e)
                                                                      .enumerable;
                                                              }),
                                                          )),
                                                          l.forEach(function (t) {
                                                              var l;
                                                              (l = n[t]),
                                                                  t in e
                                                                      ? Object.defineProperty(e, t, {
                                                                            value: l,
                                                                            enumerable: !0,
                                                                            configurable: !0,
                                                                            writable: !0,
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
                                                      skip: !1,
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
                                                        Object.defineProperty(
                                                            t,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(n, e),
                                                        );
                                                    }),
                                              t),
                                          ),
                                              (0, I.IG)(e, p.PG.LANDING);
                                      }
                                  },
                                  disabled: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsx)(s.izJ, {}),
                  (0, l.jsx)(T, {}),
                  (0, l.jsx)(s.izJ, {}),
                  (0, l.jsxs)("div", {
                      className: S.valuesContainer,
                      children: [
                          (0, l.jsxs)("div", {
                              className: S.valueContainer,
                              children: [
                                  (0, l.jsx)(x, {}),
                                  (0, l.jsxs)("div", {
                                      className: S.valueText,
                                      children: [
                                          (0, l.jsx)(s.Heading, {
                                              variant: "heading-md/semibold",
                                              children: E.intl.string(E.t.Z7kqKZ),
                                          }),
                                          (0, l.jsx)(s.Text, {
                                              variant: "text-sm/normal",
                                              children: E.intl.string(E.t.di3UC5),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: S.valueContainer,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: S.valueText,
                                      children: [
                                          (0, l.jsx)(s.Heading, {
                                              variant: "heading-md/semibold",
                                              children: E.intl.string(E.t.O4jYEh),
                                          }),
                                          (0, l.jsx)(s.Text, {
                                              variant: "text-sm/normal",
                                              children: E.intl.string(E.t["l/l/Gw"]),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: i()(S.upsellPreview, S.spacingLarge),
                                      children: [
                                          (0, l.jsx)(m.Z, {
                                              guildId: e,
                                              welcomeMessage: {
                                                  authorIds: [n.id],
                                                  message: E.intl.string(E.t.hIWAft),
                                              },
                                          }),
                                          (0, l.jsx)(u.k, {
                                              title: E.intl.string(E.t["47zu7B"]),
                                              subtitle: E.intl.string(E.t["amoSN/"]),
                                              completed: !0,
                                              Icon: s.VL1,
                                              variant: "static",
                                          }),
                                          (0, l.jsx)(u.k, {
                                              title: E.intl.string(E.t.EZfTKE),
                                              subtitle: E.intl.string(E.t["/sYelW"]),
                                              completed: !0,
                                              Icon: s.VL1,
                                              variant: "static",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: S.valueContainer,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: i()(S.upsellPreview, S.spacingLarge),
                                      children: [
                                          {
                                              channelIcon: () =>
                                                  (0, l.jsx)(s.MqZ, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: S.channelIcon,
                                                  }),
                                              channel: E.intl.string(E.t.MXJozL),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, l.jsx)(s.VL1, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: S.channelIcon,
                                                  }),
                                              channel: E.intl.string(E.t.Pkj0f6),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, l.jsx)(s.VL1, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: S.channelIcon,
                                                  }),
                                              channel: E.intl.string(E.t["imVD+u"]),
                                              selected: !1,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, l.jsx)(s.Mmi, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: S.channelIcon,
                                                  }),
                                              channel: E.intl.string(E.t["Pj/Wpt"]),
                                              selected: !0,
                                          },
                                      ].map((e, t) => {
                                          let { channelIcon: n, channel: r, selected: a } = e;
                                          return (0, l.jsxs)(
                                              "div",
                                              {
                                                  className: i()(S.previewListItem, S.spaceBetween, {
                                                      [S.selected]: a,
                                                  }),
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: S.channel,
                                                          children: [
                                                              n(),
                                                              (0, l.jsx)(s.Text, {
                                                                  variant: "text-md/medium",
                                                                  color: "header-primary",
                                                                  children: r,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: i()(S.checkbox, { [S.selected]: a }),
                                                          children:
                                                              a &&
                                                              (0, l.jsx)(s.dz2, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: S.checkmark,
                                                              }),
                                                      }),
                                                  ],
                                              },
                                              t,
                                          );
                                      }),
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: S.valueText,
                                      children: [
                                          (0, l.jsx)(s.Heading, {
                                              variant: "heading-md/semibold",
                                              children: E.intl.string(E.t["3T9aHG"]),
                                          }),
                                          (0, l.jsx)(s.Text, {
                                              variant: "text-sm/normal",
                                              children: E.intl.string(E.t.dA7Cag),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
