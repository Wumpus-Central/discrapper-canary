s.d(t, { P: () => r });
var n = s(112848),
    a = s(788868);
function r() {
    let e = (0, n.$F)();
    if (null == e) return null;
    if (e.status === n.Wo.UPCOMING) return e;
    let t = a.sp.indexOf(e.id),
        s = a.sp[t + 1];
    return null == s || -1 === t ? null : a.VD[s];
}
