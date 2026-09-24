l.d(t, { $C: () => f, $G: () => o, eQ: () => i, gc: () => d, gh: () => c, is: () => u, zy: () => m });
var n = l(313265),
    a = l(50617),
    r = l(375708);
function i(e) {
    let t = (0, n.bF)(e);
    return null != t ? r.intl.string(t) : e;
}
let s = { simple: a.default.Mo0a1m, balanced: a.default.dkt78K, complex: a.default.Ly6zYL };
function u(e) {
    return r.intl.string(s[e]);
}
function o(e, t, l) {
    return e.models?.[l] ?? t?.[l]?.model ?? null;
}
function d(e, t) {
    if (t === e.tier) return e;
    let { thinking: l, ...n } = e;
    return { ...n, tier: t };
}
function c(e, t, l) {
    return { ...e, models: { ...e.models, [t]: l } };
}
function f(e, t, l) {
    let n = o(e, t, e.tier);
    return null != n && l.find((e) => e.id === n)?.supports_fast === !0;
}
function m(e, t, l) {
    let { fast: n, ...a } = e;
    return !0 === n && f(e, t, l) ? { ...a, fast: !0 } : a;
}
