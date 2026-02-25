i.d(t, { default: () => u });
var s = i(627968),
    n = i(64700),
    l = i(158954),
    a = i(253932),
    r = i(365258),
    d = i(929120),
    c = i(985018);
function u(e) {
    let {
            direction: t,
            affectedGuildIds: i,
            settingName: u,
            mappedActivityValue: m,
            onClose: o,
            transitionState: x,
        } = e,
        h = t === r.AI.RESTRICTING,
        { title: j, subtitle: f, confirmText: I } = (0, r.vz)(h, u),
        b = (0, n.useMemo)(
            () => () => {
                a._Z.updateSetting(m), (0, r.gF)(t, i);
            },
            [m, t, i],
        );
    return (0, s.jsx)(l.ConfirmModal, {
        title: j,
        subtitle: f,
        confirmText: I,
        cancelText: c.intl.string(c.t.X1rGEm),
        variant: "primary",
        onConfirm: b,
        onClose: o,
        transitionState: x,
        children: (0, s.jsx)(d.n, { guildIds: i, direction: t }),
    });
}
