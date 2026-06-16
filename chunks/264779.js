"use strict";
n.d(t, {
    $_: () => M,
    Cp: () => N,
    HB: () => w,
    Ng: () => S,
    OP: () => O,
    S0: () => b,
    So: () => v,
    WD: () => T,
    Wl: () => L,
    dG: () => R,
    eN: () => D,
    kc: () => C,
    kd: () => y,
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
    h = n(723702),
    f = n(428262),
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
    return { code: e.code, userId: e.user_id, claimedAt: e.claimed_at, promotion: u.A.createFromServer(e.promotion) };
}
async function y(e) {
    let t,
        { promotionId: n, promotionTitle: i, partnerId: s, analyticsLocations: a } = e,
        o = await r.Bo.post({ url: A.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n), rejectWithError: !1 }),
        l = o.body;
    return (
        (t = I.vu.DESKTOP),
        _.default.track(A.HAw.OUTBOUND_PROMOTION_CLAIMED, {
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
function N() {
    let e = E.A.outboundPromotions,
        t = E.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, i.Lt)(e.flags, g.$3.SUPPRESS_NOTIFICATION) && !R(e)),
        r =
            l.A.settings.userContent?.recurringDismissibleContentStates[s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]
                ?.lastDismissedObjectId,
        a =
            null == r
                ? n
                : n.filter((e) => {
                      let { id: t } = e;
                      return 1 === p.default.compare(t, r);
                  }),
        o = c.A.getPremiumTypeSubscription(),
        u = !!o?.hasActiveTrial,
        _ = d.A.hasAnyUnexpiredOffer(),
        h = u || _ ? a.filter((e) => e.isRedeemableByTrialUsers()) : a;
    return 0 === h.length ? null : h.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function v() {
    let e = N();
    return null != e && !(0, o.j6)(s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
}
function R(e) {
    return e.partnerId === m.XY;
}
function O(e) {
    return !(0, h.isIOS)() || !e.hasFlag(g.$3.IS_BLOCKED_IOS);
}
function b(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers();
}
function D(e) {
    let t = {};
    for (let { code: n, promotion: i } of e) t[i.id] = n;
    return t;
}
function L(e, t) {
    let n = new Set(
        t.map((e) => {
            let { id: t } = e;
            return t;
        }),
    );
    return e.filter((e) => {
        let { promotion: t } = e;
        return !n.has(t.id) && !w(t) && !R(t) && O(t);
    });
}
function w(e) {
    let { promotionType: t } = e;
    return t === m.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
function M(e) {
    return (
        null == e || !1 === f.Ay.isPremiumExactly(e, g.PremiumTypes.TIER_2) || e.isFractionalPremiumWithNoStandardSub()
    );
}
