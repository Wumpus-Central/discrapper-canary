var c = s(477900);
s(582128);
var e = s(87719),
    n = s(49792),
    r = s(831318),
    a = s(792996);
s.d(
    i,
    {},
    {
        default: function (t) {
            let { premiumUpsellType: i, title: s, body: d, onClose: o, onSecondaryClick: p, ...u } = t,
                l = (0, n.A)(i);
            return (0, c.jsx)(r.A, {
                title: s,
                subtitle: d,
                graphic: l,
                onSecondaryClick: () => {
                    (p(), (0, e.x)(o));
                },
                secondaryCTA: a.intl.string(a.t.PcTCB7),
                onClose: o,
                ...u,
            });
        },
    },
);
