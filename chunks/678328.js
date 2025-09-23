n.d(t, {
    Y: () => j,
    Z: () => p,
});
var l = n(951288),
    a = n(647438),
    i = n(120356),
    r = n.n(i),
    s = n(481060),
    o = n(494620),
    c = n(748745),
    u = n(567225),
    d = n(183369),
    m = n(422663),
    v = n(473682),
    g = n(440589),
    b = n(388032),
    f = n(555574);
function j() {
    return (0, l.jsx)(o.Z, {
        className: f.maxInstancesWarning,
        children: (0, l.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: b.intl.formatToPlainString(g.default.kUNv8P, { maxInstances: v.zI }),
        }),
    });
}
function p() {
    let {
            guildId: e,
            portkeyGames: t,
            instances: n,
            setPortkeyInstance: i,
            setCurrentGame: o,
            onNext: p,
        } = (0, d.aj)(),
        x = a.useCallback(
            (e) => {
                o(e), p();
            },
            [o, p],
        ),
        y = a.useCallback(
            (e) => {
                i(e), p();
            },
            [i, p],
        ),
        h = n.length >= v.zI,
        O = n.length > 0;
    return 0 === Object.values(t).length
        ? (0, l.jsx)("div", {
              className: f.loadingContainer,
              children: (0, l.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)("div", {
                      className: f.headingContainer,
                      children: [
                          (0, l.jsx)(s.X6q, {
                              variant: "heading-lg/semibold",
                              children: b.intl.string(g.default.DG1SHB),
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              children: b.intl.string(g.default.hkWuWF),
                          }),
                      ],
                  }),
                  O &&
                      (0, l.jsxs)("div", {
                          className: f.gameSection,
                          children: [
                              (0, l.jsx)(s.X6q, {
                                  variant: "heading-md/semibold",
                                  children: b.intl.string(g.default.wzC4ws),
                              }),
                              (0, l.jsx)("div", {
                                  className: f.gameInstanceContainer,
                                  children: n.map((t, n) =>
                                      (0, l.jsx)(
                                          c.Z,
                                          {
                                              guildId: e,
                                              gameInstance: t,
                                              onClick: y,
                                          },
                                          "instance-".concat(t.id, "-").concat(n),
                                      ),
                                  ),
                              }),
                              h && (0, l.jsx)(j, {}),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: r()(f.gameSection, { [f.disabled]: h }),
                      children: [
                          O &&
                              (0, l.jsx)(s.X6q, {
                                  variant: "heading-md/semibold",
                                  children: b.intl.string(g.default.l4UdiY),
                              }),
                          (0, l.jsx)("div", {
                              className: f.gameContainer,
                              children: Object.values(t).map((e, t) =>
                                  (0, l.jsx)(
                                      u.Z,
                                      {
                                          game: e,
                                          disabled: h,
                                          onClick: x,
                                      },
                                      "game-".concat(e.id, "-").concat(t),
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(m.ok, {
                      step: v.Vb.SELECT_GAME,
                      className: f.footerContainer,
                      children: [
                          (0, l.jsxs)("div", {
                              className: f.warningContainer,
                              children: [
                                  (0, l.jsx)(s.d3s, { size: "sm" }),
                                  (0, l.jsx)(s.Text, {
                                      variant: "text-sm/medium",
                                      children: b.intl.string(g.default.RBv43d),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(m.VS, {}),
                      ],
                  }),
              ],
          });
}
