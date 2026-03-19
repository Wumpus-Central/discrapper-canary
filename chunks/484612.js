n.d(t, { A: () => M }), n(321073), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(311907),
    a = n(554146),
    u = n(397927),
    d = n(793574),
    c = n(932001),
    p = n(742589),
    m = n(976860),
    _ = n(488803),
    A = n(14081),
    f = n(843095),
    g = n(645619),
    x = n(929250),
    v = n(489306),
    h = n(363487),
    E = n(884928),
    b = n(884684),
    I = n(182859),
    j = n(983398),
    S = n(194867),
    C = n(149854),
    w = n(864450),
    N = n(697865),
    L = n(297407),
    y = n(271484),
    R = n(289642),
    k = n(915667),
    T = n(800007),
    P = n(568065),
    G = n(652215),
    O = n(49999),
    D = n(136708),
    U = n(985018),
    V = n(965888);
function M(e) {
    let { guildId: t, powerupListingId: l } = e;
    (0, E.A)(t);
    let M = (0, _.C$)(t, "GuildPowerupsOverview");
    (0, v.Pq)(t);
    let W = (0, o.bG)([g.A], () => g.A.getStateForGuild(t)),
        B = (0, h.A)(t),
        F = (0, x.h)("GuildPowerupsOverview"),
        J = i.useRef(!1),
        { shouldShow: K, modalConfig: Y } = (0, R.A)(t, "GuildPowerupsOverview"),
        z = null == l && null != Y,
        $ = [];
    K && z && $.push(a.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [X, q] = (0, c.kn)($),
        H = (0, b.MO)(t, M),
        Q = H.flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        Z = (0, y.g)(Q, t);
    return (i.useEffect(() => {
        if (null != l && !J.current)
            for (let e of H)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === l) {
                        (0, k.A)(t, n.powerup), (J.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === l || n.powerups.some((e) => e.skuId === l))) {
                        J.current = !0;
                        let e = Z[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(P.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, m.bG)(t), (J.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === n.type && l === T.W5) {
                        (0, f.A)({ guildId: t, analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW }), (J.current = !0);
                        return;
                    }
                }
    }, [t, l, H, Z]),
    i.useEffect(() => {
        if (null != X && null != Y) {
            let e = {
                onCloseCallback: () => {
                    q(O.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${X}`,
            };
            (0, u.mMO)(async () => {
                let { default: e } = await n.e("86618").then(n.bind(n, 442241));
                return (t) => (0, r.jsx)(e, { modalConfig: Y, markAsDismissed: q, ...t });
            }, e);
        }
    }, [t, X, q, Y]),
    W?.powerupCatalog == null)
        ? null
        : (0, r.jsxs)("div", {
              className: V.kL,
              children: [
                  (0, r.jsxs)(p.A, {
                      className: V.KE,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(p.A.Icon, { icon: u._Jp, "aria-label": "" }),
                          (0, r.jsx)(p.A.Title, { children: U.intl.string(D.default.yv3DJJ) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: V.hQ,
                      children: [
                          (0, r.jsx)(u.IpV, {
                              className: V.DO,
                              children: H.map((e) => {
                                  let { type: n, listings: i } = e,
                                      { title: l, description: o } = (function (e) {
                                          switch (e) {
                                              case P.o9.LEVEL:
                                                  return {
                                                      title: U.intl.string(D.default["TXY/b0"]),
                                                      description: U.intl.string(D.default.aJv4PB),
                                                  };
                                              case P.o9.PERK:
                                                  return {
                                                      title: U.intl.string(D.default.TV3Vm8),
                                                      description: U.intl.string(D.default.STx9hp),
                                                  };
                                          }
                                      })(n),
                                      a = n === P.o9.LEVEL ? u.IpV : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: V.lt,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: V.kn,
                                                  children: [
                                                      (0, r.jsx)(u.Heading, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: l,
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
                                                  className: s()(V.qJ, V.kn, { [V.dU]: n === P.o9.LEVEL }),
                                                  fade: !0,
                                                  children: i.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, r.jsx)(
                                                                  j.A,
                                                                  {
                                                                      guildId: t,
                                                                      index: n,
                                                                      powerup: e.powerup,
                                                                      nextPowerup: i[n + 1]?.powerup,
                                                                  },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "singlePerk":
                                                              return (0, r.jsx)(
                                                                  C.A,
                                                                  { guildId: t, powerup: e.powerup },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, r.jsx)(
                                                                  S.A,
                                                                  { guildId: t, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, r.jsx)(
                                                                  A.A,
                                                                  { guildId: t },
                                                                  "powerup-game-server",
                                                              );
                                                      }
                                                  }),
                                              }),
                                          ],
                                      },
                                      `section-${n}`,
                                  );
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: V.so,
                              children: [
                                  B
                                      ? (0, r.jsx)(w.A, { guildId: t, showVideoCard: F })
                                      : F
                                        ? (0, r.jsxs)("div", {
                                              className: V.CG,
                                              children: [
                                                  (0, r.jsx)(I.A, {
                                                      guildId: t,
                                                      variant: "member",
                                                      analyticsLocation: {
                                                          page: G.liQ.GUILD_POWERUPS_OVERVIEW,
                                                          section: G.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                          object: G.ZSU.CARD,
                                                      },
                                                  }),
                                                  (0, r.jsx)(N.A, { guildId: t, showVideoCard: !0 }),
                                              ],
                                          })
                                        : (0, r.jsx)(N.A, { guildId: t }),
                                  (0, r.jsx)(L.A, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
