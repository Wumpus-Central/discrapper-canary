n.d(t, { Z: () => b });
var a = n(54381),
    l = n(120356),
    i = n.n(l),
    r = n(47985),
    o = n(481060),
    s = n(572539),
    u = n(531578),
    d = n(875169);
let c = {
    [u.aZ.BAD]: {
        face: d.sadFace,
        "animated-face": "Emoji Neg",
        thumb: d.thumbsDown,
    },
    [u.aZ.NEUTRAL]: {
        face: d.neutralFace,
        "animated-face": "Emoji Mid",
    },
    [u.aZ.GOOD]: {
        face: d.happyFace,
        "animated-face": "Emoji Happy",
        thumb: d.thumbsUp,
    },
};
function b(e) {
    let { ratingOptions: t = u.rN, emojiKind: n = "face", textLabels: l, selectedRating: b, onChangeRating: f } = e;
    return null != l
        ? (0, a.jsx)("div", {
              className: d.textLabels,
              children: (0, a.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, a.jsxs)("div", {
                          className: d.textLabel,
                          children: [(0, a.jsx)("div", { className: c[e][n] }), l[e]],
                      }),
                      value: e,
                      className: i()(d.emojiContainer, b === e ? d.selected : null),
                  })),
                  onClick: (e) => f(e.value),
              }),
          })
        : (0, a.jsx)("div", {
              className: i()(d.ratingSelector, d.emojis),
              children: t.map((e) =>
                  (0, a.jsx)(
                      o.P3F,
                      {
                          onClick: () => f(e),
                          "aria-label": e,
                          className: d.emojiContainer,
                          children:
                              "animated-face" === n
                                  ? (0, a.jsx)(r.m, {
                                        className: i()(d.animatedFace, b === e ? d.selected : null),
                                        artboard: c[e][n],
                                    })
                                  : (0, a.jsx)("div", { className: i()(c[e][n], b === e ? d.selected : null) }),
                      },
                      e,
                  ),
              ),
          });
}
