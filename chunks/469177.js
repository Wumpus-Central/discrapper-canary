"use strict";
n.d(t, { DQ: () => c, L7: () => d, qr: () => f, uG: () => _ }), n(167789), n(954571), n(652215);
let r = ["COLD_START"],
    i = "NO_REASONS",
    a = !0,
    s = new Map();
function o(e) {
    let t = s.get(e) ?? 0;
    s.set(e, t + 1);
}
function l(e) {
    let t = (s.get(e) ?? 0) - 1;
    t <= 0 ? s.delete(e) : s.set(e, t);
}
function u(e) {
    return `BRIDGE:${e}`;
}
function c() {
    return s.size > 0 || a;
}
function d() {
    let e = [...(a ? r : []), ...s.keys()].sort();
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
    c(), (a = !1), e(), c();
}
