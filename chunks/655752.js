n.d(u, { P: () => r });
var l = n(878784),
    t = n(788868);
function r() {
    let e = (0, l.$F)();
    if (null == e) return null;
    if (e.status === l.Wo.UPCOMING) return e;
    let u = t.sp.indexOf(e.id),
        n = t.sp[u + 1];
    return null == n || -1 === u ? null : t.VD[n];
}
