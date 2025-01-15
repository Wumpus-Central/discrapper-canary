var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(283029),
    l = n(197584);
t.Z = function (e) {
    let { className: t, hasCooldown: s, isCanceled: o, useReducedMotion: c } = e;
    return (0, i.jsxs)('div', {
        className: r()(l.boostIconContainer, t),
        children: [
            o
                ? (0, i.jsx)('img', {
                      className: r()(l.boostIcon, l.boostIconCanceled),
                      src: n(457026),
                      alt: ''
                  })
                : (0, i.jsx)(a.Z, {
                      className: l.boostIcon,
                      boostInCooldown: s,
                      useReducedMotion: c
                  }),
            !o &&
                s &&
                (0, i.jsx)('img', {
                    className: l.snowflake,
                    src: n(765028),
                    alt: ''
                })
        ]
    });
};
