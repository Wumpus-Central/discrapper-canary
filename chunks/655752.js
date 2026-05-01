t.d(u, { P: () => r });
var l = t(112848),
    e = t(788868);
function r() {
    let n = (0, l.$F)();
    if (null == n) return null;
    if (n.status === l.Wo.UPCOMING) return n;
    let u = e.sp.indexOf(n.id),
        t = e.sp[u + 1];
    return null == t || -1 === u ? null : e.VD[t];
}
