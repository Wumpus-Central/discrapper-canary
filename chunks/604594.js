"use strict";
n.d(t, { Ir: () => i, aE: () => a, jj: () => r });
let r = 30 * n(927813).A.Millis.MINUTE,
    i = 1;
function a(e) {
    return r + e.lastUsedTimestamp - Date.now() <= 0;
}
