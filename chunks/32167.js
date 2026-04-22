i.d(t, { default: () => m });
var l = i(627968),
    s = i(64700),
    n = i(732159),
    a = i(691540),
    r = i(857250),
    d = i(97483),
    c = i(365258),
    o = i(929120),
    u = i(985018);
function m(e) {
    let { direction: t, affectedGuildIds: i, settingName: m, onClose: h, transitionState: x } = e,
        I = t === c.AI.RESTRICTING,
        { title: f, subtitle: j, confirmText: v, toastContent: g } = (0, c.ae)(I, m),
        p = (0, s.useMemo)(
            () => () => {
                (0, c.gF)(t, i), (0, a.P0)((0, r.o)(g, d.Ck.SUCCESS));
            },
            [t, i, g],
        );
    return (0, l.jsx)(n.ConfirmModal, {
        title: f,
        subtitle: j,
        confirmText: v,
        cancelText: u.intl.string(u.t.X1rGEm),
        variant: "primary",
        onConfirm: p,
        onClose: h,
        transitionState: x,
        children: (0, l.jsx)(o.n, { guildIds: i, direction: t }),
    });
}
