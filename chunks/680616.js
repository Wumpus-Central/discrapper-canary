"use strict";
n.d(t, { A: () => s });
var i = n(582128),
    r = n(649248);
function a(e) {
    return r.A.subscribeEntries(e);
}
function s(e) {
    return i.useSyncExternalStore(a, () => r.A.getPoolEntry(e)?.overlay ?? null);
}
