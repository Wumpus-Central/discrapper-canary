n.d(t, { G: () => p });
var r = n(442837),
    i = n(704215),
    l = n(243778),
    a = n(999382),
    o = n(667105),
    s = n(819640),
    c = n(562511),
    d = n(46140);
let u = 12633 == n.j ? 180000 : null;
function p(e) {
    let t = (0, c.A2)(e),
        n = (0, r.e7)([a.Z], () => a.Z.isOpen()),
        p = (0, r.e7)([s.Z], () => s.Z.hasLayers()),
        { isQuestBarEmpty: _, hasLoadedQuestBar: f } = (0, o.Ws)({ location: d.dr.QUESTS_BAR });
    return (0, l.bf)(t && !n && !p && _ && f ? i.z.GUILD_TAG_AVAILABLE_COACHMARK : null, { cooldownDurationMs: u });
}
