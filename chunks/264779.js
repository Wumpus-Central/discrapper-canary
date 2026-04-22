"use strict";
n.d(t, {
    Cp: () => R,
    HB: () => L,
    OP: () => b,
    S0: () => D,
    So: () => v,
    WD: () => T,
    b3: () => y,
    dG: () => C,
    kc: () => O,
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
    d = n(835095),
    c = n(166403),
    _ = n(816733),
    f = n(954571),
    E = n(723702),
    h = n(661191),
    p = n(412260),
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
    return { code: e.code, userId: e.user_id, claimedAt: e.claimed_at, promotion: d.A.createFromServer(e.promotion) };
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
function O(e, t) {
    return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat
        ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e))
        : (t.outboundRedemptionPageLink ?? "");
}
function R() {
    let e = p.A.outboundPromotions,
        t = p.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, r.Lt)(e.flags, g.$3.SUPPRESS_NOTIFICATION) && !C(e)),
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
        o = c.A.getPremiumTypeSubscription(),
        l = !!o?.hasActiveTrial,
        d = _.A.hasAnyUnexpiredOffer(),
        f = l || d ? a.filter((e) => e.isRedeemableByTrialUsers()) : a;
    return 0 === f.length ? null : f.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function v() {
    let e = R();
    return null != e && !(0, o.j6)(s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
}
function C(e) {
    return e.partnerId === m.XY;
}
function b(e) {
    return !(0, E.isIOS)() || !e.hasFlag(g.$3.IS_BLOCKED_IOS);
}
function D(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers();
}
function L(e) {
    let { promotionType: t } = e;
    return t === m.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
