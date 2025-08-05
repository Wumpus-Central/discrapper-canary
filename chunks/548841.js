n.d(i, { default: () => c });
var a = n(255367);
n(73800);
var r = n(82659),
    s = n(287734),
    e = n(471253),
    l = n(388032);
let c = (t) => {
    let { channel: i, transitionState: n, onClose: c } = t;
    return (0, a.jsx)(r.Modal, {
        transitionState: n,
        title: l.intl.string(l.t.xrYNBA),
        subtitle: l.intl.string(l.t.TP1D8v),
        onClose: c,
        actions: [
            {
                text: l.intl.string(l.t['ETE/oK']),
                onClick: c,
                variant: 'secondary'
            },
            {
                text: l.intl.string(l.t.saZaRU),
                onClick: () => {
                    ((0, e.NZ)(i), s.default.disconnect(), c());
                },
                variant: 'critical-primary'
            }
        ]
    });
};
