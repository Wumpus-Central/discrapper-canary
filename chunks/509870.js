s.d(t, { A: () => C });
var i = s(284009),
    a = s.n(i),
    l = s(311907),
    r = s(851746),
    n = s(985018);
let C = (e) => {
    let { numNewSelected: t, anySelected: s } = e,
        i = (0, l.bG)([r.A], () => r.A.getReferralsRemaining());
    a()(null != i, "Referrals remaining should not be null");
    let C = i - t;
    return 0 === i
        ? n.intl.string(n.t.mPmPri)
        : 0 !== t || s
          ? 1 === C
              ? n.intl.string(n.t.UfPk1t)
              : C > 0
                ? n.intl.formatToPlainString(n.t.hZnIz4, { numFriends: C })
                : n.intl.formatToPlainString(n.t["3PJw6c"], { numReferrals: i })
          : n.intl.formatToPlainString(n.t.GcKM5Z, { numReferrals: i });
};
