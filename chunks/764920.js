n.d(t, { Z: () => o });
var a = n(54381),
    l = n(120356),
    i = n.n(l),
    r = n(47985),
    s = n(481060),
    d = n(572539),
    u = n(531578),
    b = n(790444);
let c = {
    [u.aZ.BAD]: {
        face: b.sadFace,
        "animated-face": "Emoji Neg",
        thumb: b.thumbsDown,
    },
    [u.aZ.NEUTRAL]: {
        face: b.neutralFace,
        "animated-face": "Emoji Mid",
    },
    [u.aZ.GOOD]: {
        face: b.happyFace,
        "animated-face": "Emoji Happy",
        thumb: b.thumbsUp,
    },
};
function o(e) {
    let { ratingOptions: t = u.rN, emojiKind: n = "face", textLabels: l, selectedRating: o, onChangeRating: O } = e;
    return null != l
        ? (0, a.jsx)("div", {
              className: b.textLabels,
              children: (0, a.jsx)(d.Z, {
                  options: t.map((e) => ({
                      label: (0, a.jsxs)("div", {
                          className: b.textLabel,
                          children: [(0, a.jsx)("div", { className: c[e][n] }), l[e]],
                      }),
                      value: e,
                      className: i()(b.emojiContainer, o === e ? b.selected : null),
                  })),
                  onClick: (e) => O(e.value),
              }),
          })
        : (0, a.jsx)("div", {
              className: i()(b.ratingSelector, b.emojis),
              children: t.map((e) =>
                  (0, a.jsx)(
                      s.P3F,
                      {
                          onClick: () => O(e),
                          "aria-label": e,
                          className: b.emojiContainer,
                          children:
                              "animated-face" === n
                                  ? (0, a.jsx)(r.m, {
                                        className: i()(b.animatedFace, o === e ? b.selected : null),
                                        artboard: c[e][n],
                                    })
                                  : (0, a.jsx)("div", { className: i()(c[e][n], o === e ? b.selected : null) }),
                      },
                      e,
                  ),
              ),
          });
}
