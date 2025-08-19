r.d(t, { Z: () => c });
var a = r(512722),
    s = r.n(a),
    n = r(442837),
    i = r(276444),
    l = r(388032);
let c = (e) => {
    let { numNewSelected: t, anySelected: r } = e,
        a = (0, n.e7)([i.Z], () => i.Z.getReferralsRemaining());
    s()(null != a, "Referrals remaining should not be null");
    let c = a - t;
    return 0 === a
        ? l.intl.string(l.t.mPmPrq)
        : 0 !== t || r
          ? 1 === c
              ? l.intl.string(l.t.UfPk1t)
              : c > 0
                ? l.intl.formatToPlainString(l.t.hZnIz8, { numFriends: c })
                : l.intl.formatToPlainString(l.t["3PJw6e"], { numReferrals: a })
          : l.intl.formatToPlainString(l.t.GcKM5e, { numReferrals: a });
};
