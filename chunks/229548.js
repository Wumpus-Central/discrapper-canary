n.d(t, { FC: () => s, W2: () => d, ru: () => A, ty: () => o, vB: () => E, vn: () => _, ww: () => a });
var u = n(554146),
    l = n(932001),
    r = n(379229),
    i = n(800007);
function o(e) {
    return (0, l.kn)(e ? [u.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
}
function s(e, t) {
    return (0, l.RF)(e && t > 0 ? u.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
}
function E(e, t) {
    return (0, l.Cc)(e ? u.M.GAME_SERVER_NEW_GAMES_COACHMARK : null, i.Yh.FEATURED_PRODUCT_ID, t);
}
function _(e) {
    return (0, l.kn)(e ? [u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK] : []);
}
function A(e) {
    return (0, l.Wl)(e ? u.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: r.lE });
}
function a(e, t) {
    return (0, l.D8)(e ? u.M.BOOST_TO_UNLOCK_COACHMARK : null, t, { cooldownDurationMs: r.bW, numTimesToRecur: 5 });
}
function d(e, t) {
    return (0, l.D8)(e ? u.M.EXPIRING_POWERUP_COACHMARK : null, t, { cooldownDurationMs: r.mD });
}
