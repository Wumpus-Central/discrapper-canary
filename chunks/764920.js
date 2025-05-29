n.d(t, { Z: () => d });
var l = n(255367),
    a = n(120356),
    i = n.n(a),
    r = n(481060),
    s = n(572539),
    u = n(531578),
    c = n(722771);
let o = {
    [u.aZ.BAD]: {
        face: c.sadFace,
        thumb: c.thumbsDown
    },
    [u.aZ.NEUTRAL]: { face: c.neutralFace },
    [u.aZ.GOOD]: {
        face: c.happyFace,
        thumb: c.thumbsUp
    }
};
function d(e) {
    let { ratingOptions: t = u.rN, emojiKind: n = 'face', textLabels: a, selectedRating: d, onChangeRating: b } = e;
    return null != a
        ? (0, l.jsx)('div', {
              className: c.textLabels,
              children: (0, l.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, l.jsxs)('div', {
                          className: c.textLabel,
                          children: [(0, l.jsx)('div', { className: o[e][n] }), a[e]]
                      }),
                      value: e,
                      className: i()(c.emojiContainer, d === e ? c.selected : null)
                  })),
                  onClick: (e) => b(e.value)
              })
          })
        : (0, l.jsx)('div', {
              className: i()(c.ratingSelector, c.emojis),
              children: t.map((e) =>
                  (0, l.jsx)(
                      r.P3F,
                      {
                          onClick: () => b(e),
                          'aria-label': e,
                          className: c.emojiContainer,
                          children: (0, l.jsx)('div', { className: i()(o[e][n], d === e ? c.selected : null) })
                      },
                      e
                  )
              )
          });
}
