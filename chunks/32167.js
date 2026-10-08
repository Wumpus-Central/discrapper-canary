n.d(i, { default: () => d });
var e = n(477900),
    r = n(582128),
    s = n(376357),
    a = n(732159),
    o = n(365258),
    c = n(929120),
    u = n(660183);
function d(t) {
    let { direction: i, affectedGuildIds: n, settingName: d, onClose: l, transitionState: C } = t,
        p = i === o.AI.RESTRICTING,
        { title: h, subtitle: k, confirmText: m, toastContent: x } = (0, o.ae)(p, d),
        S = (0, r.useMemo)(
            () => () => {
                ((0, o.gF)(i, n), (0, s.P0)((0, s.ox)(x, s.Ck.SUCCESS)));
            },
            [i, n, x],
        );
    return (0, e.jsx)(a.u, {
        title: h,
        subtitle: k,
        confirmText: m,
        cancelText: u.intl.string(u.t.X1rGEm),
        variant: "primary",
        onConfirm: S,
        onClose: l,
        transitionState: C,
        children: (0, e.jsx)(c.n, { guildIds: n, direction: i }),
    });
}
