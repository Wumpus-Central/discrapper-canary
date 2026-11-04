var n = l(554146),
    u = l(263775),
    r = l(379229),
    i = l(628049);
l.d(
    t,
    {},
    {
        FC: function (e, t) {
            return (0, u.RF)(e && t > 0 ? n.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK : null, t);
        },
        W2: function (e, t) {
            return (0, u.D8)(e ? n.M.EXPIRING_POWERUP_COACHMARK : null, t, { cooldownDurationMs: r.mD });
        },
        ru: function (e) {
            return (0, u.Wl)(e ? n.M.GUILD_POWERUP_NOTIFICATION : null, { cooldownDurationMs: r.lE });
        },
        ty: function (e) {
            return (0, u.kn)(e ? [n.M.GUILD_POWERUP_PERKS_COACHMARK] : []);
        },
        vB: function (e, t) {
            return (0, u.Cc)(e ? n.M.GAME_SERVER_NEW_GAMES_COACHMARK : null, i.Yh.FEATURED_PRODUCT_ID, t);
        },
        ww: function (e, t, l) {
            return (0, u.D8)(
                e ? n.M.BOOST_TO_UNLOCK_COACHMARK : null,
                t,
                { cooldownDurationMs: r.bW, numTimesToRecur: 5 },
                l,
            );
        },
    },
);
