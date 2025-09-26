n.d(t, {
    Y: () => p,
    Z: () => j,
});
var l = n(951288),
    i = n(647438),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(494620),
    u = n(748745),
    c = n(567225),
    d = n(183369),
    m = n(422663),
    v = n(473682),
    f = n(401561),
    b = n(388032),
    g = n(782991);
function p() {
    return (0, l.jsx)(o.Z, {
        className: g.maxInstancesWarning,
        children: (0, l.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: b.intl.formatToPlainString(f.default.kUNv8P, { maxInstances: v.zI }),
        }),
    });
}
function j() {
    let {
            guildId: e,
            portkeyGames: t,
            instances: n,
            setPortkeyInstance: a,
            setCurrentGame: o,
            onNext: j,
        } = (0, d.aj)(),
        y = i.useCallback(
            (e) => {
                o(e), j();
            },
            [o, j],
        ),
        x = i.useCallback(
            (e) => {
                a(e), j();
            },
            [a, j],
        ),
        O = n.length >= v.zI,
        h = n.length > 0;
    return 0 === Object.values(t).length
        ? (0, l.jsx)("div", {
              className: g.loadingContainer,
              children: (0, l.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  h &&
                      (0, l.jsxs)("div", {
                          className: g.gameSection,
                          children: [
                              (0, l.jsx)(s.X6q, {
                                  variant: "heading-md/semibold",
                                  children: b.intl.string(f.default.wzC4ws),
                              }),
                              (0, l.jsx)("div", {
                                  className: g.gameInstanceContainer,
                                  children: n.map((t, n) =>
                                      (0, l.jsx)(
                                          u.Z,
                                          {
                                              guildId: e,
                                              gameInstance: t,
                                              onClick: x,
                                          },
                                          "instance-".concat(t.id, "-").concat(n),
                                      ),
                                  ),
                              }),
                              O && (0, l.jsx)(p, {}),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: r()(g.gameSection, { [g.disabled]: O }),
                      children: [
                          h &&
                              (0, l.jsx)(s.X6q, {
                                  variant: "heading-md/semibold",
                                  children: b.intl.string(f.default.l4UdiY),
                              }),
                          (0, l.jsx)("div", {
                              className: g.gameContainer,
                              children: Object.values(t).map((e, t) =>
                                  (0, l.jsx)(
                                      c.Z,
                                      {
                                          game: e,
                                          disabled: O,
                                          onClick: y,
                                      },
                                      "game-".concat(e.id, "-").concat(t),
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(m.ok, {
                      step: v.Vb.SELECT_GAME,
                      className: g.footerContainer,
                      children: [
                          (0, l.jsxs)("div", {
                              className: g.warningContainer,
                              children: [
                                  (0, l.jsx)(s.d3s, { size: "sm" }),
                                  (0, l.jsx)(s.Text, {
                                      variant: "text-sm/medium",
                                      children: b.intl.string(f.default.RBv43d),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(m.VS, {}),
                      ],
                  }),
              ],
          });
}
