n.d(t, { CM: () => h, D0: () => i, Id: () => o, Tc: () => u, gz: () => f, j6: () => d, t7: () => c });
var l = n(50277),
    r = n(248675),
    a = n(375708);
function i(e) {
    let t = (0, l.bF)(e);
    return null != t ? a.intl.string(t) : e;
}
let s = { simple: r.default.Mqb8mc, balanced: r.default.zCZfA6, complex: r.default["8l2atm"] };
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
