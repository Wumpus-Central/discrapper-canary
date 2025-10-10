n.d(t, { Z: () => b });
var a = n(951288),
    l = n(120356),
    i = n.n(l),
    r = n(47985),
    o = n(481060),
    s = n(572539),
    u = n(531578),
    c = n(790444);
let d = {
    [u.aZ.BAD]: {
        face: c.sadFace,
        "animated-face": "Emoji Neg",
        thumb: c.thumbsDown,
    },
    [u.aZ.NEUTRAL]: {
        face: c.neutralFace,
        "animated-face": "Emoji Mid",
    },
    [u.aZ.GOOD]: {
        face: c.happyFace,
        "animated-face": "Emoji Happy",
        thumb: c.thumbsUp,
    },
};
function b(e) {
    let { ratingOptions: t = u.rN, emojiKind: n = "face", textLabels: l, selectedRating: b, onChangeRating: f } = e;
    return null != l
        ? (0, a.jsx)("div", {
              className: c.textLabels,
              children: (0, a.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, a.jsxs)("div", {
                          className: c.textLabel,
                          children: [(0, a.jsx)("div", { className: d[e][n] }), l[e]],
                      }),
                      value: e,
                      className: i()(c.emojiContainer, b === e ? c.selected : null),
                  })),
                  onClick: (e) => f(e.value),
              }),
          })
        : (0, a.jsx)("div", {
              className: i()(c.ratingSelector, c.emojis),
              children: t.map((e) =>
                  (0, a.jsx)(
                      o.P3F,
                      {
                          onClick: () => f(e),
                          "aria-label": e,
                          className: c.emojiContainer,
                          children:
                              "animated-face" === n
                                  ? (0, a.jsx)(r.m, {
                                        className: i()(c.animatedFace, b === e ? c.selected : null),
                                        artboard: d[e][n],
                                    })
                                  : (0, a.jsx)("div", { className: i()(d[e][n], b === e ? c.selected : null) }),
                      },
                      e,
                  ),
              ),
          });
}
