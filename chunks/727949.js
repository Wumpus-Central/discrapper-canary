n.d(t, { GQ: () => I, NF: () => R, QG: () => u, Tp: () => O, ZR: () => N, ne: () => d });
var i = n(17928),
    l = n(554146),
    r = n(826673),
    s = n(367727),
    a = n(927813),
    E = n(935208),
    _ = n(851746),
    o = n(894374),
    A = n(103411),
    c = n(49999),
    T = n(985018);
function I(e) {
    let t = (e - Date.now()) / a.A.Millis.HOUR;
    return t > 24
        ? T.intl.formatToPlainString(T.t["g9s+dA"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? T.intl.formatToPlainString(T.t.k9v33y, { numHours: Math.floor(t) })
          : T.intl.formatToPlainString(T.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
}
let N = () => (0, r.k8)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    u = () => {
        (0, r.Dr)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    R = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            i = void 0 === t.redeemed_at,
            l = new Date(E.default.extractTimestamp(t.id)),
            r = new Date();
        return n && i && r >= l;
    },
    d = (e) => {
        null != e
            ? (0, s.qr)(l.M.REFERRAL_PROGRAM_POPOVER_V2, e, { dismissAction: c.i.INDIRECT_ACTION })
            : (0, r.Dr)(l.M.REFERRAL_PROGRAM_POPOVER);
    },
    O = () => {
        let e,
            t = (0, A.m)(!1),
            n = (0, i.bG)([_.A], () => _.A.getReferralsRemaining()),
            s = (0, i.bG)([_.A], () => _.A.getReminderStateId());
        return (
            (e = (0, o.A)({ location: "ReferralProgramUtils" })
                ? null != s && !(0, r.u$)(l.M.REFERRAL_PROGRAM_POPOVER_V2, s).isDismissed
                : !(0, r.k8)(l.M.REFERRAL_PROGRAM_POPOVER)),
            t && e && null != n && n > 0
        );
    };
