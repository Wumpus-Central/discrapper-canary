a.d(t, { Z: () => u });
var n = a(255367),
    i = a(120356),
    s = a.n(i),
    o = a(550851),
    c = a(481060),
    r = a(572539),
    l = a(531578),
    d = a(722771);
let m = {
    [l.aZ.BAD]: {
        face: d.sadFace,
        "animated-face": "Emoji Neg",
        thumb: d.thumbsDown,
    },
    [l.aZ.NEUTRAL]: {
        face: d.neutralFace,
        "animated-face": "Emoji Mid",
    },
    [l.aZ.GOOD]: {
        face: d.happyFace,
        "animated-face": "Emoji Happy",
        thumb: d.thumbsUp,
    },
};
function u(e) {
    let { ratingOptions: t = l.rN, emojiKind: a = "face", textLabels: i, selectedRating: u, onChangeRating: _ } = e;
    return null != i
        ? (0, n.jsx)("div", {
              className: d.textLabels,
              children: (0, n.jsx)(r.Z, {
                  options: t.map((e) => ({
                      label: (0, n.jsxs)("div", {
                          className: d.textLabel,
                          children: [(0, n.jsx)("div", { className: m[e][a] }), i[e]],
                      }),
                      value: e,
                      className: s()(d.emojiContainer, u === e ? d.selected : null),
                  })),
                  onClick: (e) => _(e.value),
              }),
          })
        : (0, n.jsx)("div", {
              className: s()(d.ratingSelector, d.emojis),
              children: t.map((e) =>
                  (0, n.jsx)(
                      c.P3F,
                      {
                          onClick: () => _(e),
                          "aria-label": e,
                          className: d.emojiContainer,
                          children:
                              "animated-face" === a
                                  ? (0, n.jsx)(o.m, {
                                        className: s()(d.animatedFace, u === e ? d.selected : null),
                                        artboard: m[e][a],
                                    })
                                  : (0, n.jsx)("div", { className: s()(m[e][a], u === e ? d.selected : null) }),
                      },
                      e,
                  ),
              ),
          });
}
