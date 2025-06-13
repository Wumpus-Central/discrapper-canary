n.d(t, {
    A2: () => T,
    BU: () => S,
    Pz: () => O,
    Qf: () => R,
    ZC: () => C,
    a0: () => A,
    t8: () => I,
    tq: () => N
}),
    n(704826),
    n(35282),
    n(997841),
    n(642613);
var r = n(544891),
    i = n(704215),
    a = n(780384),
    o = n(605236),
    s = n(706454),
    l = n(581883),
    c = n(605338),
    u = n(78839),
    d = n(431),
    _ = n(630388),
    f = n(358085),
    p = n(709054),
    h = n(450839),
    m = n(1844),
    g = n(474936),
    E = n(981631);
let b = '{code}',
    y = 259200000;
function O(e, t) {
    let n = (0, a.wj)(t) ? 'logo-dark' : 'logo-light',
        r = window.GLOBAL_ENV.CDN_HOST,
        i = '?size=256';
    return null != r ? 'https://'.concat(r, '/promotions/').concat(e, '/').concat(n).concat(i) : ''.concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, '/promotions/').concat(e, '/').concat(n).concat(i);
}
function v(e) {
    return {
        code: e.code,
        userId: e.user_id,
        claimedAt: e.claimed_at,
        promotion: c.Z.createFromServer(e.promotion)
    };
}
async function I() {
    return (
        await r.tn.get({
            url: E.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: s.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1
        })
    ).body.map(v);
}
async function T(e) {
    return v(
        (
            await r.tn.post({
                url: E.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(e),
                rejectWithError: !1
            })
        ).body
    );
}
function S(e, t) {
    var n;
    return null != t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(b, encodeURIComponent(e)) : null != (n = t.outboundRedemptionPageLink) ? n : '';
}
function A() {
    var e, t;
    let n = m.Z.outboundPromotions,
        r = m.Z.consumedInboundPromotionId,
        a = n.filter((e) => {
            let { id: t, flags: n } = e;
            return t !== r && !(0, _.yE)(n, g.TD.SUPPRESS_NOTIFICATION);
        }),
        o = null == (t = l.Z.settings.userContent) || null == (e = t.recurringDismissibleContentStates[i.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) ? void 0 : e.lastDismissedObjectId,
        s =
            null == o
                ? a
                : a.filter((e) => {
                      let { id: t } = e;
                      return 1 === p.default.compare(t, o);
                  }),
        c = u.ZP.getPremiumTypeSubscription(),
        f = !!(null == c ? void 0 : c.hasActiveTrial),
        h = d.Z.hasAnyUnexpiredOffer(),
        E = f || h ? s.filter((e) => e.isRedeemableByTrialUsers()) : s;
    return 0 === E.length ? null : E.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function N() {
    if ((0, h.A7)('outbound_promotion_notice')) {
        let e = A();
        return null != e && !(0, o.UJ)(i.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: y });
    }
    {
        let e = m.Z.outboundPromotions,
            t = m.Z.consumedInboundPromotionId,
            n = e.filter((e) => {
                let { id: n, flags: r } = e;
                return n !== t && !(0, _.yE)(r, g.TD.SUPPRESS_NOTIFICATION);
            }),
            r = m.Z.lastSeenOutboundPromotionStartDate,
            i =
                null == r
                    ? n
                    : n.filter((e) => {
                          let { startDate: t } = e;
                          return new Date(t) > new Date(r);
                      }),
            a = u.ZP.getPremiumTypeSubscription(),
            o = (null == a ? void 0 : a.trialId) != null,
            s = d.Z.hasAnyUnexpiredOffer(),
            l = o || s ? i.filter((e) => e.isRedeemableByTrialUsers()) : i;
        if (0 === l.length) return !1;
        let c = m.Z.lastDismissedOutboundPromotionStartDate;
        return (
            null == c ||
            l.some((e) => {
                let { startDate: t } = e;
                return new Date(t) > new Date(c);
            })
        );
    }
}
function C(e) {
    return !(0, f.isIOS)() || !e.hasFlag(g.TD.IS_BLOCKED_IOS);
}
function R(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers();
}
