n.d(t, { b: () => d });
var i = n(481060),
    s = n(358085),
    l = n(991346),
    r = n(168308),
    a = n(726985),
    o = n(332325),
    c = n(388032);
function d() {
    return (function (e, t) {
        let n = [
            {
                id: o.Z.MY_GAMES,
                title: c.intl.string(c.t['5DMgp6']),
                icon: i.xoD,
                predicate: () => !s.isPlatformEmbedded,
                setting: a.s6.GAMES_MY_GAMES
            },
            {
                id: o.Z.CLIPS,
                title: c.intl.string(c.t.z2jK6e),
                icon: i.AlX,
                setting: a.s6.GAMES_CLIPS
            },
            {
                id: o.Z.OVERLAY,
                title: c.intl.string(c.t.bNqkDw),
                icon: i.n6r,
                predicate: () => !e,
                setting: a.s6.GAMES_OVERLAY
            },
            {
                id: o.Z.ACTIVITY_PRIVACY,
                title: c.intl.string(c.t.Cq98yM),
                icon: i.qOE,
                setting: a.s6.GAMES_ACTIVITY_PRIVACY
            }
        ].filter((e) => null == e.predicate || !e.predicate());
        if (null != t && t.size > 0) {
            let e = n.filter((e) => t.has(e.setting));
            return e.length > 0 ? e : n;
        }
        return n;
    })((0, r.bC)(), (0, l.Gj)(a.s6.GAMES));
}
