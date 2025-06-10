a.d(t, { Z: () => u });
var n = a(255367),
    s = a(120356),
    o = a.n(s),
    r = a(481060),
    i = a(572539),
    c = a(531578),
    l = a(722771);
let d = {
    [c.aZ.BAD]: {
        face: l.sadFace,
        thumb: l.thumbsDown
    },
    [c.aZ.NEUTRAL]: { face: l.neutralFace },
    [c.aZ.GOOD]: {
        face: l.happyFace,
        thumb: l.thumbsUp
    }
};
function u(e) {
    let { ratingOptions: t = c.rN, emojiKind: a = 'face', textLabels: s, selectedRating: u, onChangeRating: m } = e;
    return null != s
        ? (0, n.jsx)('div', {
              className: l.textLabels,
              children: (0, n.jsx)(i.Z, {
                  options: t.map((e) => ({
                      label: (0, n.jsxs)('div', {
                          className: l.textLabel,
                          children: [(0, n.jsx)('div', { className: d[e][a] }), s[e]]
                      }),
                      value: e,
                      className: o()(l.emojiContainer, u === e ? l.selected : null)
                  })),
                  onClick: (e) => m(e.value)
              })
          })
        : (0, n.jsx)('div', {
              className: o()(l.ratingSelector, l.emojis),
              children: t.map((e) =>
                  (0, n.jsx)(
                      r.P3F,
                      {
                          onClick: () => m(e),
                          'aria-label': e,
                          className: l.emojiContainer,
                          children: (0, n.jsx)('div', { className: o()(d[e][a], u === e ? l.selected : null) })
                      },
                      e
                  )
              )
          });
}
