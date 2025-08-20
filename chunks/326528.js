n.d(t, { b: () => f });
var r = n(481060),
    i = n(358085),
    a = n(991346),
    o = n(168308),
    s = n(726985),
    l = n(332325),
    c = n(388032);
function u(e) {
    return [
        {
            id: l.Z.MY_GAMES,
            title: c.intl.string(c.t["5DMgp6"]),
            icon: r.xoD,
            predicate: () => !i.isPlatformEmbedded,
            setting: s.s6.GAMES_MY_GAMES,
        },
        {
            id: l.Z.CLIPS,
            title: c.intl.string(c.t.z2jK6e),
            icon: r.AlX,
            setting: s.s6.GAMES_CLIPS,
        },
        {
            id: l.Z.OVERLAY,
            title: c.intl.string(c.t.bNqkDw),
            icon: r.n6r,
            predicate: () => !e,
            setting: s.s6.GAMES_OVERLAY,
        },
        {
            id: l.Z.ACTIVITY_PRIVACY,
            title: c.intl.string(c.t.Cq98yM),
            icon: r.qOE,
            setting: s.s6.GAMES_ACTIVITY_PRIVACY,
        },
    ];
}
function d(e, t) {
    let n = u(e).filter((e) => null == e.predicate || !e.predicate());
    if (null != t && t.size > 0) {
        let e = n.filter((e) => t.has(e.setting));
        return e.length > 0 ? e : n;
    }
    return n;
}
function f() {
    return d((0, o.bC)(), (0, a.Gj)(s.s6.GAMES));
}
