"use strict";
n.d(t, { FC: () => r, W2: () => h, rd: () => o, ru: () => d, ty: () => a, vn: () => c, ww: () => u });
var i = n(554146),
    s = n(932001),
    l = n(379229);
function a(e) {
    return (0, s.kn)(e ? [i.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
}
function r(e, t) {
    return (0, s.RF)(e && t > 0 ? i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
}
function o(e) {
    return (0, s.kn)(e ? [i.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V2_COACHMARK] : []);
}
function c(e) {
    return (0, s.kn)(e ? [i.M.GAME_SERVER_PRICING_CHANGE_COACHMARK] : []);
}
function d(e) {
    return (0, s.Wl)(e ? i.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: l.lE });
}
function u(e, t) {
    return (0, s.D8)(e ? i.M.BOOST_TO_UNLOCK_COACHMARK : null, t, { cooldownDurationMs: l.bW, numTimesToRecur: 5 });
}
function h(e, t) {
    return (0, s.D8)(e ? i.M.EXPIRING_POWERUP_COACHMARK : null, t, { cooldownDurationMs: l.mD });
}
