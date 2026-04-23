n.d(t, { FC: () => r, W2: () => h, rd: () => o, ru: () => c, ty: () => a, vn: () => d, ww: () => u });
var i = n(554146),
    l = n(932001),
    s = n(379229);
function a(e) {
    return (0, l.kn)(e ? [i.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
}
function r(e, t) {
    return (0, l.RF)(e && t > 0 ? i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
}
function o(e) {
    return (0, l.kn)(e ? [i.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK] : []);
}
function d(e) {
    return (0, l.kn)(e ? [i.M.GAME_SERVER_PRICING_CHANGE_COACHMARK] : []);
}
function c(e) {
    return (0, l.Wl)(e ? i.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: s.lE });
}
function u(e, t) {
    return (0, l.D8)(e ? i.M.BOOST_TO_UNLOCK_COACHMARK : null, t, { cooldownDurationMs: s.bW, numTimesToRecur: 5 });
}
function h(e, t) {
    return (0, l.D8)(e ? i.M.EXPIRING_POWERUP_COACHMARK : null, t, { cooldownDurationMs: s.mD });
}
