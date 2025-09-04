n.d(t, { Z: () => U }),
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
    a = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(243778),
    d = n(984370),
    p = n(703656),
    m = n(744993),
    f = n(634952),
    g = n(248641),
    v = n(713081),
    x = n(905128),
    _ = n(639777),
    b = n(169010),
    h = n(27237),
    C = n(426771),
    j = n(51859),
    P = n(184478),
    E = n(877362),
    I = n(460608),
    T = n(279604),
    y = n(385902),
    w = n(332538),
    Z = n(857666),
    S = n(535396),
    N = n(921944),
    k = n(989308),
    O = n(388032),
    A = n(823441);
let R = [S.Us.LEVEL, S.Us.PERK];
function U(e) {
    let { guildId: t, powerupListingId: i } = e,
        U = (0, f.A0)(t, "GuildPowerupsOverview");
    o.useEffect(() => {
        U && ((0, m.EC)(t), (0, m.po)(t));
    }, [t, U]),
        o.useEffect(() => {
            (0, v.Sn)(t), (0, v.Fm)(t);
        }, [t]),
        (0, w.Wj)(t);
    let L = (0, a.e7)([x.Z], () => x.Z.getStateForGuild(t)),
        M = (0, _.Z)(t),
        D = o.useRef(!1),
        { shouldShow: G, modalConfig: V } = (0, y.K)(t, "GuildPowerupsOverview"),
        B = null == i && null != V,
        W = [];
    G && B && W.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [z, F] = (0, u.US)(W),
        K = o.useMemo(
            () =>
                R.reduce((e, t) => {
                    let n = null == L ? void 0 : L.powerupCatalog[t];
                    if (null == n) return e;
                    let r = (0, b.S)(t, n, U);
                    return (
                        e.push({
                            type: t,
                            listings: r,
                        }),
                        e
                    );
                }, []),
            [null == L ? void 0 : L.powerupCatalog, U],
        ),
        X = K.flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        H = (0, Z.f)(X, t);
    return (o.useEffect(() => {
        if (null != i && !D.current)
            for (let e of K)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
                        (0, T.KE)(t, n.powerup), (D.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === i || n.powerups.some((e) => e.skuId === i))) {
                        D.current = !0;
                        let e = H[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(S.am);
                                let t = e.pathname + e.search + e.hash;
                                (0, p.dL)(t), (D.current = !1);
                            },
                        });
                        return;
                    }
                }
    }, [t, i, K, H]),
    o.useEffect(() => {
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
                        F(N.L.USER_DISMISS);
                    },
                    modalKey: "dismissible_content_".concat(z),
                },
            );
    }, [t, z, F, V]),
    (null == L ? void 0 : L.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)("div", {
              className: A.container,
              children: [
                  (0, r.jsxs)(d.Z, {
                      className: A.toolbar,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(d.Z.Icon, {
                              icon: c.$Eu,
                              "aria-label": "",
                          }),
                          (0, r.jsx)(d.Z.Title, { children: O.intl.string(k.default.yv3DJC) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: A.contentContainer,
                      children: [
                          (0, r.jsx)(c.zJl, {
                              className: A.powerupsContainer,
                              children: K.map((e) => {
                                  let { type: n, listings: o } = e,
                                      { title: i, description: a } = (function (e) {
                                          switch (e) {
                                              case S.Us.LEVEL:
                                                  return {
                                                      title: O.intl.string(k.default["TXY/b2"]),
                                                      description: O.intl.string(k.default.aJv4PD),
                                                  };
                                              case S.Us.PERK:
                                                  return {
                                                      title: O.intl.string(k.default.TV3Vm5),
                                                      description: O.intl.string(k.default.STx9ho),
                                                  };
                                          }
                                      })(n),
                                      s = n === S.Us.LEVEL ? c.zJl : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: A.powerupsSection,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: A.powerupHorizontalPadding,
                                                  children: [
                                                      (0, r.jsx)(c.X6q, {
                                                          color: "header-primary",
                                                          variant: "heading-lg/semibold",
                                                          children: i,
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
                                                  className: l()(A.powerupContainer, A.powerupHorizontalPadding, {
                                                      [A.powerupsLevelContainer]: n === S.Us.LEVEL,
                                                  }),
                                                  fade: !0,
                                                  children: o.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              var i;
                                                              return (0, r.jsx)(
                                                                  h.ZP,
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
                                                                  j.Z,
                                                                  {
                                                                      guildId: t,
                                                                      powerup: e.powerup,
                                                                  },
                                                                  "powerup-".concat(e.powerup.skuId),
                                                              );
                                                          case "multiPerk":
                                                              return (0, r.jsx)(
                                                                  C.Z,
                                                                  {
                                                                      guildId: t,
                                                                      group: e.group,
                                                                      powerups: e.powerups,
                                                                  },
                                                                  "powerup-group-".concat(e.group),
                                                              );
                                                          case "portkey":
                                                              return (0, r.jsx)(g.Z, { guildId: t }, "powerup-portkey");
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
                              className: A.sidebarContainer,
                              children: [
                                  M ? (0, r.jsx)(P.Z, { guildId: t }) : (0, r.jsx)(E.Z, { guildId: t }),
                                  (0, r.jsx)(I.Z, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
