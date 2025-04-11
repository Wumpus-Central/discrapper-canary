n.d(t, { Z: () => d });
var o = n(200651),
    a = n(120356),
    i = n.n(a),
    s = n(481060),
    l = n(572539),
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
    let { ratingOptions: t = c.rN, emojiKind: n = 'face', textLabels: a, selectedRating: d, onChangeRating: _ } = e;
    return null != a
        ? (0, o.jsx)('div', {
              className: r.textLabels,
              children: (0, o.jsx)(l.Z, {
                  options: t.map((e) => ({
                      label: (0, o.jsxs)('div', {
                          className: r.textLabel,
                          children: [(0, o.jsx)('div', { className: u[e][n] }), a[e]]
                      }),
                      value: e,
                      className: i()(r.emojiContainer, d === e ? r.selected : null)
                  })),
                  onClick: (e) => _(e.value)
              })
          })
        : (0, o.jsx)('div', {
              className: i()(r.ratingSelector, r.emojis),
              children: t.map((e) =>
                  (0, o.jsx)(
                      s.P3F,
                      {
                          onClick: () => _(e),
                          'aria-label': e,
                          className: r.emojiContainer,
                          children: (0, o.jsx)('div', { className: i()(u[e][n], d === e ? r.selected : null) })
                      },
                      e
                  )
              )
          });
}
