n.d(t, { GQ: () => u, NF: () => N, QG: () => d, Tp: () => O, ZR: () => T, ne: () => R });
var i = n(17928),
    l = n(554146),
    r = n(826673),
    s = n(367727),
    a = n(927813),
    E = n(935208),
    o = n(851746),
    _ = n(894374),
    c = n(103411),
    A = n(49999),
    I = n(985018);
function u(e) {
    let t = (e - Date.now()) / a.A.Millis.HOUR;
    return t > 24
        ? I.intl.formatToPlainString(I.t["g9s+dA"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? I.intl.formatToPlainString(I.t.k9v33y, { numHours: Math.floor(t) })
          : I.intl.formatToPlainString(I.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
}
let T = () => (0, r.k8)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    d = () => {
        (0, r.Dr)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    N = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            i = void 0 === t.redeemed_at,
            l = new Date(E.default.extractTimestamp(t.id)),
            r = new Date();
        return n && i && r >= l;
    },
    R = (e) => {
        null != e
            ? (0, s.qr)(l.M.REFERRAL_PROGRAM_POPOVER_V2, e, { dismissAction: A.i.INDIRECT_ACTION })
            : (0, r.Dr)(l.M.REFERRAL_PROGRAM_POPOVER);
    },
    O = () => {
        let e,
            t = (0, c.m)(!1),
            n = (0, i.bG)([o.A], () => o.A.getReferralsRemaining()),
            s = (0, i.bG)([o.A], () => o.A.getReminderStateId());
        return (
            (e = (0, _.A)({ location: "ReferralProgramUtils" })
                ? null != s && !(0, r.u$)(l.M.REFERRAL_PROGRAM_POPOVER_V2, s).isDismissed
                : !(0, r.k8)(l.M.REFERRAL_PROGRAM_POPOVER)),
            t && e && null != n && n > 0
        );
    };
