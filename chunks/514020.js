r.d(t, { Z: () => o });
var a = r(512722),
    s = r.n(a),
    i = r(442837),
    n = r(276444),
    l = r(388032);
let o = (e) => {
    let { numNewSelected: t, anySelected: r } = e,
        a = (0, i.e7)([n.Z], () => n.Z.getReferralsRemaining());
    s()(null != a, 'Referrals remaining should not be null');
    let o = a - t;
    return 0 === a ? l.NW.string(l.t.mPmPrq) : 0 !== t || r ? (1 === o ? l.NW.string(l.t.UfPk1t) : o > 0 ? l.NW.formatToPlainString(l.t.hZnIz8, { numFriends: o }) : l.NW.formatToPlainString(l.t['3PJw6e'], { numReferrals: a })) : l.NW.formatToPlainString(l.t.GcKM5e, { numReferrals: a });
};
