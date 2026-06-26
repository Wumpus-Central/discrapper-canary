"use strict";
n.d(t, {
    Cp: () => S,
    HB: () => O,
    Ng: () => A,
    OP: () => N,
    So: () => y,
    WD: () => g,
    Wl: () => R,
    dG: () => C,
    eN: () => v,
    kc: () => T,
    kd: () => I,
}),
    n(938796);
var i = n(665260),
    r = n(636537),
    s = n(554146),
    a = n(462887),
    o = n(367727),
    l = n(617617),
    u = n(835095),
    c = n(174459),
    d = n(723702),
    _ = n(935208),
    h = n(374200),
    f = n(852218),
    p = n(788868),
    E = n(652215),
    m = n(360469);
function g(e, t) {
    let n = (0, a.M)(t) ? "logo-dark" : "logo-light",
        i = window.GLOBAL_ENV.CDN_HOST,
        r = "?size=256";
    return null != i
        ? `https://${i}/promotions/${e}/${n}${r}`
        : `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}/promotions/${e}/${n}${r}`;
}
function A(e) {
    return { code: e.code, userId: e.user_id, claimedAt: e.claimed_at, promotion: u.A.createFromServer(e.promotion) };
}
async function I(e) {
    let t,
        { promotionId: n, promotionTitle: i, partnerId: s, analyticsLocations: a } = e,
        o = await r.Bo.post({ url: E.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n), rejectWithError: !1 }),
        l = o.body;
    return (
        (t = m.vu.DESKTOP),
        c.default.track(E.HAw.OUTBOUND_PROMOTION_CLAIMED, {
            platform: t,
            status: o.status,
            location_stack: a,
            promotion_id: n,
            name: i ?? null,
            partner: s ?? null,
        }),
        A(l)
    );
}
function T(e, t) {
    return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat
        ? t.outboundRedemptionUrlFormat.replace("{code}", encodeURIComponent(e))
        : (t.outboundRedemptionPageLink ?? "");
}
function S() {
    let e = h.A.outboundPromotions,
        t = h.A.consumedInboundPromotionId,
        n = e.filter((e) => e.id !== t && !(0, i.Lt)(e.flags, p.$3.SUPPRESS_NOTIFICATION) && !C(e)),
        r =
            l.A.settings.userContent?.recurringDismissibleContentStates[s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]
                ?.lastDismissedObjectId,
        a =
            null == r
                ? n
                : n.filter((e) => {
                      let { id: t } = e;
                      return 1 === _.default.compare(t, r);
                  });
    return 0 === a.length ? null : a.sort((e, t) => (new Date(e.startDate) < new Date(t.startDate) ? -1 : 1))[0].id;
}
function y() {
    let e = S();
    return null != e && !(0, o.j6)(s.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, { cooldownDurationMs: 2592e5 });
}
function C(e) {
    return e.partnerId === f.XY;
}
function N(e) {
    return !(0, d.isIOS)() || !e.hasFlag(p.$3.IS_BLOCKED_IOS);
}
function v(e) {
    let t = {};
    for (let { code: n, promotion: i } of e) t[i.id] = n;
    return t;
}
function R(e, t) {
    let n = new Set(
        t.map((e) => {
            let { id: t } = e;
            return t;
        }),
    );
    return e.filter((e) => {
        let { promotion: t } = e;
        return !n.has(t.id) && !O(t) && !C(t) && N(t);
    });
}
function O(e) {
    let { promotionType: t } = e;
    return t === f.pt.THIRD_PARTY_OUTBOUND_RECURRING;
}
