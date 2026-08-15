"use strict";
n.d(t, { kz: () => p, gc: () => A, JW: () => m, Mq: () => g, K5: () => x, MD: () => E, px: () => f, x: () => C });
var l = n(582128),
    i = n(877624),
    s = n(17928),
    r = n(554146),
    a = n(841702),
    o = n(826673),
    u = n(412260);
let c = (0, n(945810).mj)({
    name: "2026-04-gift-promotion-reminder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var d = n(753261),
    h = n(202541);
function m() {
    let [e, t] = l.useState(),
        n = (0, s.yK)([u.A], () => u.A.getGiftPromotionRewardSkuIds()),
        { purchases: i, hasPreviouslyFetched: r, fetchPurchasesError: o } = (0, a.Wg)(),
        c = l.useRef(!1);
    return (
        l.useEffect(() => {
            r &&
                !c.current &&
                n.length > 0 &&
                (t(null == o ? n.filter((e) => null == i.get(e)) : []), (c.current = !0));
        }, [n, i, r, o]),
        e
    );
}
function f(e, t, n) {
    let l = g(e),
        i = null != n && n.length >= 1,
        { enabled: s } = d.E.useConfig({ location: "useShouldShowSelectFreeSkuStep" });
    return t && l && i && !s;
}
function p(e, t, n) {
    let l = g(e);
    return null != n && 1 === n.length && l && t;
}
function g(e) {
    return [h.gD.PREMIUM_YEAR_TIER_2, h.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function x(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: l, defaultAngle: i = 78.98 } = t ?? {},
        s = Array.isArray(e) ? e : e.gradient,
        r = Array.isArray(e) || null == e.angle ? i : e.angle;
    n && (r = (r + 180) % 360);
    let a = null != l ? s.map((e, t) => `${e} ${l[t]}%`).join(", ") : s.join(", ");
    return { background: `linear-gradient(${r}deg, ${a})` };
}
function A(e) {
    if (null != e)
        return {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function C(e, t) {
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
function E() {
    let { enabled: e } = c.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
    if (!e || null == u.A.getMarketingComponentByType(i.C.GIFT_REMINDER_NAGBAR)) return !1;
    let t = u.A.getGiftPromotion()?.id;
    return (
        null != t &&
        !!(0, o.u$)(r.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, t).isDismissed &&
        !(0, o.u$)(r.M.GIFTING_PROMOTION_REMINDER, t).isDismissed
    );
}
