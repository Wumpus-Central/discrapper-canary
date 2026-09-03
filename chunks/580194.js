n.d(t, { kz: () => A, gc: () => I, JW: () => g, Mq: () => E, K5: () => C, MD: () => S, px: () => x, x: () => y });
var l = n(582128),
    i = n(517950),
    s = n(877624),
    r = n(17928),
    a = n(554146),
    o = n(841702),
    u = n(826673),
    c = n(412260);
let d = (0, n(945810).mj)({
    name: "2026-04-gift-promotion-reminder",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var h = n(753261),
    m = n(636537),
    f = n(652215),
    p = n(202541);
function g() {
    let [e, t] = l.useState(),
        n = (0, r.yK)([c.A], () => c.A.getGiftPromotionRewardSkuIds()),
        { purchases: s, hasPreviouslyFetched: a, fetchPurchasesError: u } = (0, o.Wg)(),
        d = l.useRef(!1);
    l.useEffect(() => {
        a && !d.current && n.length > 0 && (t(null == u ? n.filter((e) => null == s.get(e)) : []), (d.current = !0));
    }, [n, s, a, u]);
    let h = n.some((e) => e === i.a.SUMMER_2026_GOGO_FAKE_SKU_ID),
        { isEligible: p, hasFetched: g } = (function (e) {
            let [t, n] = l.useState({ isEligible: !1, hasFetched: !1 }),
                i = l.useRef(!1);
            return (
                l.useEffect(() => {
                    e &&
                        !i.current &&
                        ((i.current = !0),
                        m.Bo.get({
                            url: f.Rsh.GIFTING_PROMOTION_SUMMER_2026_GOGO_CAMPAIGN_ELIGIBILITY,
                            rejectWithError: !0,
                        })
                            .then((e) => {
                                n({ isEligible: e.body.is_eligible, hasFetched: !0 });
                            })
                            .catch(() => {
                                n({ isEligible: !1, hasFetched: !0 });
                            }));
                }, [e]),
                t
            );
        })(h);
    return l.useMemo(() => {
        if (!h || g) return h && !p ? [] : e;
    }, [e, p, g, h]);
}
function x(e, t, n) {
    let l = E(e),
        i = null != n && n.length >= 1,
        { enabled: s } = h.E.useConfig({ location: "useShouldShowSelectFreeSkuStep" });
    return t && l && i && !s;
}
function A(e, t, n) {
    let l = E(e);
    return null != n && 1 === n.length && l && t;
}
function E(e) {
    return [p.gD.PREMIUM_YEAR_TIER_2, p.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
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
function I(e) {
    if (null != e)
        return {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function y(e, t) {
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
function S() {
    let { enabled: e } = d.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
    if (!e || null == c.A.getMarketingComponentByType(s.C.GIFT_REMINDER_NAGBAR)) return !1;
    let t = c.A.getGiftPromotion()?.id;
    return (
        null != t &&
        !!(0, u.u$)(a.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, t).isDismissed &&
        !(0, u.u$)(a.M.GIFTING_PROMOTION_REMINDER, t).isDismissed
    );
}
