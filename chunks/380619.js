"use strict";
n.d(t, { kz: () => h, gc: () => m, JW: () => _, Mq: () => p, K5: () => E, MD: () => A, px: () => f, x: () => g });
var i = n(64700),
    r = n(877624),
    s = n(17928),
    a = n(554146),
    o = n(841702),
    l = n(826673),
    u = n(374200);
let c = (0, n(945810).mj)({
    name: "2026-04-gift-promotion-reminder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var d = n(788868);
function _() {
    let [e, t] = i.useState(),
        n = (0, s.yK)([u.A], () => u.A.getGiftPromotionRewardSkuIds()),
        { purchases: r, hasPreviouslyFetched: a, fetchPurchasesError: l } = (0, o.Wg)(),
        c = i.useRef(!1);
    return (
        i.useEffect(() => {
            a &&
                !c.current &&
                n.length > 0 &&
                (t(null == l ? n.filter((e) => null == r.get(e)) : []), (c.current = !0));
        }, [n, r, a, l]),
        e
    );
}
function f(e, t, n) {
    let i = p(e),
        r = null != n && n.length >= 1;
    return t && i && r;
}
function h(e, t, n) {
    let i = p(e);
    return null != n && 1 === n.length && i && t;
}
function p(e) {
    return [d.gD.PREMIUM_YEAR_TIER_2, d.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function E(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: i, defaultAngle: r = 78.98 } = t ?? {},
        s = Array.isArray(e) ? e : e.gradient,
        a = Array.isArray(e) || null == e.angle ? r : e.angle;
    n && (a = (a + 180) % 360);
    let o = null != i ? s.map((e, t) => `${e} ${i[t]}%`).join(", ") : s.join(", ");
    return { background: `linear-gradient(${a}deg, ${o})` };
}
function m(e) {
    if (null != e)
        return {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function g(e, t) {
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
function A() {
    let { enabled: e } = c.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
    if (!e || null == u.A.getMarketingComponentByType(r.C.GIFT_REMINDER_NAGBAR)) return !1;
    let t = u.A.getGiftPromotion()?.id;
    return (
        null != t &&
        !!(0, l.u$)(a.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, t).isDismissed &&
        !(0, l.u$)(a.M.GIFTING_PROMOTION_REMINDER, t).isDismissed
    );
}
