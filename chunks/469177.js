n.d(t, {
    DQ: () => u,
    L7: () => d,
    qr: () => p,
    uG: () => f,
}),
    n(896048),
    n(638769),
    n(167789),
    n(954571),
    n(652215);
let r = ["COLD_START"],
    i = "NO_REASONS",
    a = !0,
    s = new Map();

function o(e) {
    var t;
    let n = null != (t = s.get(e)) ? t : 0;
    s.set(e, n + 1);
}

function l(e) {
    var t;
    let n = (null != (t = s.get(e)) ? t : 0) - 1;
    n <= 0 ? s.delete(e) : s.set(e, n);
}

function c(e) {
    return "BRIDGE:".concat(e);
}

function u() {
    return s.size > 0 || a;
}

function d() {
    let e = [...(a ? r : []), ...s.keys()].sort();
    return e.length > 0 ? e.join(",") : i;
}

function f(e) {
    _(() => {
        o(e), l(c(e));
    });
}

function p(e) {
    _(() => l(e));
}

function _(e) {
    u(), (a = !1), e(), u();
}
