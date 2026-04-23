"use strict";
n.d(t, {
    Cp: () => C,
    HB: () => L,
    OP: () => b,
    S0: () => D,
    So: () => O,
    WD: () => T,
    b3: () => y,
    dG: () => R,
    kc: () => v,
    kd: () => N,
}),
    n(938796);
var r = n(665260),
    i = n(562465),
    s = n(554146),
    a = n(462887),
    o = n(367727),
    l = n(773669),
    u = n(617617),
    c = n(835095),
    d = n(166403),
    _ = n(816733),
    f = n(954571),
    p = n(723702),
    h = n(661191),
    E = n(412260),
    m = n(852218),
    g = n(788868),
    A = n(652215),
    I = n(360469);
function T(e, t) {
    let n = (0, a.M)(t) ? "logo-dark" : "logo-light",
        r = window.GLOBAL_ENV.CDN_HOST,
        i = "?size=256";
    return null != r
        ? `https://${r}/promotions/${e}/${n}${i}`
        : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/promotions/${e}/${n}${i}`;
}
function S(e) {
    return { code: e.code, userId: e.user_id, claimedAt: e.claimed_at, promotion: c.A.createFromServer(e.promotion) };
}
async function y() {
    return (
        await i.Bo.get({
            url: A.Rsh.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: l.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map(S);
}
async function N(e) {
    let t,
        { promotionId: n, analyticsLocations: r } = e,
        s = await i.Bo.post({ url: A.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n), rejectWithError: !1 }),
        a = s.body;
    return (
        (t = I.vu.DESKTOP),
        f.default.track(A.HAw.OUTBOUND_PROMOTION_CLAIMED, { platform: t, status: s.status, location_stack: r }),
        S(a)
    );
}
function v(e, t) {
    return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat
        ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e))
        : (t.outboundRedemptionPageLink ?? "");
}
function C() {
    let e = E.A.outboundPromotions,
        t = E.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, r.Lt)(e.flags, g.$3.SUPPRESS_NOTIFICATION) && !R(e)),
        i =
            u.A.settings.userContent?.recurringDismissibleContentStates[s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]
                ?.lastDismissedObjectId,
        a =
            null == i
                ? n
                : n.filter((e) => {
                      let { id: t } = e;
                      return 1 === h.default.compare(t, i);
                  }),
        o = d.A.getPremiumTypeSubscription(),
        l = !!o?.hasActiveTrial,
        c = _.A.hasAnyUnexpiredOffer(),
        f = l || c ? a.filter((e) => e.isRedeemableByTrialUsers()) : a;
    return 0 === f.length ? null : f.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function O() {
    let e = C();
    return null != e && !(0, o.j6)(s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
}
function R(e) {
    return e.partnerId === m.XY;
}
function b(e) {
    return !(0, p.isIOS)() || !e.hasFlag(g.$3.IS_BLOCKED_IOS);
}
function D(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers();
}
function L(e) {
    let { promotionType: t } = e;
    return t === m.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
