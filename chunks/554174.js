n.d(t, { Z: () => r });
var i = n(808506);
function r() {
    let e = i.Z.getFocusedPID();
    return null != e && (i.Z.isReady(e) || i.Z.isCrashed(e)) ? e : null;
}
