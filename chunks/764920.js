n.d(t, { Z: () => d });
var a = n(255367),
    l = n(120356),
    i = n.n(l),
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
    let { ratingOptions: t = u.rN, emojiKind: n = 'face', textLabels: l, selectedRating: d, onChangeRating: b } = e;
    return null != l
        ? (0, a.jsx)('div', {
              className: c.textLabels,
              children: (0, a.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, a.jsxs)('div', {
                          className: c.textLabel,
                          children: [(0, a.jsx)('div', { className: o[e][n] }), l[e]]
                      }),
                      value: e,
                      className: i()(c.emojiContainer, d === e ? c.selected : null)
                  })),
                  onClick: (e) => b(e.value)
              })
          })
        : (0, a.jsx)('div', {
              className: i()(c.ratingSelector, c.emojis),
              children: t.map((e) =>
                  (0, a.jsx)(
                      r.P3F,
                      {
                          onClick: () => b(e),
                          'aria-label': e,
                          className: c.emojiContainer,
                          children: (0, a.jsx)('div', { className: i()(o[e][n], d === e ? c.selected : null) })
                      },
                      e
                  )
              )
          });
}
