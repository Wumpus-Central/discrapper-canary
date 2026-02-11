n.d(t, { FC: () => r, ru: () => o, ty: () => a, ww: () => d });
var i = n(554146),
    l = n(379848),
    s = n(379229);
function a(e) {
    return (0, l.kn)(e ? [i.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
}
function r(e, t) {
    return (0, l.RF)(e && t > 0 ? i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
}
function o(e) {
    return (0, l.Wl)(e ? i.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: s.lE });
}
function d(e, t) {
    return (0, l.D8)(e ? i.M.BOOST_TO_UNLOCK_COACHMARK : null, t, { cooldownDurationMs: s.bW });
}
