n.d(i, { default: () => l });
var a = n(477900);
n(582128);
var r = n(189213),
    s = n(730852),
    e = n(849736),
    c = n(375708);
let l = function (t) {
    let { channel: i, transitionState: n, onClose: l } = t;
    return (0, a.jsx)(r.a, {
        transitionState: n,
        title: c.intl.string(c.t.xrYNBI),
        subtitle: c.intl.string(c.t.TP1D8l),
        onClose: l,
        actions: [
            { text: c.intl.string(c.t["ETE/oC"]), onClick: l, variant: "secondary" },
            {
                text: c.intl.string(c.t.saZaRb),
                onClick: function () {
                    ((0, e.OE)(i), s.default.disconnect(), l());
                },
                variant: "critical-primary",
            },
        ],
    });
};
