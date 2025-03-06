t.d(n, { Z: () => c }), t(47120);
var r = t(200651),
    i = t(704215),
    o = t(243778),
    s = t(618460),
    a = t(800869),
    l = t(309945);
function c(e) {
    let { guildId: n } = e,
        [t, c] = (0, o.US)([i.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK], void 0, !1),
        d = (0, s.Z)(n);
    return d.length > 0 ? (0, r.jsx)(l.Z, { powerup: d[0] }) : null != t && t === i.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK ? (0, r.jsx)(a.Z, { markAsDismissed: c }) : null;
}
