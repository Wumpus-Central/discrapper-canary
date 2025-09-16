t.d(n, { Z: () => x });
var i = t(951288),
    r = t(647438),
    a = t(120356),
    l = t.n(a),
    o = t(481060),
    s = t(494620),
    c = t(748745),
    d = t(567225),
    u = t(183369),
    m = t(422663),
    g = t(473682),
    p = t(401561),
    f = t(388032),
    v = t(782991);
function x() {
    let {
            guildId: e,
            portkeyGames: n,
            instances: t,
            setPortkeyInstance: a,
            setCurrentGame: x,
            onNext: b,
        } = (0, u.aj)(),
        j = r.useCallback(
            (e) => {
                x(e), b();
            },
            [x, b],
        ),
        h = r.useCallback(
            (e) => {
                a(e), b();
            },
            [a, b],
        ),
        _ = t.length >= g.zI,
        C = t.length > 0;
    return 0 === Object.values(n).length
        ? (0, i.jsx)("div", {
              className: v.loadingContainer,
              children: (0, i.jsx)(o.$jN, { type: o.RAz.SPINNING_CIRCLE }),
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: v.headingContainer,
                      children: [
                          (0, i.jsx)(o.X6q, {
                              variant: "heading-lg/semibold",
                              children: f.intl.string(p.default.DG1SHB),
                          }),
                          (0, i.jsx)(o.Text, {
                              variant: "text-sm/medium",
                              children: f.intl.string(p.default.hkWuWF),
                          }),
                      ],
                  }),
                  C &&
                      (0, i.jsxs)("div", {
                          className: v.gameSection,
                          children: [
                              (0, i.jsx)(o.X6q, {
                                  variant: "heading-md/semibold",
                                  children: f.intl.string(p.default.wzC4ws),
                              }),
                              (0, i.jsx)("div", {
                                  className: v.gameInstanceContainer,
                                  children: t.map((n, t) =>
                                      (0, i.jsx)(
                                          c.Z,
                                          {
                                              guildId: e,
                                              gameInstance: n,
                                              onClick: h,
                                          },
                                          "instance-".concat(n.id, "-").concat(t),
                                      ),
                                  ),
                              }),
                              _ &&
                                  (0, i.jsx)(s.Z, {
                                      className: v.maxInstancesWarning,
                                      children: (0, i.jsx)(o.Text, {
                                          variant: "text-sm/medium",
                                          children: f.intl.formatToPlainString(p.default.kUNv8P, {
                                              maxInstances: g.zI,
                                          }),
                                      }),
                                  }),
                          ],
                      }),
                  (0, i.jsxs)("div", {
                      className: l()(v.gameSection, { [v.disabled]: _ }),
                      children: [
                          C &&
                              (0, i.jsx)(o.X6q, {
                                  variant: "heading-md/semibold",
                                  children: f.intl.string(p.default.l4UdiY),
                              }),
                          (0, i.jsx)("div", {
                              className: v.gameContainer,
                              children: Object.values(n).map((e, n) =>
                                  (0, i.jsx)(
                                      d.Z,
                                      {
                                          game: e,
                                          disabled: _,
                                          onClick: j,
                                      },
                                      "game-".concat(e.id, "-").concat(n),
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, i.jsxs)(m.ok, {
                      step: g.Vb.SELECT_GAME,
                      className: v.footerContainer,
                      children: [
                          (0, i.jsxs)("div", {
                              className: v.warningContainer,
                              children: [
                                  (0, i.jsx)(o.d3s, { size: "sm" }),
                                  (0, i.jsx)(o.Text, {
                                      variant: "text-sm/medium",
                                      children: f.intl.string(p.default.RBv43d),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(m.VS, {}),
                      ],
                  }),
              ],
          });
}
