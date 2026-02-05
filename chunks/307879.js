n.d(t, { A: () => p, M: () => T });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(397927),
    d = n(58149),
    o = n(133266),
    c = n(120076),
    u = n(283012),
    m = n(913423),
    N = n(71393),
    h = n(287809),
    I = n(954571),
    g = n(555337),
    A = n(527678),
    E = n(400812),
    S = n(652215),
    x = n(985018),
    _ = n(944171);
function T(e) {
    let { isTooltip: t = !1 } = e,
        n = [
            {
                emoji: "\uD83E\uDDD9",
                emojiDescription: x.intl.string(x.t.Jh9uif),
                title: x.intl.string(x.t.ATF45v),
                selected: !0,
            },
            {
                emoji: "\uD83C\uDFA4",
                emojiDescription: x.intl.string(x.t["nGt+MV"]),
                title: x.intl.string(x.t["30uo7D"]),
                selected: !1,
            },
            {
                emoji: "\uD83D\uDC40",
                emojiDescription: x.intl.string(x.t.hOMH5o),
                title: x.intl.string(x.t["5Z5sgj"]),
                selected: !1,
            },
        ];
    t && n.pop();
    let l = t
            ? (0, i.jsx)(a.Text, {
                  variant: "text-sm/semibold",
                  color: "text-strong",
                  children: x.intl.string(x.t.nTI2mQ),
              })
            : (0, i.jsx)(a.Heading, { variant: "heading-md/semibold", children: x.intl.string(x.t.g1OQtu) }),
        r = t
            ? (0, i.jsx)(a.Text, { variant: "text-xxs/normal", children: x.intl.format(x.t.hGwDPV, {}) })
            : (0, i.jsx)(a.Text, { variant: "text-xs/normal", children: x.intl.format(x.t["8XLD3r"], {}) });
    return (0, i.jsxs)("div", {
        className: s()(_.SI, _.f5, { [_.YL]: t }),
        children: [
            l,
            (0, i.jsx)("div", {
                className: _.Pf,
                children: n.map((e, t) => {
                    let { emoji: n, emojiDescription: l, title: r, selected: d } = e;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: s()(_.CQ, { [_.wH]: d }),
                            children: [
                                (0, i.jsx)("span", { role: "img", "aria-label": l, children: n }),
                                (0, i.jsx)(a.Text, { variant: "text-sm/medium", color: "text-strong", children: r }),
                                d &&
                                    (0, i.jsx)("div", {
                                        className: _.ct,
                                        children: (0, i.jsx)(a.A9s, {
                                            size: "md",
                                            color: "currentColor",
                                            className: _.AI,
                                        }),
                                    }),
                            ],
                        },
                        t,
                    );
                }),
            }),
            r,
        ],
    });
}
function f() {
    let e = [
        {
            message: x.t.FUUXXk,
            profilePic:
                "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
            adminTitle: x.intl.string(x.t.RZVpuo),
        },
        {
            message: x.t.JAXvDe,
            profilePic:
                "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
            adminTitle: x.intl.string(x.t.xyrlg7),
        },
        {
            message: x.t.Wj9Djq,
            profilePic:
                "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
            adminTitle: x.intl.string(x.t["o/LQMi"]),
        },
        {
            message: x.t.ALsMNZ,
            profilePic:
                "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
            adminTitle: x.intl.string(x.t["uvM+xc"]),
        },
    ];
    return (0, i.jsx)(c.e, { testimonials: e });
}
function p() {
    let e = (0, r.bG)([g.A], () => g.A.getGuildId()),
        t = (0, r.bG)([N.A], () => N.A.getGuild(e)),
        n = (0, r.bG)([h.default], () => h.default.getCurrentUser());
    return null == e || null == t || null == n
        ? null
        : (0, i.jsxs)("div", {
              className: _.Zj,
              children: [
                  (0, i.jsxs)("div", {
                      className: _.$P,
                      children: [
                          (0, i.jsxs)("div", {
                              className: _.tU,
                              children: [
                                  (0, i.jsx)(o.Mm, {}),
                                  (0, i.jsx)(o.j5, { guild: t, mainIslandClassName: _.$h, balloonDogClassName: _.Sb }),
                                  (0, i.jsx)(o.RA, {}),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: _.KF,
                              children: [
                                  (0, i.jsx)(a.Heading, {
                                      variant: "heading-xl/semibold",
                                      children: x.intl.string(x.t.GnKOAx),
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      children: x.intl.string(x.t.SJRFJj),
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: _.JO,
                              children: (0, i.jsx)(a.Button, {
                                  variant: "primary",
                                  text: x.intl.string(x.t.RzWDqY),
                                  onClick: function () {
                                      null != e &&
                                          (I.default.track(
                                              S.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                                              { ...(0, d.H$)(e), step: E.Hy[E.Hy.LANDING], back: !1, skip: !1 },
                                          ),
                                          (0, A._k)(e, E.Hy.LANDING));
                                  },
                                  disabled: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(a.cGx, {}),
                  (0, i.jsx)(f, {}),
                  (0, i.jsx)(a.cGx, {}),
                  (0, i.jsxs)("div", {
                      className: _.a7,
                      children: [
                          (0, i.jsxs)("div", {
                              className: _.fP,
                              children: [
                                  (0, i.jsx)(T, {}),
                                  (0, i.jsxs)("div", {
                                      className: _.Ru,
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: "heading-md/semibold",
                                              children: x.intl.string(x.t.Z7kqKZ),
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: "text-sm/normal",
                                              children: x.intl.string(x.t.di3UC5),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: _.fP,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: _.Ru,
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: "heading-md/semibold",
                                              children: x.intl.string(x.t.O4jYEh),
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: "text-sm/normal",
                                              children: x.intl.string(x.t["l/l/Gw"]),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: s()(_.SI, _.f5),
                                      children: [
                                          (0, i.jsx)(m.A, {
                                              guildId: e,
                                              welcomeMessage: { authorIds: [n.id], message: x.intl.string(x.t.hIWAft) },
                                          }),
                                          (0, i.jsx)(u.v, {
                                              title: x.intl.string(x.t["47zu7B"]),
                                              subtitle: x.intl.string(x.t["amoSN/"]),
                                              completed: !0,
                                              Icon: a.N$i,
                                              variant: "static",
                                          }),
                                          (0, i.jsx)(u.v, {
                                              title: x.intl.string(x.t.EZfTKE),
                                              subtitle: x.intl.string(x.t["/sYelW"]),
                                              completed: !0,
                                              Icon: a.N$i,
                                              variant: "static",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: _.fP,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: s()(_.SI, _.f5),
                                      children: [
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(a.koX, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: _.p,
                                                  }),
                                              channel: x.intl.string(x.t.MXJozL),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(a.N$i, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: _.p,
                                                  }),
                                              channel: x.intl.string(x.t.Pkj0f6),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(a.N$i, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: _.p,
                                                  }),
                                              channel: x.intl.string(x.t["imVD+u"]),
                                              selected: !1,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(a.bSJ, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: _.p,
                                                  }),
                                              channel: x.intl.string(x.t["Pj/Wpt"]),
                                              selected: !0,
                                          },
                                      ].map((e, t) => {
                                          let { channelIcon: n, channel: l, selected: r } = e;
                                          return (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: s()(_.CQ, _.p9, { [_.wH]: r }),
                                                  children: [
                                                      (0, i.jsxs)("div", {
                                                          className: _.Ix,
                                                          children: [
                                                              n(),
                                                              (0, i.jsx)(a.Text, {
                                                                  variant: "text-md/medium",
                                                                  color: "text-strong",
                                                                  children: l,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: s()(_.kv, { [_.wH]: r }),
                                                          children:
                                                              r &&
                                                              (0, i.jsx)(a.A9s, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: _.AI,
                                                              }),
                                                      }),
                                                  ],
                                              },
                                              t,
                                          );
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: _.Ru,
                                      children: [
                                          (0, i.jsx)(a.Heading, {
                                              variant: "heading-md/semibold",
                                              children: x.intl.string(x.t["3T9aHG"]),
                                          }),
                                          (0, i.jsx)(a.Text, {
                                              variant: "text-sm/normal",
                                              children: x.intl.string(x.t.dA7Cag),
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
