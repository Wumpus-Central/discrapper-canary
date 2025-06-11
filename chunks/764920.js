n.d(t, { Z: () => d });
var l = n(255367),
    a = n(120356),
    i = n.n(a),
    r = n(481060),
    s = n(572539),
    u = n(531578),
    o = n(722771);
let c = {
    [u.aZ.BAD]: {
        face: o.sadFace,
        thumb: o.thumbsDown
    },
    [u.aZ.NEUTRAL]: { face: o.neutralFace },
    [u.aZ.GOOD]: {
        face: o.happyFace,
        thumb: o.thumbsUp
    }
};
function d(e) {
    let { ratingOptions: t = u.rN, emojiKind: n = 'face', textLabels: a, selectedRating: d, onChangeRating: b } = e;
    return null != a
        ? (0, l.jsx)('div', {
              className: o.textLabels,
              children: (0, l.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, l.jsxs)('div', {
                          className: o.textLabel,
                          children: [(0, l.jsx)('div', { className: c[e][n] }), a[e]]
                      }),
                      value: e,
                      className: i()(o.emojiContainer, d === e ? o.selected : null)
                  })),
                  onClick: (e) => b(e.value)
              })
          })
        : (0, l.jsx)('div', {
              className: i()(o.ratingSelector, o.emojis),
              children: t.map((e) =>
                  (0, l.jsx)(
                      r.P3F,
                      {
                          onClick: () => b(e),
                          'aria-label': e,
                          className: o.emojiContainer,
                          children: (0, l.jsx)('div', { className: i()(c[e][n], d === e ? o.selected : null) })
                      },
                      e
                  )
              )
          });
}
