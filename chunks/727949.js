"use strict";
s.d(t, { GQ: () => R, NF: () => S, QG: () => I, Tp: () => f, ZR: () => p, ne: () => h });
var r = s(311907),
    i = s(554146),
    n = s(826673),
    a = s(367727),
    l = s(927813),
    u = s(661191),
    c = s(851746),
    o = s(894374),
    d = s(103411),
    E = s(49999),
    _ = s(985018);
function R(e) {
    let t = (e - Date.now()) / l.A.Millis.HOUR;
    return t > 24
        ? _.intl.formatToPlainString(_.t["g9s+dA"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? _.intl.formatToPlainString(_.t.k9v33y, { numHours: Math.floor(t) })
          : _.intl.formatToPlainString(_.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
}
let p = () => (0, n.k8)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    I = () => {
        (0, n.Dr)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    S = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let s = void 0 !== t.referrer_id,
            r = void 0 === t.redeemed_at,
            i = new Date(u.default.extractTimestamp(t.id)),
            n = new Date();
        return s && r && n >= i;
    },
    h = (e) => {
        null != e
            ? (0, a.qr)(i.M.REFERRAL_PROGRAM_POPOVER_V2, e, { dismissAction: E.i.INDIRECT_ACTION })
            : (0, n.Dr)(i.M.REFERRAL_PROGRAM_POPOVER);
    },
    f = () => {
        let e,
            t = (0, d.m)(!1),
            s = (0, r.bG)([c.A], () => c.A.getReferralsRemaining()),
            a = (0, r.bG)([c.A], () => c.A.getReminderStateId());
        return (
            (e = (0, o.A)({ location: "ReferralProgramUtils" })
                ? null != a && !(0, n.u$)(i.M.REFERRAL_PROGRAM_POPOVER_V2, a).isDismissed
                : !(0, n.k8)(i.M.REFERRAL_PROGRAM_POPOVER)),
            t && e && null != s && s > 0
        );
    };
