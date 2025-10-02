n.d(t, {
    Y: () => j,
    Z: () => x,
});
var l = n(951288),
    i = n(647438),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(494620),
    c = n(748745),
    u = n(567225),
    d = n(535895),
    m = n(183369),
    v = n(422663),
    f = n(473682),
    g = n(440589),
    b = n(388032),
    p = n(555574);
function j() {
    return (0, l.jsx)(o.Z, {
        className: p.maxInstancesWarning,
        children: (0, l.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: b.intl.formatToPlainString(g.default.kUNv8P, { maxInstances: f.zI }),
        }),
    });
}
function x() {
    let {
            guildId: e,
            portkeyGames: t,
            instances: n,
            setPortkeyInstance: a,
            setCurrentGame: o,
            onNext: x,
        } = (0, m.aj)(),
        y = i.useCallback(
            (e) => {
                o(e), x();
            },
            [o, x],
        ),
        O = i.useCallback(
            (e) => {
                a(e), x();
            },
            [a, x],
        ),
        h = n.length >= f.zI,
        P = n.length > 0;
    return 0 === Object.values(t).length
        ? (0, l.jsx)("div", {
              className: p.loadingContainer,
              children: (0, l.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  P &&
                      (0, l.jsxs)("div", {
                          className: p.gameSection,
                          children: [
                              (0, l.jsx)(s.X6q, {
                                  variant: "heading-md/semibold",
                                  children: b.intl.string(g.default.wzC4ws),
                              }),
                              (0, l.jsx)("div", {
                                  className: p.gameInstanceContainer,
                                  children: n.map((t, n) =>
                                      (0, l.jsx)(
                                          c.Z,
                                          {
                                              guildId: e,
                                              gameInstance: t,
                                              onClick: O,
                                          },
                                          "instance-".concat(t.id, "-").concat(n),
                                      ),
                                  ),
                              }),
                              h && (0, l.jsx)(j, {}),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: r()(p.gameSection, { [p.disabled]: h }),
                      children: [
                          P &&
                              (0, l.jsx)(s.X6q, {
                                  variant: "heading-md/semibold",
                                  children: b.intl.string(g.default.l4UdiY),
                              }),
                          (0, l.jsx)("div", {
                              className: p.gameContainer,
                              children: Object.values(t).map((e, t) =>
                                  (0, l.jsx)(
                                      u.Z,
                                      {
                                          game: e,
                                          disabled: h,
                                          onClick: y,
                                      },
                                      "game-".concat(e.id, "-").concat(t),
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(v.ok, {
                      step: f.Vb.SELECT_GAME,
                      className: p.footerContainer,
                      children: [
                          (0, l.jsxs)("div", {
                              className: p.warningContainer,
                              children: [
                                  (0, l.jsx)(s.d3s, { size: "sm" }),
                                  (0, l.jsx)(s.Text, {
                                      variant: "text-sm/medium",
                                      children: b.intl.string(g.default.RBv43d),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(d.Z, {}),
                      ],
                  }),
              ],
          });
}
