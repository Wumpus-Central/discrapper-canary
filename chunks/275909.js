n.d(t, { Z: () => o });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(283029),
    l = n(60667);
let o = function (e) {
    let { className: t, hasCooldown: r, isCanceled: o, useReducedMotion: c } = e;
    return (0, i.jsxs)('div', {
        className: s()(l.boostIconContainer, t),
        children: [
            o
                ? (0, i.jsx)('img', {
                      className: s()(l.boostIcon, l.boostIconCanceled),
                      src: n(457026),
                      alt: ''
                  })
                : (0, i.jsx)(a.Z, {
                      className: l.boostIcon,
                      boostInCooldown: r,
                      useReducedMotion: c
                  }),
            !o &&
                r &&
                (0, i.jsx)('img', {
                    className: l.snowflake,
                    src: n(765028),
                    alt: ''
                })
        ]
    });
};
