n.d(t, { CM: () => p, D0: () => r, Id: () => o, Tc: () => s, gz: () => f, j6: () => d, t7: () => c });
var l = n(56681),
    i = n(248675),
    a = n(660183);
function r(e) {
    let t = (0, l.bF)(e);
    return null != t ? a.intl.string(t) : e;
}
let u = { simple: i.default.Mqb8mc, balanced: i.default.zCZfA6, complex: i.default["8l2atm"] };
function s(e) {
    return a.intl.string(u[e]);
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
function p(e) {
    let { fast: t, ...n } = e;
    return !0 === t ? { ...n, fast: !0 } : n;
}
