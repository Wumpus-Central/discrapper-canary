n.d(t, { Z: () => d });
var o = n(200651),
    a = n(120356),
    i = n.n(a),
    l = n(481060),
    s = n(572539),
    r = n(531578),
    c = n(487265);
let u = {
    [r.aZ.BAD]: {
        face: c.sadFace,
        thumb: c.thumbsDown
    },
    [r.aZ.NEUTRAL]: { face: c.neutralFace },
    [r.aZ.GOOD]: {
        face: c.happyFace,
        thumb: c.thumbsUp
    }
};
function d(e) {
    let { ratingOptions: t = r.rN, emojiKind: n = 'face', textLabels: a, selectedRating: d, onChangeRating: b } = e;
    return null != a
        ? (0, o.jsx)('div', {
              className: c.textLabels,
              children: (0, o.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, o.jsxs)('div', {
                          className: c.textLabel,
                          children: [(0, o.jsx)('div', { className: u[e][n] }), a[e]]
                      }),
                      value: e,
                      className: i()(c.emojiContainer, d === e ? c.selected : null)
                  })),
                  onClick: (e) => b(e.value)
              })
          })
        : (0, o.jsx)('div', {
              className: i()(c.ratingSelector, c.emojis),
              children: t.map((e) =>
                  (0, o.jsx)(
                      l.P3F,
                      {
                          onClick: () => b(e),
                          'aria-label': e,
                          className: c.emojiContainer,
                          children: (0, o.jsx)('div', { className: i()(u[e][n], d === e ? c.selected : null) })
                      },
                      e
                  )
              )
          });
}
