n.d(t, {
    A2: () => v,
    BU: () => y,
    Pz: () => p,
    Qf: () => S,
    X_: () => h,
    ZC: () => b,
    kr: () => m,
    t8: () => E,
    tq: () => I
}),
    n(789020),
    n(757143);
var i = n(544891),
    r = n(780384),
    a = n(706454),
    s = n(78839),
    o = n(431),
    l = n(630388),
    u = n(358085),
    c = n(1844),
    d = n(474936),
    f = n(981631);
let _ = '{code}';
function p(e, t) {
    let n = (0, r.wj)(t) ? 'logo-dark' : 'logo-light',
        i = window.GLOBAL_ENV.CDN_HOST,
        a = '?size=256';
    return null != i ? ''.concat(location.protocol, '//').concat(i, '/promotions/').concat(e, '/').concat(n).concat(a) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/promotions/').concat(e, '/').concat(n).concat(a);
}
function h(e) {
    return {
        id: e.id,
        startDate: e.start_date,
        endDate: e.end_date,
        outboundRedemptionEndDate: e.outbound_redemption_end_date,
        outboundTitle: e.outbound_title,
        outboundRedemptionModalBody: e.outbound_redemption_modal_body,
        outboundRedemptionPageLink: e.outbound_redemption_page_link,
        outboundRedemptionUrlFormat: e.outbound_redemption_url_format,
        outboundTermsAndConditions: e.outbound_terms_and_conditions,
        flags: e.flags
    };
}
function m(e) {
    return {
        id: e.id,
        startDate: e.start_date,
        endDate: e.end_date
    };
}
function g(e) {
    return {
        code: e.code,
        userId: e.user_id,
        claimedAt: e.claimed_at,
        promotion: h(e.promotion)
    };
}
async function E() {
    return (
        await i.tn.get({
            url: f.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: a.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map(g);
}
async function v(e) {
    return g(
        (
            await i.tn.post({
                url: f.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e),
                rejectWithError: !1
            })
        ).body
    );
}
function y(e, t) {
    return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(_, encodeURIComponent(e)) : t.outboundRedemptionPageLink;
}
function I() {
    let e = c.Z.lastSeenOutboundPromotionStartDate,
        t = c.Z.outboundPromotions,
        n = c.Z.consumedInboundPromotionId,
        i = t.filter((e) => {
            let { id: t, flags: i } = e;
            return t !== n && !(0, l.yE)(i, d.TD.SUPPRESS_NOTIFICATION);
        }),
        r =
            null == e
                ? i
                : i.filter((t) => {
                      let { startDate: n } = t;
                      return new Date(n) > new Date(e);
                  }),
        a = c.Z.lastDismissedOutboundPromotionStartDate,
        u = s.ZP.getPremiumTypeSubscription(),
        f = (null == u ? void 0 : u.trialId) != null,
        _ = o.Z.hasAnyUnexpiredOffer(),
        p = f || _ ? r.filter((e) => T(e)) : r;
    return (
        0 !== p.length &&
        (null == a ||
            p.some((e) => {
                let { startDate: t } = e;
                return new Date(t) > new Date(a);
            }))
    );
}
function b(e) {
    return !(0, u.isIOS)() || !(0, l.yE)(e.flags, d.TD.IS_BLOCKED_IOS);
}
function T(e) {
    return (0, l.yE)(e.flags, d.TD.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS);
}
function S(e, t) {
    return null != t[e.id] || T(e);
}
