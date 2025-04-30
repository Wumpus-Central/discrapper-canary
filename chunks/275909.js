n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(283029),
    a = n(60667);
let o = function (e) {
    let { className: t, hasCooldown: r, isCanceled: o, useReducedMotion: c } = e;
    return (0, i.jsxs)('div', {
        className: s()(a.boostIconContainer, t),
        children: [
            o
                ? (0, i.jsx)('img', {
                      className: s()(a.boostIcon, a.boostIconCanceled),
                      src: n(457026),
                      alt: ''
                  })
                : (0, i.jsx)(l.Z, {
                      className: a.boostIcon,
                      boostInCooldown: r,
                      useReducedMotion: c
                  }),
            !o &&
                r &&
                (0, i.jsx)('img', {
                    className: a.snowflake,
                    src: n(765028),
                    alt: ''
                })
        ]
    });
};
