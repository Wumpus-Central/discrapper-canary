n.d(t, {
    GQ: () => d,
    NF: () => f,
    QG: () => m,
    Tp: () => h,
    ZR: () => p,
    ne: () => g,
});
var r = n(311907),
    i = n(554146),
    l = n(826673),
    a = n(927813),
    s = n(661191),
    o = n(851746),
    c = n(103411),
    u = n(985018);

function d(e) {
    let t = (e - Date.now()) / a.A.Millis.HOUR;
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
let p = () => (0, l.k8)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    m = () => {
        (0, l.Dr)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
    },
    f = (e) => {
        let { trialOffer: t } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            r = void 0 === t.redeemed_at,
            i = new Date(s.default.extractTimestamp(t.id)),
            l = new Date();
        return n && r && l >= i;
    },
    g = () => {
        (0, l.Dr)(i.M.REFERRAL_PROGRAM_POPOVER);
    },
    h = () => {
        let e = (0, c.m)(!1),
            t = (0, l.k8)(i.M.REFERRAL_PROGRAM_POPOVER),
            n = (0, r.bG)([o.A], () => o.A.getReferralsRemaining());
        return e && !1 === t && null !== n && n > 0;
    };
