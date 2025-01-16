var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(283029),
    l = n(197584);
t.Z = function (e) {
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
