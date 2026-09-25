a.d(i, { default: () => d });
var n = a(477900),
    s = a(582128),
    e = a(554146),
    r = a(189213),
    l = a(826673),
    c = a(345942),
    o = a(394107),
    u = a(375708);
function d(t) {
    let { onClose: i, guildId: a, ...d } = t,
        p = s.useCallback(() => {
            ((0, l.Dr)(e.M.EMPTY_GAME_SERVER_TAB), i(), (0, c.u)(a));
        }, [i, a]);
    return (0, n.jsx)(r.a, {
        title: u.intl.string(o.default["6/Uhx+"]),
        subtitle: u.intl.string(o.default.QREY9x),
        size: "sm",
        actions: [
            { text: u.intl.string(u.t["ETE/oC"]), onClick: i, variant: "secondary" },
            { text: u.intl.string(o.default.OfopNQ), onClick: p, variant: "critical-primary" },
        ],
        transitionState: d.transitionState,
        onClose: i,
    });
}
