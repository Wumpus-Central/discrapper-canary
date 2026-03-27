n.d(t, { A: () => M }), n(321073), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    o = n(311907),
    a = n(554146),
    d = n(397927),
    u = n(793574),
    c = n(932001),
    p = n(742589),
    _ = n(976860),
    m = n(488803),
    f = n(14081),
    A = n(843095),
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
    y = n(697865),
    L = n(297407),
    k = n(436207),
    N = n(271484),
    R = n(915667),
    T = n(800007),
    P = n(568065),
    O = n(652215),
    G = n(49999),
    D = n(333354),
    V = n(985018),
    U = n(453165);
function M(e) {
    let { guildId: t, powerupListingId: l } = e;
    (0, E.A)(t);
    let M = (0, m.C$)(t, "GuildPowerupsOverview");
    (0, v.Pq)(t);
    let W = (0, o.bG)([g.A], () => g.A.getStateForGuild(t)),
        B = (0, h.A)(t),
        F = (0, x.h)("GuildPowerupsOverview"),
        J = i.useRef(!1),
        { shouldShow: K, modalConfig: z } = (0, k.A)(t, "GuildPowerupsOverview"),
        $ = null == l && null != z,
        X = [];
    K && $ && X.push(a.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [H, Y] = (0, c.kn)(X),
        Q = (0, b.MO)(t, M),
        q = Q.flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        Z = (0, N.g)(q, t);
    return (i.useEffect(() => {
        if (null != l && !J.current)
            for (let e of Q)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === l) {
                        (0, R.A)(t, n.powerup), (J.current = !0);
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
                                (0, _.bG)(t), (J.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === n.type && l === T.W5) {
                        (0, A.A)({ guildId: t, analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW }), (J.current = !0);
                        return;
                    }
                }
    }, [t, l, Q, Z]),
    i.useEffect(() => {
        if (null != H && null != z) {
            let e = {
                onCloseCallback: () => {
                    Y(G.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${H}`,
            };
            (0, d.mMO)(async () => {
                let { default: e } = await n.e("86618").then(n.bind(n, 442241));
                return (t) => (0, r.jsx)(e, { modalConfig: z, markAsDismissed: Y, ...t });
            }, e);
        }
    }, [t, H, Y, z]),
    W?.powerupCatalog == null)
        ? null
        : (0, r.jsxs)("div", {
              className: U.kL,
              children: [
                  (0, r.jsxs)(p.A, {
                      className: U.KE,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(p.A.Icon, { icon: d._Jp, "aria-label": "" }),
                          (0, r.jsx)(p.A.Title, { children: V.intl.string(D.default.yv3DJJ) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: U.hQ,
                      children: [
                          (0, r.jsx)(d.IpV, {
                              className: U.DO,
                              children: Q.map((e) => {
                                  let { type: n, listings: i } = e,
                                      { title: l, description: o } = (function (e) {
                                          switch (e) {
                                              case P.o9.LEVEL:
                                                  return {
                                                      title: V.intl.string(D.default["TXY/b0"]),
                                                      description: V.intl.string(D.default.aJv4PB),
                                                  };
                                              case P.o9.PERK:
                                                  return {
                                                      title: V.intl.string(D.default.TV3Vm8),
                                                      description: V.intl.string(D.default.STx9hp),
                                                  };
                                          }
                                      })(n),
                                      a = n === P.o9.LEVEL ? d.IpV : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: U.lt,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: U.kn,
                                                  children: [
                                                      (0, r.jsx)(d.Heading, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: l,
                                                      }),
                                                      (0, r.jsx)(d.Text, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: o,
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(a, {
                                                  orientation: "horizontal",
                                                  className: s()(U.qJ, U.kn, { [U.dU]: n === P.o9.LEVEL }),
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
                                                                  { guildId: t, powerup: e.powerup, badge: e.badge },
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
                                                                  f.A,
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
                              className: U.so,
                              children: [
                                  B
                                      ? (0, r.jsx)(w.A, { guildId: t, showVideoCard: F })
                                      : F
                                        ? (0, r.jsxs)("div", {
                                              className: U.CG,
                                              children: [
                                                  (0, r.jsx)(I.A, {
                                                      guildId: t,
                                                      variant: "member",
                                                      analyticsLocation: {
                                                          page: O.liQ.GUILD_POWERUPS_OVERVIEW,
                                                          section: O.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                          object: O.ZSU.CARD,
                                                      },
                                                  }),
                                                  (0, r.jsx)(y.A, { guildId: t, showVideoCard: !0 }),
                                              ],
                                          })
                                        : (0, r.jsx)(y.A, { guildId: t }),
                                  (0, r.jsx)(L.A, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
