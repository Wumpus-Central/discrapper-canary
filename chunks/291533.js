n.d(t, { G: () => f });
var r = n(442837),
    i = n(704215),
    a = n(243778),
    o = n(999382),
    s = n(667105),
    l = n(819640),
    c = n(562511),
    u = n(46140);
let d = 180000;
function f(e) {
    let t = (0, c.A2)(e),
        n = (0, r.e7)([o.Z], () => o.Z.isOpen()),
        f = (0, r.e7)([l.Z], () => l.Z.hasLayers()),
        _ = (0, s.Ws)({ location: u.dr.QUESTS_BAR }),
        p = t && !n && !f && _;
    return (0, a.bf)(p ? i.z.GUILD_TAG_AVAILABLE_COACHMARK : null, { cooldownDurationMs: d });
}
