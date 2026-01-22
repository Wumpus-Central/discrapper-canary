l.d(t, { A: () => D }),
    l(321073),
    l(896048),
    l(114821),
    l(339614),
    l(693327),
    l(554719),
    l(680155),
    l(323874),
    l(14289),
    l(35956),
    l(747238),
    l(228524);
var r = l(627968),
    n = l(64700),
    i = l(503698),
    s = l.n(i),
    o = l(311907),
    a = l(554146),
    u = l(397927),
    d = l(793574),
    c = l(379848),
    f = l(742589),
    p = l(976860),
    m = l(488803),
    v = l(14081),
    A = l(843095),
    g = l(645619),
    x = l(489306),
    b = l(363487),
    h = l(884928),
    j = l(884684),
    _ = l(983398),
    E = l(194867),
    y = l(149854),
    I = l(864450),
    S = l(697865),
    w = l(297407),
    N = l(271484),
    O = l(289642),
    L = l(915667),
    P = l(800007),
    T = l(568065),
    k = l(49999),
    C = l(333354),
    G = l(985018),
    R = l(377514);
function D(e) {
    let { guildId: t, powerupListingId: i } = e;
    (0, h.A)(t);
    let D = (0, m.C$)(t, "GuildPowerupsOverview");
    (0, x.c2)(t);
    let U = (0, o.bG)([g.A], () => g.A.getStateForGuild(t)),
        V = (0, b.A)(t),
        M = n.useRef(!1),
        { shouldShow: W, modalConfig: B } = (0, O.A)(t, "GuildPowerupsOverview"),
        F = null == i && null != B,
        K = [];
    W && F && K.push(a.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [J, Y] = (0, c.kn)(K),
        z = (0, j.MO)(t, D),
        X = z
            .flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        H = (0, N.g)(X, t);
    return (n.useEffect(() => {
        if (null != i && !M.current)
            for (let e of z)
                for (let l of e.listings) {
                    if (("singleLevel" === l.type || "singlePerk" === l.type) && l.powerup.skuId === i) {
                        (0, L.A)(t, l.powerup), (M.current = !0);
                        return;
                    }
                    if ("multiPerk" === l.type && (l.group === i || l.powerups.some((e) => e.skuId === i))) {
                        M.current = !0;
                        let e = H[l.group];
                        if (null == e) return;
                        e.openModal(l.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(T.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, p.bG)(t), (M.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === l.type && i === P.W5) {
                        (0, A.A)({
                            guildId: t,
                            analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW,
                        }),
                            (M.current = !0);
                        return;
                    }
                }
    }, [t, i, z, H]),
    n.useEffect(() => {
        null != J &&
            null != B &&
            (0, u.mMO)(
                async () => {
                    let { default: e } = await l.e("86618").then(l.bind(l, 442241));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var l = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(l);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(l).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = l[t]),
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
                                    modalConfig: B,
                                    markAsDismissed: Y,
                                },
                                t,
                            ),
                        );
                },
                {
                    onCloseCallback: () => {
                        Y(k.i.USER_DISMISS);
                    },
                    modalKey: "dismissible_content_".concat(J),
                },
            );
    }, [t, J, Y, B]),
    (null == U ? void 0 : U.powerupCatalog) == null)
        ? null
        : (0, r.jsxs)("div", {
              className: R.kL,
              children: [
                  (0, r.jsxs)(f.A, {
                      className: R.KE,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(f.A.Icon, {
                              icon: u._Jp,
                              "aria-label": "",
                          }),
                          (0, r.jsx)(f.A.Title, { children: G.intl.string(C.default.yv3DJJ) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: R.hQ,
                      children: [
                          (0, r.jsx)(u.IpV, {
                              className: R.DO,
                              children: z.map((e) => {
                                  let { type: l, listings: n } = e,
                                      { title: i, description: o } = (function (e) {
                                          switch (e) {
                                              case T.o9.LEVEL:
                                                  return {
                                                      title: G.intl.string(C.default["TXY/b0"]),
                                                      description: G.intl.string(C.default.aJv4PB),
                                                  };
                                              case T.o9.PERK:
                                                  return {
                                                      title: G.intl.string(C.default.TV3Vm8),
                                                      description: G.intl.string(C.default.STx9hp),
                                                  };
                                          }
                                      })(l),
                                      a = l === T.o9.LEVEL ? u.IpV : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: R.lt,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: R.kn,
                                                  children: [
                                                      (0, r.jsx)(u.Heading, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: i,
                                                      }),
                                                      (0, r.jsx)(u.Text, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: o,
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(a, {
                                                  orientation: "horizontal",
                                                  className: s()(R.qJ, R.kn, { [R.dU]: l === T.o9.LEVEL }),
                                                  fade: !0,
                                                  children: n.map((e, l) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              var i;
                                                              return (0, r.jsx)(
                                                                  _.A,
                                                                  {
                                                                      guildId: t,
                                                                      index: l,
                                                                      powerup: e.powerup,
                                                                      nextPowerup:
                                                                          null == (i = n[l + 1]) ? void 0 : i.powerup,
                                                                  },
                                                                  "powerup-".concat(e.powerup.skuId),
                                                              );
                                                          case "singlePerk":
                                                              return (0, r.jsx)(
                                                                  y.A,
                                                                  {
                                                                      guildId: t,
                                                                      powerup: e.powerup,
                                                                  },
                                                                  "powerup-".concat(e.powerup.skuId),
                                                              );
                                                          case "multiPerk":
                                                              return (0, r.jsx)(
                                                                  E.A,
                                                                  {
                                                                      guildId: t,
                                                                      group: e.group,
                                                                      powerups: e.powerups,
                                                                  },
                                                                  "powerup-group-".concat(e.group),
                                                              );
                                                          case "gameServer":
                                                              return (0, r.jsx)(
                                                                  v.A,
                                                                  { guildId: t },
                                                                  "powerup-game-server",
                                                              );
                                                      }
                                                  }),
                                              }),
                                          ],
                                      },
                                      "section-".concat(l),
                                  );
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: R.so,
                              children: [
                                  V ? (0, r.jsx)(I.A, { guildId: t }) : (0, r.jsx)(S.A, { guildId: t }),
                                  (0, r.jsx)(w.A, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
