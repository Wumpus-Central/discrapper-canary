n.d(t, { Z: () => u });
var o = n(200651),
    a = n(120356),
    i = n.n(a),
    l = n(481060),
    s = n(572539),
    c = n(531578),
    r = n(24581);
let d = {
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
function u(e) {
    let { ratingOptions: t = c.rN, emojiKind: n = 'face', textLabels: a, selectedRating: u, onChangeRating: _ } = e;
    return null != a
        ? (0, o.jsx)('div', {
              className: r.textLabels,
              children: (0, o.jsx)(s.Z, {
                  options: t.map((e) => ({
                      label: (0, o.jsxs)('div', {
                          className: r.textLabel,
                          children: [(0, o.jsx)('div', { className: d[e][n] }), a[e]]
                      }),
                      value: e,
                      className: i()(r.emojiContainer, u === e ? r.selected : null)
                  })),
                  onClick: (e) => _(e.value)
              })
          })
        : (0, o.jsx)('div', {
              className: i()(r.ratingSelector, r.emojis),
              children: t.map((e) =>
                  (0, o.jsx)(
                      l.P3F,
                      {
                          onClick: () => _(e),
                          'aria-label': e,
                          className: r.emojiContainer,
                          children: (0, o.jsx)('div', { className: i()(d[e][n], u === e ? r.selected : null) })
                      },
                      e
                  )
              )
          });
}
