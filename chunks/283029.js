n.d(t, { Z: () => l });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(180097);
let l = function (e) {
    let { className: t, imageClassName: r, boostInCooldown: l, useReducedMotion: o } = e;
    return (0, i.jsx)('div', {
        className: s()(a.imageWrapper, t, { [a.cooldown]: l }),
        children: (0, i.jsx)('img', {
            className: s()(a.image, r, { [a.cooldownImage]: l }),
            src: l ? n(971149) : o ? n(908635) : n(83957),
            alt: ''
        })
    });
};
