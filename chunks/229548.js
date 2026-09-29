n.d(t, { FC: () => s, W2: () => a, ru: () => _, ty: () => o, vB: () => A, ww: () => E });
var l = n(554146),
    u = n(131607),
    r = n(379229),
    i = n(628049);
function o(e) {
    return (0, u.kn)(e ? [l.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
}
function s(e, t) {
    return (0, u.RF)(e && t > 0 ? l.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
}
function A(e, t) {
    return (0, u.Cc)(e ? l.M.GAME_SERVER_NEW_GAMES_COACHMARK : null, i.Yh.FEATURED_PRODUCT_ID, t);
}
function _(e) {
    return (0, u.Wl)(e ? l.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: r.lE });
}
function E(e, t, n) {
    return (0, u.D8)(e ? l.M.BOOST_TO_UNLOCK_COACHMARK : null, t, { cooldownDurationMs: r.bW, numTimesToRecur: 5 }, n);
}
function a(e, t) {
    return (0, u.D8)(e ? l.M.EXPIRING_POWERUP_COACHMARK : null, t, { cooldownDurationMs: r.mD });
}
