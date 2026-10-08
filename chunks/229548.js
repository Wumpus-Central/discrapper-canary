l.d(t, { FC: () => s, W2: () => a, ru: () => _, ty: () => o, vB: () => A, ww: () => E });
var n = l(554146),
    u = l(131607),
    r = l(379229),
    i = l(628049);
function o(e) {
    return (0, u.kn)(e ? [n.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
}
function s(e, t) {
    return (0, u.RF)(e && t > 0 ? n.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
}
function A(e, t) {
    return (0, u.Cc)(e ? n.M.GAME_SERVER_NEW_GAMES_COACHMARK : null, i.Yh.FEATURED_PRODUCT_ID, t);
}
function _(e) {
    return (0, u.Wl)(e ? n.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: r.lE });
}
function E(e, t, l) {
    return (0, u.D8)(e ? n.M.BOOST_TO_UNLOCK_COACHMARK : null, t, { cooldownDurationMs: r.bW, numTimesToRecur: 5 }, l);
}
function a(e, t) {
    return (0, u.D8)(e ? n.M.EXPIRING_POWERUP_COACHMARK : null, t, { cooldownDurationMs: r.mD });
}
