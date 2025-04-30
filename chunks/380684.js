n.d(t, { h: () => s });
var r = n(502087),
    i = n(111361),
    a = n(981631),
    o = n(474936);
function s(e) {
    if (null == e) return a.mBz;
    let t = r.Z.getPremiumTypeOverride();
    return e.isStaff() && t === o.F_ ? a.PRK : null != e.premiumType && (0, i.I5)(e) ? o.a1[e.premiumType].fileSize : a.mBz;
}
