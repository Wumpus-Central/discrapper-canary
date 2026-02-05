"use strict";
n.d(t, { KU: () => o, rm: () => s });
var r = n(924251),
    i = n(628227);
function a() {
    let e = (0, i.E)();
    return (0, r.h)(e).getCurrentScope();
}
function s() {
    let e = (0, i.E)();
    return (0, r.h)(e).getIsolationScope();
}
function o() {
    return a().getClient();
}
