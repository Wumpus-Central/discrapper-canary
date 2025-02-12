n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(337806);
let a = function (e) {
    let { className: t, imageClassName: s, boostInCooldown: a, useReducedMotion: o } = e;
    return (0, i.jsx)('div', {
        className: l()(r.imageWrapper, t, { [r.cooldown]: a }),
        children: (0, i.jsx)('img', {
            className: l()(r.image, s, { [r.cooldownImage]: a }),
            src: a ? n(971149) : o ? n(908635) : n(83957),
            alt: ''
        })
    });
};
