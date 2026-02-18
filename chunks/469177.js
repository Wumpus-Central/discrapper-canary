"use strict";
n.d(t, { L7: () => d, qr: () => f, uG: () => _ }), n(167789), n(954571), n(652215);
let r = ["COLD_START"],
    i = "NO_REASONS",
    s = !0,
    a = new Map();
function o(e) {
    let t = a.get(e) ?? 0;
    a.set(e, t + 1);
}
function l(e) {
    let t = (a.get(e) ?? 0) - 1;
    t <= 0 ? a.delete(e) : a.set(e, t);
}
function u(e) {
    return `BRIDGE:${e}`;
}
function c() {
    return a.size > 0 || s;
}
function d() {
    let e = [...(s ? r : []), ...a.keys()].sort();
    return e.length > 0 ? e.join(",") : i;
}
function _(e) {
    p(() => {
        o(e), l(u(e));
    });
}
function f(e) {
    p(() => l(e));
}
function p(e) {
    c(), (s = !1), e(), c();
}
