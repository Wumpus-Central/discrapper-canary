n.d(t, { Z: () => i });
var r = n(808506);
function i() {
    let e = r.Z.getFocusedPID();
    return null != e && (r.Z.isReady(e) || r.Z.isCrashed(e)) ? e : null;
}
