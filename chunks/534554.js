n.d(t, {
    CM: () => h,
    D0: () => a,
    FC: () => p,
    Id: () => o,
    Tc: () => u,
    gz: () => f,
    hl: () => m,
    j6: () => d,
    t7: () => c,
});
var r = n(56681),
    l = n(87501),
    i = n(105292);
function a(e) {
    let t = (0, r.bF)(e);
    return null != t ? i.intl.string(t) : e;
}
let s = { simple: l.default.Mqb8mc, balanced: l.default.zCZfA6, complex: l.default["8l2atm"] };
function u(e) {
    return i.intl.string(s[e]);
}
function o(e, t, n) {
    return e.models?.[n] ?? t?.[n]?.model ?? null;
}
function d(e, t) {
    if (t === e.tier) return e;
    let { thinking: n, ...r } = e;
    return { ...r, tier: t };
}
function c(e, t, n) {
    return { ...e, models: { ...e.models, [t]: n } };
}
function f(e, t, n) {
    let r = o(e, t, e.tier);
    return null != r && n.find((e) => e.id === r)?.supports_fast === !0;
}
function h(e) {
    let { fast: t, ...n } = e;
    return !0 === t ? { ...n, fast: !0 } : n;
}
function m(e) {
    return e.main.length > 0;
}
function p(e) {
    return m(e) ? l.default.eGqPbV : l.default.qSViP4;
}
