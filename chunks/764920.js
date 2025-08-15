a.d(t, { Z: () => _ });
var n = a(255367),
    i = a(120356),
    o = a.n(i),
    r = a(550851),
    c = a(481060),
    l = a(572539),
    s = a(531578),
    d = a(790444);
let m = {
    [s.aZ.BAD]: {
        face: d.sadFace,
        "animated-face": "Emoji Neg",
        thumb: d.thumbsDown,
    },
    [s.aZ.NEUTRAL]: {
        face: d.neutralFace,
        "animated-face": "Emoji Mid",
    },
    [s.aZ.GOOD]: {
        face: d.happyFace,
        "animated-face": "Emoji Happy",
        thumb: d.thumbsUp,
    },
};
function _(e) {
    let { ratingOptions: t = s.rN, emojiKind: a = "face", textLabels: i, selectedRating: _, onChangeRating: u } = e;
    return null != i
        ? (0, n.jsx)("div", {
              className: d.textLabels,
              children: (0, n.jsx)(l.Z, {
                  options: t.map((e) => ({
                      label: (0, n.jsxs)("div", {
                          className: d.textLabel,
                          children: [(0, n.jsx)("div", { className: m[e][a] }), i[e]],
                      }),
                      value: e,
                      className: o()(d.emojiContainer, _ === e ? d.selected : null),
                  })),
                  onClick: (e) => u(e.value),
              }),
          })
        : (0, n.jsx)("div", {
              className: o()(d.ratingSelector, d.emojis),
              children: t.map((e) =>
                  (0, n.jsx)(
                      c.P3F,
                      {
                          onClick: () => u(e),
                          "aria-label": e,
                          className: d.emojiContainer,
                          children:
                              "animated-face" === a
                                  ? (0, n.jsx)(r.m, {
                                        className: o()(d.animatedFace, _ === e ? d.selected : null),
                                        artboard: m[e][a],
                                    })
                                  : (0, n.jsx)("div", { className: o()(m[e][a], _ === e ? d.selected : null) }),
                      },
                      e,
                  ),
              ),
          });
}
