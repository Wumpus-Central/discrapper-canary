t.d(n, { k: () => U, A: () => $ });
var s = t(477900),
    i = t(582128),
    a = t(503698),
    l = t.n(a),
    r = t(834730),
    o = t(289873),
    d = t(534514),
    c = t(866665),
    m = t(885574),
    u = t(793574),
    x = t(363487),
    v = t(546385),
    g = t(907878),
    j = t(855986),
    b = t(683063),
    h = t(821609),
    f = t(492349),
    C = t(939249),
    I = t(410212),
    p = t(577930),
    N = t(475669),
    k = t(349085),
    A = t(192308),
    S = t(792996),
    y = t(586428),
    T = t(538499);
function P(e) {
    let { guildId: n, gameInstance: i, cost: a } = e;
    return (0, s.jsx)(b.u, {
        "aria-label": S.intl.string(y.default.TZsu1U),
        title: S.intl.string(y.default.TZsu1U),
        body: S.intl.formatToPlainString(y.default["5HQUzD"], { boostCount: a }),
        children: (0, s.jsx)("div", {
            className: T.vI,
            children: (0, s.jsx)(h.$, {
                icon: { type: "icon", asset: f.BoostGemSlashIcon },
                text: a.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": S.intl.string(y.default.TZsu1U),
                onClick: (e) => {
                    (e.stopPropagation(),
                        (0, A.mM)(async () => {
                            let { default: e } = await Promise.all([
                                t.e(861494),
                                t.e(771137),
                                t.e(553584),
                                t.e(955861),
                                t.e(924530),
                                t.e(669149),
                                t.e(149379),
                                t.e(901559),
                                t.e(137078),
                                t.e(393038),
                            ]).then(t.bind(t, 432669));
                            return (t) => (0, s.jsx)(e, { guildId: n, gameInstance: i, ...t });
                        }));
                },
            }),
        }),
    });
}
function G(e) {
    let { guildId: n, gameInstance: t, onClick: a } = e,
        r = (0, j.bG)([N.A], () => N.A.getStateForGuild(n)),
        o = i.useMemo(() => r?.entitlements?.[t.entitlementId], [r?.entitlements, t.entitlementId]),
        c = o?.ends_at != null,
        m = (0, I.A)(o),
        u = (0, k.A)(t.gameId, "icon"),
        v = (0, x.A)(n);
    return null == m
        ? null
        : (0, s.jsxs)(C.D, {
              className: l()(T.LO, { [T.r9]: !v }),
              onClick: v ? () => a(t) : void 0,
              "aria-disabled": !v,
              children: [
                  (0, s.jsx)("img", { className: T.Sl, alt: "", src: u }),
                  (0, s.jsxs)("div", {
                      className: T.FS,
                      children: [
                          (0, s.jsx)(d.D, { variant: "heading-xs/semibold", children: t.name }),
                          c
                              ? (0, s.jsx)(p.P5, { dateString: o.ends_at })
                              : (0, s.jsx)(p.TG, { text: S.intl.string(y.default.FFLkmx) }),
                      ],
                  }),
                  v && (0, s.jsx)(P, { guildId: n, gameInstance: t, cost: m }),
              ],
          });
}
var E = t(328380),
    D = t(402317),
    L = t(802671),
    _ = t(628026),
    B = t(628049),
    w = t(105518),
    O = t(1637);
function U() {
    return (0, s.jsx)(v.A, {
        className: O.Bq,
        children: (0, s.jsx)(r.E, {
            variant: "body-sm/medium",
            children: S.intl.formatToPlainString(w.default.xta2U9, { maxInstances: 10 }),
        }),
    });
}
function $() {
    let {
        guildId: e,
        gameServerGames: n,
        instances: t,
        gameServerInstance: a,
        setGameServerInstance: v,
        setCurrentGame: j,
        onNext: b,
    } = (0, L.bv)();
    (0, g.ft)(e, null == a ? "create" : "edit");
    let h = i.useCallback(
            (e) => {
                (j(e), b());
            },
            [j, b],
        ),
        f = i.useCallback(
            (e) => {
                (v(e), b());
            },
            [v, b],
        ),
        C = t.length >= 10,
        I = t.length > 0,
        p = (0, x.A)(e);
    return 0 === Object.values(n).length
        ? (0, s.jsx)("div", { className: O.g4, children: (0, s.jsx)(o.y, { type: o.t.SPINNING_CIRCLE }) })
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  I &&
                      (0, s.jsxs)("div", {
                          className: O.yn,
                          children: [
                              (0, s.jsx)(d.D, {
                                  variant: "heading-sm/semibold",
                                  children: S.intl.string(w.default.BOWmmT),
                              }),
                              (0, s.jsx)("div", {
                                  className: O.Hy,
                                  children: t.map((n, t) =>
                                      (0, s.jsx)(
                                          G,
                                          { guildId: e, gameInstance: n, onClick: f },
                                          `instance-${n.id}-${t}`,
                                      ),
                                  ),
                              }),
                              C && (0, s.jsx)(U, {}),
                          ],
                      }),
                  (0, s.jsxs)("div", {
                      className: l()(O.yn, { [O.r9]: C }),
                      children: [
                          I &&
                              (0, s.jsx)(d.D, {
                                  variant: "heading-sm/semibold",
                                  children: S.intl.string(w.default.NIwDqW),
                              }),
                          (0, s.jsx)("div", {
                              className: O.Y_,
                              children: Object.values(n).map((n, t) =>
                                  (0, s.jsx)(
                                      c.m,
                                      {
                                          asContainer: !0,
                                          text: n.disabled
                                              ? S.intl.formatToPlainString(w.default.uVpJYf, { gameName: n.name })
                                              : null,
                                          position: "top",
                                          children: (0, s.jsx)(E.A, {
                                              guildId: e,
                                              game: n,
                                              variant: C || !p || n.disabled ? E.e.DISABLED : E.e.CLICKABLE,
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
                  (0, s.jsxs)(_.N4, {
                      step: B.HS.SELECT_GAME,
                      className: O.xQ,
                      children: [
                          (0, s.jsxs)("div", {
                              className: O.UW,
                              children: [
                                  (0, s.jsx)(m.CircleInformationIcon, { size: "sm" }),
                                  (0, s.jsx)(r.E, {
                                      variant: "body-sm/medium",
                                      children: S.intl.string(w.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, s.jsx)(D.A, {}),
                      ],
                  }),
              ],
          });
}
