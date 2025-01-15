var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(37369);
t.Z = function (e) {
    let { className: t, imageClassName: s, boostInCooldown: l, useReducedMotion: o } = e;
    return (0, i.jsx)('div', {
        className: r()(a.imageWrapper, t, { [a.cooldown]: l }),
        children: (0, i.jsx)('img', {
            className: r()(a.image, s, { [a.cooldownImage]: l }),
            src: l ? n(971149) : o ? n(908635) : n(83957),
            alt: ''
        })
    });
};
