var i = n(477900);
n(582128);
var r = n(87719),
    s = n(831318),
    a = n(792996),
    c = n(101280);
n.d(
    e,
    {},
    {
        default: function (t) {
            let { onClose: e, ...n } = t,
                o = a.intl.format(a.t.AVVUse, {
                    onLearnMore: function () {
                        (e(), (0, r.e)());
                    },
                });
            return (0, i.jsx)(s.A, {
                title: a.intl.string(a.t.SeL3ec),
                subtitle: o,
                graphic: { src: c.A, type: "image" },
                secondaryCTA: a.intl.string(a.t["13/7kX"]),
                onSecondaryClick: e,
                onClose: e,
                ...n,
            });
        },
    },
);
