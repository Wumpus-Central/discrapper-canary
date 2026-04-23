n.d(t, { A: () => F }), n(321073), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(554146),
    d = n(192308),
    u = n(104510),
    c = n(573613),
    _ = n(534514),
    m = n(834730),
    p = n(793574),
    A = n(932001),
    x = n(742589),
    g = n(976860),
    f = n(488803),
    h = n(14081),
    v = n(843095),
    E = n(645619),
    S = n(489306),
    I = n(363487),
    b = n(884928),
    j = n(884684),
    C = n(182859),
    w = n(983398),
    L = n(194867),
    N = n(149854),
    y = n(864450),
    k = n(697865),
    R = n(297407),
    T = n(436207),
    P = n(271484),
    O = n(915667),
    G = n(800007),
    D = n(568065),
    U = n(652215),
    M = n(49999),
    V = n(853513),
    B = n(985018),
    W = n(502525);
function F(e) {
    let { guildId: t, powerupListingId: l } = e;
    (0, b.A)(t);
    let F = (0, f.C$)(t, "GuildPowerupsOverview");
    (0, S.Pq)(t);
    let K = (0, a.bG)([E.A], () => E.A.getStateForGuild(t)),
        z = (0, I.A)(t),
        J = i.useRef(!1),
        { shouldShow: $, modalConfig: X } = (0, T.A)(t, "GuildPowerupsOverview"),
        H = null == l && null != X,
        Q = [];
    $ && H && Q.push(o.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [q, Y] = (0, A.kn)(Q),
        Z = (0, j.MO)(t, F),
        ee = Z.flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        et = (0, P.g)(ee, t);
    return (i.useEffect(() => {
        if (null != l && !J.current)
            for (let e of Z)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === l) {
                        (0, O.A)(t, n.powerup), (J.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === l || n.powerups.some((e) => e.skuId === l))) {
                        J.current = !0;
                        let e = et[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(D.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, g.bG)(t), (J.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === n.type && l === G.W5) {
                        (0, v.A)({ guildId: t, analyticsLocation: p.A.GUILD_POWERUPS_OVERVIEW }), (J.current = !0);
                        return;
                    }
                }
    }, [t, l, Z, et]),
    i.useEffect(() => {
        if (null != q && null != X) {
            let e = {
                onCloseCallback: () => {
                    Y(M.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${q}`,
            };
            (0, d.openModalLazy)(async () => {
                let { default: e } = await n.e("86618").then(n.bind(n, 442241));
                return (t) => (0, r.jsx)(e, { modalConfig: X, markAsDismissed: Y, ...t });
            }, e);
        }
    }, [t, q, Y, X]),
    K?.powerupCatalog == null)
        ? null
        : (0, r.jsxs)("div", {
              className: W.kL,
              children: [
                  (0, r.jsxs)(x.A, {
                      className: W.KE,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(x.A.Icon, { icon: u._, "aria-label": "" }),
                          (0, r.jsx)(x.A.Title, { children: B.intl.string(V.default.yv3DJJ) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: W.hQ,
                      children: [
                          (0, r.jsx)(c.Ip, {
                              className: W.DO,
                              children: Z.map((e) => {
                                  let { type: n, listings: i } = e,
                                      { title: l, description: a } = (function (e) {
                                          switch (e) {
                                              case D.o9.LEVEL:
                                                  return {
                                                      title: B.intl.string(V.default["TXY/b0"]),
                                                      description: B.intl.string(V.default.aJv4PB),
                                                  };
                                              case D.o9.PERK:
                                                  return {
                                                      title: B.intl.string(V.default.TV3Vm8),
                                                      description: B.intl.string(V.default.STx9hp),
                                                  };
                                          }
                                      })(n),
                                      o = n === D.o9.LEVEL ? c.Ip : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: W.lt,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: W.kn,
                                                  children: [
                                                      (0, r.jsx)(_.D, {
                                                          color: "text-strong",
                                                          variant: "heading-lg/semibold",
                                                          children: l,
                                                      }),
                                                      (0, r.jsx)(m.E, {
                                                          color: "text-muted",
                                                          variant: "text-sm/medium",
                                                          children: a,
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(o, {
                                                  orientation: "horizontal",
                                                  className: s()(W.qJ, W.kn, { [W.dU]: n === D.o9.LEVEL }),
                                                  fade: !0,
                                                  children: i.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, r.jsx)(
                                                                  w.A,
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
                                                                  N.A,
                                                                  { guildId: t, powerup: e.powerup, badge: e.badge },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, r.jsx)(
                                                                  L.A,
                                                                  { guildId: t, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, r.jsx)(
                                                                  h.A,
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
                              className: W.so,
                              children: [
                                  z
                                      ? (0, r.jsx)(y.A, { guildId: t })
                                      : (0, r.jsxs)("div", {
                                            className: W.CG,
                                            children: [
                                                (0, r.jsx)(C.A, {
                                                    guildId: t,
                                                    variant: "member",
                                                    analyticsLocation: {
                                                        page: U.liQ.GUILD_POWERUPS_OVERVIEW,
                                                        section: U.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                        object: U.ZSU.CARD,
                                                    },
                                                }),
                                                (0, r.jsx)(k.A, { guildId: t }),
                                            ],
                                        }),
                                  (0, r.jsx)(R.A, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
