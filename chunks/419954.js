n.d(t, {
    AK: () => N,
    D1: () => g,
    E2: () => v,
    FW: () => p,
    Hn: () => b,
    Hr: () => a,
    Qx: () => C,
    Tf: () => T,
    WI: () => r,
    bd: () => _,
    dT: () => c,
    eA: () => A,
    gN: () => x,
    hl: () => s,
    i4: () => o,
    sN: () => S,
    t_: () => d,
    v_: () => f,
    zC: () => u,
    zD: () => E,
    zZ: () => m,
});
var i = n(963935);
function s(e) {
    return (function e(t) {
        if ("buildLayout" in t && "function" == typeof t.buildLayout) {
            let n = t.buildLayout().map(e),
                { buildLayout: i, ...s } = t,
                l = { ...s, layout: n };
            return n.forEach((e) => (e.parent = l)), l;
        }
        return t;
    })(e);
}
function l(e, t, n) {
    return { ...n, key: e, type: t };
}
function a(e) {
    return l("$Root", i.Z6.ROOT, e);
}
function r(e, t) {
    return l(e, i.Z6.SECTION, t);
}
function o(e, t) {
    return l(e, i.Z6.SIDEBAR_ITEM, t);
}
function d(e, t) {
    return l(e, i.Z6.PANEL, t);
}
function c(e, t) {
    return l(e, i.Z6.TAB_ITEM, t);
}
function u(e, t) {
    return l(e, i.Z6.SPLIT, t);
}
function m(e, t) {
    return l(e, i.Z6.CATEGORY, t);
}
function _(e, t) {
    return l(e, i.Z6.ACCORDION, t);
}
function g(e, t) {
    return l(e, i.Z6.LIST, t);
}
function A(e, t) {
    return l(e, i.Z6.NESTED_PANEL, t);
}
function x(e, t) {
    return l(e, i.Z6.RELATED, t);
}
function p(e, t) {
    return l(e, i.Z6.FIELD_SET, t);
}
function h(e, t, n) {
    return { ...n, key: e, type: t };
}
function f(e, t) {
    return h(e, i.Z6.STATIC, t);
}
function T(e, t) {
    return h(e, i.Z6.BUTTON, t);
}
function E(e, t) {
    return h(e, i.Z6.TOGGLE, t);
}
function S(e, t) {
    return h(e, i.Z6.SLIDER, t);
}
function b(e, t) {
    let n = t.selectionMode ?? "single";
    return { ...t, selectionMode: n, key: e, type: i.Z6.SELECT };
}
function C(e, t) {
    return h(e, i.Z6.RADIO, t);
}
function N(e, t) {
    return h(e, i.Z6.NAVIGATOR, t);
}
function v(e, t) {
    return h(e, i.Z6.CUSTOM, t);
}
