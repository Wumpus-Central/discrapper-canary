n.d(t, { Z: () => R }),
    n(539854),
    n(388685),
    n(361932),
    n(187205),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(35282),
    n(953529);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(704215),
    u = n(481060),
    c = n(243778),
    d = n(984370),
    f = n(703656),
    p = n(755458),
    m = n(773149),
    v = n(905128),
    g = n(730164),
    x = n(639777),
    b = n(124431),
    h = n(169010),
    j = n(27237),
    Z = n(426771),
    _ = n(51859),
    w = n(184478),
    C = n(877362),
    I = n(460608),
    P = n(857666),
    E = n(28239),
    T = n(196806),
    S = n(535396),
    y = n(921944),
    N = n(556970),
    A = n(388032),
    O = n(919919);
function R(e) {
    let { guildId: t, powerupListingId: o } = e;
    (0, b.Z)(t);
    let R = (0, p.BU)(t, "GuildPowerupsOverview");
    (0, g.Wj)(t);
    let L = (0, a.e7)([v.Z], () => v.Z.getStateForGuild(t)),
        k = (0, x.Z)(t),
        U = i.useRef(!1),
        { shouldShow: D, modalConfig: M } = (0, E.Z)(t, "GuildPowerupsOverview"),
        G = null == o && null != M,
        V = [];
    D && G && V.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [B, W] = (0, c.US)(V),
        F = (0, h._P)(t, R),
        z = F.flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        K = (0, P.f)(z, t);
    return (i.useEffect(() => {
        if (null != o && !U.current)
            for (let e of F)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === o) {
                        (0, T.Z)(t, n.powerup), (U.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === o || n.powerups.some((e) => e.skuId === o))) {
                        U.current = !0;
                        let e = K[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(S.am);
                                let t = e.pathname + e.search + e.hash;
                                (0, f.dL)(t), (U.current = !1);
                            },
                        });
                        return;
                    }
                }
    }, [t, o, F, K]),
    i.useEffect(() => {
        null != B &&
            null != M &&
            (0, u.ZDy)(
                async () => {
                    let { default: e } = await n.e("61879").then(n.bind(n, 802426));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })(
                                {
                                    modalConfig: M,
                                    markAsDismissed: W,
                                },
                                t,
                            ),
                        );
                },
                {
                    onCloseCallback: () => {
                        W(y.L.USER_DISMISS);
                    },
                    modalKey: "dismissible_content_".concat(B),
                },
            );
    }, [t, B, W, M]),
    (null == L ? void 0 : L.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)("div", {
              className: O.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: O.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: u.Ucv,
                              "aria-label": "",
                          }),
                          (0, r.jsx)(d.Z.Title, { children: A.intl.string(N.default.yv3DJJ) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: O.contentContainer,
                      children: [
                          (0, r.jsx)(u.zJl, {
                              className: O.powerupsContainer,
                              children: F.map((e) => {
                                  let { type: n, listings: i } = e,
                                      { title: o, description: a } = (function (e) {
                                          switch (e) {
                                              case S.Us.LEVEL:
                                                  return {
                                                      title: A.intl.string(N.default["TXY/b0"]),
                                                      description: A.intl.string(N.default.aJv4PB),
                                                  };
                                              case S.Us.PERK:
                                                  return {
                                                      title: A.intl.string(N.default.TV3Vm8),
                                                      description: A.intl.string(N.default.STx9hp),
                                                  };
                                          }
                                      })(n),
                                      s = n === S.Us.LEVEL ? u.zJl : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: O.powerupsSection,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: O.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsx)(u.Heading, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: o,
                                                      }),
                                                      (0, r.jsx)(u.Text, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: a,
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(s, {
                                                  orientation: "horizontal",
                                                  className: l()(O.powerupContainer, O.powerupHorizontalPadding, {
                                                      [O.powerupsLevelContainer]: n === S.Us.LEVEL,
                                                  }),
                                                  fade: !0,
                                                  children: i.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              var o;
                                                              return (0, r.jsx)(
                                                                  j.Z,
                                                                  {
                                                                      guildId: t,
                                                                      index: n,
                                                                      powerup: e.powerup,
                                                                      nextPowerup:
                                                                          null == (o = i[n + 1]) ? void 0 : o.powerup,
                                                                  },
                                                                  "powerup-".concat(e.powerup.skuId),
                                                              );
                                                          case "singlePerk":
                                                              return (0, r.jsx)(
                                                                  _.Z,
                                                                  {
                                                                      guildId: t,
                                                                      powerup: e.powerup,
                                                                  },
                                                                  "powerup-".concat(e.powerup.skuId),
                                                              );
                                                          case "multiPerk":
                                                              return (0, r.jsx)(
                                                                  Z.Z,
                                                                  {
                                                                      guildId: t,
                                                                      group: e.group,
                                                                      powerups: e.powerups,
                                                                  },
                                                                  "powerup-group-".concat(e.group),
                                                              );
                                                          case "gameServer":
                                                              return (0, r.jsx)(
                                                                  m.Z,
                                                                  { guildId: t },
                                                                  "powerup-game-server",
                                                              );
                                                      }
                                                  }),
                                              }),
                                          ],
                                      },
                                      "section-".concat(n),
                                  );
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: O.sidebarContainer,
                              children: [
                                  k ? (0, r.jsx)(w.Z, { guildId: t }) : (0, r.jsx)(C.Z, { guildId: t }),
                                  (0, r.jsx)(I.Z, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
