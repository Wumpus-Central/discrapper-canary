n.d(t, { t: () => u });
var r = n(115434),
    i = n(704215),
    o = n(283693),
    a = n(874703),
    s = n(974592),
    l = n(765018),
    c = n(474936);
function u(e) {
    switch (e) {
        case i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            var t, n;
            return null != (n = null == (t = a.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)) ? void 0 : t.version) ? n : 0;
        case i.z.GIFTING_PROMOTION_ICON:
        case i.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case i.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case i.z.GIFTING_PROMOTION_REMINDER:
            return s.C$;
        case i.z.NITRO_TENURE_BADGE_LEVEL_UP:
            return (0, l.q)(c.VU.PREMIUM_TENURE_72_MONTH);
        default:
            return (0, o.UT)(e, { andFail: !1 }), 0;
    }
}
