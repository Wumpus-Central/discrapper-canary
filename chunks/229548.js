n.d(t, { FC: () => A, W2: () => R, ru: () => d, ty: () => E, vB: () => _, vn: () => a, ww: () => G });
var u = n(554146),
    l = n(932001),
    r = n(935208),
    i = n(414196),
    o = n(379229),
    s = n(800007);
function E(e) {
    return (0, l.kn)(e ? [u.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
}
function A(e, t) {
    return (0, l.RF)(e && t > 0 ? u.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
}
function _(e, t, n) {
    let o = (0, i.A)(e, t),
        E = o.length >= s.js,
        A = E ? o.reduce((e, t) => (1 === r.default.compare(t.id, e) ? t.id : e), o[0].id) : void 0;
    return (0, l.Cc)(t && E ? u.M.GAME_SERVER_NEW_GAMES_COACHMARK : null, A ?? "", n);
}
function a(e) {
    return (0, l.kn)(e ? [u.M.GAME_SERVER_PRICING_CHANGE_COACHMARK] : []);
}
function d(e) {
    return (0, l.Wl)(e ? u.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: o.lE });
}
function G(e, t) {
    return (0, l.D8)(e ? u.M.BOOST_TO_UNLOCK_COACHMARK : null, t, { cooldownDurationMs: o.bW, numTimesToRecur: 5 });
}
function R(e, t) {
    return (0, l.D8)(e ? u.M.EXPIRING_POWERUP_COACHMARK : null, t, { cooldownDurationMs: o.mD });
}
