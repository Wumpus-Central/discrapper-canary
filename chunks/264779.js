"use strict";
n.d(t, {
    Cp: () => v,
    HB: () => L,
    OP: () => b,
    S0: () => D,
    So: () => O,
    WD: () => T,
    b3: () => N,
    dG: () => R,
    kc: () => C,
    kd: () => y,
}),
    n(938796);
var i = n(665260),
    r = n(636537),
    s = n(554146),
    a = n(462887),
    o = n(281678),
    l = n(773669),
    u = n(617617),
    c = n(835095),
    d = n(166403),
    _ = n(354670),
    f = n(174459),
    h = n(723702),
    p = n(935208),
    E = n(374200),
    m = n(852218),
    g = n(788868),
    A = n(652215),
    I = n(360469);
function T(e, t) {
    let n = (0, a.M)(t) ? "logo-dark" : "logo-light",
        i = window.GLOBAL_ENV.CDN_HOST,
        r = "?size=256";
    return null != i
        ? `https://${i}/promotions/${e}/${n}${r}`
        : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/promotions/${e}/${n}${r}`;
}
function S(e) {
    return { code: e.code, userId: e.user_id, claimedAt: e.claimed_at, promotion: c.A.createFromServer(e.promotion) };
}
async function N() {
    return (
        await r.Bo.get({
            url: A.Rsh.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: l.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map(S);
}
async function y(e) {
    let t,
        { promotionId: n, promotionTitle: i, partnerId: s, analyticsLocations: a } = e,
        o = await r.Bo.post({ url: A.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n), rejectWithError: !1 }),
        l = o.body;
    return (
        (t = I.vu.DESKTOP),
        f.default.track(A.HAw.OUTBOUND_PROMOTION_CLAIMED, {
            platform: t,
            status: o.status,
            location_stack: a,
            promotion_id: n,
            name: i ?? null,
            partner: s ?? null,
        }),
        S(l)
    );
}
function C(e, t) {
    return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat
        ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e))
        : (t.outboundRedemptionPageLink ?? "");
}
function v() {
    let e = E.A.outboundPromotions,
        t = E.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, i.Lt)(e.flags, g.$3.SUPPRESS_NOTIFICATION) && !R(e)),
        r =
            u.A.settings.userContent?.recurringDismissibleContentStates[s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]
                ?.lastDismissedObjectId,
        a =
            null == r
                ? n
                : n.filter((e) => {
                      let { id: t } = e;
                      return 1 === p.default.compare(t, r);
                  }),
        o = d.A.getPremiumTypeSubscription(),
        l = !!o?.hasActiveTrial,
        c = _.A.hasAnyUnexpiredOffer(),
        f = l || c ? a.filter((e) => e.isRedeemableByTrialUsers()) : a;
    return 0 === f.length ? null : f.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function O() {
    let e = v();
    return null != e && !(0, o.j6)(s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
}
function R(e) {
    return e.partnerId === m.XY;
}
function b(e) {
    return !(0, h.isIOS)() || !e.hasFlag(g.$3.IS_BLOCKED_IOS);
}
function D(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers();
}
function L(e) {
    let { promotionType: t } = e;
    return t === m.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
