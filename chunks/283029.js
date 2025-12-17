n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(977826);
let s = function (e) {
    let { className: t, imageClassName: i, boostInCooldown: s, useReducedMotion: l } = e;
    return (0, r.jsx)("div", {
        className: a()(o.imageWrapper, t, { [o.cooldown]: s }),
        children: (0, r.jsx)("img", {
            className: a()(o.image, i, { [o.cooldownImage]: s }),
            src: s ? n(971149) : l ? n(908635) : n(83957),
            alt: "",
        }),
    });
};
