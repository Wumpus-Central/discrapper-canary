i.d(t, { default: () => x });
var l = i(627968),
    s = i(64700),
    n = i(732159),
    a = i(691540),
    r = i(857250),
    c = i(97483),
    d = i(253932),
    o = i(365258),
    u = i(929120),
    m = i(481045),
    h = i(985018);
function x(e) {
    let {
            direction: t,
            affectedGuildIds: i,
            settingName: x,
            mappedActivityValue: j,
            onClose: v,
            transitionState: f,
        } = e,
        g = t === o.AI.RESTRICTING,
        { title: I, subtitle: A, confirmText: p, toastContent: _ } = (0, o.vz)(g, x),
        C = (0, s.useMemo)(
            () => () => {
                d._Z.updateSetting(j), (0, o.gF)(t, i), (0, a.P0)((0, r.o)(_, c.Ck.SUCCESS));
            },
            [j, t, i, _],
        ),
        b = (0, s.useCallback)(() => {
            v(), (0, m.L7)();
        }, [v]);
    return (0, l.jsx)(n.ConfirmModal, {
        title: I,
        subtitle: A,
        confirmText: p,
        cancelText: h.intl.string(h.t.X1rGEm),
        variant: "primary",
        onConfirm: C,
        onClose: v,
        transitionState: f,
        children: (0, l.jsx)(u.n, { guildIds: i, direction: t, onClick: b }),
    });
}
