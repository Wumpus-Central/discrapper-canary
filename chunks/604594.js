"use strict";
n.d(t, { Ir: () => r, aE: () => a, jj: () => i });
let i = 30 * n(927813).A.Millis.MINUTE,
    r = 1;
function a(e) {
    return i + e.lastUsedTimestamp - Date.now() <= 0;
}
