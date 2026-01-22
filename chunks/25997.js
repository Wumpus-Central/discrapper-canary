n.d(i, { default: () => c });
var a = n(627968);
n(64700);
var r = n(158954),
    s = n(956793),
    e = n(849736),
    l = n(985018);
let c = (t) => {
    let { channel: i, transitionState: n, onClose: c } = t;
    return (0, a.jsx)(r.Modal, {
        transitionState: n,
        title: l.intl.string(l.t.xrYNBI),
        subtitle: l.intl.string(l.t.TP1D8l),
        onClose: c,
        actions: [
            {
                text: l.intl.string(l.t["ETE/oC"]),
                onClick: c,
                variant: "secondary",
            },
            {
                text: l.intl.string(l.t.saZaRb),
                onClick: () => {
                    (0, e.OE)(i), s.default.disconnect(), c();
                },
                variant: "critical-primary",
            },
        ],
    });
};
