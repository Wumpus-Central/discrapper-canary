n.d(t, {
    Cp: () => g,
    HB: () => P,
    OP: () => b,
    S0: () => M,
    So: () => L,
    WD: () => p,
    b3: () => O,
    dG: () => D,
    kc: () => R,
    kd: () => C,
}),
    n(938796);
var i = n(665260),
    a = n(636537),
    r = n(554146),
    s = n(462887),
    l = n(367727),
    o = n(773669),
    d = n(617617),
    c = n(835095),
    _ = n(166403),
    E = n(354670),
    u = n(954571),
    A = n(723702),
    I = n(935208),
    T = n(374200),
    h = n(852218),
    S = n(788868),
    N = n(652215),
    f = n(360469);
function p(e, t) {
    let n = (0, s.M)(t) ? "logo-dark" : "logo-light",
        i = window.GLOBAL_ENV.CDN_HOST,
        a = "?size=256";
    return null != i
        ? `https://${i}/promotions/${e}/${n}${a}`
        : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/promotions/${e}/${n}${a}`;
}
function m(e) {
    return { code: e.code, userId: e.user_id, claimedAt: e.claimed_at, promotion: c.A.createFromServer(e.promotion) };
}
async function O() {
    return (
        await a.Bo.get({
            url: N.Rsh.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: o.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map(m);
}
async function C(e) {
    let t,
        { promotionId: n, analyticsLocations: i } = e,
        r = await a.Bo.post({ url: N.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n), rejectWithError: !1 }),
        s = r.body;
    return (
        (t = f.vu.DESKTOP),
        u.default.track(N.HAw.OUTBOUND_PROMOTION_CLAIMED, { platform: t, status: r.status, location_stack: i }),
        m(s)
    );
}
function R(e, t) {
    return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat
        ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e))
        : (t.outboundRedemptionPageLink ?? "");
}
function g() {
    let e = T.A.outboundPromotions,
        t = T.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, i.Lt)(e.flags, S.$3.SUPPRESS_NOTIFICATION) && !D(e)),
        a =
            d.A.settings.userContent?.recurringDismissibleContentStates[r.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]
                ?.lastDismissedObjectId,
        s =
            null == a
                ? n
                : n.filter((e) => {
                      let { id: t } = e;
                      return 1 === I.default.compare(t, a);
                  }),
        l = _.A.getPremiumTypeSubscription(),
        o = !!l?.hasActiveTrial,
        c = E.A.hasAnyUnexpiredOffer(),
        u = o || c ? s.filter((e) => e.isRedeemableByTrialUsers()) : s;
    return 0 === u.length ? null : u.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function L() {
    let e = g();
    return null != e && !(0, l.j6)(r.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
}
function D(e) {
    return e.partnerId === h.XY;
}
function b(e) {
    return !(0, A.isIOS)() || !e.hasFlag(S.$3.IS_BLOCKED_IOS);
}
function M(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers();
}
function P(e) {
    let { promotionType: t } = e;
    return t === h.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
