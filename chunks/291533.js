n.d(t, { G: () => u });
var a = n(442837),
    r = n(704215),
    l = n(243778),
    i = n(999382),
    s = n(659302),
    o = n(819640),
    c = n(562511),
    d = n(324805);
function u(e) {
    let t = (0, c.A2)(e),
        n = (0, a.e7)([i.Z], () => i.Z.isOpen()),
        u = (0, a.e7)([o.Z], () => o.Z.hasLayers()),
        { isQuestBarEmpty: m, hasLoadedQuestBar: p } = (0, s.Ws)({ location: d.dr.QUESTS_BAR });
    return (0, l.bf)(t && !n && !u && m && p ? r.z.GUILD_TAG_AVAILABLE_COACHMARK : null, {
        cooldownDurationMs: 180000,
    });
}
