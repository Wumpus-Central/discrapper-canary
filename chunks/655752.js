r.d(t, { P: () => i });
var a = r(112848),
    n = r(788868);
function i() {
    let e = (0, a.$F)();
    if (null == e) return null;
    if (e.status === a.Wo.UPCOMING) return e;
    let t = n.sp.indexOf(e.id),
        r = n.sp[t + 1];
    return null == r || -1 === t ? null : n.VD[r];
}
