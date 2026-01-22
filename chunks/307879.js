n.d(t, {
    A: () => _,
    M: () => A,
});
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(311907),
    a = n(397927),
    o = n(58149),
    c = n(133266),
    d = n(120076),
    u = n(283012),
    m = n(913423),
    g = n(71393),
    f = n(287809),
    h = n(954571),
    N = n(555337),
    I = n(527678),
    p = n(400812),
    O = n(652215),
    S = n(985018),
    E = n(944171);
function A(e) {
    let { isTooltip: t = !1 } = e,
        n = [
            {
                emoji: "\uD83E\uDDD9",
                emojiDescription: S.intl.string(S.t.Jh9uif),
                title: S.intl.string(S.t.ATF45v),
                selected: !0,
            },
            {
                emoji: "\uD83C\uDFA4",
                emojiDescription: S.intl.string(S.t["nGt+MV"]),
                title: S.intl.string(S.t["30uo7D"]),
                selected: !1,
            },
            {
                emoji: "\uD83D\uDC40",
                emojiDescription: S.intl.string(S.t.hOMH5o),
                title: S.intl.string(S.t["5Z5sgj"]),
                selected: !1,
            },
        ];
    t && n.pop();
    let r = t
            ? (0, l.jsx)(a.Text, {
                  variant: "text-sm/semibold",
                  color: "text-strong",
                  children: S.intl.string(S.t.nTI2mQ),
              })
            : (0, l.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: S.intl.string(S.t.g1OQtu),
              }),
        s = t
            ? (0, l.jsx)(a.Text, {
                  variant: "text-xxs/normal",
                  children: S.intl.format(S.t.hGwDPV, {}),
              })
            : (0, l.jsx)(a.Text, {
                  variant: "text-xs/normal",
                  children: S.intl.format(S.t["8XLD3r"], {}),
              });
    return (0, l.jsxs)("div", {
        className: i()(E.SI, E.f5, { [E.YL]: t }),
        children: [
            r,
            (0, l.jsx)("div", {
                className: E.Pf,
                children: n.map((e, t) => {
                    let { emoji: n, emojiDescription: r, title: s, selected: o } = e;
                    return (0, l.jsxs)(
                        "div",
                        {
                            className: i()(E.CQ, { [E.wH]: o }),
                            children: [
                                (0, l.jsx)("span", {
                                    role: "img",
                                    "aria-label": r,
                                    children: n,
                                }),
                                (0, l.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-strong",
                                    children: s,
                                }),
                                o &&
                                    (0, l.jsx)("div", {
                                        className: E.ct,
                                        children: (0, l.jsx)(a.A9s, {
                                            size: "md",
                                            color: "currentColor",
                                            className: E.AI,
                                        }),
                                    }),
                            ],
                        },
                        t,
                    );
                }),
            }),
            s,
        ],
    });
}
function x() {
    let e = [
        {
            message: S.t.FUUXXk,
            profilePic:
                "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
            adminTitle: S.intl.string(S.t.RZVpuo),
        },
        {
            message: S.t.JAXvDe,
            profilePic:
                "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
            adminTitle: S.intl.string(S.t.xyrlg7),
        },
        {
            message: S.t.Wj9Djq,
            profilePic:
                "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
            adminTitle: S.intl.string(S.t["o/LQMi"]),
        },
        {
            message: S.t.ALsMNZ,
            profilePic:
                "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
            adminTitle: S.intl.string(S.t["uvM+xc"]),
        },
    ];
    return (0, l.jsx)(d.e, { testimonials: e });
}
function _() {
    let e = (0, s.bG)([N.A], () => N.A.getGuildId()),
        t = (0, s.bG)([g.A], () => g.A.getGuild(e)),
        n = (0, s.bG)([f.default], () => f.default.getCurrentUser());
    return null == e || null == t || null == n
        ? null
        : (0, l.jsxs)("div", {
              className: E.Zj,
              children: [
                  (0, l.jsxs)("div", {
                      className: E.$P,
                      children: [
                          (0, l.jsxs)("div", {
                              className: E.tU,
                              children: [
                                  (0, l.jsx)(c.Mm, {}),
                                  (0, l.jsx)(c.j5, {
                                      guild: t,
                                      mainIslandClassName: E.$h,
                                      balloonDogClassName: E.Sb,
                                  }),
                                  (0, l.jsx)(c.RA, {}),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: E.KF,
                              children: [
                                  (0, l.jsx)(a.Heading, {
                                      variant: "heading-xl/semibold",
                                      children: S.intl.string(S.t.GnKOAx),
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      children: S.intl.string(S.t.SJRFJj),
                                  }),
                              ],
                          }),
                          (0, l.jsx)("div", {
                              className: E.JO,
                              children: (0, l.jsx)(a.Button, {
                                  variant: "primary",
                                  text: S.intl.string(S.t.RzWDqY),
                                  onClick: function () {
                                      if (null != e) {
                                          var t, n;
                                          h.default.track(
                                              O.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
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
                                              })({}, (0, o.H$)(e))),
                                              (n = n =
                                                  {
                                                      step: p.Hy[p.Hy.LANDING],
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
                                              (0, I._k)(e, p.Hy.LANDING);
                                      }
                                  },
                                  disabled: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsx)(a.cGx, {}),
                  (0, l.jsx)(x, {}),
                  (0, l.jsx)(a.cGx, {}),
                  (0, l.jsxs)("div", {
                      className: E.a7,
                      children: [
                          (0, l.jsxs)("div", {
                              className: E.fP,
                              children: [
                                  (0, l.jsx)(A, {}),
                                  (0, l.jsxs)("div", {
                                      className: E.Ru,
                                      children: [
                                          (0, l.jsx)(a.Heading, {
                                              variant: "heading-md/semibold",
                                              children: S.intl.string(S.t.Z7kqKZ),
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: "text-sm/normal",
                                              children: S.intl.string(S.t.di3UC5),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: E.fP,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: E.Ru,
                                      children: [
                                          (0, l.jsx)(a.Heading, {
                                              variant: "heading-md/semibold",
                                              children: S.intl.string(S.t.O4jYEh),
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: "text-sm/normal",
                                              children: S.intl.string(S.t["l/l/Gw"]),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: i()(E.SI, E.f5),
                                      children: [
                                          (0, l.jsx)(m.A, {
                                              guildId: e,
                                              welcomeMessage: {
                                                  authorIds: [n.id],
                                                  message: S.intl.string(S.t.hIWAft),
                                              },
                                          }),
                                          (0, l.jsx)(u.v, {
                                              title: S.intl.string(S.t["47zu7B"]),
                                              subtitle: S.intl.string(S.t["amoSN/"]),
                                              completed: !0,
                                              Icon: a.N$i,
                                              variant: "static",
                                          }),
                                          (0, l.jsx)(u.v, {
                                              title: S.intl.string(S.t.EZfTKE),
                                              subtitle: S.intl.string(S.t["/sYelW"]),
                                              completed: !0,
                                              Icon: a.N$i,
                                              variant: "static",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: E.fP,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: i()(E.SI, E.f5),
                                      children: [
                                          {
                                              channelIcon: () =>
                                                  (0, l.jsx)(a.koX, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: E.p,
                                                  }),
                                              channel: S.intl.string(S.t.MXJozL),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, l.jsx)(a.N$i, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: E.p,
                                                  }),
                                              channel: S.intl.string(S.t.Pkj0f6),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, l.jsx)(a.N$i, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: E.p,
                                                  }),
                                              channel: S.intl.string(S.t["imVD+u"]),
                                              selected: !1,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, l.jsx)(a.bSJ, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: E.p,
                                                  }),
                                              channel: S.intl.string(S.t["Pj/Wpt"]),
                                              selected: !0,
                                          },
                                      ].map((e, t) => {
                                          let { channelIcon: n, channel: r, selected: s } = e;
                                          return (0, l.jsxs)(
                                              "div",
                                              {
                                                  className: i()(E.CQ, E.p9, { [E.wH]: s }),
                                                  children: [
                                                      (0, l.jsxs)("div", {
                                                          className: E.Ix,
                                                          children: [
                                                              n(),
                                                              (0, l.jsx)(a.Text, {
                                                                  variant: "text-md/medium",
                                                                  color: "text-strong",
                                                                  children: r,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, l.jsx)("div", {
                                                          className: i()(E.kv, { [E.wH]: s }),
                                                          children:
                                                              s &&
                                                              (0, l.jsx)(a.A9s, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: E.AI,
                                                              }),
                                                      }),
                                                  ],
                                              },
                                              t,
                                          );
                                      }),
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: E.Ru,
                                      children: [
                                          (0, l.jsx)(a.Heading, {
                                              variant: "heading-md/semibold",
                                              children: S.intl.string(S.t["3T9aHG"]),
                                          }),
                                          (0, l.jsx)(a.Text, {
                                              variant: "text-sm/normal",
                                              children: S.intl.string(S.t.dA7Cag),
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
