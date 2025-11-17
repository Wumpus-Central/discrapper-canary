n.d(t, { t: () => f });
var r = n(115434),
    i = n(704215),
    a = n(283693),
    o = n(911969),
    s = n(317381),
    l = n(416587),
    c = n(874703),
    u = n(65679),
    d = n(885472);
function f(e) {
    switch (e) {
        case i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            var t, n;
            return null != (n = null == (t = c.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)) ? void 0 : t.version)
                ? n
                : 0;
        case i.z.GIFTING_PROMOTION_ICON:
        case i.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case i.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case i.z.GIFTING_PROMOTION_REMINDER:
            return (0, d.m)();
        case i.z.ACTIVITIES_VOICE_LAUNCHER_BADGE:
            return (0, l.O)({
                storeState: s.ZP.getState(),
                surface: o.eR.VOICE_LAUNCHER,
            });
        case i.z.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK:
            return 0;
        case i.z.COLLECTIBLES_SHOP_WIDE_BANNER:
            return (0, u.k)();
        default:
            return (0, a.UT)(e, { andFail: !1 }), 0;
    }
}
