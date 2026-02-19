"use strict";
n.d(t, { F7: () => o, Mt: () => c, PH: () => d, aw: () => a, hs: () => u });
var i = n(735438),
    s = n.n(i),
    l = n(994500),
    r = n(403362);
function a(e, t) {
    return e.filter((e) => (0, r.Vq)(e)).filter((e) => !(null != t ? t.includes(e.id) : l.A.isBlockedOrIgnored(e.id)));
}
function o(e, t) {
    return e.filter((e) => !(null != t ? t.includes(e) : l.A.isBlockedOrIgnored(e)));
}
function c(e) {
    return e.filter((e) => !l.A.isBlockedOrIgnored(e.ownerId));
}
function d(e, t) {
    return e.some((e) => (null != t ? t.includes(e) : l.A.isBlockedOrIgnored(e)));
}
function u(e) {
    return s()(e)
        .filter((e) => !l.A.isBlockedOrIgnored(e.userId))
        .keyBy("userId")
        .value();
}
