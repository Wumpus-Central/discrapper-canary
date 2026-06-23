"use strict";
n.d(t, { C5: () => c, Fk: () => _, M2: () => u, SF: () => h, rX: () => l, xT: () => d }), n(321073);
var i = n(77729),
    r = n(723702),
    s = n(888916),
    a = n(696016);
function o() {
    return (0, r.isDesktop)() && i.A.features.supports("clips_storage_size");
}
function l() {
    return (0, s.Fp)() && o();
}
function u() {
    return (0, s.As)() && o();
}
function c(e) {
    return "auto" === e && l();
}
function d(e) {
    return i.A.fileManager.join(e, a.SC);
}
function _(e, t) {
    return i.A.fileManager.dirname(e) === d(t);
}
function h(e, t, n) {
    let i = e.reduce((e, t) => e + (t.sizeBytes ?? 0), 0);
    if (i <= t) return [];
    let r = e.filter((e) => e.id !== n && !0 !== e.pending).sort((e, t) => e.createdAt - t.createdAt),
        s = [];
    for (let e of r) {
        if (i <= t) break;
        s.push(e), (i -= e.sizeBytes ?? 0);
    }
    return s;
}
