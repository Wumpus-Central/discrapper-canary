"use strict";
n.d(t, { GQ: () => h, NF: () => m, QG: () => E, Tp: () => A, ZR: () => p, ne: () => g });
var i = n(17928),
    r = n(554146),
    s = n(826673),
    a = n(281678),
    o = n(927813),
    l = n(935208),
    u = n(851746),
    c = n(894374),
    d = n(103411),
    _ = n(49999),
    f = n(375708);
function h(e) {
    let t = (e - Date.now()) / o.A.Millis.HOUR;
    return t > 24
        ? f.intl.formatToPlainString(f.t["g9s+dA"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? f.intl.formatToPlainString(f.t.k9v33y, { numHours: Math.floor(t) })
          : f.intl.formatToPlainString(f.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
}
let p = () => (0, s.k8)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    E = () => {
        (0, s.Dr)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    m = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            i = void 0 === t.redeemed_at,
            r = new Date(l.default.extractTimestamp(t.id)),
            s = new Date();
        return n && i && s >= r;
    },
    g = (e) => {
        null != e
            ? (0, a.qr)(r.M.REFERRAL_PROGRAM_POPOVER_V2, e, { dismissAction: _.i.INDIRECT_ACTION })
            : (0, s.Dr)(r.M.REFERRAL_PROGRAM_POPOVER);
    },
    A = () => {
        let e,
            t = (0, d.m)(!1),
            n = (0, i.bG)([u.A], () => u.A.getReferralsRemaining()),
            a = (0, i.bG)([u.A], () => u.A.getReminderStateId());
        return (
            (e = (0, c.A)({ location: "ReferralProgramUtils" })
                ? null != a && !(0, s.u$)(r.M.REFERRAL_PROGRAM_POPOVER_V2, a).isDismissed
                : !(0, s.k8)(r.M.REFERRAL_PROGRAM_POPOVER)),
            t && e && null != n && n > 0
        );
    };
