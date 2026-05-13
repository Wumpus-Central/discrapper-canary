"use strict";
n.d(t, {
    Cp: () => y,
    HB: () => b,
    Ng: () => T,
    OP: () => O,
    S0: () => R,
    So: () => C,
    WD: () => I,
    dG: () => v,
    kc: () => N,
    kd: () => S,
}),
    n(938796);
var i = n(665260),
    r = n(636537),
    s = n(554146),
    a = n(462887),
    o = n(367727),
    l = n(617617),
    u = n(835095),
    c = n(166403),
    d = n(354670),
    _ = n(174459),
    f = n(723702),
    h = n(935208),
    p = n(374200),
    E = n(852218),
    m = n(788868),
    g = n(652215),
    A = n(360469);
function I(e, t) {
    let n = (0, a.M)(t) ? "logo-dark" : "logo-light",
        i = window.GLOBAL_ENV.CDN_HOST,
        r = "?size=256";
    return null != i
        ? `https://${i}/promotions/${e}/${n}${r}`
        : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/promotions/${e}/${n}${r}`;
}
function T(e) {
    return { code: e.code, userId: e.user_id, claimedAt: e.claimed_at, promotion: u.A.createFromServer(e.promotion) };
}
async function S(e) {
    let t,
        { promotionId: n, promotionTitle: i, partnerId: s, analyticsLocations: a } = e,
        o = await r.Bo.post({ url: g.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n), rejectWithError: !1 }),
        l = o.body;
    return (
        (t = A.vu.DESKTOP),
        _.default.track(g.HAw.OUTBOUND_PROMOTION_CLAIMED, {
            platform: t,
            status: o.status,
            location_stack: a,
            promotion_id: n,
            name: i ?? null,
            partner: s ?? null,
        }),
        T(l)
    );
}
function N(e, t) {
    return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat
        ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e))
        : (t.outboundRedemptionPageLink ?? "");
}
function y() {
    let e = p.A.outboundPromotions,
        t = p.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, i.Lt)(e.flags, m.$3.SUPPRESS_NOTIFICATION) && !v(e)),
        r =
            l.A.settings.userContent?.recurringDismissibleContentStates[s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]
                ?.lastDismissedObjectId,
        a =
            null == r
                ? n
                : n.filter((e) => {
                      let { id: t } = e;
                      return 1 === h.default.compare(t, r);
                  }),
        o = c.A.getPremiumTypeSubscription(),
        u = !!o?.hasActiveTrial,
        _ = d.A.hasAnyUnexpiredOffer(),
        f = u || _ ? a.filter((e) => e.isRedeemableByTrialUsers()) : a;
    return 0 === f.length ? null : f.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function C() {
    let e = y();
    return null != e && !(0, o.j6)(s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
}
function v(e) {
    return e.partnerId === E.XY;
}
function O(e) {
    return !(0, f.isIOS)() || !e.hasFlag(m.$3.IS_BLOCKED_IOS);
}
function R(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers();
}
function b(e) {
    let { promotionType: t } = e;
    return t === E.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
