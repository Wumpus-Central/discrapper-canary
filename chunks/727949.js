n.d(t, { GQ: () => T, NF: () => N, QG: () => I, Tp: () => S, ZR: () => d, ne: () => R });
var i = n(17928),
    l = n(554146),
    r = n(826673),
    s = n(367727),
    a = n(927813),
    o = n(935208),
    E = n(851746),
    c = n(894374),
    u = n(103411),
    _ = n(49999),
    A = n(375708);
function T(e) {
    let t = (e - Date.now()) / a.A.Millis.HOUR;
    return t > 24
        ? A.intl.formatToPlainString(A.t["g9s+dA"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? A.intl.formatToPlainString(A.t.k9v33y, { numHours: Math.floor(t) })
          : A.intl.formatToPlainString(A.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
}
function d() {
    return (0, r.k8)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
}
function I() {
    (0, r.Dr)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
}
function N(e) {
    let { trialOffer: t } = e;
    if (null == t) return !1;
    let n = void 0 !== t.referrer_id,
        i = void 0 === t.redeemed_at,
        l = new Date(o.default.extractTimestamp(t.id)),
        r = new Date();
    return n && i && r >= l;
}
function R(e) {
    null != e
        ? (0, s.qr)(l.M.REFERRAL_PROGRAM_POPOVER_V2, e, { dismissAction: _.i.INDIRECT_ACTION })
        : (0, r.Dr)(l.M.REFERRAL_PROGRAM_POPOVER);
}
function S() {
    let e,
        t = (0, u.m)(!1),
        n = (0, i.bG)([E.A], () => E.A.getReferralsRemaining()),
        s = (0, i.bG)([E.A], () => E.A.getReminderStateId());
    return (
        (e = (0, c.A)({ location: "ReferralProgramUtils" })
            ? null != s && !(0, r.u$)(l.M.REFERRAL_PROGRAM_POPOVER_V2, s).isDismissed
            : !(0, r.k8)(l.M.REFERRAL_PROGRAM_POPOVER)),
        t && e && null != n && n > 0
    );
}
