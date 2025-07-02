(n.d(t, {
    A2: () => I,
    BU: () => T,
    Pz: () => y,
    Qf: () => C,
    ZC: () => N,
    a0: () => S,
    t8: () => v,
    tq: () => A
}),
    n(704826),
    n(35282),
    n(997841),
    n(642613));
var r = n(544891),
    i = n(704215),
    a = n(780384),
    o = n(605236),
    s = n(706454),
    l = n(581883),
    c = n(605338),
    u = n(78839),
    d = n(431),
    f = n(630388),
    _ = n(358085),
    p = n(709054),
    h = n(1844),
    m = n(474936),
    g = n(981631);
let E = '{code}',
    b = 259200000;
function y(e, t) {
    let n = (0, a.wj)(t) ? 'logo-dark' : 'logo-light',
        r = window.GLOBAL_ENV.CDN_HOST,
        i = '?size=256';
    return null != r ? 'https://'.concat(r, '/promotions/').concat(e, '/').concat(n).concat(i) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/promotions/').concat(e, '/').concat(n).concat(i);
}
function O(e) {
    return {
        code: e.code,
        userId: e.user_id,
        claimedAt: e.claimed_at,
        promotion: c.Z.createFromServer(e.promotion)
    };
}
async function v() {
    return (
        await r.tn.get({
            url: g.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: s.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map(O);
}
async function I(e) {
    return O(
        (
            await r.tn.post({
                url: g.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e),
                rejectWithError: !1
            })
        ).body
    );
}
function T(e, t) {
    var n;
    return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(E, encodeURIComponent(e)) : null != (n = t.outboundRedemptionPageLink) ? n : '';
}
function S() {
    var e, t;
    let n = h.Z.outboundPromotions,
        r = h.Z.consumedInboundPromotionId,
        a = n.filter((e) => {
            let { id: t, flags: n } = e;
            return t !== r && !(0, f.yE)(n, m.TD.SUPPRESS_NOTIFICATION);
        }),
        o = null == (t = l.Z.settings.userContent) || null == (e = t.recurringDismissibleContentStates[i.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) ? void 0 : e.lastDismissedObjectId,
        s =
            null == o
                ? a
                : a.filter((e) => {
                      let { id: t } = e;
                      return 1 === p.default.compare(t, o);
                  }),
        c = u.Z.getPremiumTypeSubscription(),
        _ = !!(null == c ? void 0 : c.hasActiveTrial),
        g = d.Z.hasAnyUnexpiredOffer(),
        E = _ || g ? s.filter((e) => e.isRedeemableByTrialUsers()) : s;
    return 0 === E.length ? null : E.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function A() {
    let e = S();
    return null != e && !(0, o.UJ)(i.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: b });
}
function N(e) {
    return !(0, _.isIOS)() || !e.hasFlag(m.TD.IS_BLOCKED_IOS);
}
function C(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers();
}
