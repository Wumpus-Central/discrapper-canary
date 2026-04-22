n.d(t, { A: () => L, M: () => v });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(778492),
    d = n(276293),
    o = n(56059),
    c = n(834730),
    u = n(534514),
    m = n(933832),
    N = n(821609),
    h = n(404778),
    I = n(58149),
    E = n(133266),
    g = n(120076),
    A = n(283012),
    S = n(913423),
    _ = n(71393),
    f = n(287809),
    x = n(954571),
    T = n(555337),
    D = n(527678),
    j = n(400812),
    p = n(652215),
    O = n(985018),
    G = n(951773);
function v(e) {
    let { isTooltip: t = !1 } = e,
        n = [
            {
                emoji: "\uD83E\uDDD9",
                emojiDescription: O.intl.string(O.t.Jh9uif),
                title: O.intl.string(O.t.ATF45v),
                selected: !0,
            },
            {
                emoji: "\uD83C\uDFA4",
                emojiDescription: O.intl.string(O.t["nGt+MV"]),
                title: O.intl.string(O.t["30uo7D"]),
                selected: !1,
            },
            {
                emoji: "\uD83D\uDC40",
                emojiDescription: O.intl.string(O.t.hOMH5o),
                title: O.intl.string(O.t["5Z5sgj"]),
                selected: !1,
            },
        ];
    t && n.pop();
    let l = t
            ? (0, i.jsx)(c.E, {
                  variant: "text-sm/semibold",
                  color: "text-strong",
                  children: O.intl.string(O.t.nTI2mQ),
              })
            : (0, i.jsx)(u.D, { variant: "heading-md/semibold", children: O.intl.string(O.t.g1OQtu) }),
        r = t
            ? (0, i.jsx)(c.E, { variant: "text-xxs/normal", children: O.intl.format(O.t.hGwDPV, {}) })
            : (0, i.jsx)(c.E, { variant: "text-xs/normal", children: O.intl.format(O.t["8XLD3r"], {}) });
    return (0, i.jsxs)("div", {
        className: s()(G.SI, G.f5, { [G.YL]: t }),
        children: [
            l,
            (0, i.jsx)("div", {
                className: G.Pf,
                children: n.map((e, t) => {
                    let { emoji: n, emojiDescription: l, title: r, selected: a } = e;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: s()(G.CQ, { [G.wH]: a }),
                            children: [
                                (0, i.jsx)("span", { role: "img", "aria-label": l, children: n }),
                                (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "text-strong", children: r }),
                                a &&
                                    (0, i.jsx)("div", {
                                        className: G.ct,
                                        children: (0, i.jsx)(m.A, {
                                            size: "md",
                                            color: "currentColor",
                                            className: G.AI,
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
function C() {
    let e = [
        {
            message: O.t.FUUXXk,
            profilePic:
                "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
            adminTitle: O.intl.string(O.t.RZVpuo),
        },
        {
            message: O.t.JAXvDe,
            profilePic:
                "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
            adminTitle: O.intl.string(O.t.xyrlg7),
        },
        {
            message: O.t.Wj9Djq,
            profilePic:
                "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
            adminTitle: O.intl.string(O.t["o/LQMi"]),
        },
        {
            message: O.t.ALsMNZ,
            profilePic:
                "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
            adminTitle: O.intl.string(O.t["uvM+xc"]),
        },
    ];
    return (0, i.jsx)(g.e, { testimonials: e });
}
function L() {
    let e = (0, r.bG)([T.A], () => T.A.getGuildId()),
        t = (0, r.bG)([_.A], () => _.A.getGuild(e)),
        n = (0, r.bG)([f.default], () => f.default.getCurrentUser());
    return null == e || null == t || null == n
        ? null
        : (0, i.jsxs)("div", {
              className: G.Zj,
              children: [
                  (0, i.jsxs)("div", {
                      className: G.$P,
                      children: [
                          (0, i.jsxs)("div", {
                              className: G.tU,
                              children: [
                                  (0, i.jsx)(E.Mm, {}),
                                  (0, i.jsx)(E.j5, { guild: t, mainIslandClassName: G.$h, balloonDogClassName: G.Sb }),
                                  (0, i.jsx)(E.RA, {}),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: G.KF,
                              children: [
                                  (0, i.jsx)(u.D, {
                                      variant: "heading-xl/semibold",
                                      children: O.intl.string(O.t.GnKOAx),
                                  }),
                                  (0, i.jsx)(c.E, { variant: "text-md/normal", children: O.intl.string(O.t.SJRFJj) }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: G.JO,
                              children: (0, i.jsx)(N.$, {
                                  variant: "primary",
                                  text: O.intl.string(O.t.RzWDqY),
                                  onClick: function () {
                                      null != e &&
                                          (x.default.track(
                                              p.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                                              { ...(0, I.H$)(e), step: j.Hy[j.Hy.LANDING], back: !1, skip: !1 },
                                          ),
                                          (0, D._k)(e, j.Hy.LANDING));
                                  },
                                  disabled: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(h.c, {}),
                  (0, i.jsx)(C, {}),
                  (0, i.jsx)(h.c, {}),
                  (0, i.jsxs)("div", {
                      className: G.a7,
                      children: [
                          (0, i.jsxs)("div", {
                              className: G.fP,
                              children: [
                                  (0, i.jsx)(v, {}),
                                  (0, i.jsxs)("div", {
                                      className: G.Ru,
                                      children: [
                                          (0, i.jsx)(u.D, {
                                              variant: "heading-md/semibold",
                                              children: O.intl.string(O.t.Z7kqKZ),
                                          }),
                                          (0, i.jsx)(c.E, {
                                              variant: "text-sm/normal",
                                              children: O.intl.string(O.t.di3UC5),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: G.fP,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: G.Ru,
                                      children: [
                                          (0, i.jsx)(u.D, {
                                              variant: "heading-md/semibold",
                                              children: O.intl.string(O.t.O4jYEh),
                                          }),
                                          (0, i.jsx)(c.E, {
                                              variant: "text-sm/normal",
                                              children: O.intl.string(O.t["l/l/Gw"]),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: s()(G.SI, G.f5),
                                      children: [
                                          (0, i.jsx)(S.A, {
                                              guildId: e,
                                              welcomeMessage: { authorIds: [n.id], message: O.intl.string(O.t.hIWAft) },
                                          }),
                                          (0, i.jsx)(A.v, {
                                              title: O.intl.string(O.t["47zu7B"]),
                                              subtitle: O.intl.string(O.t["amoSN/"]),
                                              completed: !0,
                                              Icon: d.N,
                                              variant: "static",
                                          }),
                                          (0, i.jsx)(A.v, {
                                              title: O.intl.string(O.t.EZfTKE),
                                              subtitle: O.intl.string(O.t["/sYelW"]),
                                              completed: !0,
                                              Icon: d.N,
                                              variant: "static",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: G.fP,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: s()(G.SI, G.f5),
                                      children: [
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(a.k, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: G.p,
                                                  }),
                                              channel: O.intl.string(O.t.MXJozL),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(d.N, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: G.p,
                                                  }),
                                              channel: O.intl.string(O.t.Pkj0f6),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(d.N, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: G.p,
                                                  }),
                                              channel: O.intl.string(O.t["imVD+u"]),
                                              selected: !1,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(o.b, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: G.p,
                                                  }),
                                              channel: O.intl.string(O.t["Pj/Wpt"]),
                                              selected: !0,
                                          },
                                      ].map((e, t) => {
                                          let { channelIcon: n, channel: l, selected: r } = e;
                                          return (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: s()(G.CQ, G.p9, { [G.wH]: r }),
                                                  children: [
                                                      (0, i.jsxs)("div", {
                                                          className: G.Ix,
                                                          children: [
                                                              n(),
                                                              (0, i.jsx)(c.E, {
                                                                  variant: "text-md/medium",
                                                                  color: "text-strong",
                                                                  children: l,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: s()(G.kv, { [G.wH]: r }),
                                                          children:
                                                              r &&
                                                              (0, i.jsx)(m.A, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: G.AI,
                                                              }),
                                                      }),
                                                  ],
                                              },
                                              t,
                                          );
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: G.Ru,
                                      children: [
                                          (0, i.jsx)(u.D, {
                                              variant: "heading-md/semibold",
                                              children: O.intl.string(O.t["3T9aHG"]),
                                          }),
                                          (0, i.jsx)(c.E, {
                                              variant: "text-sm/normal",
                                              children: O.intl.string(O.t.dA7Cag),
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
