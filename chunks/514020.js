s.d(t, { Z: () => d });
var n = s(512722),
    r = s.n(n),
    a = s(442837),
    i = s(276444),
    l = s(388032);
let d = (e) => {
    let { numNewSelected: t, anySelected: s } = e,
        n = (0, a.e7)([i.Z], () => i.Z.getReferralsRemaining());
    r()(null != n, "Referrals remaining should not be null");
    let d = n - t;
    return 0 === n
        ? l.intl.string(l.t.mPmPrq)
        : 0 !== t || s
          ? 1 === d
              ? l.intl.string(l.t.UfPk1t)
              : d > 0
                ? l.intl.formatToPlainString(l.t.hZnIz8, { numFriends: d })
                : l.intl.formatToPlainString(l.t["3PJw6e"], { numReferrals: n })
          : l.intl.formatToPlainString(l.t.GcKM5e, { numReferrals: n });
};
