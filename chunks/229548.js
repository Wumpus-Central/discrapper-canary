n.d(t, {
    FC: () => a,
    ru: () => o,
    ty: () => s,
});
var r = n(554146),
    l = n(379848),
    i = n(379229);

function s(e) {
    return (0, l.kn)(e ? [r.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
}

function a(e, t) {
    return (0, l.RF)(e && t > 0 ? r.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
}

function o(e) {
    return (0, l.Wl)(e ? r.M.GUILD_POWERUP_NOTIFICATION : null, {
        cooldownDurationMs: i.lE,
    });
}
