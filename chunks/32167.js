i.d(e, { default: () => d });
var n = i(477900),
    s = i(582128),
    r = i(858899),
    a = i(732159),
    c = i(365258),
    o = i(929120),
    u = i(105292);
function d(t) {
    let { direction: e, affectedGuildIds: i, settingName: d, onClose: l, transitionState: p } = t,
        h = e === c.AI.RESTRICTING,
        { title: C, subtitle: m, confirmText: x, toastContent: f } = (0, c.ae)(h, d),
        k = (0, s.useMemo)(
            () => () => {
                ((0, c.gF)(e, i), (0, r.P0)({ text: f, variant: "success" }));
            },
            [e, i, f],
        );
    return (0, n.jsx)(a.u, {
        title: C,
        subtitle: m,
        confirmText: x,
        cancelText: u.intl.string(u.t.X1rGEm),
        variant: "primary",
        onConfirm: k,
        onClose: l,
        transitionState: p,
        children: (0, n.jsx)(o.n, { guildIds: i, direction: e }),
    });
}
