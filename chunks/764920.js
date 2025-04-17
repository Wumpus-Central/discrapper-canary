n.d(t, { Z: () => d });
var r = n(200651),
    a = n(120356),
    o = n.n(a),
    l = n(481060),
    s = n(572539),
    c = n(531578),
    i = n(722771);
let u = {
    [c.aZ.BAD]: {
        face: i.sadFace,
        thumb: i.thumbsDown
    },
    [c.aZ.NEUTRAL]: { face: i.neutralFace },
    [c.aZ.GOOD]: {
        face: i.happyFace,
        thumb: i.thumbsUp
    }
};
function d(e) {
    let { ratingOptions: t = c.rN, emojiKind: n = 'face', textLabels: a, selectedRating: d, onChangeRating: m } = e;
    return null != a
        ? (0, r.jsx)('div', {
              className: i.textLabels,
              children: (0, r.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, r.jsxs)('div', {
                          className: i.textLabel,
                          children: [(0, r.jsx)('div', { className: u[e][n] }), a[e]]
                      }),
                      value: e,
                      className: o()(i.emojiContainer, d === e ? i.selected : null)
                  })),
                  onClick: (e) => m(e.value)
              })
          })
        : (0, r.jsx)('div', {
              className: o()(i.ratingSelector, i.emojis),
              children: t.map((e) =>
                  (0, r.jsx)(
                      l.P3F,
                      {
                          onClick: () => m(e),
                          'aria-label': e,
                          className: i.emojiContainer,
                          children: (0, r.jsx)('div', { className: o()(u[e][n], d === e ? i.selected : null) })
                      },
                      e
                  )
              )
          });
}
