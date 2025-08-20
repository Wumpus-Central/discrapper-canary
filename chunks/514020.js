n.d(t, { Z: () => l });
var r = n(512722),
    i = n.n(r),
    a = n(442837),
    o = n(276444),
    s = n(388032);
let l = (e) => {
    let { numNewSelected: t, anySelected: n } = e,
        r = (0, a.e7)([o.Z], () => o.Z.getReferralsRemaining());
    i()(null != r, "Referrals remaining should not be null");
    let l = r - t;
    return 0 === r
        ? s.intl.string(s.t.mPmPrq)
        : 0 !== t || n
          ? 1 === l
              ? s.intl.string(s.t.UfPk1t)
              : l > 0
                ? s.intl.formatToPlainString(s.t.hZnIz8, { numFriends: l })
                : s.intl.formatToPlainString(s.t["3PJw6e"], { numReferrals: r })
          : s.intl.formatToPlainString(s.t.GcKM5e, { numReferrals: r });
};
