r.d(t, { Z: () => o });
var a = r(512722),
    i = r.n(a),
    s = r(442837),
    n = r(276444),
    l = r(388032);
let o = (e) => {
    let { numNewSelected: t, anySelected: r } = e,
        a = (0, s.e7)([n.Z], () => n.Z.getReferralsRemaining());
    i()(null != a, 'Referrals remaining should not be null');
    let o = a - t;
    return 0 === a ? l.intl.string(l.t.mPmPrq) : 0 !== t || r ? (1 === o ? l.intl.string(l.t.UfPk1t) : o > 0 ? l.intl.formatToPlainString(l.t.hZnIz8, { numFriends: o }) : l.intl.formatToPlainString(l.t['3PJw6e'], { numReferrals: a })) : l.intl.formatToPlainString(l.t.GcKM5e, { numReferrals: a });
};
