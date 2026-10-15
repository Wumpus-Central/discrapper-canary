i.d(e, { default: () => f });
var n = i(477900),
    s = i(582128),
    r = i(858899),
    l = i(732159),
    a = i(885386),
    c = i(365258),
    d = i(929120),
    u = i(481045),
    o = i(105292);
function f(t) {
    let {
            direction: e,
            affectedGuildIds: i,
            settingName: f,
            mappedActivityValue: h,
            onClose: j,
            transitionState: x,
        } = t,
        v = e === c.AI.RESTRICTING,
        { title: p, subtitle: C, confirmText: g, toastContent: k } = (0, c.vz)(v, f),
        m = (0, s.useMemo)(
            () => () => {
                (a._Z.updateSetting(h), (0, c.gF)(e, i), (0, r.P0)({ text: k, variant: "success" }));
            },
            [h, e, i, k],
        ),
        A = (0, s.useCallback)(() => {
            (j(), (0, u.L7)());
        }, [j]);
    return (0, n.jsx)(l.u, {
        title: p,
        subtitle: C,
        confirmText: g,
        cancelText: o.intl.string(o.t.X1rGEm),
        variant: "primary",
        onConfirm: m,
        onClose: j,
        transitionState: x,
        children: (0, n.jsx)(d.n, { guildIds: i, direction: e, onClick: A }),
    });
}
