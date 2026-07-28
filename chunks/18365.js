n.d(t, { A: () => $, k: () => B });
var i = n(477900),
    a = n(582128),
    s = n(503698),
    l = n.n(s),
    r = n(834730),
    d = n(289873),
    o = n(297264),
    c = n(866665),
    m = n(885574),
    u = n(793574),
    x = n(546385),
    v = n(363487),
    g = n(397400),
    j = n(17928),
    b = n(459192),
    h = n(821609),
    C = n(492349),
    f = n(939249),
    p = n(410212),
    I = n(612400),
    N = n(522055),
    k = n(2799),
    A = n(192308),
    S = n(853513),
    T = n(375708),
    P = n(326436);
function y(e) {
    let { guildId: t, gameInstance: a, cost: s } = e;
    return (0, i.jsx)(b.u, {
        "aria-label": T.intl.string(S.default.TZsu1U),
        title: T.intl.string(S.default.TZsu1U),
        body: T.intl.formatToPlainString(S.default["5HQUzD"], { boostCount: s }),
        children: (0, i.jsx)("div", {
            className: P.vI,
            children: (0, i.jsx)(h.$, {
                icon: { type: "icon", asset: C.x },
                text: s.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": T.intl.string(S.default.TZsu1U),
                onClick: (e) => {
                    e.stopPropagation(),
                        (0, A.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("90540"),
                                n.e("47426"),
                                n.e("43036"),
                                n.e("14015"),
                                n.e("6350"),
                                n.e("31203"),
                                n.e("74488"),
                                n.e("69764"),
                            ]).then(n.bind(n, 608391));
                            return (n) => (0, i.jsx)(e, { guildId: t, gameInstance: a, ...n });
                        });
                },
            }),
        }),
    });
}
function E(e) {
    let { guildId: t, gameInstance: n, onClick: s } = e,
        r = (0, j.bG)([N.A], () => N.A.getStateForGuild(t)),
        d = a.useMemo(() => r?.entitlements?.[n.entitlementId], [r?.entitlements, n.entitlementId]),
        c = d?.ends_at != null,
        m = (0, p.A)(d),
        u = (0, k.A)(n.gameId, "icon"),
        x = (0, v.A)(t);
    return null == m
        ? null
        : (0, i.jsxs)(f.D, {
              className: l()(P.LO, { [P.r9]: !x }),
              onClick: x ? () => s(n) : void 0,
              "aria-disabled": !x,
              children: [
                  (0, i.jsx)("img", { className: P.Sl, alt: "", src: u }),
                  (0, i.jsxs)("div", {
                      className: P.FS,
                      children: [
                          (0, i.jsx)(o.D, { variant: "heading-sm/semibold", children: n.name }),
                          c
                              ? (0, i.jsx)(I.P5, { dateString: d.ends_at })
                              : (0, i.jsx)(I.TG, { text: T.intl.string(S.default.FFLkmx) }),
                      ],
                  }),
                  x && (0, i.jsx)(y, { guildId: t, gameInstance: n, cost: m }),
              ],
          });
}
var _ = n(895770),
    D = n(752975),
    L = n(509790),
    G = n(548392),
    O = n(800007),
    U = n(576709),
    w = n(809262);
function B() {
    return (0, i.jsx)(x.A, {
        className: w.Bq,
        children: (0, i.jsx)(r.E, {
            variant: "text-sm/medium",
            children: T.intl.formatToPlainString(U.default.xta2U9, { maxInstances: O.ZI }),
        }),
    });
}
function $() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: n,
        gameServerInstance: s,
        setGameServerInstance: x,
        setCurrentGame: j,
        onNext: b,
    } = (0, L.bv)();
    (0, g.ft)(e, null == s ? "create" : "edit");
    let h = a.useCallback(
            (e) => {
                j(e), b();
            },
            [j, b],
        ),
        C = a.useCallback(
            (e) => {
                x(e), b();
            },
            [x, b],
        ),
        f = n.length >= O.ZI,
        p = n.length > 0,
        I = (0, v.A)(e);
    return 0 === Object.values(t).length
        ? (0, i.jsx)("div", { className: w.g4, children: (0, i.jsx)(d.y, { type: d.t.SPINNING_CIRCLE }) })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  p &&
                      (0, i.jsxs)("div", {
                          className: w.yn,
                          children: [
                              (0, i.jsx)(o.D, {
                                  variant: "heading-md/semibold",
                                  children: T.intl.string(U.default.BOWmmT),
                              }),
                              (0, i.jsx)("div", {
                                  className: w.Hy,
                                  children: n.map((t, n) =>
                                      (0, i.jsx)(
                                          E,
                                          { guildId: e, gameInstance: t, onClick: C },
                                          `instance-${t.id}-${n}`,
                                      ),
                                  ),
                              }),
                              f && (0, i.jsx)(B, {}),
                          ],
                      }),
                  (0, i.jsxs)("div", {
                      className: l()(w.yn, { [w.r9]: f }),
                      children: [
                          p &&
                              (0, i.jsx)(o.D, {
                                  variant: "heading-md/semibold",
                                  children: T.intl.string(U.default.NIwDqW),
                              }),
                          (0, i.jsx)("div", {
                              className: w.Y_,
                              children: Object.values(t).map((t, n) =>
                                  (0, i.jsx)(
                                      c.m,
                                      {
                                          asContainer: !0,
                                          text: t.disabled
                                              ? T.intl.formatToPlainString(U.default.uVpJYf, { gameName: t.name })
                                              : null,
                                          position: "top",
                                          children: (0, i.jsx)(_.A, {
                                              guildId: e,
                                              game: t,
                                              variant: f || !I || t.disabled ? _.e.DISABLED : _.e.CLICKABLE,
                                              onClick: h,
                                              location: u.A.GAME_SERVER_SETUP_MODAL,
                                          }),
                                      },
                                      `game-${t.id}-${n}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, i.jsxs)(G.N4, {
                      step: O.HS.SELECT_GAME,
                      className: w.xQ,
                      children: [
                          (0, i.jsxs)("div", {
                              className: w.UW,
                              children: [
                                  (0, i.jsx)(m.m, { size: "sm" }),
                                  (0, i.jsx)(r.E, {
                                      variant: "text-sm/medium",
                                      children: T.intl.string(U.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(D.A, {}),
                      ],
                  }),
              ],
          });
}
