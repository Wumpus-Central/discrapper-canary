var s = r(512722),
    i = r.n(s),
    a = r(442837),
    n = r(276444),
    l = r(388032);
t.Z = (e) => {
    let { numNewSelected: t, anySelected: r } = e,
        s = (0, a.e7)([n.Z], () => n.Z.getReferralsRemaining());
    i()(null != s, 'Referrals remaining should not be null');
    let C = s - t;
    return 0 === s ? l.intl.string(l.t.mPmPrq) : 0 !== t || r ? (1 === C ? l.intl.string(l.t.UfPk1t) : C > 0 ? l.intl.formatToPlainString(l.t.hZnIz8, { numFriends: C }) : l.intl.formatToPlainString(l.t['3PJw6e'], { numReferrals: s })) : l.intl.formatToPlainString(l.t.GcKM5e, { numReferrals: s });
};
