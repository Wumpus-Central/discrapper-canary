n.d(t, { Z: () => b });
var r = n(255367),
    o = n(120356),
    l = n.n(o),
    a = n(481060),
    i = n(572539),
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
function b(e) {
    let { ratingOptions: t = s.rN, emojiKind: n = 'face', textLabels: o, selectedRating: b, onChangeRating: d } = e;
    return null != o
        ? (0, r.jsx)('div', {
              className: c.textLabels,
              children: (0, r.jsx)(i.Z, {
                  options: t.map((e) => ({
                      label: (0, r.jsxs)('div', {
                          className: c.textLabel,
                          children: [(0, r.jsx)('div', { className: u[e][n] }), o[e]]
                      }),
                      value: e,
                      className: l()(c.emojiContainer, b === e ? c.selected : null)
                  })),
                  onClick: (e) => d(e.value)
              })
          })
        : (0, r.jsx)('div', {
              className: l()(c.ratingSelector, c.emojis),
              children: t.map((e) =>
                  (0, r.jsx)(
                      a.P3F,
                      {
                          onClick: () => d(e),
                          'aria-label': e,
                          className: c.emojiContainer,
                          children: (0, r.jsx)('div', { className: l()(u[e][n], b === e ? c.selected : null) })
                      },
                      e
                  )
              )
          });
}
