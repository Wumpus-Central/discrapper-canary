s.d(t, { Z: () => c });
var r = s(512722),
    n = s.n(r),
    a = s(442837),
    i = s(276444),
    l = s(388032);
let c = (e) => {
    let { numNewSelected: t, anySelected: s } = e,
        r = (0, a.e7)([i.Z], () => i.Z.getReferralsRemaining());
    n()(null != r, "Referrals remaining should not be null");
    let c = r - t;
    return 0 === r
        ? l.intl.string(l.t.mPmPrq)
        : 0 !== t || s
          ? 1 === c
              ? l.intl.string(l.t.UfPk1t)
              : c > 0
                ? l.intl.formatToPlainString(l.t.hZnIz8, { numFriends: c })
                : l.intl.formatToPlainString(l.t["3PJw6e"], { numReferrals: r })
          : l.intl.formatToPlainString(l.t.GcKM5e, { numReferrals: r });
};
