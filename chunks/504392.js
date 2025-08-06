n.d(t, { Z: () => S }), n(539854), n(388685), n(953529);
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(704215),
    c = n(481060),
    u = n(243778),
    d = n(984370),
    p = n(713081),
    f = n(905128),
    m = n(639777),
    g = n(169010),
    x = n(27237),
    _ = n(426771),
    v = n(51859),
    b = n(184478),
    j = n(877362),
    h = n(460608),
    E = n(279604),
    C = n(385902),
    O = n(332538),
    I = n(535396),
    y = n(921944),
    P = n(93841),
    w = n(388032),
    N = n(782285);
let Z = [I.Us.LEVEL, I.Us.PERK];
function S(e) {
    let { guildId: t, powerupSkuId: i } = e;
    o.useEffect(() => {
        (0, p.Sn)(t), (0, p.Fm)(t);
    }, [t]),
        (0, O.Wj)(t);
    let S = (0, s.e7)([f.Z], () => f.Z.getStateForGuild(t)),
        T = (0, m.Z)(t),
        A = o.useRef(!1),
        { shouldShow: R, modalConfig: k } = (0, C.K)(t, "GuildPowerupsOverview"),
        L = null == i && null != k,
        D = [];
    R && L && D.push(a.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [U, V] = (0, u.US)(D),
        M = o.useMemo(
            () =>
                Z.reduce((e, t) => {
                    let n = null == S ? void 0 : S.powerupCatalog[t];
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
            [null == S ? void 0 : S.powerupCatalog],
        );
    return (o.useEffect(() => {
        var e;
        if (null == i) return;
        let n = null == S || null == (e = S.allPowerups) ? void 0 : e[i];
        null == n || A.current || ((0, E.KE)(t, n), (A.current = !0));
    }, [t, i, null == S ? void 0 : S.allPowerups]),
    o.useEffect(() => {
        null != U &&
            null != k &&
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
                                    modalConfig: k,
                                    markAsDismissed: V,
                                },
                                t,
                            ),
                        );
                },
                {
                    onCloseCallback: () => {
                        V(y.L.USER_DISMISS);
                    },
                    modalKey: "dismissible_content_".concat(U),
                },
            );
    }, [t, U, V, k]),
    (null == S ? void 0 : S.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)("div", {
              className: N.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: N.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: c.$Eu,
                              "aria-label": "",
                          }),
                          (0, r.jsx)(d.Z.Title, { children: w.intl.string(P.default.yv3DJC) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: N.contentContainer,
                      children: [
                          (0, r.jsx)(c.zJl, {
                              className: N.powerupsContainer,
                              children: M.map((e) => {
                                  let { type: n, listings: o } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case I.Us.LEVEL:
                                                  return {
                                                      title: w.intl.string(P.default["TXY/b2"]),
                                                      description: w.intl.string(P.default.aJv4PD),
                                                  };
                                              case I.Us.PERK:
                                                  return {
                                                      title: w.intl.string(P.default.TV3Vm5),
                                                      description: w.intl.string(P.default.STx9ho),
                                                  };
                                          }
                                      })(n),
                                      a = n === I.Us.LEVEL ? c.zJl : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: N.powerupsSection,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: N.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsx)(c.X6q, {
                                                          color: "header-primary",
                                                          variant: "heading-lg/semibold",
                                                          children: i,
                                                      }),
                                                      (0, r.jsx)(c.Text, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: s,
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(a, {
                                                  orientation: "horizontal",
                                                  className: l()(N.powerupContainer, N.powerupHorizontalPadding, {
                                                      [N.powerupsLevelContainer]: n === I.Us.LEVEL,
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
                                                                  v.Z,
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
                              className: N.sidebarContainer,
                              children: [
                                  T ? (0, r.jsx)(b.Z, { guildId: t }) : (0, r.jsx)(j.Z, { guildId: t }),
                                  (0, r.jsx)(h.Z, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
