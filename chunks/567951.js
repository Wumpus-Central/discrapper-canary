a.d(t, { y: () => u });
var s = a(627968);
a(64700);
var n = a(189213),
    l = a(457417),
    r = a(199029),
    i = a(254608),
    _ = a(137508),
    A = a(693227),
    o = a(985018);
let u = (e) => {
    let { transitionState: t, onClose: a } = e,
        { send: u, sending: c, canSend: d } = (0, l.Vw)();
    return (0, s.jsx)(n.Modal, {
        title: o.intl.string(A.default.zgFs8C),
        actions: [{ variant: "primary", text: o.intl.string(o.t.TXNS7S), onClick: u, loading: c, disabled: !d() }],
        transitionState: t,
        onClose: a,
        input: (0, s.jsx)(i.l, {}),
        actionBarInput: (0, s.jsx)(_.t, {}),
        children: (0, s.jsx)(r.o, {}),
    });
};
