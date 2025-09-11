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
    g = n(634952),
    f = n(248641),
    v = n(713081),
    _ = n(905128),
    h = n(639777),
    x = n(169010),
    b = n(27237),
    C = n(426771),
    j = n(51859),
    E = n(184478),
    T = n(877362),
    P = n(460608),
    I = n(279604),
    y = n(385902),
    S = n(332538),
    w = n(857666),
    N = n(535396),
    O = n(921944),
    Z = n(258640),
    k = n(388032),
    A = n(287569);
let U = [N.Us.LEVEL, N.Us.PERK];
function R(e) {
    let { guildId: t, powerupListingId: i } = e,
        R = (0, g.A0)(t, "GuildPowerupsOverview");
    o.useEffect(() => {
        R && ((0, m.EC)(t), (0, m.po)(t));
    }, [t, R]),
        o.useEffect(() => {
            (0, v.Sn)(t), (0, v.BN)(t);
        }, [t]),
        (0, S.Wj)(t);
    let L = (0, a.e7)([_.Z], () => _.Z.getStateForGuild(t)),
        M = (0, h.Z)(t),
        D = o.useRef(!1),
        { shouldShow: G, modalConfig: V } = (0, y.K)(t, "GuildPowerupsOverview"),
        B = null == i && null != V,
        F = [];
    G && B && F.push(s.z.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [W, K] = (0, u.US)(F),
        z = o.useMemo(
            () =>
                U.reduce((e, t) => {
                    let n = null == L ? void 0 : L.powerupCatalog[t];
                    if (null == n) return e;
                    let r = (0, x.S)(t, n, R);
                    return (
                        e.push({
                            type: t,
                            listings: r,
                        }),
                        e
                    );
                }, []),
            [null == L ? void 0 : L.powerupCatalog, R],
        ),
        H = z
            .flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        X = (0, w.f)(H, t);
    return (o.useEffect(() => {
        if (null != i && !D.current)
            for (let e of z)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === i) {
                        (0, I.KE)(t, n.powerup), (D.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === i || n.powerups.some((e) => e.skuId === i))) {
                        D.current = !0;
                        let e = X[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(N.am);
                                let t = e.pathname + e.search + e.hash;
                                (0, p.dL)(t), (D.current = !1);
                            },
                        });
                        return;
                    }
                }
    }, [t, i, z, X]),
    o.useEffect(() => {
        null != W &&
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
                                    markAsDismissed: K,
                                },
                                t,
                            ),
                        );
                },
                {
                    onCloseCallback: () => {
                        K(O.L.USER_DISMISS);
                    },
                    modalKey: "dismissible_content_".concat(W),
                },
            );
    }, [t, W, K, V]),
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
                          (0, r.jsx)(d.Z.Title, { children: k.intl.string(Z.default.yv3DJC) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: A.contentContainer,
                      children: [
                          (0, r.jsx)(c.zJl, {
                              className: A.powerupsContainer,
                              children: z.map((e) => {
                                  let { type: n, listings: o } = e,
                                      { title: i, description: a } = (function (e) {
                                          switch (e) {
                                              case N.Us.LEVEL:
                                                  return {
                                                      title: k.intl.string(Z.default["TXY/b2"]),
                                                      description: k.intl.string(Z.default.aJv4PD),
                                                  };
                                              case N.Us.PERK:
                                                  return {
                                                      title: k.intl.string(Z.default.TV3Vm5),
                                                      description: k.intl.string(Z.default.STx9ho),
                                                  };
                                          }
                                      })(n),
                                      s = n === N.Us.LEVEL ? c.zJl : "div";
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
                                                      [A.powerupsLevelContainer]: n === N.Us.LEVEL,
                                                  }),
                                                  fade: !0,
                                                  children: o.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              var i;
                                                              return (0, r.jsx)(
                                                                  b.ZP,
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
                                                              return (0, r.jsx)(f.Z, { guildId: t }, "powerup-portkey");
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
                                  M ? (0, r.jsx)(E.Z, { guildId: t }) : (0, r.jsx)(T.Z, { guildId: t }),
                                  (0, r.jsx)(P.Z, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
