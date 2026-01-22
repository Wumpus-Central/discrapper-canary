l.d(t, { A: () => o });
var n = l(627968),
    a = l(503698),
    i = l.n(a),
    r = l(388108),
    s = l(397927),
    u = l(124480),
    d = l(670455),
    O = l(792935);
let b = {
    [d.P0.BAD]: {
        face: O.qx,
        "animated-face": "Emoji Neg",
        thumb: O.Se,
    },
    [d.P0.NEUTRAL]: {
        face: O.ZK,
        "animated-face": "Emoji Mid",
    },
    [d.P0.GOOD]: {
        face: O.kf,
        "animated-face": "Emoji Happy",
        thumb: O.dE,
    },
};
function o(e) {
    let { ratingOptions: t = d.Rj, emojiKind: l = "face", textLabels: a, selectedRating: o, onChangeRating: c } = e;
    return null != a
        ? (0, n.jsx)("div", {
              className: O.xu,
              children: (0, n.jsx)(u.A, {
                  options: t.map((e) => ({
                      label: (0, n.jsxs)("div", {
                          className: O.SG,
                          children: [(0, n.jsx)("div", { className: b[e][l] }), a[e]],
                      }),
                      value: e,
                      className: i()(O.qq, o === e ? O.wH : null),
                  })),
                  onClick: (e) => c(e.value),
              }),
          })
        : (0, n.jsx)("div", {
              className: i()(O.Bo, O.gm),
              children: t.map((e) =>
                  (0, n.jsx)(
                      s.DUT,
                      {
                          onClick: () => c(e),
                          "aria-label": e,
                          className: O.qq,
                          children:
                              "animated-face" === l
                                  ? (0, n.jsx)(r.i, {
                                        className: i()(O.Ld, o === e ? O.wH : null),
                                        artboard: b[e][l],
                                    })
                                  : (0, n.jsx)("div", { className: i()(b[e][l], o === e ? O.wH : null) }),
                      },
                      e,
                  ),
              ),
          });
}
