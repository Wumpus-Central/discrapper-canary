n.d(i, { default: () => C });
var e = n(477900),
    r = n(582128),
    s = n(691540),
    a = n(857250),
    o = n(97483),
    c = n(732159),
    u = n(365258),
    d = n(929120),
    l = n(375708);
function C(t) {
    let { direction: i, affectedGuildIds: n, settingName: C, onClose: p, transitionState: h } = t,
        k = i === u.AI.RESTRICTING,
        { title: m, subtitle: S, confirmText: f, toastContent: x } = (0, u.ae)(k, C),
        I = (0, r.useMemo)(
            () => () => {
                ((0, u.gF)(i, n), (0, s.P0)((0, a.o)(x, o.Ck.SUCCESS)));
            },
            [i, n, x],
        );
    return (0, e.jsx)(c.u, {
        title: m,
        subtitle: S,
        confirmText: f,
        cancelText: l.intl.string(l.t.X1rGEm),
        variant: "primary",
        onConfirm: I,
        onClose: p,
        transitionState: h,
        children: (0, e.jsx)(d.n, { guildIds: n, direction: i }),
    });
}
