i.d(t, {
    AK: () => b,
    D1: () => A,
    E2: () => y,
    FW: () => T,
    Hn: () => I,
    Hr: () => r,
    Qx: () => C,
    Tf: () => f,
    WI: () => a,
    bd: () => m,
    dT: () => d,
    gN: () => E,
    hl: () => s,
    i4: () => o,
    sN: () => _,
    t0: () => h,
    t_: () => u,
    v_: () => p,
    zC: () => c,
    zD: () => N,
    zY: () => S,
    zZ: () => g,
});
var n = i(963935);
function s(e) {
    return (function e(t) {
        if ("buildLayout" in t && "function" == typeof t.buildLayout) {
            let i = t.buildLayout().map(e),
                { buildLayout: n, ...s } = t,
                l = { ...s, layout: i };
            return i.forEach((e) => (e.parent = l)), l;
        }
        return t;
    })(e);
}
function l(e, t, i) {
    return { ...i, key: e, type: t };
}
function r(e) {
    return l("$Root", n.Z6.ROOT, e);
}
function a(e, t) {
    return l(e, n.Z6.SECTION, t);
}
function o(e, t) {
    return l(e, n.Z6.SIDEBAR_ITEM, t);
}
function u(e, t) {
    return l(e, n.Z6.PANEL, t);
}
function d(e, t) {
    return l(e, n.Z6.TAB_ITEM, t);
}
function c(e, t) {
    return l(e, n.Z6.SPLIT, t);
}
function g(e, t) {
    return l(e, n.Z6.CATEGORY, t);
}
function m(e, t) {
    return l(e, n.Z6.ACCORDION, t);
}
function A(e, t) {
    return l(e, n.Z6.LIST, t);
}
function h(e, t) {
    return l(e, n.Z6.NESTED_PANEL_NAVIGATOR, t);
}
function E(e, t) {
    return l(e, n.Z6.RELATED, t);
}
function S(e, t) {
    return l(e, n.Z6.CARD, t);
}
function T(e, t) {
    return l(e, n.Z6.FIELD_SET, t);
}
function x(e, t, i) {
    return { ...i, key: e, type: t };
}
function p(e, t) {
    return x(e, n.Z6.STATIC, t);
}
function f(e, t) {
    return x(e, n.Z6.BUTTON, t);
}
function N(e, t) {
    return x(e, n.Z6.TOGGLE, t);
}
function _(e, t) {
    return x(e, n.Z6.SLIDER, t);
}
function I(e, t) {
    let i = t.selectionMode ?? "single";
    return { ...t, selectionMode: i, key: e, type: n.Z6.SELECT };
}
function C(e, t) {
    return x(e, n.Z6.RADIO, t);
}
function b(e, t) {
    return x(e, n.Z6.NAVIGATOR, t);
}
function y(e, t) {
    return x(e, n.Z6.CUSTOM, t);
}
