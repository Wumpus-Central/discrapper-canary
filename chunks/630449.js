"use strict";
n.d(t, { KU: () => o, rm: () => a });
var r = n(452681),
    i = n(75109);
function s() {
    let e = (0, i.E)();
    return (0, r.h)(e).getCurrentScope();
}
function a() {
    let e = (0, i.E)();
    return (0, r.h)(e).getIsolationScope();
}
function o() {
    return s().getClient();
}
