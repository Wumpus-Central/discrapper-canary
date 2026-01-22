n.d(t, { f: () => o });
var r = n(683760),
    i = n(474090),
    a = n(652215),
    s = n(788868);
function o(e) {
    if (null == e) return a.TbF;
    let t = r.A.getPremiumTypeOverride();
    return e.isStaff() && t === s.$I
        ? a.mu
        : null != e.premiumType && (0, i.ki)(e)
          ? s.f5[e.premiumType].fileSize
          : a.TbF;
}
