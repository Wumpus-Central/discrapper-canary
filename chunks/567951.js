r.d(t, {
    y: () => d,
});
var n = r(627968);
r(64700);
var a = r(158954),
    l = r(457417),
    o = r(199029),
    s = r(254608),
    c = r(137508),
    i = r(520650),
    u = r(985018);
let d = (e) => {
    let { transitionState: t, onClose: r } = e,
        { send: d, sending: f, canSend: b } = (0, l.Vw)();
    return (0, n.jsx)(a.Modal, {
        title: u.intl.string(i.default.zgFs8C),
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t.TXNS7S),
                onClick: d,
                loading: f,
                disabled: !b(),
            },
        ],
        transitionState: t,
        onClose: r,
        input: (0, n.jsx)(s.l, {}),
        actionBarInput: (0, n.jsx)(c.t, {}),
        children: (0, n.jsx)(o.o, {}),
    });
};
