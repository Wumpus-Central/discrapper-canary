i.d(t, { default: () => m });
var s = i(627968),
    l = i(64700),
    n = i(158954),
    a = i(397927),
    r = i(253932),
    c = i(365258),
    d = i(929120),
    o = i(481045),
    u = i(985018);
function m(e) {
    let {
            direction: t,
            affectedGuildIds: i,
            settingName: m,
            mappedActivityValue: x,
            onClose: h,
            transitionState: j,
        } = e,
        T = t === c.AI.RESTRICTING,
        { title: I, subtitle: f, confirmText: v, toastContent: g } = (0, c.vz)(T, m),
        _ = (0, l.useMemo)(
            () => () => {
                r._Z.updateSetting(x), (0, c.gF)(t, i), (0, a.showToast)((0, a.createToast)(g, a.ToastType.SUCCESS));
            },
            [x, t, i, g],
        ),
        b = (0, l.useCallback)(() => {
            h(), (0, o.L7)();
        }, [h]);
    return (0, s.jsx)(n.ConfirmModal, {
        title: I,
        subtitle: f,
        confirmText: v,
        cancelText: u.intl.string(u.t.X1rGEm),
        variant: "primary",
        onConfirm: _,
        onClose: h,
        transitionState: j,
        children: (0, s.jsx)(d.n, { guildIds: i, direction: t, onClick: b }),
    });
}
