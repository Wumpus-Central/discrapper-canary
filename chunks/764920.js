n.d(t, { Z: () => b });
var a = n(255367),
    l = n(120356),
    i = n.n(l),
    r = n(550851),
    s = n(481060),
    d = n(572539),
    u = n(531578),
    c = n(722771);
let o = {
    [u.aZ.BAD]: {
        face: c.sadFace,
        'animated-face': 'Emoji Neg',
        thumb: c.thumbsDown
    },
    [u.aZ.NEUTRAL]: {
        face: c.neutralFace,
        'animated-face': 'Emoji Mid'
    },
    [u.aZ.GOOD]: {
        face: c.happyFace,
        'animated-face': 'Emoji Happy',
        thumb: c.thumbsUp
    }
};
function b(e) {
    let { ratingOptions: t = u.rN, emojiKind: n = 'face', textLabels: l, selectedRating: b, onChangeRating: E } = e;
    return null != l
        ? (0, a.jsx)('div', {
              className: c.textLabels,
              children: (0, a.jsx)(d.Z, {
                  options: t.map((e) => ({
                      label: (0, a.jsxs)('div', {
                          className: c.textLabel,
                          children: [(0, a.jsx)('div', { className: o[e][n] }), l[e]]
                      }),
                      value: e,
                      className: i()(c.emojiContainer, b === e ? c.selected : null)
                  })),
                  onClick: (e) => E(e.value)
              })
          })
        : (0, a.jsx)('div', {
              className: i()(c.ratingSelector, c.emojis),
              children: t.map((e) =>
                  (0, a.jsx)(
                      s.P3F,
                      {
                          onClick: () => E(e),
                          'aria-label': e,
                          className: c.emojiContainer,
                          children:
                              'animated-face' === n
                                  ? (0, a.jsx)(r.m, {
                                        className: i()(c.animatedFace, b === e ? c.selected : null),
                                        artboard: o[e][n]
                                    })
                                  : (0, a.jsx)('div', { className: i()(o[e][n], b === e ? c.selected : null) })
                      },
                      e
                  )
              )
          });
}
