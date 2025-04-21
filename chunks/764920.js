n.d(t, { Z: () => d });
var o = n(200651),
    i = n(120356),
    a = n.n(i),
    r = n(481060),
    l = n(572539),
    s = n(531578),
    c = n(722771);
let u = {
    [s.aZ.BAD]: {
        face: c.sadFace,
        thumb: c.thumbsDown
    },
    [s.aZ.NEUTRAL]: { face: c.neutralFace },
    [s.aZ.GOOD]: {
        face: c.happyFace,
        thumb: c.thumbsUp
    }
};
function d(e) {
    let { ratingOptions: t = s.rN, emojiKind: n = 'face', textLabels: i, selectedRating: d, onChangeRating: b } = e;
    return null != i
        ? (0, o.jsx)('div', {
              className: c.textLabels,
              children: (0, o.jsx)(l.Z, {
                  options: t.map((e) => ({
                      label: (0, o.jsxs)('div', {
                          className: c.textLabel,
                          children: [(0, o.jsx)('div', { className: u[e][n] }), i[e]]
                      }),
                      value: e,
                      className: a()(c.emojiContainer, d === e ? c.selected : null)
                  })),
                  onClick: (e) => b(e.value)
              })
          })
        : (0, o.jsx)('div', {
              className: a()(c.ratingSelector, c.emojis),
              children: t.map((e) =>
                  (0, o.jsx)(
                      r.P3F,
                      {
                          onClick: () => b(e),
                          'aria-label': e,
                          className: c.emojiContainer,
                          children: (0, o.jsx)('div', { className: a()(u[e][n], d === e ? c.selected : null) })
                      },
                      e
                  )
              )
          });
}
