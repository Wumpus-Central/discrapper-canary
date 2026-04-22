a.d(t, { A: () => v });
var l = a(627968),
    n = a(503698),
    i = a.n(n),
    r = a(388108),
    d = a(939249),
    s = a(124480),
    u = a(670455),
    o = a(995326);
let b = {
    [u.P0.BAD]: { face: o.qx, "animated-face": "Emoji Neg", thumb: o.Se },
    [u.P0.NEUTRAL]: { face: o.ZK, "animated-face": "Emoji Mid" },
    [u.P0.GOOD]: { face: o.kf, "animated-face": "Emoji Happy", thumb: o.dE },
};
function v(e) {
    let { ratingOptions: t = u.Rj, emojiKind: a = "face", textLabels: n, selectedRating: v, onChangeRating: c } = e;
    return null != n
        ? (0, l.jsx)("div", {
              className: o.xu,
              children: (0, l.jsx)(s.A, {
                  options: t.map((e) => ({
                      label: (0, l.jsxs)("div", {
                          className: o.SG,
                          children: [(0, l.jsx)("div", { className: b[e][a] }), n[e]],
                      }),
                      value: e,
                      className: i()(o.qq, v === e ? o.wH : null),
                  })),
                  onClick: (e) => c(e.value),
              }),
          })
        : (0, l.jsx)("div", {
              className: i()(o.Bo, o.gm),
              children: t.map((e) =>
                  (0, l.jsx)(
                      d.D,
                      {
                          onClick: () => c(e),
                          "aria-label": e,
                          className: o.qq,
                          children:
                              "animated-face" === a
                                  ? (0, l.jsx)(r.i, { className: i()(o.Ld, v === e ? o.wH : null), artboard: b[e][a] })
                                  : (0, l.jsx)("div", { className: i()(b[e][a], v === e ? o.wH : null) }),
                      },
                      e,
                  ),
              ),
          });
}
