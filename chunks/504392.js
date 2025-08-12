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
var r = n(255367),
    o = n(73800),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(704215),
    u = n(481060),
    c = n(243778),
    d = n(984370),
    p = n(703656),
    f = n(713081),
    m = n(905128),
    g = n(639777),
    x = n(169010),
    v = n(27237),
    _ = n(426771),
    b = n(51859),
    j = n(184478),
    h = n(877362),
    E = n(460608),
    C = n(279604),
    I = n(385902),
    O = n(332538),
    y = n(857666),
    w = n(535396),
    P = n(921944),
    N = n(93841),
    Z = n(388032),
    S = n(941818);
let T = [w.Us.LEVEL, w.Us.PERK];
function A(e) {
    let { guildId: t, powerupListingId: i } = e;
    o.useEffect(() => {
        (0, f.Sn)(t), (0, f.Fm)(t);
    }, [t]),
        (0, O.Wj)(t);
    let A = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)),
        R = (0, g.Z)(t),
        k = o.useRef(!1),
        { shouldShow: L, modalConfig: D } = (0, I.K)(t, "GuildPowerupsOverview"),
        U = null == i && null != D,
        V = [];
    L && U && V.push(a.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [M, B] = (0, c.US)(V),
        G = o.useMemo(
            () =>
                T.reduce((e, t) => {
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
        z = (0, y.f)(W, t);
    return (o.useEffect(() => {
        if (null != i && !k.current)
            for (let e of G)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
                        (0, C.KE)(t, n.powerup), (k.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === i || n.powerups.some((e) => e.skuId === i))) {
                        k.current = !0;
                        let e = z[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(w.am);
                                let t = e.pathname + e.search + e.hash;
                                (0, p.dL)(t), (k.current = !1);
                            },
                        });
                        return;
                    }
                }
    }, [t, i, G, z]),
    o.useEffect(() => {
        null != M &&
            null != D &&
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
                                    modalConfig: D,
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
                    modalKey: "dismissible_content_".concat(M),
                },
            );
    }, [t, M, B, D]),
    (null == A ? void 0 : A.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)("div", {
              className: S.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: S.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: u.$Eu,
                              "aria-label": "",
                          }),
                          (0, r.jsx)(d.Z.Title, { children: Z.intl.string(N.default.yv3DJC) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: S.contentContainer,
                      children: [
                          (0, r.jsx)(u.zJl, {
                              className: S.powerupsContainer,
                              children: G.map((e) => {
                                  let { type: n, listings: o } = e,
                                      { title: i, description: s } = (function (e) {
                                          switch (e) {
                                              case w.Us.LEVEL:
                                                  return {
                                                      title: Z.intl.string(N.default["TXY/b2"]),
                                                      description: Z.intl.string(N.default.aJv4PD),
                                                  };
                                              case w.Us.PERK:
                                                  return {
                                                      title: Z.intl.string(N.default.TV3Vm5),
                                                      description: Z.intl.string(N.default.STx9ho),
                                                  };
                                          }
                                      })(n),
                                      a = n === w.Us.LEVEL ? u.zJl : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: S.powerupsSection,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: S.powerupHorizontalPadding,
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
                                                  className: l()(S.powerupContainer, S.powerupHorizontalPadding, {
                                                      [S.powerupsLevelContainer]: n === w.Us.LEVEL,
                                                  }),
                                                  fade: !0,
                                                  children: o.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              var i;
                                                              return (0, r.jsx)(
                                                                  v.ZP,
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
                              className: S.sidebarContainer,
                              children: [
                                  R ? (0, r.jsx)(j.Z, { guildId: t }) : (0, r.jsx)(h.Z, { guildId: t }),
                                  (0, r.jsx)(E.Z, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
