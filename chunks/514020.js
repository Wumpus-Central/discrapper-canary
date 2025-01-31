r.d(t, { Z: () => C });
var a = r(512722),
    s = r.n(a),
    i = r(442837),
    n = r(276444),
    l = r(388032);
let C = (e) => {
    let { numNewSelected: t, anySelected: r } = e,
        a = (0, i.e7)([n.Z], () => n.Z.getReferralsRemaining());
    s()(null != a, 'Referrals remaining should not be null');
    let C = a - t;
    return 0 === a ? l.intl.string(l.t.mPmPrq) : 0 !== t || r ? (1 === C ? l.intl.string(l.t.UfPk1t) : C > 0 ? l.intl.formatToPlainString(l.t.hZnIz8, { numFriends: C }) : l.intl.formatToPlainString(l.t['3PJw6e'], { numReferrals: a })) : l.intl.formatToPlainString(l.t.GcKM5e, { numReferrals: a });
};
