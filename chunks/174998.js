n.d(e, { A: () => V, M: () => H });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    d = n(778492),
    o = n(276293),
    c = n(56059),
    u = n(834730),
    E = n(534514),
    I = n(933832),
    N = n(821609),
    S = n(404778),
    m = n(95561),
    _ = n(201991),
    g = n(873174),
    h = n(97808),
    T = n(778712),
    A = n(518009),
    D = n(408278),
    O = n(477155),
    f = n(935286),
    G = n(717421),
    p = n(375708),
    x = n(926081);
function L(t) {
    let { testimonial: e, className: n } = t,
        { message: l, profilePic: s, adminTitle: r, emphasisColor: a = "interactive-text-default" } = e;
    return (0, i.jsxs)("div", {
        className: n,
        children: [
            (0, i.jsx)(u.E, {
                variant: "text-sm/medium",
                color: "text-default",
                children: p.intl.format(l, {
                    testimonialHook: (t, e) =>
                        (0, i.jsx)(u.E, { tag: "span", variant: "text-sm/bold", color: a, children: t }, e),
                }),
            }),
            (0, i.jsxs)("div", {
                className: x.f1,
                children: [
                    (0, i.jsx)(h.eu, { src: s, size: T._3.SIZE_16, "aria-hidden": !0 }),
                    (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: r }),
                ],
            }),
        ],
    });
}
function j(t) {
    let { testimonials: e } = t,
        [[n, s], r] = l.useState([0, "right"]),
        a = l.useCallback(() => {
            r((t) => {
                let [n] = t;
                return 0 === n ? [e.length - 1, "left"] : [n - 1, "left"];
            });
        }, [r, e.length]),
        d = l.useCallback(() => {
            r((t) => {
                let [n] = t;
                return [(n + 1) % e.length, "right"];
            });
        }, [r, e.length]),
        o = e[n],
        c = l.useCallback((t, e, n, l) => (0, i.jsx)(C, { item: e, state: n, cleanup: l, direction: s }, t), [s]);
    return (0, i.jsxs)("div", {
        className: x.FD,
        children: [
            (0, i.jsx)("div", {
                className: x.nI,
                children: (0, i.jsx)(A.F, { items: [o], renderItem: c, getItemKey: (t) => t.adminTitle }),
            }),
            (0, i.jsx)(u.E, { variant: "text-lg/bold", className: x.wV, children: "\u201C" }),
            (0, i.jsxs)("div", {
                className: x.Jv,
                children: [
                    (0, i.jsx)(D.K, {
                        size: "sm",
                        variant: "secondary",
                        icon: O.r,
                        onClick: a,
                        "aria-label": p.intl.string(p.t["13/7kX"]),
                    }),
                    (0, i.jsx)(D.K, {
                        size: "sm",
                        variant: "secondary",
                        icon: f.E,
                        onClick: d,
                        "aria-label": p.intl.string(p.t.PDTjLN),
                    }),
                ],
            }),
        ],
    });
}
function C(t) {
    let { item: e, state: n, cleanup: l, direction: s } = t,
        [r] = (0, G.z)(
            () => {
                switch (n) {
                    case A.wL.ENTERED:
                        return {
                            from: { transform: "right" === s ? "translateX(150%)" : "translate(-150%)" },
                            to: { transform: "translateX(0%)" },
                        };
                    case A.wL.YEETED:
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
    return (0, i.jsx)(g.animated.div, { style: r, children: (0, i.jsx)(L, { className: x.EV, testimonial: e }) });
}
var R = n(283012),
    v = n(913423),
    P = n(71393),
    U = n(287809),
    b = n(174459),
    y = n(555337),
    M = n(527678),
    w = n(400812),
    B = n(652215),
    F = n(174154);
function H(t) {
    let { isTooltip: e = !1 } = t,
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
    e && n.pop();
    let l = e
            ? (0, i.jsx)(u.E, {
                  variant: "text-sm/semibold",
                  color: "text-strong",
                  children: p.intl.string(p.t.nTI2mQ),
              })
            : (0, i.jsx)(E.D, { variant: "heading-md/semibold", children: p.intl.string(p.t.g1OQtu) }),
        s = e
            ? (0, i.jsx)(u.E, { variant: "text-xxs/normal", children: p.intl.format(p.t.hGwDPV, {}) })
            : (0, i.jsx)(u.E, { variant: "text-xs/normal", children: p.intl.format(p.t["8XLD3r"], {}) });
    return (0, i.jsxs)("div", {
        className: r()(F.SI, F.f5, { [F.YL]: e }),
        children: [
            l,
            (0, i.jsx)("div", {
                className: F.Pf,
                children: n.map((t, e) => {
                    let { emoji: n, emojiDescription: l, title: s, selected: a } = t;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: r()(F.CQ, { [F.wH]: a }),
                            children: [
                                (0, i.jsx)("span", { role: "img", "aria-label": l, children: n }),
                                (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-strong", children: s }),
                                a &&
                                    (0, i.jsx)("div", {
                                        className: F.ct,
                                        children: (0, i.jsx)(I.A, {
                                            size: "md",
                                            color: "currentColor",
                                            className: F.AI,
                                        }),
                                    }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            s,
        ],
    });
}
function k() {
    let t = [
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
    return (0, i.jsx)(j, { testimonials: t });
}
function V() {
    let t = (0, a.bG)([y.A], () => y.A.getGuildId()),
        e = (0, a.bG)([P.A], () => P.A.getGuild(t)),
        n = (0, a.bG)([U.default], () => U.default.getCurrentUser());
    return null == t || null == e || null == n
        ? null
        : (0, i.jsxs)("div", {
              className: F.Zj,
              children: [
                  (0, i.jsxs)("div", {
                      className: F.$P,
                      children: [
                          (0, i.jsxs)("div", {
                              className: F.tU,
                              children: [
                                  (0, i.jsx)(_.Mm, {}),
                                  (0, i.jsx)(_.j5, { guild: e, mainIslandClassName: F.$h, balloonDogClassName: F.Sb }),
                                  (0, i.jsx)(_.RA, {}),
                              ],
                          }),
                          (0, i.jsxs)("div", {
                              className: F.KF,
                              children: [
                                  (0, i.jsx)(E.D, {
                                      variant: "heading-xl/semibold",
                                      children: p.intl.string(p.t.GnKOAx),
                                  }),
                                  (0, i.jsx)(u.E, { variant: "text-md/normal", children: p.intl.string(p.t.SJRFJj) }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              className: F.JO,
                              children: (0, i.jsx)(N.$, {
                                  variant: "primary",
                                  text: p.intl.string(p.t.RzWDqY),
                                  onClick: function () {
                                      null != t &&
                                          (b.default.track(
                                              B.HAw.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED,
                                              { ...(0, m.H$)(t), step: w.Hy[w.Hy.LANDING], back: !1, skip: !1 },
                                          ),
                                          (0, M._k)(t, w.Hy.LANDING));
                                  },
                                  disabled: !1,
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(S.c, {}),
                  (0, i.jsx)(k, {}),
                  (0, i.jsx)(S.c, {}),
                  (0, i.jsxs)("div", {
                      className: F.a7,
                      children: [
                          (0, i.jsxs)("div", {
                              className: F.fP,
                              children: [
                                  (0, i.jsx)(H, {}),
                                  (0, i.jsxs)("div", {
                                      className: F.Ru,
                                      children: [
                                          (0, i.jsx)(E.D, {
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
                              className: F.fP,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: F.Ru,
                                      children: [
                                          (0, i.jsx)(E.D, {
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
                                      className: r()(F.SI, F.f5),
                                      children: [
                                          (0, i.jsx)(v.A, {
                                              guildId: t,
                                              welcomeMessage: { authorIds: [n.id], message: p.intl.string(p.t.hIWAft) },
                                          }),
                                          (0, i.jsx)(R.v, {
                                              title: p.intl.string(p.t["47zu7B"]),
                                              subtitle: p.intl.string(p.t["amoSN/"]),
                                              completed: !0,
                                              Icon: o.N,
                                              variant: "static",
                                          }),
                                          (0, i.jsx)(R.v, {
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
                              className: F.fP,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: r()(F.SI, F.f5),
                                      children: [
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(d.k, {
                                                      size: "xs",
                                                      color: "currentColor",
                                                      className: F.p,
                                                  }),
                                              channel: p.intl.string(p.t.MXJozL),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(o.N, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: F.p,
                                                  }),
                                              channel: p.intl.string(p.t.Pkj0f6),
                                              selected: !0,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(o.N, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: F.p,
                                                  }),
                                              channel: p.intl.string(p.t["imVD+u"]),
                                              selected: !1,
                                          },
                                          {
                                              channelIcon: () =>
                                                  (0, i.jsx)(c.b, {
                                                      size: "md",
                                                      color: "currentColor",
                                                      className: F.p,
                                                  }),
                                              channel: p.intl.string(p.t["Pj/Wpt"]),
                                              selected: !0,
                                          },
                                      ].map((t, e) => {
                                          let { channelIcon: n, channel: l, selected: s } = t;
                                          return (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: r()(F.CQ, F.p9, { [F.wH]: s }),
                                                  children: [
                                                      (0, i.jsxs)("div", {
                                                          className: F.Ix,
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
                                                          className: r()(F.kv, { [F.wH]: s }),
                                                          children:
                                                              s &&
                                                              (0, i.jsx)(I.A, {
                                                                  size: "md",
                                                                  color: "currentColor",
                                                                  className: F.AI,
                                                              }),
                                                      }),
                                                  ],
                                              },
                                              e,
                                          );
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: F.Ru,
                                      children: [
                                          (0, i.jsx)(E.D, {
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
