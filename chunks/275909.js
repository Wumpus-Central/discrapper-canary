n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(283029),
    a = n(803237);
let o = function (e) {
    let { className: t, hasCooldown: s, isCanceled: o, useReducedMotion: c } = e;
    return (0, i.jsxs)('div', {
        className: l()(a.boostIconContainer, t),
        children: [
            o
                ? (0, i.jsx)('img', {
                      className: l()(a.boostIcon, a.boostIconCanceled),
                      src: n(457026),
                      alt: ''
                  })
                : (0, i.jsx)(r.Z, {
                      className: a.boostIcon,
                      boostInCooldown: s,
                      useReducedMotion: c
                  }),
            !o &&
                s &&
                (0, i.jsx)('img', {
                    className: a.snowflake,
                    src: n(765028),
                    alt: ''
                })
        ]
    });
};
