l.d(t, { A: () => B, k: () => U });
var s = l(627968),
    a = l(64700),
    n = l(503698),
    i = l.n(n),
    r = l(990078),
    d = l(834730),
    c = l(289873),
    o = l(534514),
    u = l(885574),
    m = l(793574),
    v = l(208039),
    x = l(363487),
    g = l(397400),
    f = l(17928),
    j = l(459192),
    h = l(821609),
    b = l(492349),
    p = l(939249),
    N = l(410212),
    I = l(369174),
    A = l(522055),
    S = l(225180),
    C = l(192308),
    k = l(853513),
    y = l(985018),
    T = l(980876);
function E(e) {
    let { guildId: t, gameInstance: a, cost: n } = e;
    return (0, s.jsx)(j.u, {
        "aria-label": y.intl.string(k.default.TZsu1U),
        title: y.intl.string(k.default.TZsu1U),
        body: y.intl.formatToPlainString(k.default["5HQUzD"], { boostCount: n }),
        children: (0, s.jsx)("div", {
            className: T.vI,
            children: (0, s.jsx)(h.$, {
                icon: { type: "icon", asset: b.x },
                text: n.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": y.intl.string(k.default.TZsu1U),
                onClick: (e) => {
                    e.stopPropagation(),
                        (0, C.openModalLazy)(async () => {
                            let { default: e } = await l.e("32140").then(l.bind(l, 608391));
                            return (l) => (0, s.jsx)(e, { guildId: t, gameInstance: a, ...l });
                        });
                },
            }),
        }),
    });
}
function G(e) {
    let { guildId: t, gameInstance: l, onClick: n } = e,
        r = (0, f.bG)([A.A], () => A.A.getStateForGuild(t)),
        d = a.useMemo(() => r?.entitlements?.[l.entitlementId], [r?.entitlements, l.entitlementId]),
        c = d?.ends_at != null,
        u = (0, N.A)(d),
        m = (0, S.A)(l.gameId, "icon"),
        v = (0, x.A)(t);
    return null == u
        ? null
        : (0, s.jsxs)(p.D, {
              className: i()(T.LO, { [T.r9]: !v }),
              onClick: v ? () => n(l) : void 0,
              "aria-disabled": !v,
              children: [
                  (0, s.jsx)("img", { className: T.Sl, alt: "", src: m }),
                  (0, s.jsxs)("div", {
                      className: T.FS,
                      children: [
                          (0, s.jsx)(o.D, { variant: "heading-sm/semibold", children: l.name }),
                          c
                              ? (0, s.jsx)(I.P5, { dateString: d.ends_at })
                              : (0, s.jsx)(I.TG, { text: y.intl.string(k.default.FFLkmx) }),
                      ],
                  }),
                  v && (0, s.jsx)(E, { guildId: t, gameInstance: l, cost: u }),
              ],
          });
}
var L = l(895770),
    P = l(752975),
    _ = l(509790),
    w = l(548392),
    D = l(800007),
    O = l(576709),
    M = l(51158);
function U() {
    return (0, s.jsx)(v.A, {
        className: M.Bq,
        children: (0, s.jsx)(d.E, {
            variant: "text-sm/medium",
            children: y.intl.formatToPlainString(O.default.xta2U9, { maxInstances: D.ZI }),
        }),
    });
}
function B() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: l,
        gameServerInstance: n,
        setGameServerInstance: v,
        setCurrentGame: f,
        onNext: j,
    } = (0, _.bv)();
    (0, g.ft)(e, null == n ? "create" : "edit");
    let h = a.useCallback(
            (e) => {
                f(e), j();
            },
            [f, j],
        ),
        b = a.useCallback(
            (e) => {
                v(e), j();
            },
            [v, j],
        ),
        p = l.length >= D.ZI,
        N = l.length > 0,
        I = (0, x.A)(e);
    return 0 === Object.values(t).length
        ? (0, s.jsx)("div", { className: M.g4, children: (0, s.jsx)(c.y, { type: c.t.SPINNING_CIRCLE }) })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  N &&
                      (0, s.jsxs)("div", {
                          className: M.yn,
                          children: [
                              (0, s.jsx)(o.D, {
                                  variant: "heading-md/semibold",
                                  children: y.intl.string(O.default.BOWmmT),
                              }),
                              (0, s.jsx)("div", {
                                  className: M.Hy,
                                  children: l.map((t, l) =>
                                      (0, s.jsx)(
                                          G,
                                          { guildId: e, gameInstance: t, onClick: b },
                                          `instance-${t.id}-${l}`,
                                      ),
                                  ),
                              }),
                              p && (0, s.jsx)(U, {}),
                          ],
                      }),
                  (0, s.jsxs)("div", {
                      className: i()(M.yn, { [M.r9]: p }),
                      children: [
                          N &&
                              (0, s.jsx)(o.D, {
                                  variant: "heading-md/semibold",
                                  children: y.intl.string(O.default.NIwDqW),
                              }),
                          (0, s.jsx)("div", {
                              className: M.Y_,
                              children: Object.values(t).map((t, l) =>
                                  (0, s.jsx)(
                                      r.m,
                                      {
                                          asContainer: !0,
                                          text: t.disabled
                                              ? y.intl.formatToPlainString(O.default.uVpJYf, { gameName: t.name })
                                              : null,
                                          position: "top",
                                          children: (0, s.jsx)(L.A, {
                                              guildId: e,
                                              game: t,
                                              variant: p || !I || t.disabled ? L.e.DISABLED : L.e.CLICKABLE,
                                              onClick: h,
                                              location: m.A.GAME_SERVER_SETUP_MODAL,
                                          }),
                                      },
                                      `game-${t.id}-${l}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, s.jsxs)(w.N4, {
                      step: D.HS.SELECT_GAME,
                      className: M.xQ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: M.UW,
                              children: [
                                  (0, s.jsx)(u.m, { size: "sm" }),
                                  (0, s.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      children: y.intl.string(O.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)(P.A, {}),
                      ],
                  }),
              ],
          });
}
