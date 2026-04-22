"use strict";
n.d(t, { L7: () => l, qr: () => d, uG: () => u }), n(954571), n(652215);
let r = ["COLD_START"],
    i = !0,
    s = new Map();
function a(e) {
    let t = (s.get(e) ?? 0) - 1;
    t <= 0 ? s.delete(e) : s.set(e, t);
}
function o() {
    return s.size > 0 || i;
}
function l() {
    let e = [...(i ? r : []), ...s.keys()].sort();
    return e.length > 0 ? e.join(",") : "NO_REASONS";
}
function u(e) {
    c(() => {
        let t;
        (t = s.get(e) ?? 0), s.set(e, t + 1), a(`BRIDGE:${e}`);
    });
}
function d(e) {
    c(() => a(e));
}
function c(e) {
    o(), (i = !1), e(), o();
}
