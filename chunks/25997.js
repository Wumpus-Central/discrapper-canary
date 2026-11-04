var a = n(477900);
n(582128);
var r = n(189213),
    s = n(597798),
    c = n(849736),
    e = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { channel: i, transitionState: n, onClose: l } = t;
            return (0, a.jsx)(r.a, {
                transitionState: n,
                title: e.intl.string(e.t.xrYNBI),
                subtitle: e.intl.string(e.t.TP1D8l),
                onClose: l,
                actions: [
                    { text: e.intl.string(e.t["ETE/oC"]), onClick: l, variant: "secondary" },
                    {
                        text: e.intl.string(e.t.saZaRb),
                        onClick: function () {
                            ((0, c.OE)(i), s.default.disconnect(), l());
                        },
                        variant: "critical-primary",
                    },
                ],
            });
        },
    },
);
