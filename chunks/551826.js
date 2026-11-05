var i = n(477900);
n(582128);
var r = n(164636),
    l = n(568602),
    s = n(3137),
    a = n(208343);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { isShaking: t, shakeLocation: n, children: o, className: u } = e,
                d = (0, a.A)(n);
            return (0, r.bG)([s.A], () => s.A.isEnabled({ shakeLocation: n }))
                ? (0, i.jsx)(l.b, { isShaking: t, intensity: d, className: u, children: o })
                : o;
        },
    },
);
