n.d(t, { Z: () => A }),
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
var r = n(951288),
    o = n(647438),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(704215),
    c = n(481060),
    u = n(243778),
    d = n(984370),
    p = n(703656),
    m = n(713081),
    f = n(905128),
    _ = n(639777),
    x = n(169010),
    g = n(27237),
    v = n(426771),
    b = n(51859),
    h = n(184478),
    j = n(877362),
    C = n(460608),
    E = n(279604),
    I = n(385902),
    N = n(332538),
    w = n(857666),
    Z = n(535396),
    P = n(921944),
    S = n(989308),
    y = n(388032),
    T = n(823441);
let O = [Z.Us.LEVEL, Z.Us.PERK];
function A(e) {
    let { guildId: t, powerupListingId: i } = e;
    o.useEffect(() => {
        (0, m.Sn)(t), (0, m.Fm)(t);
    }, [t]),
        (0, N.Wj)(t);
    let A = (0, s.e7)([f.Z], () => f.Z.getStateForGuild(t)),
        R = (0, _.Z)(t),
        L = o.useRef(!1),
        { shouldShow: k, modalConfig: U } = (0, I.K)(t, "GuildPowerupsOverview"),
        D = null == i && null != U,
        M = [];
    k && D && M.push(a.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [V, B] = (0, u.US)(M),
        G = o.useMemo(
            () =>
                O.reduce((e, t) => {
                    let n = null == A ? void 0 : A.powerupCatalog[t];
                    if (null == n) return e;
                    let r = (0, x.S)(n);
                    return (
                        e.push({
                            type: t,
                            listings: r,
                        }),
                        e
                    );
                }, []),
            [null == A ? void 0 : A.powerupCatalog],
        ),
        W = G.flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        z = (0, w.f)(W, t);
    return (o.useEffect(() => {
        if (null != i && !L.current)
            for (let e of G)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
                        (0, E.KE)(t, n.powerup), (L.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === i || n.powerups.some((e) => e.skuId === i))) {
                        L.current = !0;
                        let e = z[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(Z.am);
                                let t = e.pathname + e.search + e.hash;
                                (0, p.dL)(t), (L.current = !1);
                            },
                        });
                        return;
                    }
                }
    }, [t, i, G, z]),
    o.useEffect(() => {
        null != V &&
            null != U &&
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
                                    modalConfig: U,
                                    markAsDismissed: B,
                                },
                                t,
                            ),
                        );
                },
                {
                    onCloseCallback: () => {
                        B(P.L.USER_DISMISS);
                    },
                    modalKey: "dismissible_content_".concat(V),
                },
            );
    }, [t, V, B, U]),
    (null == A ? void 0 : A.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)("div", {
              className: T.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: T.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: c.$Eu,
                              "aria-label": "",
                          }),
                          (0, r.jsx)(d.Z.Title, { children: y.intl.string(S.default.yv3DJC) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: T.contentContainer,
                      children: [
                          (0, r.jsx)(c.zJl, {
                              className: T.powerupsContainer,
                              children: G.map((e) => {
                                  let { type: n, listings: o } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case Z.Us.LEVEL:
                                                  return {
                                                      title: y.intl.string(S.default["TXY/b2"]),
                                                      description: y.intl.string(S.default.aJv4PD),
                                                  };
                                              case Z.Us.PERK:
                                                  return {
                                                      title: y.intl.string(S.default.TV3Vm5),
                                                      description: y.intl.string(S.default.STx9ho),
                                                  };
                                          }
                                      })(n),
                                      a = n === Z.Us.LEVEL ? c.zJl : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: T.powerupsSection,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: T.powerupHorizontalPadding,
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
                                                  className: l()(T.powerupContainer, T.powerupHorizontalPadding, {
                                                      [T.powerupsLevelContainer]: n === Z.Us.LEVEL,
                                                  }),
                                                  fade: !0,
                                                  children: o.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              var i;
                                                              return (0, r.jsx)(
                                                                  g.ZP,
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
                                                                  b.Z,
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
                              className: T.sidebarContainer,
                              children: [
                                  R ? (0, r.jsx)(h.Z, { guildId: t }) : (0, r.jsx)(j.Z, { guildId: t }),
                                  (0, r.jsx)(C.Z, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
