n.d(t, { h: () => s });
var r = n(502087),
    i = n(111361),
    o = n(981631),
    a = n(474936);
function s(e) {
    if (null == e) return o.mBz;
    let t = r.Z.getPremiumTypeOverride();
    return e.isStaff() && t === a.F_ ? o.PRK : null != e.premiumType && (0, i.I5)(e) ? a.a1[e.premiumType].fileSize : o.mBz;
}
