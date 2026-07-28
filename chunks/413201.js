e.d(i, { default: () => h });
var n = e(477900),
    r = e(582128),
    s = e(732159),
    l = e(691540),
    a = e(857250),
    c = e(97483),
    d = e(885386),
    o = e(365258),
    u = e(929120),
    f = e(481045),
    C = e(375708);
function h(t) {
    let {
            direction: i,
            affectedGuildIds: e,
            settingName: h,
            mappedActivityValue: j,
            onClose: x,
            transitionState: p,
        } = t,
        v = i === o.AI.RESTRICTING,
        { title: g, subtitle: k, confirmText: m, toastContent: S } = (0, o.vz)(v, h),
        A = (0, r.useMemo)(
            () => () => {
                d._Z.updateSetting(j), (0, o.gF)(i, e), (0, l.P0)((0, a.o)(S, c.Ck.SUCCESS));
            },
            [j, i, e, S],
        ),
        I = (0, r.useCallback)(() => {
            x(), (0, f.L7)();
        }, [x]);
    return (0, n.jsx)(s.ConfirmModal, {
        title: g,
        subtitle: k,
        confirmText: m,
        cancelText: C.intl.string(C.t.X1rGEm),
        variant: "primary",
        onConfirm: A,
        onClose: x,
        transitionState: p,
        children: (0, n.jsx)(u.n, { guildIds: e, direction: i, onClick: I }),
    });
}
