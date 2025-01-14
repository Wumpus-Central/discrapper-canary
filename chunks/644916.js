r.d(n, {
    t: function () {
        return l;
    }
});
var i = r(115434),
    a = r(704215),
    s = r(874703),
    o = r(974592);
function l(e) {
    switch (e) {
        case a.z.COLLECTIBLES_SHOP_ENTRY_MARKETING:
            var n, r;
            return null !== (r = null === (n = s.Z.getMarketingBySurface(i.K.DESKTOP_SHOP_BUTTON)) || void 0 === n ? void 0 : n.version) && void 0 !== r ? r : 0;
        case a.z.GIFTING_PROMOTION_ICON:
        case a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK:
        case a.z.GIFTING_PROMOTION_MOBILE_FIRST_TIME_HALFSHEET:
        case a.z.GIFTING_PROMOTION_REMINDER:
            return o.C$;
        default:
            return 0;
    }
}
