"use strict";
n.d(t, {
    Cp: () => S,
    HB: () => D,
    Ng: () => T,
    OP: () => R,
    So: () => N,
    WD: () => p,
    Wl: () => L,
    dG: () => C,
    eN: () => O,
    kc: () => g,
    kd: () => m,
}),
    n(938796);
var i = n(665260),
    r = n(636537),
    a = n(554146),
    s = n(462887),
    l = n(367727),
    o = n(617617),
    d = n(835095),
    c = n(174459),
    u = n(723702),
    _ = n(935208),
    E = n(412260),
    A = n(852218),
    h = n(202541),
    I = n(652215),
    f = n(360469);
function p(e, t) {
    let n = (0, s.M)(t) ? "logo-dark" : "logo-light",
        i = window.GLOBAL_ENV.CDN_HOST,
        r = "?size=256";
    return null != i
        ? `https://${i}/promotions/${e}/${n}${r}`
        : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/promotions/${e}/${n}${r}`;
}
function T(e) {
    return { code: e.code, userId: e.user_id, claimedAt: e.claimed_at, promotion: d.A.createFromServer(e.promotion) };
}
async function m(e) {
    let t,
        { promotionId: n, promotionTitle: i, partnerId: a, analyticsLocations: s } = e,
        l = await r.Bo.post({ url: I.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n), rejectWithError: (0, r.fT)() }),
        o = l.body;
    return (
        (t = f.vu.DESKTOP),
        c.default.track(I.HAw.OUTBOUND_PROMOTION_CLAIMED, {
            platform: t,
            status: l.status,
            location_stack: s,
            promotion_id: n,
            name: i ?? null,
            partner: a ?? null,
        }),
        T(o)
    );
}
function g(e, t) {
    return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat
        ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e))
        : (t.outboundRedemptionPageLink ?? "");
}
function S() {
    let e = E.A.outboundPromotions,
        t = E.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, i.Lt)(e.flags, h.$3.SUPPRESS_NOTIFICATION) && !C(e)),
        r =
            o.A.settings.userContent?.recurringDismissibleContentStates[a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]
                ?.lastDismissedObjectId,
        s =
            null == r
                ? n
                : n.filter((e) => {
                      let { id: t } = e;
                      return 1 === _.default.compare(t, r);
                  });
    return 0 === s.length ? null : s.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function N() {
    let e = S();
    return null != e && !(0, l.j6)(a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
}
function C(e) {
    return e.partnerId === A.XY;
}
function R(e) {
    return !(0, u.isIOS)() || !e.hasFlag(h.$3.IS_BLOCKED_IOS);
}
function O(e) {
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
        return !n.has(t.id) && !D(t) && !C(t) && R(t);
    });
}
function D(e) {
    let { promotionType: t } = e;
    return t === A.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
