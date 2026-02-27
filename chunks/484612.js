n.d(t, { A: () => V }), n(321073), n(323874), n(14289), n(35956);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(554146),
    d = n(397927),
    u = n(793574),
    c = n(932001),
    m = n(742589),
    p = n(976860),
    _ = n(488803),
    x = n(14081),
    A = n(843095),
    f = n(645619),
    g = n(929250),
    v = n(489306),
    h = n(363487),
    b = n(884928),
    j = n(884684),
    E = n(182859),
    I = n(983398),
    C = n(194867),
    S = n(149854),
    w = n(864450),
    N = n(697865),
    y = n(297407),
    L = n(271484),
    T = n(289642),
    k = n(915667),
    R = n(800007),
    P = n(568065),
    G = n(49999),
    O = n(333354),
    D = n(985018),
    U = n(377514);
function V(e) {
    let { guildId: t, powerupListingId: l } = e;
    (0, b.A)(t);
    let V = (0, _.C$)(t, "GuildPowerupsOverview");
    (0, v.Pq)(t);
    let M = (0, a.bG)([f.A], () => f.A.getStateForGuild(t)),
        W = (0, h.A)(t),
        B = (0, g.h)("GuildPowerupsOverview"),
        F = i.useRef(!1),
        { shouldShow: K, modalConfig: J } = (0, T.A)(t, "GuildPowerupsOverview"),
        Y = null == l && null != J,
        z = [];
    K && Y && z.push(o.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [X, $] = (0, c.kn)(z),
        H = (0, j.MO)(t, V),
        q = H.flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        Q = (0, L.g)(q, t);
    return (i.useEffect(() => {
        if (null != l && !F.current)
            for (let e of H)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === l) {
                        (0, k.A)(t, n.powerup), (F.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === l || n.powerups.some((e) => e.skuId === l))) {
                        F.current = !0;
                        let e = Q[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(P.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, p.bG)(t), (F.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === n.type && l === R.W5) {
                        (0, A.A)({ guildId: t, analyticsLocation: u.A.GUILD_POWERUPS_OVERVIEW }), (F.current = !0);
                        return;
                    }
                }
    }, [t, l, H, Q]),
    i.useEffect(() => {
        if (null != X && null != J) {
            let e = {
                onCloseCallback: () => {
                    $(G.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${X}`,
            };
            (0, d.mMO)(async () => {
                let { default: e } = await n.e("86618").then(n.bind(n, 442241));
                return (t) => (0, r.jsx)(e, { modalConfig: J, markAsDismissed: $, ...t });
            }, e);
        }
    }, [t, X, $, J]),
    M?.powerupCatalog == null)
        ? null
        : (0, r.jsxs)("div", {
              className: U.kL,
              children: [
                  (0, r.jsxs)(m.A, {
                      className: U.KE,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(m.A.Icon, { icon: d._Jp, "aria-label": "" }),
                          (0, r.jsx)(m.A.Title, { children: D.intl.string(O.default.yv3DJJ) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: U.hQ,
                      children: [
                          (0, r.jsx)(d.IpV, {
                              className: U.DO,
                              children: H.map((e) => {
                                  let { type: n, listings: i } = e,
                                      { title: l, description: a } = (function (e) {
                                          switch (e) {
                                              case P.o9.LEVEL:
                                                  return {
                                                      title: D.intl.string(O.default["TXY/b0"]),
                                                      description: D.intl.string(O.default.aJv4PB),
                                                  };
                                              case P.o9.PERK:
                                                  return {
                                                      title: D.intl.string(O.default.TV3Vm8),
                                                      description: D.intl.string(O.default.STx9hp),
                                                  };
                                          }
                                      })(n),
                                      o = n === P.o9.LEVEL ? d.IpV : "div";
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
                                                          children: a,
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(o, {
                                                  orientation: "horizontal",
                                                  className: s()(U.qJ, U.kn, { [U.dU]: n === P.o9.LEVEL }),
                                                  fade: !0,
                                                  children: i.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, r.jsx)(
                                                                  I.A,
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
                                                                  S.A,
                                                                  { guildId: t, powerup: e.powerup },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, r.jsx)(
                                                                  C.A,
                                                                  { guildId: t, group: e.group, powerups: e.powerups },
                                                                  `powerup-group-${e.group}`,
                                                              );
                                                          case "gameServer":
                                                              return (0, r.jsx)(
                                                                  x.A,
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
                                  W
                                      ? (0, r.jsx)(w.A, { guildId: t, showVideoCard: B })
                                      : B
                                        ? (0, r.jsxs)("div", {
                                              className: U.CG,
                                              children: [
                                                  (0, r.jsx)(E.A, { guildId: t, variant: "member" }),
                                                  (0, r.jsx)(N.A, { guildId: t, showVideoCard: !0 }),
                                              ],
                                          })
                                        : (0, r.jsx)(N.A, { guildId: t }),
                                  (0, r.jsx)(y.A, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
