i.d(e, { default: () => u });
var n = i(627968),
    s = i(64700),
    l = i(158954),
    a = i(253932),
    r = i(546351),
    d = i(929120),
    c = i(985018);
function u(t) {
    let {
            direction: e,
            affectedGuildIds: i,
            settingName: u,
            mappedActivityValue: o,
            onClose: m,
            transitionState: x,
        } = t,
        h = e === r.AI.RESTRICTING,
        j = h ? c.intl.string(c.t.eYDA7D) : c.intl.string(c.t["9jYwjo"]),
        f = h ? c.intl.format(c.t["c5/jDc"], { settingName: u }) : c.intl.format(c.t.ajzh8S, { settingName: u }),
        I = h ? c.intl.string(c.t["6uPZV1"]) : c.intl.string(c.t.a9PIyD),
        g = (0, s.useMemo)(
            () => () => {
                a._Z.updateSetting(o), (0, r.gF)(e, i);
            },
            [o, e, i],
        );
    return (0, n.jsx)(l.ConfirmModal, {
        title: j,
        subtitle: f,
        confirmText: I,
        cancelText: c.intl.string(c.t.X1rGEm),
        variant: "primary",
        onConfirm: g,
        onClose: m,
        transitionState: x,
        children: (0, n.jsx)(d.n, { guildIds: i, direction: e }),
    });
}
