n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(180097);
let a = function (e) {
    let { className: t, imageClassName: r, boostInCooldown: a, useReducedMotion: o } = e;
    return (0, i.jsx)('div', {
        className: s()(l.imageWrapper, t, { [l.cooldown]: a }),
        children: (0, i.jsx)('img', {
            className: s()(l.image, r, { [l.cooldownImage]: a }),
            src: a ? n(971149) : o ? n(908635) : n(83957),
            alt: ''
        })
    });
};
