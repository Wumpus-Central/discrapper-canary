i.d(e, { default: () => c });
var s = i(627968),
    n = i(64700),
    l = i(158954),
    a = i(546351),
    r = i(929120),
    d = i(985018);
function c(t) {
    let { direction: e, affectedGuildIds: i, settingName: c, onClose: u, transitionState: o } = t,
        m = e === a.AI.RESTRICTING,
        x = m ? d.intl.string(d.t.jRx1Aa) : d.intl.string(d.t.S0Y0bh),
        h = m ? d.intl.format(d.t.Fs96LO, { settingName: c }) : d.intl.format(d.t.GcoYX8, { settingName: c }),
        f = m ? d.intl.string(d.t["4DM5HJ"]) : d.intl.string(d.t.WRrDtI),
        j = (0, n.useMemo)(
            () => () => {
                (0, a.gF)(e, i);
            },
            [e, i],
        );
    return (0, s.jsx)(l.ConfirmModal, {
        title: x,
        subtitle: h,
        confirmText: f,
        cancelText: d.intl.string(d.t.X1rGEm),
        variant: "primary",
        onConfirm: j,
        onClose: u,
        transitionState: o,
        children: (0, s.jsx)(r.n, { guildIds: i, direction: e }),
    });
}
