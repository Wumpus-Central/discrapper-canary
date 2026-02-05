n.d(t, { y: () => d });
var a = n(627968);
n(64700);
var l = n(158954),
    r = n(457417),
    s = n(199029),
    o = n(254608),
    i = n(137508),
    c = n(520650),
    u = n(985018);
let d = (e) => {
    let { transitionState: t, onClose: n } = e,
        { send: d, sending: _, canSend: h } = (0, r.Vw)();
    return (0, a.jsx)(l.Modal, {
        title: u.intl.string(c.default.zgFs8C),
        actions: [{ variant: "primary", text: u.intl.string(u.t.TXNS7S), onClick: d, loading: _, disabled: !h() }],
        transitionState: t,
        onClose: n,
        input: (0, a.jsx)(o.l, {}),
        actionBarInput: (0, a.jsx)(i.t, {}),
        children: (0, a.jsx)(s.o, {}),
    });
};
