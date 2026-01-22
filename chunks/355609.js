n.d(t, {
    A: () => y,
    k: () => h,
});
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(990078),
    u = n(397927),
    o = n(793574),
    d = n(801264),
    c = n(363487),
    m = n(397400),
    v = n(709255),
    f = n(895770),
    g = n(468946),
    b = n(27023),
    p = n(548392),
    _ = n(800007),
    j = n(294726),
    x = n(985018),
    E = n(453729);
function h() {
    return (0, l.jsx)(d.A, {
        className: E.Bq,
        children: (0, l.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: x.intl.formatToPlainString(j.default.xta2U9, { maxInstances: _.ZI }),
        }),
    });
}
function y() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: n,
        gameServerInstance: a,
        setGameServerInstance: d,
        setCurrentGame: y,
        onNext: A,
    } = (0, b.bv)();
    (0, m.ft)(e, null == a ? "create" : "edit");
    let S = i.useCallback(
            (e) => {
                y(e), A();
            },
            [y, A],
        ),
        O = i.useCallback(
            (e) => {
                d(e), A();
            },
            [d, A],
        ),
        k = n.length >= _.ZI,
        I = n.length > 0,
        N = (0, c.A)(e);
    return 0 === Object.values(t).length
        ? (0, l.jsx)("div", {
              className: E.g4,
              children: (0, l.jsx)(u.y$y, { type: u.tVU.SPINNING_CIRCLE }),
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  I &&
                      (0, l.jsxs)("div", {
                          className: E.yn,
                          children: [
                              (0, l.jsx)(u.Heading, {
                                  variant: "heading-md/semibold",
                                  children: x.intl.string(j.default.BOWmmT),
                              }),
                              (0, l.jsx)("div", {
                                  className: E.Hy,
                                  children: n.map((t, n) =>
                                      (0, l.jsx)(
                                          v.A,
                                          {
                                              guildId: e,
                                              gameInstance: t,
                                              onClick: O,
                                          },
                                          "instance-".concat(t.id, "-").concat(n),
                                      ),
                                  ),
                              }),
                              k && (0, l.jsx)(h, {}),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: r()(E.yn, { [E.r9]: k }),
                      children: [
                          I &&
                              (0, l.jsx)(u.Heading, {
                                  variant: "heading-md/semibold",
                                  children: x.intl.string(j.default.NIwDqW),
                              }),
                          (0, l.jsx)("div", {
                              className: E.Y_,
                              children: Object.values(t).map((t, n) =>
                                  (0, l.jsx)(
                                      s.m,
                                      {
                                          asContainer: !0,
                                          text: t.disabled
                                              ? x.intl.formatToPlainString(j.default.uVpJYf, { gameName: t.name })
                                              : null,
                                          position: "top",
                                          children: (0, l.jsx)(f.A, {
                                              guildId: e,
                                              game: t,
                                              disabled: k || !N || t.disabled,
                                              onClick: S,
                                              location: o.A.GAME_SERVER_SETUP_MODAL,
                                          }),
                                      },
                                      "game-".concat(t.id, "-").concat(n),
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(p.N4, {
                      step: _.HS.SELECT_GAME,
                      className: E.xQ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: E.UW,
                              children: [
                                  (0, l.jsx)(u.mir, { size: "sm" }),
                                  (0, l.jsx)(u.Text, {
                                      variant: "text-sm/medium",
                                      children: x.intl.string(j.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(g.A, {}),
                      ],
                  }),
              ],
          });
}
