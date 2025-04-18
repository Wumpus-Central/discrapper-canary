n.d(t, { Z: () => d });
var r = n(200651),
    a = n(120356),
    o = n.n(a),
    l = n(481060),
    s = n(572539),
    i = n(531578),
    c = n(722771);
let u = {
    [i.aZ.BAD]: {
        face: c.sadFace,
        thumb: c.thumbsDown
    },
    [i.aZ.NEUTRAL]: { face: c.neutralFace },
    [i.aZ.GOOD]: {
        face: c.happyFace,
        thumb: c.thumbsUp
    }
};
function d(e) {
    let { ratingOptions: t = i.rN, emojiKind: n = 'face', textLabels: a, selectedRating: d, onChangeRating: _ } = e;
    return null != a
        ? (0, r.jsx)('div', {
              className: c.textLabels,
              children: (0, r.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, r.jsxs)('div', {
                          className: c.textLabel,
                          children: [(0, r.jsx)('div', { className: u[e][n] }), a[e]]
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
                      l.P3F,
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
