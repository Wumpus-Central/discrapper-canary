n.d(t, { Z: () => T }), n(539854), n(388685), n(361932), n(187205), n(953529);
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(704215),
    u = n(481060),
    c = n(243778),
    d = n(984370),
    p = n(713081),
    f = n(905128),
    m = n(639777),
    g = n(169010),
    x = n(27237),
    v = n(426771),
    _ = n(51859),
    b = n(184478),
    j = n(877362),
    h = n(460608),
    E = n(279604),
    C = n(385902),
    I = n(332538),
    O = n(857666),
    y = n(535396),
    P = n(921944),
    w = n(93841),
    N = n(388032),
    Z = n(941818);
let S = [y.Us.LEVEL, y.Us.PERK];
function T(e) {
    let { guildId: t, powerupListingId: i } = e;
    o.useEffect(() => {
        (0, p.Sn)(t), (0, p.Fm)(t);
    }, [t]),
        (0, I.Wj)(t);
    let T = (0, s.e7)([f.Z], () => f.Z.getStateForGuild(t)),
        A = (0, m.Z)(t),
        R = o.useRef(!1),
        { shouldShow: k, modalConfig: L } = (0, C.K)(t, "GuildPowerupsOverview"),
        D = null == i && null != L,
        U = [];
    k && D && U.push(a.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [V, M] = (0, c.US)(U),
        B = o.useMemo(
            () =>
                S.reduce((e, t) => {
                    let n = null == T ? void 0 : T.powerupCatalog[t];
                    if (null == n) return e;
                    let r = (0, g.S)(n);
                    return (
                        e.push({
                            type: t,
                            listings: r,
                        }),
                        e
                    );
                }, []),
            [null == T ? void 0 : T.powerupCatalog],
        ),
        G = B.flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        W = (0, O.f)(G, t);
    return (o.useEffect(() => {
        if (null != i && !R.current)
            for (let e of B)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
                        (0, E.KE)(t, n.powerup), (R.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === i || n.powerups.some((e) => e.skuId === i))) {
                        R.current = !0;
                        let e = W[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups);
                        return;
                    }
                }
    }, [t, i, B, W]),
    o.useEffect(() => {
        null != V &&
            null != L &&
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
                                    modalConfig: L,
                                    markAsDismissed: M,
                                },
                                t,
                            ),
                        );
                },
                {
                    onCloseCallback: () => {
                        M(P.L.USER_DISMISS);
                    },
                    modalKey: "dismissible_content_".concat(V),
                },
            );
    }, [t, V, M, L]),
    (null == T ? void 0 : T.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)("div", {
              className: Z.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: Z.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: u.$Eu,
                              "aria-label": "",
                          }),
                          (0, r.jsx)(d.Z.Title, { children: N.intl.string(w.default.yv3DJC) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: Z.contentContainer,
                      children: [
                          (0, r.jsx)(u.zJl, {
                              className: Z.powerupsContainer,
                              children: B.map((e) => {
                                  let { type: n, listings: o } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case y.Us.LEVEL:
                                                  return {
                                                      title: N.intl.string(w.default["TXY/b2"]),
                                                      description: N.intl.string(w.default.aJv4PD),
                                                  };
                                              case y.Us.PERK:
                                                  return {
                                                      title: N.intl.string(w.default.TV3Vm5),
                                                      description: N.intl.string(w.default.STx9ho),
                                                  };
                                          }
                                      })(n),
                                      a = n === y.Us.LEVEL ? u.zJl : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: Z.powerupsSection,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: Z.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsx)(u.X6q, {
                                                          color: "header-primary",
                                                          variant: "heading-lg/semibold",
                                                          children: i,
                                                      }),
                                                      (0, r.jsx)(u.Text, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: s,
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(a, {
                                                  orientation: "horizontal",
                                                  className: l()(Z.powerupContainer, Z.powerupHorizontalPadding, {
                                                      [Z.powerupsLevelContainer]: n === y.Us.LEVEL,
                                                  }),
                                                  fade: !0,
                                                  children: o.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              var i;
                                                              return (0, r.jsx)(
                                                                  x.ZP,
                                                                  {
                                                                      guildId: t,
                                                                      index: n,
                                                                      powerup: e.powerup,
                                                                      nextPowerup:
                                                                          null == (i = o[n + 1]) ? void 0 : i.powerup,
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
                                                                  v.Z,
                                                                  {
                                                                      guildId: t,
                                                                      group: e.group,
                                                                      powerups: e.powerups,
                                                                  },
                                                                  "powerup-group-".concat(e.group),
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
                              className: Z.sidebarContainer,
                              children: [
                                  A ? (0, r.jsx)(b.Z, { guildId: t }) : (0, r.jsx)(j.Z, { guildId: t }),
                                  (0, r.jsx)(h.Z, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
