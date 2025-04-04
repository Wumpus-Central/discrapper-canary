n.d(t, { Z: () => i });
var r = n(808506);
function i() {
    let e = r.default.getFocusedPID();
    return null != e && (r.default.isReady(e) || r.default.isCrashed(e)) ? e : null;
}
