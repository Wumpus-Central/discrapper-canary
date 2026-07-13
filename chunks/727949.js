"use strict";
n.d(t, { GQ: () => A, NF: () => f, QG: () => I, Tp: () => T, ZR: () => h, ne: () => p });
var i = n(17928),
    r = n(554146),
    a = n(826673),
    s = n(367727),
    l = n(927813),
    o = n(935208),
    d = n(851746),
    c = n(894374),
    u = n(103411),
    _ = n(49999),
    E = n(375708);
function A(e) {
    let t = (e - Date.now()) / l.A.Millis.HOUR;
    return t > 24
        ? E.intl.formatToPlainString(E.t["g9s+dA"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? E.intl.formatToPlainString(E.t.k9v33y, { numHours: Math.floor(t) })
          : E.intl.formatToPlainString(E.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
}
function h() {
    return (0, a.k8)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
}
function I() {
    (0, a.Dr)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
}
function f(e) {
    let { trialOffer: t } = e;
    if (null == t) return !1;
    let n = void 0 !== t.referrer_id,
        i = void 0 === t.redeemed_at,
        r = new Date(o.default.extractTimestamp(t.id)),
        a = new Date();
    return n && i && a >= r;
}
function p(e) {
    null != e
        ? (0, s.qr)(r.M.REFERRAL_PROGRAM_POPOVER_V2, e, { dismissAction: _.i.INDIRECT_ACTION })
        : (0, a.Dr)(r.M.REFERRAL_PROGRAM_POPOVER);
}
let T = () => {
    let e,
        t = (0, u.m)(!1),
        n = (0, i.bG)([d.A], () => d.A.getReferralsRemaining()),
        s = (0, i.bG)([d.A], () => d.A.getReminderStateId());
    return (
        (e = (0, c.A)({ location: "ReferralProgramUtils" })
            ? null != s && !(0, a.u$)(r.M.REFERRAL_PROGRAM_POPOVER_V2, s).isDismissed
            : !(0, a.k8)(r.M.REFERRAL_PROGRAM_POPOVER)),
        t && e && null != n && n > 0
    );
};
