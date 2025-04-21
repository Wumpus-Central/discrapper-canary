n.d(t, {
    A2: () => T,
    BU: () => A,
    Pz: () => y,
    Qf: () => w,
    X_: () => v,
    ZC: () => R,
    a0: () => N,
    kr: () => O,
    t8: () => S,
    tq: () => C
}),
    n(997841),
    n(704826),
    n(35282),
    n(642613);
var r = n(544891),
    i = n(704215),
    a = n(780384),
    o = n(605236),
    s = n(706454),
    l = n(581883),
    c = n(78839),
    u = n(431),
    d = n(630388),
    f = n(358085),
    _ = n(709054),
    p = n(450839),
    h = n(1844),
    m = n(474936),
    g = n(981631);
let E = '{code}',
    b = 259200000;
function y(e, t) {
    let n = (0, a.wj)(t) ? 'logo-dark' : 'logo-light',
        r = window.GLOBAL_ENV.CDN_HOST,
        i = '?size=256';
    return null != r ? ''.concat(location.protocol, '//').concat(r, '/promotions/').concat(e, '/').concat(n).concat(i) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/promotions/').concat(e, '/').concat(n).concat(i);
}
function v(e) {
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
function O(e) {
    return {
        id: e.id,
        startDate: e.start_date,
        endDate: e.end_date
    };
}
function I(e) {
    return {
        code: e.code,
        userId: e.user_id,
        claimedAt: e.claimed_at,
        promotion: v(e.promotion)
    };
}
async function S() {
    return (
        await r.tn.get({
            url: g.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: s.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map(I);
}
async function T(e) {
    return I(
        (
            await r.tn.post({
                url: g.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e),
                rejectWithError: !1
            })
        ).body
    );
}
function A(e, t) {
    return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(E, encodeURIComponent(e)) : t.outboundRedemptionPageLink;
}
function N() {
    var e, t;
    let n = h.Z.outboundPromotions,
        r = h.Z.consumedInboundPromotionId,
        a = n.filter((e) => {
            let { id: t, flags: n } = e;
            return t !== r && !(0, d.yE)(n, m.TD.SUPPRESS_NOTIFICATION);
        }),
        o = null == (t = l.Z.settings.userContent) || null == (e = t.recurringDismissibleContentStates[i.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) ? void 0 : e.lastDismissedObjectId,
        s =
            null == o
                ? a
                : a.filter((e) => {
                      let { id: t } = e;
                      return 1 === _.default.compare(t, o);
                  }),
        f = c.ZP.getPremiumTypeSubscription(),
        p = !!(null == f ? void 0 : f.hasActiveTrial),
        g = u.Z.hasAnyUnexpiredOffer(),
        E = p || g ? s.filter((e) => P(e)) : s;
    return 0 === E.length ? null : E.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function C() {
    if ((0, p.A7)('outbound_promotion_notice')) {
        let e = N();
        return null != e && !(0, o.UJ)(i.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: b });
    }
    {
        let e = h.Z.outboundPromotions,
            t = h.Z.consumedInboundPromotionId,
            n = e.filter((e) => {
                let { id: n, flags: r } = e;
                return n !== t && !(0, d.yE)(r, m.TD.SUPPRESS_NOTIFICATION);
            }),
            r = h.Z.lastSeenOutboundPromotionStartDate,
            i =
                null == r
                    ? n
                    : n.filter((e) => {
                          let { startDate: t } = e;
                          return new Date(t) > new Date(r);
                      }),
            a = c.ZP.getPremiumTypeSubscription(),
            o = (null == a ? void 0 : a.trialId) != null,
            s = u.Z.hasAnyUnexpiredOffer(),
            l = o || s ? i.filter((e) => P(e)) : i;
        if (0 === l.length) return !1;
        let f = h.Z.lastDismissedOutboundPromotionStartDate;
        return (
            null == f ||
            l.some((e) => {
                let { startDate: t } = e;
                return new Date(t) > new Date(f);
            })
        );
    }
}
function R(e) {
    return !(0, f.isIOS)() || !(0, d.yE)(e.flags, m.TD.IS_BLOCKED_IOS);
}
function P(e) {
    return (0, d.yE)(e.flags, m.TD.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS);
}
function w(e, t) {
    return null != t[e.id] || P(e);
}
