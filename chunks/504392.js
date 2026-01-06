n.d(t, { Z: () => L }),
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
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(704215),
    u = n(481060),
    c = n(243778),
    d = n(984370),
    f = n(703656),
    p = n(905551),
    m = n(755458),
    g = n(773149),
    v = n(713081),
    x = n(905128),
    b = n(730164),
    h = n(639777),
    j = n(169010),
    Z = n(27237),
    _ = n(426771),
    C = n(51859),
    w = n(184478),
    E = n(877362),
    I = n(460608),
    P = n(857666),
    T = n(28239),
    y = n(196806),
    N = n(535396),
    O = n(921944),
    A = n(556970),
    S = n(388032),
    R = n(919919);
function L(e) {
    let { guildId: t, powerupListingId: l } = e,
        L = (0, m.BU)(t, "GuildPowerupsOverview");
    i.useEffect(() => {
        L && (0, p.ce)(t);
    }, [t, L]),
        i.useEffect(() => {
            (0, v.Sn)(t), (0, v.BN)(t);
        }, [t]),
        (0, b.Wj)(t);
    let k = (0, a.e7)([x.Z], () => x.Z.getStateForGuild(t)),
        U = (0, h.Z)(t),
        D = i.useRef(!1),
        { shouldShow: M, modalConfig: G } = (0, T.Z)(t, "GuildPowerupsOverview"),
        V = null == l && null != G,
        B = [];
    M && V && B.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [W, F] = (0, c.US)(B),
        z = (0, j._P)(t, L),
        K = z
            .flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        X = (0, P.f)(K, t);
    return (i.useEffect(() => {
        if (null != l && !D.current)
            for (let e of z)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === l) {
                        (0, y.Z)(t, n.powerup), (D.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === l || n.powerups.some((e) => e.skuId === l))) {
                        D.current = !0;
                        let e = X[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(N.am);
                                let t = e.pathname + e.search + e.hash;
                                (0, f.dL)(t), (D.current = !1);
                            },
                        });
                        return;
                    }
                }
    }, [t, l, z, X]),
    i.useEffect(() => {
        null != W &&
            null != G &&
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
                                    modalConfig: G,
                                    markAsDismissed: F,
                                },
                                t,
                            ),
                        );
                },
                {
                    onCloseCallback: () => {
                        F(O.L.USER_DISMISS);
                    },
                    modalKey: "dismissible_content_".concat(W),
                },
            );
    }, [t, W, F, G]),
    (null == k ? void 0 : k.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)("div", {
              className: R.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: R.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: u.Ucv,
                              "aria-label": "",
                          }),
                          (0, r.jsx)(d.Z.Title, { children: S.intl.string(A.default.yv3DJJ) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: R.contentContainer,
                      children: [
                          (0, r.jsx)(u.zJl, {
                              className: R.powerupsContainer,
                              children: z.map((e) => {
                                  let { type: n, listings: i } = e,
                                      { title: l, description: a } = (function (e) {
                                          switch (e) {
                                              case N.Us.LEVEL:
                                                  return {
                                                      title: S.intl.string(A.default["TXY/b0"]),
                                                      description: S.intl.string(A.default.aJv4PB),
                                                  };
                                              case N.Us.PERK:
                                                  return {
                                                      title: S.intl.string(A.default.TV3Vm8),
                                                      description: S.intl.string(A.default.STx9hp),
                                                  };
                                          }
                                      })(n),
                                      s = n === N.Us.LEVEL ? u.zJl : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: R.powerupsSection,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: R.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsx)(u.Heading, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: l,
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
                                                  className: o()(R.powerupContainer, R.powerupHorizontalPadding, {
                                                      [R.powerupsLevelContainer]: n === N.Us.LEVEL,
                                                  }),
                                                  fade: !0,
                                                  children: i.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              var l;
                                                              return (0, r.jsx)(
                                                                  Z.Z,
                                                                  {
                                                                      guildId: t,
                                                                      index: n,
                                                                      powerup: e.powerup,
                                                                      nextPowerup:
                                                                          null == (l = i[n + 1]) ? void 0 : l.powerup,
                                                                  },
                                                                  "powerup-".concat(e.powerup.skuId),
                                                              );
                                                          case "singlePerk":
                                                              return (0, r.jsx)(
                                                                  C.Z,
                                                                  {
                                                                      guildId: t,
                                                                      powerup: e.powerup,
                                                                  },
                                                                  "powerup-".concat(e.powerup.skuId),
                                                              );
                                                          case "multiPerk":
                                                              return (0, r.jsx)(
                                                                  _.Z,
                                                                  {
                                                                      guildId: t,
                                                                      group: e.group,
                                                                      powerups: e.powerups,
                                                                  },
                                                                  "powerup-group-".concat(e.group),
                                                              );
                                                          case "gameServer":
                                                              return (0, r.jsx)(
                                                                  g.Z,
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
                              className: R.sidebarContainer,
                              children: [
                                  U ? (0, r.jsx)(w.Z, { guildId: t }) : (0, r.jsx)(E.Z, { guildId: t }),
                                  (0, r.jsx)(I.Z, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
