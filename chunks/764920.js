n.d(t, { Z: () => d });
var r = n(255367),
    o = n(120356),
    a = n.n(o),
    i = n(481060),
    s = n(572539),
    c = n(531578),
    l = n(722771);
let u = {
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
function d(e) {
    let { ratingOptions: t = c.rN, emojiKind: n = 'face', textLabels: o, selectedRating: d, onChangeRating: m } = e;
    return null != o
        ? (0, r.jsx)('div', {
              className: l.textLabels,
              children: (0, r.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, r.jsxs)('div', {
                          className: l.textLabel,
                          children: [(0, r.jsx)('div', { className: u[e][n] }), o[e]]
                      }),
                      value: e,
                      className: a()(l.emojiContainer, d === e ? l.selected : null)
                  })),
                  onClick: (e) => m(e.value)
              })
          })
        : (0, r.jsx)('div', {
              className: a()(l.ratingSelector, l.emojis),
              children: t.map((e) =>
                  (0, r.jsx)(
                      i.P3F,
                      {
                          onClick: () => m(e),
                          'aria-label': e,
                          className: l.emojiContainer,
                          children: (0, r.jsx)('div', { className: a()(u[e][n], d === e ? l.selected : null) })
                      },
                      e
                  )
              )
          });
}
