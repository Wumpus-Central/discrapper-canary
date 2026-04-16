n.d(t, { A: () => I, k: () => S });
var a = n(627968),
    l = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(990078),
    d = n(397927),
    o = n(793574),
    c = n(208039),
    u = n(363487),
    m = n(397400),
    x = n(709255),
    v = n(895770),
    g = n(468946),
    f = n(27023),
    j = n(548392),
    b = n(800007),
    h = n(576709),
    p = n(985018),
    N = n(51158);
function S() {
    return (0, a.jsx)(c.A, {
        className: N.Bq,
        children: (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: p.intl.formatToPlainString(h.default.xta2U9, { maxInstances: b.ZI }),
        }),
    });
}
function I() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: n,
        gameServerInstance: s,
        setGameServerInstance: c,
        setCurrentGame: I,
        onNext: A,
    } = (0, f.bv)();
    (0, m.ft)(e, null == s ? "create" : "edit");
    let C = l.useCallback(
            (e) => {
                I(e), A();
            },
            [I, A],
        ),
        T = l.useCallback(
            (e) => {
                c(e), A();
            },
            [c, A],
        ),
        k = n.length >= b.ZI,
        y = n.length > 0,
        L = (0, u.A)(e);
    return 0 === Object.values(t).length
        ? (0, a.jsx)("div", { className: N.g4, children: (0, a.jsx)(d.y$y, { type: d.tVU.SPINNING_CIRCLE }) })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  y &&
                      (0, a.jsxs)("div", {
                          className: N.yn,
                          children: [
                              (0, a.jsx)(d.Heading, {
                                  variant: "heading-md/semibold",
                                  children: p.intl.string(h.default.BOWmmT),
                              }),
                              (0, a.jsx)("div", {
                                  className: N.Hy,
                                  children: n.map((t, n) =>
                                      (0, a.jsx)(
                                          x.A,
                                          { guildId: e, gameInstance: t, onClick: T },
                                          `instance-${t.id}-${n}`,
                                      ),
                                  ),
                              }),
                              k && (0, a.jsx)(S, {}),
                          ],
                      }),
                  (0, a.jsxs)("div", {
                      className: i()(N.yn, { [N.r9]: k }),
                      children: [
                          y &&
                              (0, a.jsx)(d.Heading, {
                                  variant: "heading-md/semibold",
                                  children: p.intl.string(h.default.NIwDqW),
                              }),
                          (0, a.jsx)("div", {
                              className: N.Y_,
                              children: Object.values(t).map((t, n) =>
                                  (0, a.jsx)(
                                      r.m,
                                      {
                                          asContainer: !0,
                                          text: t.disabled
                                              ? p.intl.formatToPlainString(h.default.uVpJYf, { gameName: t.name })
                                              : null,
                                          position: "top",
                                          children: (0, a.jsx)(v.A, {
                                              guildId: e,
                                              game: t,
                                              variant: k || !L || t.disabled ? v.e.DISABLED : v.e.CLICKABLE,
                                              onClick: C,
                                              location: o.A.GAME_SERVER_SETUP_MODAL,
                                          }),
                                      },
                                      `game-${t.id}-${n}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, a.jsxs)(j.N4, {
                      step: b.HS.SELECT_GAME,
                      className: N.xQ,
                      children: [
                          (0, a.jsxs)("div", {
                              className: N.UW,
                              children: [
                                  (0, a.jsx)(d.mir, { size: "sm" }),
                                  (0, a.jsx)(d.Text, {
                                      variant: "text-sm/medium",
                                      children: p.intl.string(h.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, a.jsx)(g.A, {}),
                      ],
                  }),
              ],
          });
}
