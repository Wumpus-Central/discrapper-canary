l.d(a, { A: () => b });
var t = l(627968),
    n = l(503698),
    i = l.n(n),
    r = l(388108),
    d = l(397927),
    s = l(124480),
    u = l(670455),
    E = l(792935);
let O = {
    [u.P0.BAD]: { face: E.qx, "animated-face": "Emoji Neg", thumb: E.Se },
    [u.P0.NEUTRAL]: { face: E.ZK, "animated-face": "Emoji Mid" },
    [u.P0.GOOD]: { face: E.kf, "animated-face": "Emoji Happy", thumb: E.dE },
};
function b(e) {
    let { ratingOptions: a = u.Rj, emojiKind: l = "face", textLabels: n, selectedRating: b, onChangeRating: v } = e;
    return null != n
        ? (0, t.jsx)("div", {
              className: E.xu,
              children: (0, t.jsx)(s.A, {
                  options: a.map((e) => ({
                      label: (0, t.jsxs)("div", {
                          className: E.SG,
                          children: [(0, t.jsx)("div", { className: O[e][l] }), n[e]],
                      }),
                      value: e,
                      className: i()(E.qq, b === e ? E.wH : null),
                  })),
                  onClick: (e) => v(e.value),
              }),
          })
        : (0, t.jsx)("div", {
              className: i()(E.Bo, E.gm),
              children: a.map((e) =>
                  (0, t.jsx)(
                      d.DUT,
                      {
                          onClick: () => v(e),
                          "aria-label": e,
                          className: E.qq,
                          children:
                              "animated-face" === l
                                  ? (0, t.jsx)(r.i, { className: i()(E.Ld, b === e ? E.wH : null), artboard: O[e][l] })
                                  : (0, t.jsx)("div", { className: i()(O[e][l], b === e ? E.wH : null) }),
                      },
                      e,
                  ),
              ),
          });
}
