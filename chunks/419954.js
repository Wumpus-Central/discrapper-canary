n.d(t, {
    AK: () => C,
    D1: () => m,
    E2: () => b,
    FW: () => S,
    Hn: () => _,
    Hr: () => r,
    Qx: () => N,
    Tf: () => T,
    WI: () => a,
    bd: () => g,
    gN: () => h,
    hl: () => l,
    i4: () => o,
    sN: () => I,
    t0: () => A,
    t_: () => u,
    v_: () => x,
    zC: () => d,
    zD: () => f,
    zY: () => E,
    zZ: () => c,
});
var i = n(963935);
function l(e) {
    return (function e(t) {
        if ("buildLayout" in t && "function" == typeof t.buildLayout) {
            let n = t.buildLayout().map(e),
                { buildLayout: i, ...l } = t,
                s = { ...l, layout: n };
            return n.forEach((e) => (e.parent = s)), s;
        }
        return t;
    })(e);
}
function s(e, t, n) {
    return { ...n, key: e, type: t };
}
function r(e) {
    return s("$Root", i.Z6.ROOT, e);
}
function a(e, t) {
    return s(e, i.Z6.SECTION, t);
}
function o(e, t) {
    return s(e, i.Z6.SIDEBAR_ITEM, t);
}
function u(e, t) {
    return s(e, i.Z6.PANEL, t);
}
function d(e, t) {
    return s(e, i.Z6.SPLIT, t);
}
function c(e, t) {
    return s(e, i.Z6.CATEGORY, t);
}
function g(e, t) {
    return s(e, i.Z6.ACCORDION, t);
}
function m(e, t) {
    return s(e, i.Z6.LIST, t);
}
function A(e, t) {
    return s(e, i.Z6.NESTED_PANEL_NAVIGATOR, t);
}
function h(e, t) {
    return s(e, i.Z6.RELATED, t);
}
function E(e, t) {
    return s(e, i.Z6.CARD, t);
}
function S(e, t) {
    return s(e, i.Z6.FIELD_SET, t);
}
function p(e, t, n) {
    return { ...n, key: e, type: t };
}
function x(e, t) {
    return p(e, i.Z6.STATIC, t);
}
function T(e, t) {
    return p(e, i.Z6.BUTTON, t);
}
function f(e, t) {
    return p(e, i.Z6.TOGGLE, t);
}
function I(e, t) {
    return p(e, i.Z6.SLIDER, t);
}
function _(e, t) {
    let n = t.selectionMode ?? "single";
    return { ...t, selectionMode: n, key: e, type: i.Z6.SELECT };
}
function N(e, t) {
    return p(e, i.Z6.RADIO, t);
}
function C(e, t) {
    return p(e, i.Z6.NAVIGATOR, t);
}
function b(e, t) {
    return p(e, i.Z6.CUSTOM, t);
}
