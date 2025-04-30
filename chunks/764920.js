n.d(t, { Z: () => d });
var r = n(200651),
    l = n(120356),
    o = n.n(l),
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
function d(e) {
    let { ratingOptions: t = s.rN, emojiKind: n = 'face', textLabels: l, selectedRating: d, onChangeRating: _ } = e;
    return null != l
        ? (0, r.jsx)('div', {
              className: c.textLabels,
              children: (0, r.jsx)(i.Z, {
                  options: t.map((e) => ({
                      label: (0, r.jsxs)('div', {
                          className: c.textLabel,
                          children: [(0, r.jsx)('div', { className: u[e][n] }), l[e]]
                      }),
                      value: e,
                      className: o()(c.emojiContainer, d === e ? c.selected : null)
                  })),
                  onClick: (e) => _(e.value)
              })
          })
        : (0, r.jsx)('div', {
              className: o()(c.ratingSelector, c.emojis),
              children: t.map((e) =>
                  (0, r.jsx)(
                      a.P3F,
                      {
                          onClick: () => _(e),
                          'aria-label': e,
                          className: c.emojiContainer,
                          children: (0, r.jsx)('div', { className: o()(u[e][n], d === e ? c.selected : null) })
                      },
                      e
                  )
              )
          });
}
