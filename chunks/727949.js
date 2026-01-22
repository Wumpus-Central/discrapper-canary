n.d(t, {
    GQ: () => d,
    NF: () => _,
    QG: () => p,
    Tp: () => g,
    ZR: () => f,
    ne: () => h,
});
var r = n(311907),
    i = n(554146),
    a = n(826673),
    s = n(927813),
    o = n(661191),
    l = n(851746),
    c = n(103411),
    u = n(985018);

function d(e) {
    let t = (e - Date.now()) / s.A.Millis.HOUR;
    return t > 24
        ? u.intl.formatToPlainString(u.t["g9s+dA"], {
              numDays: Math.floor(t / 24),
          })
        : t >= 1
          ? u.intl.formatToPlainString(u.t.k9v33y, {
                numHours: Math.floor(t),
            })
          : u.intl.formatToPlainString(u.t["/d0GmT"], {
                numMinutes: Math.floor(60 * t),
            });
}
let f = () => (0, a.k8)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    p = () => {
        (0, a.Dr)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    _ = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            r = void 0 === t.redeemed_at,
            i = new Date(o.default.extractTimestamp(t.id)),
            a = new Date() >= i;
        return n && r && a;
    },
    h = () => {
        (0, a.Dr)(i.M.REFERRAL_PROGRAM_POPOVER);
    },
    m = () => (0, a.k8)(i.M.REFERRAL_PROGRAM_POPOVER),
    g = () => {
        let e = (0, c.m)(!1),
            t = m(),
            n = (0, r.bG)([l.A], () => l.A.getReferralsRemaining());
        return e && !1 === t && null !== n && n > 0;
    };
