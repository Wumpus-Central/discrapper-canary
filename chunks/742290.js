t.d(n, { A: () => $, k: () => B });
var i = t(477900),
    a = t(582128),
    s = t(503698),
    l = t.n(s),
    r = t(834730),
    d = t(289873),
    o = t(534514),
    c = t(866665),
    m = t(885574),
    u = t(793574),
    x = t(363487),
    v = t(546385),
    g = t(907878),
    j = t(17928),
    b = t(683063),
    h = t(821609),
    C = t(492349),
    f = t(939249),
    p = t(410212),
    I = t(612400),
    N = t(475669),
    k = t(349085),
    A = t(192308),
    S = t(105292),
    y = t(959456),
    T = t(538499);
function P(e) {
    let { guildId: n, gameInstance: a, cost: s } = e;
    return (0, i.jsx)(b.u, {
        "aria-label": S.intl.string(y.default.TZsu1U),
        title: S.intl.string(y.default.TZsu1U),
        body: S.intl.formatToPlainString(y.default["5HQUzD"], { boostCount: s }),
        children: (0, i.jsx)("div", {
            className: T.vI,
            children: (0, i.jsx)(h.$, {
                icon: { type: "icon", asset: C.x },
                text: s.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": S.intl.string(y.default.TZsu1U),
                onClick: (e) => {
                    (e.stopPropagation(),
                        (0, A.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                t.e("861494"),
                                t.e("771137"),
                                t.e("553584"),
                                t.e("955861"),
                                t.e("161283"),
                                t.e("669149"),
                                t.e("149379"),
                                t.e("901559"),
                                t.e("30863"),
                                t.e("393038"),
                            ]).then(t.bind(t, 432669));
                            return (t) => (0, i.jsx)(e, { guildId: n, gameInstance: a, ...t });
                        }));
                },
            }),
        }),
    });
}
function E(e) {
    let { guildId: n, gameInstance: t, onClick: s } = e,
        r = (0, j.bG)([N.A], () => N.A.getStateForGuild(n)),
        d = a.useMemo(() => r?.entitlements?.[t.entitlementId], [r?.entitlements, t.entitlementId]),
        c = d?.ends_at != null,
        m = (0, p.A)(d),
        u = (0, k.A)(t.gameId, "icon"),
        v = (0, x.A)(n);
    return null == m
        ? null
        : (0, i.jsxs)(f.D, {
              className: l()(T.LO, { [T.r9]: !v }),
              onClick: v ? () => s(t) : void 0,
              "aria-disabled": !v,
              children: [
                  (0, i.jsx)("img", { className: T.Sl, alt: "", src: u }),
                  (0, i.jsxs)("div", {
                      className: T.FS,
                      children: [
                          (0, i.jsx)(o.D, { variant: "heading-xs/semibold", children: t.name }),
                          c
                              ? (0, i.jsx)(I.P5, { dateString: d.ends_at })
                              : (0, i.jsx)(I.TG, { text: S.intl.string(y.default.FFLkmx) }),
                      ],
                  }),
                  v && (0, i.jsx)(P, { guildId: n, gameInstance: t, cost: m }),
              ],
          });
}
var _ = t(328380),
    D = t(721425),
    L = t(608266),
    G = t(628026),
    O = t(628049),
    U = t(135570),
    w = t(1637);
function B() {
    return (0, i.jsx)(v.A, {
        className: w.Bq,
        children: (0, i.jsx)(r.E, {
            variant: "body-sm/medium",
            children: S.intl.formatToPlainString(U.default.xta2U9, { maxInstances: O.ZI }),
        }),
    });
}
function $() {
    let {
        guildId: e,
        gameServerGames: n,
        instances: t,
        gameServerInstance: s,
        setGameServerInstance: v,
        setCurrentGame: j,
        onNext: b,
    } = (0, L.bv)();
    (0, g.ft)(e, null == s ? "create" : "edit");
    let h = a.useCallback(
            (e) => {
                (j(e), b());
            },
            [j, b],
        ),
        C = a.useCallback(
            (e) => {
                (v(e), b());
            },
            [v, b],
        ),
        f = t.length >= O.ZI,
        p = t.length > 0,
        I = (0, x.A)(e);
    return 0 === Object.values(n).length
        ? (0, i.jsx)("div", { className: w.g4, children: (0, i.jsx)(d.y, { type: d.t.SPINNING_CIRCLE }) })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  p &&
                      (0, i.jsxs)("div", {
                          className: w.yn,
                          children: [
                              (0, i.jsx)(o.D, {
                                  variant: "heading-sm/semibold",
                                  children: S.intl.string(U.default.BOWmmT),
                              }),
                              (0, i.jsx)("div", {
                                  className: w.Hy,
                                  children: t.map((n, t) =>
                                      (0, i.jsx)(
                                          E,
                                          { guildId: e, gameInstance: n, onClick: C },
                                          `instance-${n.id}-${t}`,
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
                                  variant: "heading-sm/semibold",
                                  children: S.intl.string(U.default.NIwDqW),
                              }),
                          (0, i.jsx)("div", {
                              className: w.Y_,
                              children: Object.values(n).map((n, t) =>
                                  (0, i.jsx)(
                                      c.m,
                                      {
                                          asContainer: !0,
                                          text: n.disabled
                                              ? S.intl.formatToPlainString(U.default.uVpJYf, { gameName: n.name })
                                              : null,
                                          position: "top",
                                          children: (0, i.jsx)(_.A, {
                                              guildId: e,
                                              game: n,
                                              variant: f || !I || n.disabled ? _.e.DISABLED : _.e.CLICKABLE,
                                              onClick: h,
                                              location: u.A.GAME_SERVER_SETUP_MODAL,
                                          }),
                                      },
                                      `game-${n.id}-${t}`,
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
                                      variant: "body-sm/medium",
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
