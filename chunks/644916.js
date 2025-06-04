n.d(t, { t: () => l });
var r = n(115434),
    i = n(704215),
    a = n(283693),
    o = n(874703),
    s = n(75459);
function l(e) {
    switch (e) {
        case i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            var t, n;
            return null != (n = null == (t = o.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)) ? void 0 : t.version) ? n : 0;
        case i.z.GIFTING_PROMOTION_ICON:
        case i.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case i.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case i.z.GIFTING_PROMOTION_REMINDER:
            return s.D_;
        default:
            return (0, a.UT)(e, { andFail: !1 }), 0;
    }
}
