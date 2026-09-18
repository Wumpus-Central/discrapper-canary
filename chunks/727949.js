n.d(t, { GQ: () => d, NF: () => N, QG: () => I, Tp: () => S, ZR: () => T, ne: () => R, sZ: () => C });
var i = n(17928),
    l = n(554146),
    r = n(826673),
    s = n(367727),
    a = n(617617),
    o = n(927813),
    E = n(935208),
    c = n(851746),
    u = n(103411),
    _ = n(49999),
    A = n(375708);
function d(e) {
    let t = (e - Date.now()) / o.A.Millis.HOUR;
    return t > 24
        ? A.intl.formatToPlainString(A.t["g9s+dA"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? A.intl.formatToPlainString(A.t.k9v33y, { numHours: Math.floor(t) })
          : A.intl.formatToPlainString(A.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
}
function T() {
    return (0, r.k8)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
}
function I() {
    (0, r.Dr)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
}
function N(e) {
    let { trialOffer: t } = e;
    if (null == t) return !1;
    let n = t.isReferralTrial,
        i = !t.isRedeemed,
        l = new Date(E.default.extractTimestamp(t.id)),
        r = new Date();
    return n && i && r >= l;
}
function R(e) {
    null != e && (0, s.qr)(l.M.REFERRAL_PROGRAM_POPOVER_V2, e, { dismissAction: _.i.INDIRECT_ACTION });
}
function C() {
    (0, r.Dr)(l.M.REFERRAL_PROGRAM_INCENTIVE_POPOVER);
}
function S() {
    let e = (0, u.m)(!1),
        t = (0, i.bG)([c.A], () => c.A.getReferralsRemaining()),
        n = (0, i.bG)([c.A], () => c.A.getReminderStateId()),
        s = (0, i.bG)([a.A], () => null != n && (0, r.u$)(l.M.REFERRAL_PROGRAM_POPOVER_V2, n).isDismissed);
    return null != n && e && !s && null != t && t > 0;
}
