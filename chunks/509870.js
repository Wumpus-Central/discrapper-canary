s.d(t, { A: () => d });
var i = s(284009),
    a = s.n(i),
    r = s(311907),
    l = s(851746),
    n = s(492195),
    C = s(985018);
let d = (e) => {
    let { numNewSelected: t, anySelected: s } = e,
        i = (0, r.bG)([l.A], () => l.A.getReferralsRemaining());
    a()(null != i, "Referrals remaining should not be null");
    let d = i - t,
        o = (0, n.dF)({ location: "useReferralProgramSubheaderText" });
    return 0 === i
        ? C.intl.string(C.t.mPmPri)
        : 0 !== t || s
          ? 1 === d
              ? C.intl.string(C.t.UfPk1t)
              : d > 0
                ? C.intl.formatToPlainString(C.t.hZnIz4, { numFriends: d })
                : C.intl.formatToPlainString(C.t["3PJw6c"], { numReferrals: i })
          : o
            ? C.intl.string(C.t.DXgoi2)
            : C.intl.formatToPlainString(C.t.GcKM5Z, { numReferrals: i });
};
