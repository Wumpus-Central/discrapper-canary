var i = n(855986),
    r = n(554146),
    l = n(826673),
    u = n(543862),
    s = n(617617),
    o = n(927813),
    a = n(811091),
    E = n(851746),
    d = n(103411),
    _ = n(49999),
    c = n(792996);
n.d(
    e,
    {},
    {
        GQ: function (t) {
            let e = (t - Date.now()) / o.A.Millis.HOUR;
            return e > 24
                ? c.intl.formatToPlainString(c.t["g9s+dA"], { numDays: Math.floor(e / 24) })
                : e >= 1
                  ? c.intl.formatToPlainString(c.t.k9v33y, { numHours: Math.floor(e) })
                  : c.intl.formatToPlainString(c.t["/d0GmT"], { numMinutes: Math.floor(60 * e) });
        },
        NF: function (t) {
            let { trialOffer: e } = t;
            if (null == e) return !1;
            let n = e.isReferralTrial,
                i = !e.isRedeemed,
                r = new Date(a.default.extractTimestamp(e.id)),
                l = new Date();
            return n && i && l >= r;
        },
        QG: function () {
            (0, l.Dr)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
        },
        Tp: function () {
            let t = (0, d.m)(!1),
                e = (0, i.bG)([E.A], () => E.A.getReferralsRemaining()),
                n = (0, i.bG)([E.A], () => E.A.getReminderStateId()),
                u = (0, i.bG)([s.A], () => null != n && (0, l.u$)(r.M.REFERRAL_PROGRAM_POPOVER_V2, n).isDismissed);
            return null != n && t && !u && null != e && e > 0;
        },
        ZR: function () {
            return (0, l.k8)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
        },
        ne: function (t) {
            null != t && (0, u.qr)(r.M.REFERRAL_PROGRAM_POPOVER_V2, t, { dismissAction: _.i.INDIRECT_ACTION });
        },
    },
);
