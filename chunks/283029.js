n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(660406);
let a = function (e) {
    let { className: t, imageClassName: s, boostInCooldown: a, useReducedMotion: o } = e;
    return (0, i.jsx)('div', {
        className: r()(l.imageWrapper, t, { [l.cooldown]: a }),
        children: (0, i.jsx)('img', {
            className: r()(l.image, s, { [l.cooldownImage]: a }),
            src: a ? n(971149) : o ? n(908635) : n(83957),
            alt: ''
        })
    });
};
