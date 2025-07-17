n.d(t, { Z: () => b });
var a = n(255367),
    l = n(120356),
    i = n.n(l),
    r = n(550851),
    s = n(481060),
    u = n(572539),
    c = n(531578),
    o = n(722771);
let d = {
    [c.aZ.BAD]: {
        face: o.sadFace,
        'animated-face': 'Emoji Neg',
        thumb: o.thumbsDown
    },
    [c.aZ.NEUTRAL]: {
        face: o.neutralFace,
        'animated-face': 'Emoji Mid'
    },
    [c.aZ.GOOD]: {
        face: o.happyFace,
        'animated-face': 'Emoji Happy',
        thumb: o.thumbsUp
    }
};
function b(e) {
    let { ratingOptions: t = c.rN, emojiKind: n = 'face', textLabels: l, selectedRating: b, onChangeRating: O } = e;
    return null != l
        ? (0, a.jsx)('div', {
              className: o.textLabels,
              children: (0, a.jsx)(u.Z, {
                  options: t.map((e) => ({
                      label: (0, a.jsxs)('div', {
                          className: o.textLabel,
                          children: [(0, a.jsx)('div', { className: d[e][n] }), l[e]]
                      }),
                      value: e,
                      className: i()(o.emojiContainer, b === e ? o.selected : null)
                  })),
                  onClick: (e) => O(e.value)
              })
          })
        : (0, a.jsx)('div', {
              className: i()(o.ratingSelector, o.emojis),
              children: t.map((e) =>
                  (0, a.jsx)(
                      s.P3F,
                      {
                          onClick: () => O(e),
                          'aria-label': e,
                          className: o.emojiContainer,
                          children:
                              'animated-face' === n
                                  ? (0, a.jsx)(r.m, {
                                        className: i()(o.animatedFace, b === e ? o.selected : null),
                                        artboard: d[e][n]
                                    })
                                  : (0, a.jsx)('div', { className: i()(d[e][n], b === e ? o.selected : null) })
                      },
                      e
                  )
              )
          });
}
