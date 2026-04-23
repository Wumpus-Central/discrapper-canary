n.d(t, { A: () => V, M: () => k });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    d = n(778492),
    o = n(276293),
    c = n(56059),
    u = n(834730),
    m = n(534514),
    N = n(933832),
    h = n(821609),
    I = n(404778),
    E = n(58149),
    g = n(201991),
    A = n(419354),
    S = n(97808),
    _ = n(778712),
    f = n(518009),
    x = n(408278),
    T = n(477155),
    D = n(935286),
    j = n(717421),
    p = n(985018),
    O = n(926081);
function G(e) {
    let { testimonial: t, className: n } = e,
        { message: l, profilePic: s, adminTitle: r, emphasisColor: a = "interactive-text-default" } = t;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: p.intl.format(l, {
                    testimonialHook: (e, t) =>
                        (0, i.jsx)(u.E, { tag: "span", variant: "text-sm/bold", color: a, children: e }, t),
                }),
            }),
            (0, i.jsxs)("div", {
                className: O.f1,
                children: [
                    (0, i.jsx)(S.eu, { src: s, size: _._3.SIZE_16, "aria-hidden": !0 }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: r }),
                ],
            }),
        ],
    });
}
function v(e) {
    let { testimonials: t } = e,
        [[n, s], r] = l.useState([0, "right"]),
        a = l.useCallback(() => {
            r((e) => {
                let [n] = e;
                return 0 === n ? [t.length - 1, "left"] : [n - 1, "left"];
            });
        }, [r, t.length]),
        d = l.useCallback(() => {
            r((e) => {
                let [n] = e;
                return [(n + 1) % t.length, "right"];
            });
        }, [r, t.length]),
        o = t[n],
        c = l.useCallback((e, t, n, l) => (0, i.jsx)(C, { item: t, state: n, cleanup: l, direction: s }, e), [s]);
    return (0, i.jsxs)("div", {
        className: O.FD,
        children: [
            (0, i.jsx)("div", {
                className: O.nI,
                children: (0, i.jsx)(f.F, { items: [o], renderItem: c, getItemKey: (e) => e.adminTitle }),
            }),
            (0, i.jsx)(u.E, { variant: "text-lg/bold", className: O.wV, children: "“" }),
            (0, i.jsxs)("div", {
                className: O.Jv,
                children: [
                    (0, i.jsx)(x.K, {
                        size: "sm",
                        variant: "secondary",
                        icon: T.r,
                        onClick: a,
                        "aria-label": p.intl.string(p.t["13/7kX"]),
                    }),
                    (0, i.jsx)(x.K, {
                        size: "sm",
                        variant: "secondary",
                        icon: D.E,
                        onClick: d,
                        "aria-label": p.intl.string(p.t.PDTjLN),
                    }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { item: t, state: n, cleanup: l, direction: s } = e,
        [r] = (0, j.z)(
            () => {
                switch (n) {
                    case f.wL.ENTERED:
                        return {
                            from: { transform: "right" === s ? "translateX(150%)" : "translate(-150%)" },
                            to: { transform: "translateX(0%)" },
                        };
                    case f.wL.YEETED:
                        return {
                            from: { transform: "translateX(0%)" },
                            to: { transform: "right" === s ? "translateX(-150%)" : "translate(150%)" },
                            onRest: l,
                        };
                    default:
                        return {};
                }
            },
            "respect-motion-settings",
            [n],
        );
    return (0, i.jsx)(A.animated.div, { style: r, children: (0, i.jsx)(G, { className: O.EV, testimonial: t }) });
}
var L = n(283012),
    b = n(913423),
    R = n(71393),
    y = n(287809),
    U = n(954571),
    P = n(555337),
    M = n(527678),
    w = n(400812),
    B = n(652215),
    H = n(174154);
function k(e) {
    let { isTooltip: t = !1 } = e,
        n = [
            {
                emoji: "\uD83E\uDDD9",
                emojiDescription: p.intl.string(p.t.Jh9uif),
                title: p.intl.string(p.t.ATF45v),
                selected: !0,
            },
            {
                emoji: "\uD83C\uDFA4",
                emojiDescription: p.intl.string(p.t["nGt+MV"]),
                title: p.intl.string(p.t["30uo7D"]),
                selected: !1,
            },
            {
                emoji: "\uD83D\uDC40",
                emojiDescription: p.intl.string(p.t.hOMH5o),
                title: p.intl.string(p.t["5Z5sgj"]),
                selected: !1,
            },
        ];
    t && n.pop();
    let l = t
            ? (0, i.jsx)(u.E, {
                  variant: "text-sm/semibold",
                  color: "text-strong",
                  children: p.intl.string(p.t.nTI2mQ),
              })
            : (0, i.jsx)(m.D, { variant: "heading-md/semibold", children: p.intl.string(p.t.g1OQtu) }),
        s = t
            ? (0, i.jsx)(u.E, { variant: "text-xxs/normal", children: p.intl.format(p.t.hGwDPV, {}) })
            : (0, i.jsx)(u.E, { variant: "text-xs/normal", children: p.intl.format(p.t["8XLD3r"], {}) });
    return (0, i.jsxs)("div", {
        className: r()(H.SI, H.f5, { [H.YL]: t }),
        children: [
            l,
            (0, i.jsx)("div", {
                className: H.Pf,
                children: n.map((e, t) => {
                    let { emoji: n, emojiDescription: l, title: s, selected: a } = e;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: r()(H.CQ, { [H.wH]: a }),
                            children: [
                                (0, i.jsx)("span", { role: "img", "aria-label": l, children: n }),
                                (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-strong", children: s }),
                                a &&
                                    (0, i.jsx)("div", {
                                        className: H.ct,
                                        children: (0, i.jsx)(N.A, {
                                            size: "md",
                                            color: "currentColor",
                                            className: H.AI,
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
function F() {
    let e = [
        {
            message: p.t.FUUXXk,
            profilePic:
                "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
            adminTitle: p.intl.string(p.t.RZVpuo),
        },
        {
            message: p.t.JAXvDe,
            profilePic:
                "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
            adminTitle: p.intl.string(p.t.xyrlg7),
        },
        {
            message: p.t.Wj9Djq,
            profilePic:
                "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
            adminTitle: p.intl.string(p.t["o/LQMi"]),
        },
        {
            message: p.t.ALsMNZ,
            profilePic:
                "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
            adminTitle: p.intl.string(p.t["uvM+xc"]),
        },
    ];
    return (0, i.jsx)(v, { testimonials: e });
}
function V() {
    let e = (0, a.bG)([P.A], () => P.A.getGuildId()),
        t = (0, a.bG)([R.A], () => R.A.getGuild(e)),
        n = (0, a.bG)([y.default], () => y.default.getCurrentUser());
    return null == e || null == t || null == n
        ? null
        : (0, i.jsxs)("div", {
              className: H.Zj,
              children: [
                  (0, i.jsxs)("div", {
                      className: H.$P,
                      children: [
                          (0, i.jsxs)("div", {
                              className: H.tU,
                              children: [
                                  (0, i.jsx)(g.Mm, {}),
                                  (0, i.jsx)(g.j5, { guild: t, mainIslandClassName: H.$h, balloonDogClassName: H.Sb }),
                                  (0, i.jsx)(g.RA, {}),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: H.KF,
                              children: [
                                  (0, i.jsx)(m.D, {
                                      variant: "heading-xl/semibold",
                                      children: p.intl.string(p.t.GnKOAx),
                                  }),
                                  (0, i.jsx)(u.E, { variant: "text-md/normal", children: p.intl.string(p.t.SJRFJj) }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: H.JO,
                              children: (0, i.jsx)(h.$, {
                                  variant: "primary",
                                  text: p.intl.string(p.t.RzWDqY),
                                  onClick: function () {
                                      null != e &&
                                          (U.default.track(
                                              B.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                                              { ...(0, E.H$)(e), step: w.Hy[w.Hy.LANDING], back: !1, skip: !1 },
                                          ),
                                          (0, M._k)(e, w.Hy.LANDING));
                                  },
                                  disabled: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(I.c, {}),
                  (0, i.jsx)(F, {}),
                  (0, i.jsx)(I.c, {}),
                  (0, i.jsxs)("div", {
                      className: H.a7,
                      children: [
                          (0, i.jsxs)("div", {
                              className: H.fP,
                              children: [
                                  (0, i.jsx)(k, {}),
                                  (0, i.jsxs)("div", {
                                      className: H.Ru,
                                      children: [
                                          (0, i.jsx)(m.D, {
                                              variant: "heading-md/semibold",
                                              children: p.intl.string(p.t.Z7kqKZ),
                                          }),
                                          (0, i.jsx)(u.E, {
                                              variant: "text-sm/normal",
                                              children: p.intl.string(p.t.di3UC5),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: H.fP,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: H.Ru,
                                      children: [
                                          (0, i.jsx)(m.D, {
                                              variant: "heading-md/semibold",
                                              children: p.intl.string(p.t.O4jYEh),
                                          }),
                                          (0, i.jsx)(u.E, {
                                              variant: "text-sm/normal",
                                              children: p.intl.string(p.t["l/l/Gw"]),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: r()(H.SI, H.f5),
                                      children: [
                                          (0, i.jsx)(b.A, {
                                              guildId: e,
                                              welcomeMessage: { authorIds: [n.id], message: p.intl.string(p.t.hIWAft) },
                                          }),
                                          (0, i.jsx)(L.v, {
                                              title: p.intl.string(p.t["47zu7B"]),
                                              subtitle: p.intl.string(p.t["amoSN/"]),
                                              completed: !0,
                                              Icon: o.N,
                                              variant: "static",
                                          }),
                                          (0, i.jsx)(L.v, {
                                              title: p.intl.string(p.t.EZfTKE),
                                              subtitle: p.intl.string(p.t["/sYelW"]),
                                              completed: !0,
                                              Icon: o.N,
                                              variant: "static",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: H.fP,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: r()(H.SI, H.f5),
                                      children: [
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(d.k, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: H.p,
                                                  }),
                                              channel: p.intl.string(p.t.MXJozL),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(o.N, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: H.p,
                                                  }),
                                              channel: p.intl.string(p.t.Pkj0f6),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(o.N, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: H.p,
                                                  }),
                                              channel: p.intl.string(p.t["imVD+u"]),
                                              selected: !1,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(c.b, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: H.p,
                                                  }),
                                              channel: p.intl.string(p.t["Pj/Wpt"]),
                                              selected: !0,
                                          },
                                      ].map((e, t) => {
                                          let { channelIcon: n, channel: l, selected: s } = e;
                                          return (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: r()(H.CQ, H.p9, { [H.wH]: s }),
                                                  children: [
                                                      (0, i.jsxs)("div", {
                                                          className: H.Ix,
                                                          children: [
                                                              n(),
                                                              (0, i.jsx)(u.E, {
                                                                  variant: "text-md/medium",
                                                                  color: "text-strong",
                                                                  children: l,
                                                              }),
                                                          ],
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: r()(H.kv, { [H.wH]: s }),
                                                          children:
                                                              s &&
                                                              (0, i.jsx)(N.A, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: H.AI,
                                                              }),
                                                      }),
                                                  ],
                                              },
                                              t,
                                          );
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: H.Ru,
                                      children: [
                                          (0, i.jsx)(m.D, {
                                              variant: "heading-md/semibold",
                                              children: p.intl.string(p.t["3T9aHG"]),
                                          }),
                                          (0, i.jsx)(u.E, {
                                              variant: "text-sm/normal",
                                              children: p.intl.string(p.t.dA7Cag),
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
