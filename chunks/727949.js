n.d(t, { GQ: () => h, NF: () => A, QG: () => g, Tp: () => x, ZR: () => p, ne: () => f });
var i = n(311907),
    l = n(554146),
    a = n(826673),
    r = n(367727),
    s = n(927813),
    o = n(661191),
    d = n(851746),
    c = n(894374),
    u = n(103411),
    m = n(49999),
    _ = n(985018);
function h(e) {
    let t = (e - Date.now()) / s.A.Millis.HOUR;
    return t > 24
        ? _.intl.formatToPlainString(_.t["g9s+dA"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? _.intl.formatToPlainString(_.t.k9v33y, { numHours: Math.floor(t) })
          : _.intl.formatToPlainString(_.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
}
let p = () => (0, a.k8)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    g = () => {
        (0, a.Dr)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    A = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            i = void 0 === t.redeemed_at,
            l = new Date(o.default.extractTimestamp(t.id)),
            a = new Date();
        return n && i && a >= l;
    },
    f = (e) => {
        null != e
            ? (0, r.qr)(l.M.REFERRAL_PROGRAM_POPOVER_V2, e, { dismissAction: m.i.INDIRECT_ACTION })
            : (0, a.Dr)(l.M.REFERRAL_PROGRAM_POPOVER);
    },
    x = () => {
        let e,
            t = (0, u.m)(!1),
            n = (0, i.bG)([d.A], () => d.A.getReferralsRemaining()),
            r = (0, i.bG)([d.A], () => d.A.getReminderStateId());
        return (
            (e = (0, c.A)({ location: "ReferralProgramUtils" })
                ? null != r && !(0, a.u$)(l.M.REFERRAL_PROGRAM_POPOVER_V2, r).isDismissed
                : !(0, a.k8)(l.M.REFERRAL_PROGRAM_POPOVER)),
            t && e && null != n && n > 0
        );
    };
