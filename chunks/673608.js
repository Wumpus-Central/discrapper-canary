"use strict";
n.d(t, { q: () => a });
var r = n(895944),
    i = n(649032),
    s = n(223615);
function a() {
    let e = r.A.shouldFetch();
    if (e.shouldFetch) return !0;
    if (e.reason !== r.V.CACHE_SHOULD_NOT_FETCH) return !1;
    let t = r.A.getRewardForProgram(i.W.NITRO);
    return !!(0, s.X)(t);
}
