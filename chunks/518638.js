n.d(t, {
    A2: () => A,
    BU: () => C,
    Pz: () => I,
    Qf: () => D,
    ZC: () => P,
    a0: () => N,
    pD: () => w,
    t8: () => S,
    tq: () => R,
}),
    n(704826),
    n(35282),
    n(997841),
    n(642613);
var r = n(95015),
    i = n(544891),
    a = n(704215),
    o = n(780384),
    s = n(605236),
    l = n(706454),
    c = n(581883),
    u = n(605338),
    d = n(78839),
    f = n(431),
    _ = n(626135),
    p = n(358085),
    h = n(709054),
    m = n(1844),
    g = n(397047),
    E = n(474936),
    b = n(981631),
    y = n(701488);
let O = "{code}",
    v = 259200000;
function I(e, t) {
    let n = (0, o.wj)(t) ? "logo-dark" : "logo-light",
        r = window.GLOBAL_ENV.CDN_HOST,
        i = "?size=256";
    return null != r
        ? "https://".concat(r, "/promotions/").concat(e, "/").concat(n).concat(i)
        : ""
              .concat(location.protocol)
              .concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/")
              .concat(e, "/")
              .concat(n)
              .concat(i);
}
function T(e) {
    return {
        code: e.code,
        userId: e.user_id,
        claimedAt: e.claimed_at,
        promotion: u.Z.createFromServer(e.promotion),
    };
}
async function S() {
    return (
        await i.tn.get({
            url: b.ANM.CLAIMED_OUTBOUND_PROMOTION_CODES,
            query: { locale: l.default.locale },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
    ).body.map(T);
}
async function A(e) {
    let t,
        { promotionId: n, analyticsLocations: r } = e,
        a = await i.tn.post({
            url: b.ANM.CLAIM_OUTBOUND_PROMOTION_CODE(n),
            rejectWithError: !1,
        }),
        o = a.body;
    return (
        (t = y.S4.DESKTOP),
        _.default.track(b.rMx.OUTBOUND_PROMOTION_CLAIMED, {
            platform: t,
            status: a.status,
            location_stack: r,
        }),
        T(o)
    );
}
function C(e, t) {
    var n;
    return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat
        ? t.outboundRedemptionUrlFormat.replace(O, encodeURIComponent(e))
        : null != (n = t.outboundRedemptionPageLink)
          ? n
          : "";
}
function N() {
    var e, t;
    let n = m.Z.outboundPromotions,
        i = m.Z.consumedInboundPromotionId,
        o = n.filter((e) => {
            let { id: t, flags: n } = e;
            return t !== i && !(0, r.yE)(n, E.TD.SUPPRESS_NOTIFICATION);
        }),
        s =
            null == (t = c.Z.settings.userContent) ||
            null == (e = t.recurringDismissibleContentStates[a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR])
                ? void 0
                : e.lastDismissedObjectId,
        l =
            null == s
                ? o
                : o.filter((e) => {
                      let { id: t } = e;
                      return 1 === h.default.compare(t, s);
                  }),
        u = d.Z.getPremiumTypeSubscription(),
        _ = !!(null == u ? void 0 : u.hasActiveTrial),
        p = f.Z.hasAnyUnexpiredOffer(),
        g = _ || p ? l.filter((e) => e.isRedeemableByTrialUsers()) : l;
    return 0 === g.length ? null : g.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function R() {
    let e = N();
    return null != e && !(0, s.UJ)(a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: v });
}
function P(e) {
    return !(0, p.isIOS)() || !e.hasFlag(E.TD.IS_BLOCKED_IOS);
}
function D(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers();
}
function w(e) {
    let { promotionPartner: t } = e;
    return g.Ce.has(t.toLocaleLowerCase());
}
