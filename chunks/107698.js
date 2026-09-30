n.d(t, { $C: () => f, $G: () => o, eQ: () => i, gc: () => d, gh: () => c, is: () => u, zy: () => h });
var l = n(313265),
    r = n(759967),
    a = n(375708);
function i(e) {
    let t = (0, l.bF)(e);
    return null != t ? a.intl.string(t) : e;
}
let s = { simple: r.default.Mo0a1m, balanced: r.default.dkt78K, complex: r.default.Ly6zYL };
function u(e) {
    return a.intl.string(s[e]);
}
function o(e, t, n) {
    return e.models?.[n] ?? t?.[n]?.model ?? null;
}
function d(e, t) {
    if (t === e.tier) return e;
    let { thinking: n, ...l } = e;
    return { ...l, tier: t };
}
function c(e, t, n) {
    return { ...e, models: { ...e.models, [t]: n } };
}
function f(e, t, n) {
    let l = o(e, t, e.tier);
    return null != l && n.find((e) => e.id === l)?.supports_fast === !0;
}
function h(e) {
    let { fast: t, ...n } = e;
    return !0 === t ? { ...n, fast: !0 } : n;
}
