"use strict";
n.d(t, { C5: () => _, Fk: () => A, M2: () => u, SF: () => h, rX: () => c, xT: () => E }), n(321073);
var i = n(77729),
    r = n(723702),
    a = n(888916),
    s = n(915725),
    l = n(341923),
    o = n(696016);
function d() {
    return (0, r.isDesktop)() && i.A.features.supports("clips_storage_size");
}
function c() {
    return (0, a.Fp)() && d();
}
function u() {
    return (0, a.As)() && d();
}
function _(e) {
    return "auto" === e && c() && (0, l.s)() && s.Ay.getEnableAutoclipping();
}
function E(e) {
    return i.A.fileManager.join(e, o.SC);
}
function A(e, t) {
    return i.A.fileManager.dirname(e) === E(t);
}
function h(e, t, n) {
    let i = e.reduce((e, t) => e + (t.sizeBytes ?? 0), 0);
    if (i <= t) return [];
    let r = e.filter((e) => e.id !== n && !0 !== e.pending).sort((e, t) => e.createdAt - t.createdAt),
        a = [];
    for (let e of r) {
        if (i <= t) break;
        a.push(e), (i -= e.sizeBytes ?? 0);
    }
    return a;
}
