n.d(t, {
    AK: () => _,
    D1: () => O,
    E2: () => p,
    FW: () => E,
    Hn: () => D,
    Hr: () => o,
    Qx: () => R,
    Tf: () => A,
    WI: () => l,
    bd: () => d,
    gN: () => C,
    hl: () => i,
    i4: () => a,
    sN: () => y,
    t0: () => f,
    t_: () => s,
    v_: () => I,
    zC: () => c,
    zD: () => h,
    zY: () => N,
    zZ: () => T,
});
var r = n(963935);
function i(e) {
    return (function e(t) {
        if ("buildLayout" in t && "function" == typeof t.buildLayout) {
            let n = t.buildLayout().map(e),
                { buildLayout: r, ...i } = t,
                u = { ...i, layout: n };
            return (n.forEach((e) => (e.parent = u)), u);
        }
        return t;
    })(e);
}
function u(e, t, n) {
    return { ...n, key: e, type: t };
}
function o(e) {
    return u("$Root", r.Z6.ROOT, e);
}
function l(e, t) {
    return u(e, r.Z6.SECTION, t);
}
function a(e, t) {
    return u(e, r.Z6.SIDEBAR_ITEM, t);
}
function s(e, t) {
    return u(e, r.Z6.PANEL, t);
}
function c(e, t) {
    return u(e, r.Z6.SPLIT, t);
}
function T(e, t) {
    return u(e, r.Z6.CATEGORY, t);
}
function d(e, t) {
    return u(e, r.Z6.ACCORDION, t);
}
function O(e, t) {
    return u(e, r.Z6.LIST, t);
}
function f(e, t) {
    return u(e, r.Z6.NESTED_PANEL_NAVIGATOR, t);
}
function C(e, t) {
    return u(e, r.Z6.RELATED, t);
}
function N(e, t) {
    return u(e, r.Z6.CARD, t);
}
function E(e, t) {
    return u(e, r.Z6.FIELD_SET, t);
}
function S(e, t, n) {
    return { ...n, key: e, type: t };
}
function I(e, t) {
    return S(e, r.Z6.STATIC, t);
}
function A(e, t) {
    return S(e, r.Z6.BUTTON, t);
}
function h(e, t) {
    return S(e, r.Z6.TOGGLE, t);
}
function y(e, t) {
    return S(e, r.Z6.SLIDER, t);
}
function D(e, t) {
    let n = t.selectionMode ?? "single";
    return { ...t, selectionMode: n, key: e, type: r.Z6.SELECT };
}
function R(e, t) {
    return S(e, r.Z6.RADIO, t);
}
function _(e, t) {
    return S(e, r.Z6.NAVIGATOR, t);
}
function p(e, t) {
    return S(e, r.Z6.CUSTOM, t);
}
