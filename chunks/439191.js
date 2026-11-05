var s = t(477900);
t(582128);
var e = t(855986),
    r = t(477782),
    c = t(366605),
    a = t(816662),
    d = t(543465),
    o = t(792996);
t.d(
    n,
    {},
    {
        A: function (i) {
            let n = (0, e.bG)([d.Ay], () => d.Ay.isMessagesFavorite(i.id));
            if (!i.isPrivate()) return null;
            let t = n ? o.intl.string(o.t.vDYmad) : o.intl.string(o.t["uKw3A+"]);
            return (0, s.jsx)(r.Dr, {
                id: "pin-dm",
                label: t,
                iconLeft: c.PinIcon,
                leadingAccessory: { type: "icon", icon: c.PinIcon },
                action: () => (0, a.xl)(i.id, !n),
            });
        },
    },
);
