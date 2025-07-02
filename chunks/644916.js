n.d(t, { t: () => d });
var r = n(115434),
    i = n(704215),
    a = n(283693),
    o = n(911969),
    s = n(317381),
    l = n(416587),
    c = n(874703),
    u = n(75459);
function d(e) {
    switch (e) {
        case i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            var t, n;
            return null != (n = null == (t = c.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)) ? void 0 : t.version) ? n : 0;
        case i.z.GIFTING_PROMOTION_ICON:
        case i.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case i.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case i.z.GIFTING_PROMOTION_REMINDER:
            return u.D_;
        case i.z.ACTIVITIES_VOICE_LAUNCHER_BADGE:
            return (0, l.O)({
                storeState: s.ZP.getState(),
                surface: o.eR.VOICE_LAUNCHER
            });
        default:
            return ((0, a.UT)(e, { andFail: !1 }), 0);
    }
}
