n.d(t, {
    Cp: () => D,
    HB: () => P,
    OP: () => b,
    S0: () => U,
    So: () => h,
    WD: () => f,
    b3: () => p,
    dG: () => g,
    kc: () => L,
    kd: () => m,
}),
    n(938796);
var i = n(665260),
    r = n(636537),
    a = n(554146),
    s = n(462887),
    _ = n(367727),
    l = n(773669),
    o = n(617617),
    E = n(835095),
    d = n(166403),
    c = n(354670),
    u = n(954571),
    I = n(723702),
    A = n(935208),
    T = n(374200),
    S = n(852218),
    N = n(788868),
    O = n(652215),
    R = n(360469);
function f(e, t) {
    let n = (0, s.M)(t) ? "logo-dark" : "logo-light",
        i = window.GLOBAL_ENV.CDN_HOST,
        r = "?size=256";
    return null != i
        ? `https://${i}/promotions/${e}/${n}${r}`
        : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/promotions/${e}/${n}${r}`;
}
function C(e) {
    return { code: e.code, userId: e.user_id, claimedAt: e.claimed_at, promotion: E.A.createFromServer(e.promotion) };
}
async function p() {
    return (
        await r.Bo.get({
            url: O.Rsh.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: l.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map(C);
}
async function m(e) {
    let t,
        { promotionId: n, analyticsLocations: i } = e,
        a = await r.Bo.post({ url: O.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n), rejectWithError: !1 }),
        s = a.body;
    return (
        (t = R.vu.DESKTOP),
        u.default.track(O.HAw.OUTBOUND_PROMOTION_CLAIMED, { platform: t, status: a.status, location_stack: i }),
        C(s)
    );
}
function L(e, t) {
    return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat
        ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e))
        : (t.outboundRedemptionPageLink ?? "");
}
function D() {
    let e = T.A.outboundPromotions,
        t = T.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, i.Lt)(e.flags, N.$3.SUPPRESS_NOTIFICATION) && !g(e)),
        r =
            o.A.settings.userContent?.recurringDismissibleContentStates[a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]
                ?.lastDismissedObjectId,
        s =
            null == r
                ? n
                : n.filter((e) => {
                      let { id: t } = e;
                      return 1 === A.default.compare(t, r);
                  }),
        _ = d.A.getPremiumTypeSubscription(),
        l = !!_?.hasActiveTrial,
        E = c.A.hasAnyUnexpiredOffer(),
        u = l || E ? s.filter((e) => e.isRedeemableByTrialUsers()) : s;
    return 0 === u.length ? null : u.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function h() {
    let e = D();
    return null != e && !(0, _.j6)(a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
}
function g(e) {
    return e.partnerId === S.XY;
}
function b(e) {
    return !(0, I.isIOS)() || !e.hasFlag(N.$3.IS_BLOCKED_IOS);
}
function U(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers();
}
function P(e) {
    let { promotionType: t } = e;
    return t === S.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
