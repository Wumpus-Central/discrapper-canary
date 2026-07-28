"use strict";
n.d(t, { kz: () => A, gc: () => f, JW: () => _, Mq: () => h, K5: () => I, MD: () => T, px: () => E, x: () => p });
var i = n(582128),
    r = n(877624),
    a = n(17928),
    s = n(554146),
    l = n(841702),
    o = n(826673),
    d = n(412260);
let c = (0, n(945810).mj)({
    name: "2026-04-gift-promotion-reminder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var u = n(202541);
function _() {
    let [e, t] = i.useState(),
        n = (0, a.yK)([d.A], () => d.A.getGiftPromotionRewardSkuIds()),
        { purchases: r, hasPreviouslyFetched: s, fetchPurchasesError: o } = (0, l.Wg)(),
        c = i.useRef(!1);
    return (
        i.useEffect(() => {
            s &&
                !c.current &&
                n.length > 0 &&
                (t(null == o ? n.filter((e) => null == r.get(e)) : []), (c.current = !0));
        }, [n, r, s, o]),
        e
    );
}
function E(e, t, n) {
    let i = h(e),
        r = null != n && n.length >= 1;
    return t && i && r;
}
function A(e, t, n) {
    let i = h(e);
    return null != n && 1 === n.length && i && t;
}
function h(e) {
    return [u.gD.PREMIUM_YEAR_TIER_2, u.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function I(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: i, defaultAngle: r = 78.98 } = t ?? {},
        a = Array.isArray(e) ? e : e.gradient,
        s = Array.isArray(e) || null == e.angle ? r : e.angle;
    n && (s = (s + 180) % 360);
    let l = null != i ? a.map((e, t) => `${e} ${i[t]}%`).join(", ") : a.join(", ");
    return { background: `linear-gradient(${s}deg, ${l})` };
}
function f(e) {
    if (null != e)
        return {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function p(e, t) {
    if (null != e && null != t) {
        let n = t.background,
            i = e.backgroundImage;
        return (
            (e.backgroundImage = `${i}, ${n}`),
            (e.backgroundColor = "lightgray"),
            (e.backgroundRepeat = "no-repeat, no-repeat"),
            null == e.backgroundSize && (e.backgroundSize = "auto 110%, auto"),
            null == e.backgroundPosition && (e.backgroundPosition = "right 90% center, 0% 0%"),
            e
        );
    }
    return null != e ? e : null != t ? t : {};
}
function T() {
    let { enabled: e } = c.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
    if (!e || null == d.A.getMarketingComponentByType(r.C.GIFT_REMINDER_NAGBAR)) return !1;
    let t = d.A.getGiftPromotion()?.id;
    return (
        null != t &&
        !!(0, o.u$)(s.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, t).isDismissed &&
        !(0, o.u$)(s.M.GIFTING_PROMOTION_REMINDER, t).isDismissed
    );
}
