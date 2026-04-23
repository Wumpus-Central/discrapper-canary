a.d(i, { default: () => d });
var n = a(627968),
    s = a(64700),
    e = a(189213),
    r = a(554146),
    l = a(826673),
    o = a(345942),
    c = a(576709),
    u = a(985018);
function d(t) {
    let { onClose: i, guildId: a, ...d } = t,
        p = s.useCallback(() => {
            (0, l.Dr)(r.M.EMPTY_GAME_SERVER_TAB), i(), (0, o.u)(a);
        }, [i, a]);
    return (0, n.jsx)(e.Modal, {
        title: u.intl.string(c.default["6/Uhx+"]),
        subtitle: u.intl.string(c.default.QREY9x),
        size: "sm",
        actions: [
            { text: u.intl.string(u.t["ETE/oC"]), onClick: i, variant: "secondary" },
            { text: u.intl.string(c.default.OfopNQ), onClick: p, variant: "critical-primary" },
        ],
        transitionState: d.transitionState,
        onClose: i,
    });
}
