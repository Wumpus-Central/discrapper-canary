n.d(t, { f: () => o });
var i = n(683760),
    r = n(219882),
    a = n(474090),
    s = n(652215),
    l = n(202541);
function o(e) {
    return null == e
        ? s.TbF
        : e.isStaff() && !i.A.hasPremiumTypeOverride(e)
          ? s.mu
          : null != e.premiumType && (0, a.ki)(e)
            ? e.premiumType === l.PremiumTypes.TIER_2
                ? (0, r.ew)({ location: "getUserMaxFileSize" })
                : l.f5[e.premiumType].fileSize
            : s.TbF;
}
