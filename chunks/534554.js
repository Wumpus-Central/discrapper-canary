l.d(t, {
    CM: () => p,
    D0: () => r,
    FC: () => m,
    Id: () => o,
    Tc: () => s,
    gz: () => f,
    hl: () => h,
    j6: () => d,
    t7: () => c,
});
var n = l(56681),
    a = l(248675),
    i = l(105292);
function r(e) {
    let t = (0, n.bF)(e);
    return null != t ? i.intl.string(t) : e;
}
let u = { simple: a.default.Mqb8mc, balanced: a.default.zCZfA6, complex: a.default["8l2atm"] };
function s(e) {
    return i.intl.string(u[e]);
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
function p(e) {
    let { fast: t, ...l } = e;
    return !0 === t ? { ...l, fast: !0 } : l;
}
function h(e) {
    return e.main.length > 0;
}
function m(e) {
    return h(e) ? a.default.eGqPbV : a.default.qSViP4;
}
