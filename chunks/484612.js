n.d(t, { A: () => V }), n(321073), n(323874), n(14289), n(35956);
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
    _ = n(976860),
    m = n(488803),
    f = n(14081),
    A = n(843095),
    g = n(645619),
    x = n(489306),
    v = n(363487),
    h = n(884928),
    E = n(884684),
    I = n(182859),
    b = n(983398),
    j = n(194867),
    S = n(149854),
    C = n(864450),
    w = n(697865),
    y = n(297407),
    L = n(436207),
    k = n(271484),
    N = n(915667),
    R = n(800007),
    T = n(568065),
    P = n(652215),
    O = n(49999),
    G = n(333354),
    D = n(985018),
    U = n(453165);
function V(e) {
    let { guildId: t, powerupListingId: l } = e;
    (0, h.A)(t);
    let V = (0, m.C$)(t, "GuildPowerupsOverview");
    (0, x.Pq)(t);
    let M = (0, o.bG)([g.A], () => g.A.getStateForGuild(t)),
        W = (0, v.A)(t),
        B = i.useRef(!1),
        { shouldShow: F, modalConfig: J } = (0, L.A)(t, "GuildPowerupsOverview"),
        K = null == l && null != J,
        z = [];
    F && K && z.push(a.M.VANITY_URL_POWERUP_ROLLBACK_MODAL);
    let [$, X] = (0, c.kn)(z),
        Y = (0, E.MO)(t, V),
        H = Y.flatMap((e) => e.listings)
            .filter((e) => "multiPerk" === e.type)
            .map((e) => e.group),
        Q = (0, k.g)(H, t);
    return (i.useEffect(() => {
        if (null != l && !B.current)
            for (let e of Y)
                for (let n of e.listings) {
                    if (("singleLevel" === n.type || "singlePerk" === n.type) && n.powerup.skuId === l) {
                        (0, N.A)(t, n.powerup), (B.current = !0);
                        return;
                    }
                    if ("multiPerk" === n.type && (n.group === l || n.powerups.some((e) => e.skuId === l))) {
                        B.current = !0;
                        let e = Q[n.group];
                        if (null == e) return;
                        e.openModal(n.powerups, {
                            onModalClose: () => {
                                let e = new URL(window.location.href);
                                e.searchParams.delete(T.G0);
                                let t = e.pathname + e.search + e.hash;
                                (0, _.bG)(t), (B.current = !1);
                            },
                        });
                        return;
                    }
                    if ("gameServer" === n.type && l === R.W5) {
                        (0, A.A)({ guildId: t, analyticsLocation: d.A.GUILD_POWERUPS_OVERVIEW }), (B.current = !0);
                        return;
                    }
                }
    }, [t, l, Y, Q]),
    i.useEffect(() => {
        if (null != $ && null != J) {
            let e = {
                onCloseCallback: () => {
                    X(O.i.USER_DISMISS);
                },
                modalKey: `dismissible_content_${$}`,
            };
            (0, u.mMO)(async () => {
                let { default: e } = await n.e("86618").then(n.bind(n, 442241));
                return (t) => (0, r.jsx)(e, { modalConfig: J, markAsDismissed: X, ...t });
            }, e);
        }
    }, [t, $, X, J]),
    M?.powerupCatalog == null)
        ? null
        : (0, r.jsxs)("div", {
              className: U.kL,
              children: [
                  (0, r.jsxs)(p.A, {
                      className: U.KE,
                      hideSearch: !0,
                      toolbar: (0, r.jsx)("div", {}),
                      children: [
                          (0, r.jsx)(p.A.Icon, { icon: u._Jp, "aria-label": "" }),
                          (0, r.jsx)(p.A.Title, { children: D.intl.string(G.default.yv3DJJ) }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: U.hQ,
                      children: [
                          (0, r.jsx)(u.IpV, {
                              className: U.DO,
                              children: Y.map((e) => {
                                  let { type: n, listings: i } = e,
                                      { title: l, description: o } = (function (e) {
                                          switch (e) {
                                              case T.o9.LEVEL:
                                                  return {
                                                      title: D.intl.string(G.default["TXY/b0"]),
                                                      description: D.intl.string(G.default.aJv4PB),
                                                  };
                                              case T.o9.PERK:
                                                  return {
                                                      title: D.intl.string(G.default.TV3Vm8),
                                                      description: D.intl.string(G.default.STx9hp),
                                                  };
                                          }
                                      })(n),
                                      a = n === T.o9.LEVEL ? u.IpV : "div";
                                  return (0, r.jsxs)(
                                      "div",
                                      {
                                          className: U.lt,
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: U.kn,
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
                                                  className: s()(U.qJ, U.kn, { [U.dU]: n === T.o9.LEVEL }),
                                                  fade: !0,
                                                  children: i.map((e, n) => {
                                                      switch (e.type) {
                                                          case "singleLevel":
                                                              return (0, r.jsx)(
                                                                  b.A,
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
                                                                  { guildId: t, powerup: e.powerup, badge: e.badge },
                                                                  `powerup-${e.powerup.skuId}`,
                                                              );
                                                          case "multiPerk":
                                                              return (0, r.jsx)(
                                                                  j.A,
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
                                  W
                                      ? (0, r.jsx)(C.A, { guildId: t })
                                      : (0, r.jsxs)("div", {
                                            className: U.CG,
                                            children: [
                                                (0, r.jsx)(I.A, {
                                                    guildId: t,
                                                    variant: "member",
                                                    analyticsLocation: {
                                                        page: P.liQ.GUILD_POWERUPS_OVERVIEW,
                                                        section: P.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                                        object: P.ZSU.CARD,
                                                    },
                                                }),
                                                (0, r.jsx)(w.A, { guildId: t }),
                                            ],
                                        }),
                                  (0, r.jsx)(y.A, { guildId: t }),
                              ],
                          }),
                      ],
                  }),
              ],
          });
}
