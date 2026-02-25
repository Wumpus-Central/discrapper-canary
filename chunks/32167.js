i.d(t, { default: () => u });
var s = i(627968),
    n = i(64700),
    a = i(158954),
    l = i(397927),
    r = i(365258),
    d = i(929120),
    c = i(985018);
function u(e) {
    let { direction: t, affectedGuildIds: i, settingName: u, onClose: o, transitionState: m } = e,
        x = t === r.AI.RESTRICTING,
        { title: h, subtitle: j, confirmText: f, toastContent: I } = (0, r.ae)(x, u),
        b = (0, n.useMemo)(
            () => () => {
                (0, r.gF)(t, i), (0, l.showToast)((0, l.createToast)(I, l.ToastType.SUCCESS));
            },
            [t, i, I],
        );
    return (0, s.jsx)(a.ConfirmModal, {
        title: h,
        subtitle: j,
        confirmText: f,
        cancelText: c.intl.string(c.t.X1rGEm),
        variant: "primary",
        onConfirm: b,
        onClose: o,
        transitionState: m,
        children: (0, s.jsx)(d.n, { guildIds: i, direction: t }),
    });
}
