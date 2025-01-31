n.d(t, { h: () => o });
var i = n(502087),
    r = n(111361),
    a = n(981631),
    s = n(474936);
function o(e) {
    if (null == e) return a.mBz;
    let t = i.Z.getPremiumTypeOverride();
    return e.isStaff() && t === s.F_ ? a.PRK : null != e.premiumType && (0, r.I5)(e) ? s.a1[e.premiumType].fileSize : a.mBz;
}
