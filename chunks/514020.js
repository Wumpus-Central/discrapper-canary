a.d(t, { Z: () => d });
var r = a(512722),
    i = a.n(r),
    s = a(442837),
    n = a(276444),
    l = a(388032);
let d = (e) => {
    let { numNewSelected: t, anySelected: a } = e,
        r = (0, s.e7)([n.Z], () => n.Z.getReferralsRemaining());
    i()(null != r, "Referrals remaining should not be null");
    let d = r - t;
    return 0 === r
        ? l.intl.string(l.t.mPmPri)
        : 0 !== t || a
          ? 1 === d
              ? l.intl.string(l.t.UfPk1t)
              : d > 0
                ? l.intl.formatToPlainString(l.t.hZnIz4, { numFriends: d })
                : l.intl.formatToPlainString(l.t["3PJw6c"], { numReferrals: r })
          : l.intl.formatToPlainString(l.t.GcKM5Z, { numReferrals: r });
};
