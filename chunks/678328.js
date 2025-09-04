t.d(n, { Z: () => j });
var a = t(951288),
    i = t(647438),
    r = t(120356),
    l = t.n(r),
    s = t(481060),
    o = t(494620),
    c = t(748745),
    d = t(567225),
    u = t(183369),
    m = t(422663),
    p = t(473682),
    x = t(401561),
    g = t(388032),
    v = t(782991);
function j() {
    let { portkeyGames: e, instances: n, setPortkeyInstance: t, setCurrentGame: r, onNext: j } = (0, u.aj)(),
        b = i.useCallback(
            (e) => {
                r(e), j();
            },
            [r, j],
        ),
        f = i.useCallback(
            (e) => {
                t(e), j();
            },
            [t, j],
        ),
        h = n.length >= p.zI,
        _ = n.length > 0;
    return 0 === Object.values(e).length
        ? (0, a.jsx)("div", {
              className: v.loadingContainer,
              children: (0, a.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsxs)("div", {
                      className: v.headingContainer,
                      children: [
                          (0, a.jsx)(s.X6q, {
                              variant: "heading-lg/semibold",
                              children: g.intl.string(x.default.DG1SHB),
                          }),
                          (0, a.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              children: g.intl.string(x.default.hkWuWF),
                          }),
                      ],
                  }),
                  _ &&
                      (0, a.jsxs)("div", {
                          className: v.gameSection,
                          children: [
                              (0, a.jsx)(s.X6q, {
                                  variant: "heading-md/semibold",
                                  children: g.intl.string(x.default.wzC4ws),
                              }),
                              (0, a.jsx)("div", {
                                  className: v.gameInstanceContainer,
                                  children: n.map((e, n) =>
                                      (0, a.jsx)(
                                          c.Z,
                                          {
                                              gameInstance: e,
                                              onClick: f,
                                          },
                                          "instance-".concat(e.id, "-").concat(n),
                                      ),
                                  ),
                              }),
                              h &&
                                  (0, a.jsx)(o.Z, {
                                      className: v.maxInstancesWarning,
                                      children: (0, a.jsx)(s.Text, {
                                          variant: "text-sm/medium",
                                          children: g.intl.formatToPlainString(x.default.kUNv8P, {
                                              maxInstances: p.zI,
                                          }),
                                      }),
                                  }),
                          ],
                      }),
                  (0, a.jsxs)("div", {
                      className: l()(v.gameSection, { [v.disabled]: h }),
                      children: [
                          _ &&
                              (0, a.jsx)(s.X6q, {
                                  variant: "heading-md/semibold",
                                  children: g.intl.string(x.default.l4UdiY),
                              }),
                          (0, a.jsx)("div", {
                              className: v.gameContainer,
                              children: Object.values(e).map((e, n) =>
                                  (0, a.jsx)(
                                      d.Z,
                                      {
                                          game: e,
                                          disabled: h,
                                          onClick: b,
                                      },
                                      "game-".concat(e.id, "-").concat(n),
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, a.jsxs)(m.ok, {
                      step: p.Vb.SELECT_GAME,
                      className: v.footerContainer,
                      children: [
                          (0, a.jsxs)("div", {
                              className: v.warningContainer,
                              children: [
                                  (0, a.jsx)(s.d3s, { size: "sm" }),
                                  (0, a.jsx)(s.Text, {
                                      variant: "text-sm/medium",
                                      children: g.intl.string(x.default.RBv43d),
                                  }),
                              ],
                          }),
                          (0, a.jsx)(m.VS, {}),
                      ],
                  }),
              ],
          });
}
