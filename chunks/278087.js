r.d(t, { default: () => i });
var a = r(627968);
r(64700);
var s = r(43594),
    n = r(391209),
    o = r(280021);
function i(e) {
    let { guildId: t, powerup: r, ...i } = e,
        c = (0, s.D)("GuildPowerupLevelModalExperimentWrapper");
    return "control" === c
        ? (0, a.jsx)(n.A, { guildId: t, powerup: r, ...i })
        : (0, a.jsx)(o.A, { guildId: t, powerup: r, expressiveCta: "refresh_expressive_cta" === c, ...i });
}
