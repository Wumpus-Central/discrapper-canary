r.d(n, {
    h: function () {
        return l;
    }
});
var i = r(502087),
    a = r(111361),
    o = r(981631),
    s = r(474936);
function l(e) {
    if (null == e) return o.mBz;
    let n = i.Z.getPremiumTypeOverride();
    return e.isStaff() && n === s.F_ ? o.PRK : null != e.premiumType && (0, a.I5)(e) ? s.a1[e.premiumType].fileSize : o.mBz;
}
