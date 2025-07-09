n.d(t, { b: () => d });
var i = n(481060),
    r = n(358085),
    s = n(991346),
    a = n(168308),
    l = n(726985),
    o = n(332325),
    c = n(388032);
function d() {
    let e = (0, a.bC)(),
        t = (0, s.Gj)(l.s6.GAMES);
    let n = [
        {
            id: o.Z.MY_GAMES,
            title: c.intl.string(c.t['5DMgp6']),
            icon: i.xoD,
            predicate: () => !r.isPlatformEmbedded,
            setting: l.s6.GAMES_MY_GAMES
        },
        {
            id: o.Z.CLIPS,
            title: c.intl.string(c.t.z2jK6e),
            icon: i.AlX,
            setting: l.s6.GAMES_CLIPS
        },
        {
            id: o.Z.OVERLAY,
            title: c.intl.string(c.t.bNqkDw),
            icon: i.n6r,
            predicate: () => !e,
            setting: l.s6.GAMES_OVERLAY
        },
        {
            id: o.Z.ACTIVITY_PRIVACY,
            title: c.intl.string(c.t.Cq98yM),
            icon: i.qOE,
            setting: l.s6.GAMES_ACTIVITY_PRIVACY
        }
    ].filter((e) => null == e.predicate || !e.predicate());
    if (null != t && t.size > 0) {
        let e = n.filter((e) => t.has(e.setting));
        return e.length > 0 ? e : n;
    }
    return n;
}
