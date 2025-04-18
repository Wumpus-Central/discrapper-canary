n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(180097);
let l = function (e) {
    let { className: t, imageClassName: i, boostInCooldown: l, useReducedMotion: o } = e;
    return (0, r.jsx)('div', {
        className: s()(a.imageWrapper, t, { [a.cooldown]: l }),
        children: (0, r.jsx)('img', {
            className: s()(a.image, i, { [a.cooldownImage]: l }),
            src: l ? n(971149) : o ? n(908635) : n(83957),
            alt: ''
        })
    });
};
