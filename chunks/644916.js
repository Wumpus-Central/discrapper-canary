n.d(t, { t: () => o });
var i = n(115434),
    r = n(704215),
    a = n(874703),
    s = n(974592);
function o(e) {
    switch (e) {
        case r.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            var t, n;
            return null !== (n = null === (t = a.Z.getMarketingBySurface(i.K.DESKTOP_SHOP_BUTTON)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : 0;
        case r.z.GIFTING_PROMOTION_ICON:
        case r.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case r.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case r.z.GIFTING_PROMOTION_REMINDER:
            return s.C$;
        default:
            return 0;
    }
}
