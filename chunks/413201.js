i.d(e, { default: () => h });
var n = i(627968),
    l = i(64700),
    r = i(732159),
    s = i(691540),
    a = i(857250),
    d = i(97483),
    c = i(885386),
    o = i(365258),
    u = i(929120),
    C = i(481045),
    f = i(375708);
function h(t) {
    let {
            direction: e,
            affectedGuildIds: i,
            settingName: h,
            mappedActivityValue: j,
            onClose: x,
            transitionState: p,
        } = t,
        v = e === o.AI.RESTRICTING,
        { title: g, subtitle: k, confirmText: m, toastContent: S } = (0, o.vz)(v, h),
        A = (0, l.useMemo)(
            () => () => {
                c._Z.updateSetting(j), (0, o.gF)(e, i), (0, s.P0)((0, a.o)(S, d.Ck.SUCCESS));
            },
            [j, e, i, S],
        ),
        I = (0, l.useCallback)(() => {
            x(), (0, C.L7)();
        }, [x]);
    return (0, n.jsx)(r.ConfirmModal, {
        title: g,
        subtitle: k,
        confirmText: m,
        cancelText: f.intl.string(f.t.X1rGEm),
        variant: "primary",
        onConfirm: A,
        onClose: x,
        transitionState: p,
        children: (0, n.jsx)(u.n, { guildIds: i, direction: e, onClick: I }),
    });
}
