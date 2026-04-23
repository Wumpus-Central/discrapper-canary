r.d(t, { default: () => i });
var a = r(627968);
r(64700);
var s = r(43594),
    n = r(391209),
    o = r(280021);
function i(e) {
    let { guildId: t, powerup: r, ...i } = e,
        l = (0, s.D)("GuildPowerupLevelModalExperimentWrapper");
    return "control" === l
        ? (0, a.jsx)(n.A, { guildId: t, powerup: r, ...i })
        : (0, a.jsx)(o.A, { guildId: t, powerup: r, expressiveCta: "refresh_expressive_cta" === l, ...i });
}
