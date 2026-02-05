n.d(t, { A: () => h, k: () => E });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(990078),
    d = n(397927),
    u = n(793574),
    c = n(801264),
    o = n(363487),
    m = n(397400),
    g = n(709255),
    f = n(895770),
    _ = n(468946),
    v = n(27023),
    p = n(548392),
    x = n(800007),
    b = n(294726),
    j = n(985018),
    A = n(453729);
function E() {
    return (0, a.jsx)(c.A, {
        className: A.Bq,
        children: (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            children: j.intl.formatToPlainString(b.default.xta2U9, { maxInstances: x.ZI }),
        }),
    });
}
function h() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: n,
        gameServerInstance: l,
        setGameServerInstance: c,
        setCurrentGame: h,
        onNext: S,
    } = (0, v.bv)();
    (0, m.ft)(e, null == l ? "create" : "edit");
    let I = i.useCallback(
            (e) => {
                h(e), S();
            },
            [h, S],
        ),
        k = i.useCallback(
            (e) => {
                c(e), S();
            },
            [c, S],
        ),
        N = n.length >= x.ZI,
        C = n.length > 0,
        G = (0, o.A)(e);
    return 0 === Object.values(t).length
        ? (0, a.jsx)("div", { className: A.g4, children: (0, a.jsx)(d.y$y, { type: d.tVU.SPINNING_CIRCLE }) })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  C &&
                      (0, a.jsxs)("div", {
                          className: A.yn,
                          children: [
                              (0, a.jsx)(d.Heading, {
                                  variant: "heading-md/semibold",
                                  children: j.intl.string(b.default.BOWmmT),
                              }),
                              (0, a.jsx)("div", {
                                  className: A.Hy,
                                  children: n.map((t, n) =>
                                      (0, a.jsx)(
                                          g.A,
                                          { guildId: e, gameInstance: t, onClick: k },
                                          `instance-${t.id}-${n}`,
                                      ),
                                  ),
                              }),
                              N && (0, a.jsx)(E, {}),
                          ],
                      }),
                  (0, a.jsxs)("div", {
                      className: s()(A.yn, { [A.r9]: N }),
                      children: [
                          C &&
                              (0, a.jsx)(d.Heading, {
                                  variant: "heading-md/semibold",
                                  children: j.intl.string(b.default.NIwDqW),
                              }),
                          (0, a.jsx)("div", {
                              className: A.Y_,
                              children: Object.values(t).map((t, n) =>
                                  (0, a.jsx)(
                                      r.m,
                                      {
                                          asContainer: !0,
                                          text: t.disabled
                                              ? j.intl.formatToPlainString(b.default.uVpJYf, { gameName: t.name })
                                              : null,
                                          position: "top",
                                          children: (0, a.jsx)(f.A, {
                                              guildId: e,
                                              game: t,
                                              disabled: N || !G || t.disabled,
                                              onClick: I,
                                              location: u.A.GAME_SERVER_SETUP_MODAL,
                                          }),
                                      },
                                      `game-${t.id}-${n}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, a.jsxs)(p.N4, {
                      step: x.HS.SELECT_GAME,
                      className: A.xQ,
                      children: [
                          (0, a.jsxs)("div", {
                              className: A.UW,
                              children: [
                                  (0, a.jsx)(d.mir, { size: "sm" }),
                                  (0, a.jsx)(d.Text, {
                                      variant: "text-sm/medium",
                                      children: j.intl.string(b.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, a.jsx)(_.A, {}),
                      ],
                  }),
              ],
          });
}
