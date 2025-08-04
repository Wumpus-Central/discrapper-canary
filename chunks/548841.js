e.d(n, { default: () => o });
var i = e(255367);
e(73800);
var r = e(82659),
    l = e(287734),
    a = e(471253),
    u = e(388032);
let o = (t) => {
    let { channel: n, transitionState: e, onClose: o } = t;
    return (0, i.jsx)(r.Modal, {
        transitionState: e,
        title: u.intl.string(u.t.xrYNBA),
        subtitle: u.intl.string(u.t.TP1D8v),
        onClose: o,
        actions: [
            {
                text: u.intl.string(u.t['ETE/oK']),
                onClick: o,
                variant: 'secondary'
            },
            {
                text: u.intl.string(u.t.saZaRU),
                onClick: () => {
                    ((0, a.NZ)(n), l.default.disconnect(), o());
                },
                variant: 'critical-primary'
            }
        ]
    });
};
