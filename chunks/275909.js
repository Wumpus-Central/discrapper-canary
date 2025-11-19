n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(283029),
    s = n(976329);
let l = function (e) {
    let { className: t, hasCooldown: i, isCanceled: l, useReducedMotion: c } = e;
    return (0, r.jsxs)("div", {
        className: a()(s.boostIconContainer, t),
        children: [
            l
                ? (0, r.jsx)("img", {
                      className: a()(s.boostIcon, s.boostIconCanceled),
                      src: n(457026),
                      alt: "",
                  })
                : (0, r.jsx)(o.Z, {
                      className: s.boostIcon,
                      boostInCooldown: i,
                      useReducedMotion: c,
                  }),
            !l &&
                i &&
                (0, r.jsx)("img", {
                    className: s.snowflake,
                    src: n(765028),
                    alt: "",
                }),
        ],
    });
};
