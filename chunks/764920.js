n.d(t, { Z: () => d });
var a = n(200651),
    l = n(120356),
    r = n.n(l),
    s = n(481060),
    o = n(572539),
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
    let { ratingOptions: t = i.rN, emojiKind: n = 'face', textLabels: l, selectedRating: d, onChangeRating: _ } = e;
    return null != l
        ? (0, a.jsx)('div', {
              className: c.textLabels,
              children: (0, a.jsx)(o.Z, {
                  options: t.map((e) => ({
                      label: (0, a.jsxs)('div', {
                          className: c.textLabel,
                          children: [(0, a.jsx)('div', { className: u[e][n] }), l[e]]
                      }),
                      value: e,
                      className: r()(c.emojiContainer, d === e ? c.selected : null)
                  })),
                  onClick: (e) => _(e.value)
              })
          })
        : (0, a.jsx)('div', {
              className: r()(c.ratingSelector, c.emojis),
              children: t.map((e) =>
                  (0, a.jsx)(
                      s.P3F,
                      {
                          onClick: () => _(e),
                          'aria-label': e,
                          className: c.emojiContainer,
                          children: (0, a.jsx)('div', { className: r()(u[e][n], d === e ? c.selected : null) })
                      },
                      e
                  )
              )
          });
}
