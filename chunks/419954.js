n.d(t, {
    AK: () => v,
    D1: () => _,
    E2: () => N,
    FW: () => A,
    Hn: () => b,
    Hr: () => r,
    Qx: () => C,
    Tf: () => f,
    WI: () => a,
    bd: () => g,
    dT: () => c,
    gN: () => h,
    hl: () => s,
    i4: () => o,
    sN: () => E,
    t0: () => x,
    t_: () => d,
    v_: () => T,
    zC: () => u,
    zD: () => S,
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
function r(e) {
    return l("$Root", i.Z6.ROOT, e);
}
function a(e, t) {
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
function g(e, t) {
    return l(e, i.Z6.ACCORDION, t);
}
function _(e, t) {
    return l(e, i.Z6.LIST, t);
}
function x(e, t) {
    return l(e, i.Z6.NESTED_PANEL_NAVIGATOR, t);
}
function h(e, t) {
    return l(e, i.Z6.RELATED, t);
}
function A(e, t) {
    return l(e, i.Z6.FIELD_SET, t);
}
function p(e, t, n) {
    return { ...n, key: e, type: t };
}
function T(e, t) {
    return p(e, i.Z6.STATIC, t);
}
function f(e, t) {
    return p(e, i.Z6.BUTTON, t);
}
function S(e, t) {
    return p(e, i.Z6.TOGGLE, t);
}
function E(e, t) {
    return p(e, i.Z6.SLIDER, t);
}
function b(e, t) {
    let n = t.selectionMode ?? "single";
    return { ...t, selectionMode: n, key: e, type: i.Z6.SELECT };
}
function C(e, t) {
    return p(e, i.Z6.RADIO, t);
}
function v(e, t) {
    return p(e, i.Z6.NAVIGATOR, t);
}
function N(e, t) {
    return p(e, i.Z6.CUSTOM, t);
}
