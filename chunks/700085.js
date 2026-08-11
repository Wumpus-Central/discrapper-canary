n.d(i, { default: () => d });
var s = n(477900),
    r = n(189213),
    e = n(834730),
    a = n(780964),
    l = n(766075),
    o = n(375708);
function d(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, s.jsx)(r.Modal, {
        size: "sm",
        transitionState: i,
        onClose: n,
        title: o.intl.string(o.t.WfwodX),
        actions: [
            {
                variant: "primary",
                onClick: () => {
                    n(), (0, l.openUserSettings)(a.X.ACCOUNT_STANDING_PANEL);
                },
                text: o.intl.string(o.t.hvVgAZ),
            },
        ],
        children: (0, s.jsx)(e.E, { variant: "text-md/normal", children: o.intl.string(o.t.I27WXW) }),
    });
}
