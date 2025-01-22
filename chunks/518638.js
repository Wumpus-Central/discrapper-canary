r.d(n, {
    A2: function () {
        return I;
    },
    BU: function () {
        return T;
    },
    Pz: function () {
        return g;
    },
    Qf: function () {
        return N;
    },
    X_: function () {
        return E;
    },
    ZC: function () {
        return A;
    },
    kr: function () {
        return v;
    },
    t8: function () {
        return b;
    },
    tq: function () {
        return S;
    }
});
var i = r(789020);
var a = r(757143);
var o = r(544891),
    s = r(780384),
    l = r(706454),
    u = r(78839),
    c = r(431),
    d = r(630388),
    f = r(358085),
    p = r(1844),
    h = r(474936),
    _ = r(981631);
let m = '{code}';
function g(e, n) {
    let r = (0, s.wj)(n) ? 'logo-dark' : 'logo-light',
        i = window.GLOBAL_ENV.CDN_HOST,
        a = '?size=256';
    return null != i ? ''.concat(location.protocol, '//').concat(i, '/promotions/').concat(e, '/').concat(r).concat(a) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/promotions/').concat(e, '/').concat(r).concat(a);
}
function E(e) {
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
function v(e) {
    return {
        id: e.id,
        startDate: e.start_date,
        endDate: e.end_date
    };
}
function y(e) {
    return {
        code: e.code,
        userId: e.user_id,
        claimedAt: e.claimed_at,
        promotion: E(e.promotion)
    };
}
async function b() {
    return (
        await o.tn.get({
            url: _.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: l.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map(y);
}
async function I(e) {
    return y(
        (
            await o.tn.post({
                url: _.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e),
                rejectWithError: !1
            })
        ).body
    );
}
function T(e, n) {
    return null != n.outboundRedemptionUrlFormat ? n.outboundRedemptionUrlFormat.replace(m, encodeURIComponent(e)) : n.outboundRedemptionPageLink;
}
function S() {
    let e = p.Z.lastSeenOutboundPromotionStartDate,
        n = p.Z.outboundPromotions,
        r = p.Z.consumedInboundPromotionId,
        i = n.filter((e) => {
            let { id: n, flags: i } = e;
            return n !== r && !(0, d.yE)(i, h.TD.SUPPRESS_NOTIFICATION);
        }),
        a =
            null == e
                ? i
                : i.filter((n) => {
                      let { startDate: r } = n;
                      return new Date(r) > new Date(e);
                  }),
        o = p.Z.lastDismissedOutboundPromotionStartDate,
        s = u.ZP.getPremiumTypeSubscription(),
        l = (null == s ? void 0 : s.trialId) != null,
        f = c.Z.hasAnyUnexpiredOffer(),
        _ = l || f ? a.filter((e) => C(e)) : a;
    return (
        0 !== _.length &&
        (null == o ||
            _.some((e) => {
                let { startDate: n } = e;
                return new Date(n) > new Date(o);
            }))
    );
}
function A(e) {
    return !(0, f.isIOS)() || !(0, d.yE)(e.flags, h.TD.IS_BLOCKED_IOS);
}
function C(e) {
    return (0, d.yE)(e.flags, h.TD.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS);
}
function N(e, n) {
    return null != n[e.id] || C(e);
}
