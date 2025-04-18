n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(283029),
    l = n(60667);
let o = function (e) {
    let { className: t, hasCooldown: i, isCanceled: o, useReducedMotion: c } = e;
    return (0, r.jsxs)('div', {
        className: s()(l.boostIconContainer, t),
        children: [
            o
                ? (0, r.jsx)('img', {
                      className: s()(l.boostIcon, l.boostIconCanceled),
                      src: n(457026),
                      alt: ''
                  })
                : (0, r.jsx)(a.Z, {
                      className: l.boostIcon,
                      boostInCooldown: i,
                      useReducedMotion: c
                  }),
            !o &&
                i &&
                (0, r.jsx)('img', {
                    className: l.snowflake,
                    src: n(765028),
                    alt: ''
                })
        ]
    });
};
