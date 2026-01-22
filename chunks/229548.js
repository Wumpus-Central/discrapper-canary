n.d(t, {
    FC: () => s,
    rd: () => o,
    ru: () => c,
    ty: () => a,
});
var r = n(554146),
    l = n(379848),
    i = n(379229);
function a(e) {
    return (0, l.kn)(e ? [r.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
}
function s(e, t) {
    return (0, l.RF)(e && t > 0 ? r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
}
function o(e) {
    return (0, l.kn)(e ? [r.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V1_COACHMARK] : []);
}
function c(e) {
    return (0, l.Wl)(e ? r.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: i.lE });
}
