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
    c = n(481060),
    u = n(243778),
    d = n(984370),
    p = n(703656),
    f = n(905551),
    m = n(755458),
    g = n(773149),
    v = n(713081),
    x = n(905128),
    _ = n(639777),
    b = n(169010),
    h = n(27237),
    j = n(426771),
    C = n(51859),
    w = n(184478),
    I = n(877362),
    E = n(460608),
    Z = n(279604),
    P = n(385902),
    T = n(332538),
    y = n(857666),
    N = n(535396),
    O = n(921944),
    S = n(501669),
    A = n(388032),
    k = n(287569);
let R = [N.Us.LEVEL, N.Us.PERK];
function L(e) {
    let { guildId: t, powerupListingId: l } = e,
        L = (0, m.BU)(t, "GuildPowerupsOverview");
    i.useEffect(() => {
        L && (0, f.ce)(t);
    }, [t, L]),
        i.useEffect(() => {
            (0, v.Sn)(t), (0, v.BN)(t);
        }, [t]),
        (0, T.Wj)(t);
    let U = (0, a.e7)([x.Z], () => x.Z.getStateForGuild(t)),
        D = (0, _.Z)(t),
        M = i.useRef(!1),
        { shouldShow: G, modalConfig: V } = (0, P.K)(t, "GuildPowerupsOverview"),
        B = null == l && null != V,
        W = [];
    G && B && W.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [z, F] = (0, u.US)(W),
        K = i.useMemo(
            () =>
                R.reduce((e, t) => {
                    let n = null == U ? void 0 : U.powerupCatalog[t];
                    if (null == n) return e;
                    let r = (0, b.S)(t, n, L);
                    return (
                        e.push({
                            type: t,
                            listings: r,
                        }),
                        e
                    );
                }, []),
            [null == U ? void 0 : U.powerupCatalog, L],
        ),
        X = K.flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        H = (0, y.f)(X, t);
    return (i.useEffect(() => {
        if (null != l && !M.current)
            for (let e of K)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === l) {
                        (0, Z.KE)(t, n.powerup), (M.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === l || n.powerups.some((e) => e.skuId === l))) {
                        M.current = !0;
                        let e = H[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(N.am);
                                let t = e.pathname + e.search + e.hash;
                                (0, p.dL)(t), (M.current = !1);
                            },
                        });
                        return;
                    }
                }
    }, [t, l, K, H]),
    i.useEffect(() => {
        null != z &&
            null != V &&
            (0, c.ZDy)(
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
                                    modalConfig: V,
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
                    modalKey: "dismissible_content_".concat(z),
                },
            );
    }, [t, z, F, V]),
    (null == U ? void 0 : U.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)("div", {
              className: k.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: k.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: c.Ucv,
                              "aria-label": "",
                          }),
                          (0, r.jsx)(d.Z.Title, { children: A.intl.string(S.default.yv3DJJ) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: k.contentContainer,
                      children: [
                          (0, r.jsx)(c.zJl, {
                              className: k.powerupsContainer,
                              children: K.map((e) => {
                                  let { type: n, listings: i } = e,
                                      { title: l, description: a } = (function (e) {
                                          switch (e) {
                                              case N.Us.LEVEL:
                                                  return {
                                                      title: A.intl.string(S.default["TXY/b0"]),
                                                      description: A.intl.string(S.default.aJv4PB),
                                                  };
                                              case N.Us.PERK:
                                                  return {
                                                      title: A.intl.string(S.default.TV3Vm8),
                                                      description: A.intl.string(S.default.STx9hp),
                                                  };
                                          }
                                      })(n),
                                      s = n === N.Us.LEVEL ? c.zJl : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: k.powerupsSection,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: k.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsx)(c.Heading, {
                                                          color: "header-primary",
                                                          variant: "heading-lg/semibold",
                                                          children: l,
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: a,
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(s, {
                                                  orientation: "horizontal",
                                                  className: o()(k.powerupContainer, k.powerupHorizontalPadding, {
                                                      [k.powerupsLevelContainer]: n === N.Us.LEVEL,
                                                  }),
                                                  fade: !0,
                                                  children: i.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              var l;
                                                              return (0, r.jsx)(
                                                                  h.ZP,
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
                                                                  j.Z,
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
                              className: k.sidebarContainer,
                              children: [
                                  D ? (0, r.jsx)(w.Z, { guildId: t }) : (0, r.jsx)(I.Z, { guildId: t }),
                                  (0, r.jsx)(E.Z, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
