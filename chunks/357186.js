n.d(t, { c: () => p });
var r = n(379197),
    i = n(554146),
    a = n(933681),
    s = n(155718),
    o = n(933958),
    l = n(476370),
    c = n(457421),
    u = n(514190),
    d = n(173834),
    f = n(188275);
function p(e) {
    switch (e) {
        case i.M.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            var t, n;
            return null != (t = null == (n = c.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)) ? void 0 : n.version)
                ? t
                : 0;
        case i.M.GIFTING_PROMOTION_ICON:
        case i.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case i.M.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case i.M.GIFTING_PROMOTION_REMINDER:
            return (0, d.p)();
        case i.M.ACTIVITIES_VOICE_LAUNCHER_BADGE:
            return (0, l.C)({
                storeState: o.Ay.getState(),
                surface: s.YI.VOICE_LAUNCHER,
            });
        case i.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK:
            return 0;
        case i.M.COLLECTIBLES_SHOP_WIDE_BANNER:
            return (0, u.N)();
        case i.M.GAME_SHOP_ANNOUNCEMENT_MODAL:
            return f.Lo;
        default:
            return (0, a.dr)(e, { andFail: !1 }), 0;
    }
}
