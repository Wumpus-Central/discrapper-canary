l.d(t, { A: () => k, k: () => C });
var n = l(627968),
    a = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(990078),
    d = l(834730),
    o = l(289873),
    c = l(534514),
    u = l(885574),
    m = l(793574),
    v = l(208039),
    x = l(363487),
    g = l(397400),
    f = l(709255),
    j = l(895770),
    h = l(468946),
    b = l(27023),
    p = l(548392),
    N = l(800007),
    A = l(576709),
    I = l(985018),
    S = l(51158);
function C() {
    return (0, n.jsx)(v.A, {
        className: S.Bq,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            children: I.intl.formatToPlainString(A.default.xta2U9, { maxInstances: N.ZI }),
        }),
    });
}
function k() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: l,
        gameServerInstance: s,
        setGameServerInstance: v,
        setCurrentGame: k,
        onNext: y,
    } = (0, b.bv)();
    (0, g.ft)(e, null == s ? "create" : "edit");
    let T = a.useCallback(
            (e) => {
                k(e), y();
            },
            [k, y],
        ),
        E = a.useCallback(
            (e) => {
                v(e), y();
            },
            [v, y],
        ),
        G = l.length >= N.ZI,
        L = l.length > 0,
        P = (0, x.A)(e);
    return 0 === Object.values(t).length
        ? (0, n.jsx)("div", { className: S.g4, children: (0, n.jsx)(o.y, { type: o.t.SPINNING_CIRCLE }) })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  L &&
                      (0, n.jsxs)("div", {
                          className: S.yn,
                          children: [
                              (0, n.jsx)(c.D, {
                                  variant: "heading-md/semibold",
                                  children: I.intl.string(A.default.BOWmmT),
                              }),
                              (0, n.jsx)("div", {
                                  className: S.Hy,
                                  children: l.map((t, l) =>
                                      (0, n.jsx)(
                                          f.A,
                                          { guildId: e, gameInstance: t, onClick: E },
                                          `instance-${t.id}-${l}`,
                                      ),
                                  ),
                              }),
                              G && (0, n.jsx)(C, {}),
                          ],
                      }),
                  (0, n.jsxs)("div", {
                      className: i()(S.yn, { [S.r9]: G }),
                      children: [
                          L &&
                              (0, n.jsx)(c.D, {
                                  variant: "heading-md/semibold",
                                  children: I.intl.string(A.default.NIwDqW),
                              }),
                          (0, n.jsx)("div", {
                              className: S.Y_,
                              children: Object.values(t).map((t, l) =>
                                  (0, n.jsx)(
                                      r.m,
                                      {
                                          asContainer: !0,
                                          text: t.disabled
                                              ? I.intl.formatToPlainString(A.default.uVpJYf, { gameName: t.name })
                                              : null,
                                          position: "top",
                                          children: (0, n.jsx)(j.A, {
                                              guildId: e,
                                              game: t,
                                              variant: G || !P || t.disabled ? j.e.DISABLED : j.e.CLICKABLE,
                                              onClick: T,
                                              location: m.A.GAME_SERVER_SETUP_MODAL,
                                          }),
                                      },
                                      `game-${t.id}-${l}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, n.jsxs)(p.N4, {
                      step: N.HS.SELECT_GAME,
                      className: S.xQ,
                      children: [
                          (0, n.jsxs)("div", {
                              className: S.UW,
                              children: [
                                  (0, n.jsx)(u.m, { size: "sm" }),
                                  (0, n.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      children: I.intl.string(A.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(h.A, {}),
                      ],
                  }),
              ],
          });
}
