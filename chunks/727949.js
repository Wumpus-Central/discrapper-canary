n.d(t, { GQ: () => u, NF: () => h, QG: () => _, Tp: () => g, ZR: () => m, ne: () => p });
var i = n(311907),
    l = n(554146),
    a = n(826673),
    r = n(927813),
    s = n(661191),
    o = n(851746),
    d = n(103411),
    c = n(985018);
function u(e) {
    let t = (e - Date.now()) / r.A.Millis.HOUR;
    return t > 24
        ? c.intl.formatToPlainString(c.t["g9s+dA"], { numDays: Math.floor(t / 24) })
        : t >= 1
          ? c.intl.formatToPlainString(c.t.k9v33y, { numHours: Math.floor(t) })
          : c.intl.formatToPlainString(c.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
}
let m = () => (0, a.k8)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    _ = () => {
        (0, a.Dr)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    h = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            i = void 0 === t.redeemed_at,
            l = new Date(s.default.extractTimestamp(t.id)),
            a = new Date();
        return n && i && a >= l;
    },
    p = () => {
        (0, a.Dr)(l.M.REFERRAL_PROGRAM_POPOVER);
    },
    g = () => {
        let e = (0, d.m)(!1),
            t = (0, a.k8)(l.M.REFERRAL_PROGRAM_POPOVER),
            n = (0, i.bG)([o.A], () => o.A.getReferralsRemaining());
        return e && !1 === t && null !== n && n > 0;
    };
