n.d(t, { G: () => d });
var r = n(442837),
    i = n(704215),
    l = n(243778),
    a = n(999382),
    s = n(667105),
    o = n(819640),
    c = n(562511),
    u = n(46140);
function d(e) {
    let t = (0, c.A2)(e),
        n = (0, r.e7)([a.Z], () => a.Z.isOpen()),
        d = (0, r.e7)([o.Z], () => o.Z.hasLayers()),
        { isQuestBarEmpty: p, hasLoadedQuestBar: f } = (0, s.Ws)({ location: u.dr.QUESTS_BAR });
    return (0, l.bf)(t && !n && !d && p && f ? i.z.GUILD_TAG_AVAILABLE_COACHMARK : null, {
        cooldownDurationMs: 180000,
    });
}
