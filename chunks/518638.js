n.d(t, {
    A2: () => b,
    BU: () => y,
    Pz: () => p,
    Qf: () => S,
    X_: () => h,
    ZC: () => O,
    kr: () => m,
    t8: () => E,
    tq: () => v
}),
    n(789020),
    n(757143),
    n(301563);
var r = n(544891),
    i = n(780384),
    o = n(706454),
    a = n(78839),
    s = n(431),
    l = n(630388),
    c = n(358085),
    u = n(1844),
    d = n(474936),
    f = n(981631);
let _ = '{code}';
function p(e, t) {
    let n = (0, i.wj)(t) ? 'logo-dark' : 'logo-light',
        r = window.GLOBAL_ENV.CDN_HOST,
        o = '?size=256';
    return null != r ? ''.concat(location.protocol, '//').concat(r, '/promotions/').concat(e, '/').concat(n).concat(o) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/promotions/').concat(e, '/').concat(n).concat(o);
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
        await r.tn.get({
            url: f.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: o.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map(g);
}
async function b(e) {
    return g(
        (
            await r.tn.post({
                url: f.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e),
                rejectWithError: !1
            })
        ).body
    );
}
function y(e, t) {
    return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(_, encodeURIComponent(e)) : t.outboundRedemptionPageLink;
}
function v() {
    let e = u.Z.lastSeenOutboundPromotionStartDate,
        t = u.Z.outboundPromotions,
        n = u.Z.consumedInboundPromotionId,
        r = t.filter((e) => {
            let { id: t, flags: r } = e;
            return t !== n && !(0, l.yE)(r, d.TD.SUPPRESS_NOTIFICATION);
        }),
        i =
            null == e
                ? r
                : r.filter((t) => {
                      let { startDate: n } = t;
                      return new Date(n) > new Date(e);
                  }),
        o = u.Z.lastDismissedOutboundPromotionStartDate,
        c = a.ZP.getPremiumTypeSubscription(),
        f = (null == c ? void 0 : c.trialId) != null,
        _ = s.Z.hasAnyUnexpiredOffer(),
        p = f || _ ? i.filter((e) => I(e)) : i;
    return (
        0 !== p.length &&
        (null == o ||
            p.some((e) => {
                let { startDate: t } = e;
                return new Date(t) > new Date(o);
            }))
    );
}
function O(e) {
    return !(0, c.isIOS)() || !(0, l.yE)(e.flags, d.TD.IS_BLOCKED_IOS);
}
function I(e) {
    return (0, l.yE)(e.flags, d.TD.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS);
}
function S(e, t) {
    return null != t[e.id] || I(e);
}
