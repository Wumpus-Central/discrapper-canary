"use strict";
n.d(t, {
    $_: () => M,
    Cp: () => v,
    HB: () => w,
    Ng: () => S,
    OP: () => b,
    P9: () => N,
    So: () => R,
    WD: () => T,
    Wl: () => L,
    dG: () => O,
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
    f = n(935208),
    p = n(721157),
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
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (e?.trialId != null || n) && !t.isRedeemableByTrialUsers();
}
function v() {
    let e = E.A.outboundPromotions,
        t = E.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, i.Lt)(e.flags, g.$3.SUPPRESS_NOTIFICATION) && !O(e)),
        r =
            l.A.settings.userContent?.recurringDismissibleContentStates[s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]
                ?.lastDismissedObjectId,
        a =
            null == r
                ? n
                : n.filter((e) => {
                      let { id: t } = e;
                      return 1 === f.default.compare(t, r);
                  }),
        o = c.A.getPremiumTypeSubscription(),
        u = d.A.hasAnyUnexpiredOffer(),
        _ = a.filter((e) => !N(o, e, u));
    return 0 === _.length ? null : _.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function R() {
    let e = v();
    return null != e && !(0, o.j6)(s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
}
function O(e) {
    return e.partnerId === m.XY;
}
function b(e) {
    return !(0, h.isIOS)() || !e.hasFlag(g.$3.IS_BLOCKED_IOS);
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
        return !n.has(t.id) && !w(t) && !O(t) && b(t);
    });
}
function w(e) {
    let { promotionType: t } = e;
    return t === m.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
function M(e, t) {
    return !(0, p.ij)(e, t);
}
