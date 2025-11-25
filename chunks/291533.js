n.d(t, { G: () => _ });
var r = n(442837),
    a = n(704215),
    i = n(243778),
    l = n(999382),
    o = n(659302),
    s = n(819640),
    c = n(562511),
    d = n(324805);
let u = 12633 == n.j ? 180000 : null;
function _(e) {
    let t = (0, c.A2)(e),
        n = (0, r.e7)([l.Z], () => l.Z.isOpen()),
        _ = (0, r.e7)([s.Z], () => s.Z.hasLayers()),
        { isQuestBarEmpty: p, hasLoadedQuestBar: f } = (0, o.Ws)({ location: d.dr.QUESTS_BAR });
    return (0, i.bf)(t && !n && !_ && p && f ? a.z.GUILD_TAG_AVAILABLE_COACHMARK : null, { cooldownDurationMs: u });
}
