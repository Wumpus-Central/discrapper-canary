t.d(n, { Z: () => c }), t(388685);
var r = t(200651),
    o = t(704215),
    s = t(243778),
    i = t(618460),
    a = t(800869),
    l = t(309945);
function c(e) {
    let { guildId: n } = e,
        [t, c] = (0, s.US)([o.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK], void 0, !1),
        d = (0, i.Z)(n);
    return d.length > 0
        ? (0, r.jsx)(l.Z, {
              guildId: n,
              powerups: d
          })
        : null != t && t === o.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK
          ? (0, r.jsx)(a.Z, { markAsDismissed: c })
          : null;
}
