n.d(t, { G: () => d });
var r = n(442837),
    i = n(704215),
    l = n(243778),
    o = n(999382),
    a = n(667105),
    s = n(819640),
    c = n(562511),
    u = n(46140);
function d(e) {
    let t = (0, c.A2)(e),
        n = (0, r.e7)([o.Z], () => o.Z.isOpen()),
        d = (0, r.e7)([s.Z], () => s.Z.hasLayers()),
        h = (0, a.Ws)({ location: u.dr.QUESTS_BAR });
    return (0, l.bf)(t && !n && !d && h ? i.z.GUILD_TAG_AVAILABLE_COACHMARK : null, { cooldownDurationMs: 180000 });
}
