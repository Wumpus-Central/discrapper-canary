n.d(e, { default: () => o });
var i = n(627968);
n(64700);
var l = n(158954),
    r = n(956793),
    a = n(849736),
    s = n(985018);
let o = (t) => {
    let { channel: e, transitionState: n, onClose: o } = t;
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        title: s.intl.string(s.t.xrYNBI),
        subtitle: s.intl.string(s.t.TP1D8l),
        onClose: o,
        actions: [
            { text: s.intl.string(s.t["ETE/oC"]), onClick: o, variant: "secondary" },
            {
                text: s.intl.string(s.t.saZaRb),
                onClick: () => {
                    (0, a.OE)(e), r.default.disconnect(), o();
                },
                variant: "critical-primary",
            },
        ],
    });
};
