e.d(i, { default: () => h });
var n = e(477900),
    s = e(582128),
    r = e(691540),
    l = e(857250),
    a = e(97483),
    c = e(732159),
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
        { title: g, subtitle: k, confirmText: S, toastContent: m } = (0, o.vz)(v, h),
        A = (0, s.useMemo)(
            () => () => {
                (d._Z.updateSetting(j), (0, o.gF)(i, e), (0, r.P0)((0, l.o)(m, a.Ck.SUCCESS)));
            },
            [j, i, e, m],
        ),
        I = (0, s.useCallback)(() => {
            (x(), (0, f.L7)());
        }, [x]);
    return (0, n.jsx)(c.u, {
        title: g,
        subtitle: k,
        confirmText: S,
        cancelText: C.intl.string(C.t.X1rGEm),
        variant: "primary",
        onConfirm: A,
        onClose: x,
        transitionState: p,
        children: (0, n.jsx)(u.n, { guildIds: e, direction: i, onClick: I }),
    });
}
