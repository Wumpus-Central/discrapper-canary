n.d(i, { default: () => c });
var a = n(54381);
n(473749);
var r = n(793030),
    s = n(287734),
    e = n(471253),
    l = n(388032);
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
                    (0, e.NZ)(i), s.default.disconnect(), c();
                },
                variant: "critical-primary",
            },
        ],
    });
};
