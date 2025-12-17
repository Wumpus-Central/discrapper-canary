n.d(t, { Z: () => b });
var a = n(54381),
    l = n(120356),
    i = n.n(l),
    r = n(47985),
    o = n(481060),
    d = n(572539),
    s = n(531578),
    u = n(436969);
let c = {
    [s.aZ.BAD]: {
        face: u.sadFace,
        "animated-face": "Emoji Neg",
        thumb: u.thumbsDown,
    },
    [s.aZ.NEUTRAL]: {
        face: u.neutralFace,
        "animated-face": "Emoji Mid",
    },
    [s.aZ.GOOD]: {
        face: u.happyFace,
        "animated-face": "Emoji Happy",
        thumb: u.thumbsUp,
    },
};
function b(e) {
    let { ratingOptions: t = s.rN, emojiKind: n = "face", textLabels: l, selectedRating: b, onChangeRating: f } = e;
    return null != l
        ? (0, a.jsx)("div", {
              className: u.textLabels,
              children: (0, a.jsx)(d.Z, {
                  options: t.map((e) => ({
                      label: (0, a.jsxs)("div", {
                          className: u.textLabel,
                          children: [(0, a.jsx)("div", { className: c[e][n] }), l[e]],
                      }),
                      value: e,
                      className: i()(u.emojiContainer, b === e ? u.selected : null),
                  })),
                  onClick: (e) => f(e.value),
              }),
          })
        : (0, a.jsx)("div", {
              className: i()(u.ratingSelector, u.emojis),
              children: t.map((e) =>
                  (0, a.jsx)(
                      o.P3F,
                      {
                          onClick: () => f(e),
                          "aria-label": e,
                          className: u.emojiContainer,
                          children:
                              "animated-face" === n
                                  ? (0, a.jsx)(r.m, {
                                        className: i()(u.animatedFace, b === e ? u.selected : null),
                                        artboard: c[e][n],
                                    })
                                  : (0, a.jsx)("div", { className: i()(c[e][n], b === e ? u.selected : null) }),
                      },
                      e,
                  ),
              ),
          });
}
