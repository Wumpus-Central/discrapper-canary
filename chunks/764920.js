n.d(t, { Z: () => d });
var i = n(200651),
    o = n(120356),
    a = n.n(o),
    l = n(481060),
    s = n(572539),
    c = n(531578),
    r = n(722771);
let u = {
    [c.aZ.BAD]: {
        face: r.sadFace,
        thumb: r.thumbsDown
    },
    [c.aZ.NEUTRAL]: { face: r.neutralFace },
    [c.aZ.GOOD]: {
        face: r.happyFace,
        thumb: r.thumbsUp
    }
};
function d(e) {
    let { ratingOptions: t = c.rN, emojiKind: n = 'face', textLabels: o, selectedRating: d, onChangeRating: _ } = e;
    return null != o
        ? (0, i.jsx)('div', {
              className: r.textLabels,
              children: (0, i.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, i.jsxs)('div', {
                          className: r.textLabel,
                          children: [(0, i.jsx)('div', { className: u[e][n] }), o[e]]
                      }),
                      value: e,
                      className: a()(r.emojiContainer, d === e ? r.selected : null)
                  })),
                  onClick: (e) => _(e.value)
              })
          })
        : (0, i.jsx)('div', {
              className: a()(r.ratingSelector, r.emojis),
              children: t.map((e) =>
                  (0, i.jsx)(
                      l.P3F,
                      {
                          onClick: () => _(e),
                          'aria-label': e,
                          className: r.emojiContainer,
                          children: (0, i.jsx)('div', { className: a()(u[e][n], d === e ? r.selected : null) })
                      },
                      e
                  )
              )
          });
}
