n.d(i, { default: () => l });
var r = n(477900),
    s = n(189213),
    a = n(834730),
    e = n(375708);
function l(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, r.jsx)(s.Modal, {
        size: "sm",
        transitionState: i,
        onClose: n,
        title: e.intl.string(e.t.WfwodX),
        actions: [{ variant: "primary", onClick: () => n(), text: e.intl.string(e.t.hvVgAZ) }],
        children: (0, r.jsx)(a.E, { variant: "text-md/normal", children: e.intl.string(e.t.I27WXW) }),
    });
}
