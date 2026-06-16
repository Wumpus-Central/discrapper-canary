n.d(t, { kz: () => g, gc: () => m, JW: () => C, Mq: () => f, K5: () => N, MD: () => T, px: () => A, x: () => p });
var l = n(64700),
    i = n(877624),
    a = n(17928),
    r = n(554146),
    o = n(841702),
    s = n(826673),
    c = n(374200);
let u = (0, n(945810).mj)({
    name: "2026-04-gift-promotion-reminder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var d = n(788868);
function C() {
    let [e, t] = l.useState(),
        n = (0, a.yK)([c.A], () => c.A.getGiftPromotionRewardSkuIds()),
        { purchases: i, hasPreviouslyFetched: r, fetchPurchasesError: s } = (0, o.Wg)(),
        u = l.useRef(!1);
    return (
        l.useEffect(() => {
            r &&
                !u.current &&
                n.length > 0 &&
                (t(null == s ? n.filter((e) => null == i.get(e)) : []), (u.current = !0));
        }, [n, i, r, s]),
        e
    );
}
function A(e, t, n) {
    let l = f(e),
        i = null != n && n.length >= 1;
    return t && l && i;
}
function g(e, t, n) {
    let l = f(e);
    return null != n && 1 === n.length && l && t;
}
function f(e) {
    return [d.gD.PREMIUM_YEAR_TIER_2, d.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function N(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: l, defaultAngle: i = 78.98 } = t ?? {},
        a = Array.isArray(e) ? e : e.gradient,
        r = Array.isArray(e) || null == e.angle ? i : e.angle;
    n && (r = (r + 180) % 360);
    let o = null != l ? a.map((e, t) => `${e} ${l[t]}%`).join(", ") : a.join(", ");
    return { background: `linear-gradient(${r}deg, ${o})` };
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
function p(e, t) {
    if (null != e && null != t) {
        let n = t.background,
            l = e.backgroundImage;
        return (
            (e.backgroundImage = `${l}, ${n}`),
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
    let { enabled: e } = u.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
    if (!e || null == c.A.getMarketingComponentByType(i.C.GIFT_REMINDER_NAGBAR)) return !1;
    let t = c.A.getGiftPromotion()?.id;
    return (
        null != t &&
        !!(0, s.u$)(r.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, t).isDismissed &&
        !(0, s.u$)(r.M.GIFTING_PROMOTION_REMINDER, t).isDismissed
    );
}
