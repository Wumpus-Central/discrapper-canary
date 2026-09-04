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
    x = n(363487),
    v = n(546385),
    g = n(907878),
    j = n(17928),
    b = n(683063),
    h = n(821609),
    C = n(492349),
    f = n(939249),
    p = n(410212),
    I = n(612400),
    N = n(475669),
    k = n(349085),
    A = n(192308),
    S = n(375708),
    T = n(25525),
    P = n(538499);
function y(e) {
    let { guildId: t, gameInstance: a, cost: s } = e;
    return (0, i.jsx)(b.u, {
        "aria-label": S.intl.string(T.default.TZsu1U),
        title: S.intl.string(T.default.TZsu1U),
        body: S.intl.formatToPlainString(T.default["5HQUzD"], { boostCount: s }),
        children: (0, i.jsx)("div", {
            className: P.vI,
            children: (0, i.jsx)(h.$, {
                icon: { type: "icon", asset: C.x },
                text: s.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": S.intl.string(T.default.TZsu1U),
                onClick: (e) => {
                    e.stopPropagation(),
                        (0, A.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("522052"),
                                n.e("463455"),
                                n.e("470532"),
                                n.e("466924"),
                                n.e("331203"),
                                n.e("504045"),
                                n.e("706350"),
                                n.e("955861"),
                                n.e("149379"),
                                n.e("669149"),
                                n.e("234598"),
                                n.e("786794"),
                                n.e("393038"),
                            ]).then(n.bind(n, 432669));
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
        v = (0, x.A)(t);
    return null == m
        ? null
        : (0, i.jsxs)(f.D, {
              className: l()(P.LO, { [P.r9]: !v }),
              onClick: v ? () => s(n) : void 0,
              "aria-disabled": !v,
              children: [
                  (0, i.jsx)("img", { className: P.Sl, alt: "", src: u }),
                  (0, i.jsxs)("div", {
                      className: P.FS,
                      children: [
                          (0, i.jsx)(o.D, { variant: "heading-sm/semibold", children: n.name }),
                          c
                              ? (0, i.jsx)(I.P5, { dateString: d.ends_at })
                              : (0, i.jsx)(I.TG, { text: S.intl.string(T.default.FFLkmx) }),
                      ],
                  }),
                  v && (0, i.jsx)(y, { guildId: t, gameInstance: n, cost: m }),
              ],
          });
}
var _ = n(328380),
    D = n(721425),
    L = n(608266),
    G = n(628026),
    O = n(628049),
    U = n(394107),
    w = n(1637);
function B() {
    return (0, i.jsx)(v.A, {
        className: w.Bq,
        children: (0, i.jsx)(r.E, {
            variant: "text-sm/medium",
            children: S.intl.formatToPlainString(U.default.xta2U9, { maxInstances: O.ZI }),
        }),
    });
}
function $() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: n,
        gameServerInstance: s,
        setGameServerInstance: v,
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
                v(e), b();
            },
            [v, b],
        ),
        f = n.length >= O.ZI,
        p = n.length > 0,
        I = (0, x.A)(e);
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
                                  children: S.intl.string(U.default.BOWmmT),
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
                                  children: S.intl.string(U.default.NIwDqW),
                              }),
                          (0, i.jsx)("div", {
                              className: w.Y_,
                              children: Object.values(t).map((t, n) =>
                                  (0, i.jsx)(
                                      c.m,
                                      {
                                          asContainer: !0,
                                          text: t.disabled
                                              ? S.intl.formatToPlainString(U.default.uVpJYf, { gameName: t.name })
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
                                  (0, i.jsx)(m.CircleInformationIcon, { size: "sm" }),
                                  (0, i.jsx)(r.E, {
                                      variant: "text-sm/medium",
                                      children: S.intl.string(U.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(D.A, {}),
                      ],
                  }),
              ],
          });
}
