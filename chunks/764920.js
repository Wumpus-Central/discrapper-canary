n.d(t, { Z: () => d });
var l = n(200651),
    r = n(120356),
    a = n.n(r),
    o = n(481060),
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
function d(e) {
    let { ratingOptions: t = s.rN, emojiKind: n = 'face', textLabels: r, selectedRating: d, onChangeRating: m } = e;
    return null != r
        ? (0, l.jsx)('div', {
              className: c.textLabels,
              children: (0, l.jsx)(i.Z, {
                  options: t.map((e) => ({
                      label: (0, l.jsxs)('div', {
                          className: c.textLabel,
                          children: [(0, l.jsx)('div', { className: u[e][n] }), r[e]]
                      }),
                      value: e,
                      className: a()(c.emojiContainer, d === e ? c.selected : null)
                  })),
                  onClick: (e) => m(e.value)
              })
          })
        : (0, l.jsx)('div', {
              className: a()(c.ratingSelector, c.emojis),
              children: t.map((e) =>
                  (0, l.jsx)(
                      o.P3F,
                      {
                          onClick: () => m(e),
                          'aria-label': e,
                          className: c.emojiContainer,
                          children: (0, l.jsx)('div', { className: a()(u[e][n], d === e ? c.selected : null) })
                      },
                      e
                  )
              )
          });
}
