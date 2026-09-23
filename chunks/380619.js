n.d(t, {
    kz: () => x,
    gc: () => E,
    JW: () => f,
    Mq: () => A,
    K5: () => C,
    MD: () => y,
    px: () => g,
    iq: () => p,
    x: () => I,
});
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
var d = n(202541),
    h = n(805161),
    m = n(375708);
function f() {
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
function p(e, t, n) {
    let l = t?.filter((e) => !n.includes(e));
    return e.length > 0 && null != l && 0 === l.length
        ? m.intl.formatToPlainString(h.default.cMHedL, { count: e.length })
        : m.intl.string(h.default["/8znyU"]);
}
function g(e, t, n) {
    let l = A(e),
        i = null != n && n.length >= 1;
    return t && l && i;
}
function x(e, t, n) {
    let l = A(e);
    return null != n && 1 === n.length && l && t;
}
function A(e) {
    return [d.gD.PREMIUM_YEAR_TIER_2, d.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function C(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: l, defaultAngle: i = 78.98 } = t ?? {},
        s = Array.isArray(e) ? e : e.gradient,
        r = Array.isArray(e) || null == e.angle ? i : e.angle;
    n && (r = (r + 180) % 360);
    let a = null != l ? s.map((e, t) => `${e} ${l[t]}%`).join(", ") : s.join(", ");
    return { background: `linear-gradient(${r}deg, ${a})` };
}
function E(e) {
    if (null != e)
        return {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function I(e, t) {
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
function y() {
    let { enabled: e } = c.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
    if (!e || null == u.A.getMarketingComponentByType(i.C.GIFT_REMINDER_NAGBAR)) return !1;
    let t = u.A.getGiftPromotion()?.id;
    return (
        null != t &&
        !!(0, o.u$)(r.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, t).isDismissed &&
        !(0, o.u$)(r.M.GIFTING_PROMOTION_REMINDER, t).isDismissed
    );
}
