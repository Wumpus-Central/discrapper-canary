var i = n(855986),
    l = n(554146),
    r = n(826673),
    s = n(543862),
    a = n(617617),
    u = n(927813),
    o = n(811091),
    d = n(851746),
    c = n(103411),
    E = n(49999),
    _ = n(792996);
n.d(
    e,
    {},
    {
        GQ: function (t) {
            let e = (t - Date.now()) / u.A.Millis.HOUR;
            return e > 24
                ? _.intl.formatToPlainString(_.t["g9s+dA"], { numDays: Math.floor(e / 24) })
                : e >= 1
                  ? _.intl.formatToPlainString(_.t.k9v33y, { numHours: Math.floor(e) })
                  : _.intl.formatToPlainString(_.t["/d0GmT"], { numMinutes: Math.floor(60 * e) });
        },
        NF: function (t) {
            let { trialOffer: e } = t;
            if (null == e) return !1;
            let n = e.isReferralTrial,
                i = !e.isRedeemed,
                l = new Date(o.default.extractTimestamp(e.id)),
                r = new Date();
            return n && i && r >= l;
        },
        QG: function () {
            (0, r.Dr)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
        },
        Tp: function () {
            let t = (0, c.m)(!1),
                e = (0, i.bG)([d.A], () => d.A.getReferralsRemaining()),
                n = (0, i.bG)([d.A], () => d.A.getReminderStateId()),
                s = (0, i.bG)([a.A], () => null != n && (0, r.u$)(l.M.REFERRAL_PROGRAM_POPOVER_V2, n).isDismissed);
            return null != n && t && !s && null != e && e > 0;
        },
        ZR: function () {
            return (0, r.k8)(l.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
        },
        ne: function (t) {
            null != t && (0, s.qr)(l.M.REFERRAL_PROGRAM_POPOVER_V2, t, { dismissAction: E.i.INDIRECT_ACTION });
        },
        sZ: function () {
            (0, r.Dr)(l.M.REFERRAL_PROGRAM_INCENTIVE_POPOVER);
        },
    },
);
