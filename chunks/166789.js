var r = n(477900);
n(582128);
var e = n(189213),
    a = n(834730),
    s = n(487329),
    d = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { onClose: i, transitionState: n } = t,
                l = (0, s.B1)(s.iy.STREAM_FULL)?.errorCode,
                o = d.intl.formatToPlainString(d.t.ejOT95, { errorCode: l });
            return (0, r.jsx)(e.a, {
                transitionState: n,
                title: d.intl.string(d.t.GzjdO5),
                subtitle: d.intl.string(d.t.VVZDBL),
                onClose: i,
                actions: [{ text: d.intl.string(d.t.BddRzS), variant: "primary", onClick: i }],
                children: (0, r.jsx)(a.E, {
                    variant: "body-md/medium",
                    selectable: !0,
                    color: "text-muted",
                    children: o,
                }),
            });
        },
    },
);
