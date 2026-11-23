var t = e(477900),
    i = e(503698),
    n = e.n(i),
    r = e(939249),
    E = e(65274),
    u = e(124480),
    d = e(670455),
    s = e(164249);
let O = {
    [d.P0.BAD]: { face: s.qx, "animated-face": "Emoji Neg", "face-refresh": s.$x, thumb: s.Se },
    [d.P0.NEUTRAL]: { face: s.ZK, "animated-face": "Emoji Mid", "face-refresh": s.Av },
    [d.P0.GOOD]: { face: s.kf, "animated-face": "Emoji Happy", "face-refresh": s.bC, thumb: s.dE },
};
e.d(
    l,
    {},
    {
        A: function (a) {
            let {
                ratingOptions: l = d.Rj,
                emojiKind: e = "face",
                textLabels: i,
                selectedRating: v,
                onChangeRating: b,
            } = a;
            return null != i
                ? (0, t.jsx)("div", {
                      className: s.xu,
                      children: (0, t.jsx)(u.A, {
                          options: l.map((a) => ({
                              label: (0, t.jsxs)("div", {
                                  className: s.SG,
                                  children: [(0, t.jsx)("div", { className: O[a][e] }), i[a]],
                              }),
                              value: a,
                              className: n()(s.qq, v === a ? s.wH : null),
                          })),
                          onClick: (a) => b(a.value),
                      }),
                  })
                : (0, t.jsx)("div", {
                      className: n()(s.Bo, s.gm),
                      children: l.map((a) =>
                          (0, t.jsx)(
                              r.D,
                              {
                                  onClick: () => b(a),
                                  "aria-label": a,
                                  className: s.qq,
                                  children:
                                      "animated-face" === e
                                          ? (0, t.jsx)(E.i, {
                                                className: n()(s.Ld, v === a ? s.wH : null),
                                                artboard: O[a][e],
                                            })
                                          : (0, t.jsx)("div", { className: n()(O[a][e], v === a ? s.wH : null) }),
                              },
                              a,
                          ),
                      ),
                  });
        },
    },
);
