"use strict";
n.d(t, { FC: () => a, W2: () => u, rd: () => o, ru: () => c, ty: () => r, ww: () => d });
var i = n(554146),
    s = n(932001),
    l = n(379229);
function r(e) {
    return (0, s.kn)(e ? [i.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
}
function a(e, t) {
    return (0, s.RF)(e && t > 0 ? i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
}
function o(e) {
    return (0, s.kn)(e ? [i.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V2_COACHMARK] : []);
}
function c(e) {
    return (0, s.Wl)(e ? i.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: l.lE });
}
function d(e, t) {
    return (0, s.D8)(e ? i.M.BOOST_TO_UNLOCK_COACHMARK : null, t, { cooldownDurationMs: l.bW, numTimesToRecur: 5 });
}
function u(e, t) {
    return (0, s.D8)(e ? i.M.EXPIRING_POWERUP_COACHMARK : null, t, { cooldownDurationMs: l.mD });
}
