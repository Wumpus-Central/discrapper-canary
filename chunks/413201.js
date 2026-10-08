e.d(i, { default: () => f });
var n = e(477900),
    s = e(582128),
    r = e(376357),
    l = e(732159),
    a = e(885386),
    c = e(365258),
    d = e(929120),
    o = e(481045),
    u = e(660183);
function f(t) {
    let {
            direction: i,
            affectedGuildIds: e,
            settingName: f,
            mappedActivityValue: C,
            onClose: h,
            transitionState: j,
        } = t,
        x = i === c.AI.RESTRICTING,
        { title: p, subtitle: v, confirmText: g, toastContent: k } = (0, c.vz)(x, f),
        S = (0, s.useMemo)(
            () => () => {
                (a._Z.updateSetting(C), (0, c.gF)(i, e), (0, r.P0)((0, r.ox)(k, r.Ck.SUCCESS)));
            },
            [C, i, e, k],
        ),
        m = (0, s.useCallback)(() => {
            (h(), (0, o.L7)());
        }, [h]);
    return (0, n.jsx)(l.u, {
        title: p,
        subtitle: v,
        confirmText: g,
        cancelText: u.intl.string(u.t.X1rGEm),
        variant: "primary",
        onConfirm: S,
        onClose: h,
        transitionState: j,
        children: (0, n.jsx)(d.n, { guildIds: e, direction: i, onClick: m }),
    });
}
