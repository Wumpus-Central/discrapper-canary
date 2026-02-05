"use strict";
n.d(t, { A: () => i });
var r = n(242286);
function i() {
    let e = r.default.getFocusedPID();
    return null != e && (r.default.isReady(e) || r.default.isCrashed(e)) ? e : null;
}
