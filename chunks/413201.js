i.d(t, { default: () => o });
var s = i(627968),
    n = i(64700),
    l = i(158954),
    a = i(397927),
    r = i(253932),
    d = i(365258),
    c = i(929120),
    u = i(985018);
function o(e) {
    let {
            direction: t,
            affectedGuildIds: i,
            settingName: o,
            mappedActivityValue: m,
            onClose: x,
            transitionState: h,
        } = e,
        j = t === d.AI.RESTRICTING,
        { title: f, subtitle: I, confirmText: p, toastContent: b } = (0, d.vz)(j, o),
        g = (0, n.useMemo)(
            () => () => {
                r._Z.updateSetting(m), (0, d.gF)(t, i), (0, a.showToast)((0, a.createToast)(b, a.ToastType.SUCCESS));
            },
            [m, t, i, b],
        );
    return (0, s.jsx)(l.ConfirmModal, {
        title: f,
        subtitle: I,
        confirmText: p,
        cancelText: u.intl.string(u.t.X1rGEm),
        variant: "primary",
        onConfirm: g,
        onClose: x,
        transitionState: h,
        children: (0, s.jsx)(c.n, { guildIds: i, direction: t }),
    });
}
