"use strict";
n.d(t, { A: () => r });
var i = n(773371);
function r() {
    let e = i.default.getFocusedPID();
    return null != e && (i.default.isReady(e) || i.default.isCrashed(e)) ? e : null;
}
