n.d(t, {
    AK: () => f,
    D1: () => A,
    E2: () => N,
    FW: () => E,
    Hn: () => I,
    Hr: () => a,
    Qx: () => S,
    Tf: () => C,
    WI: () => l,
    bd: () => m,
    dT: () => d,
    gN: () => g,
    hl: () => s,
    i4: () => o,
    sN: () => T,
    t_: () => c,
    v_: () => p,
    zC: () => u,
    zD: () => x,
    zZ: () => _,
});
var i = n(963935);
function s(e) {
    return (function e(t) {
        if ("buildLayout" in t && "function" == typeof t.buildLayout) {
            let n = t.buildLayout().map(e),
                { buildLayout: i, ...s } = t,
                r = { ...s, layout: n };
            return n.forEach((e) => (e.parent = r)), r;
        }
        return t;
    })(e);
}
function r(e, t, n) {
    return { ...n, key: e, type: t };
}
function a(e) {
    return r("$Root", i.Z6.ROOT, e);
}
function l(e, t) {
    return r(e, i.Z6.SECTION, t);
}
function o(e, t) {
    return r(e, i.Z6.SIDEBAR_ITEM, t);
}
function c(e, t) {
    return r(e, i.Z6.PANEL, t);
}
function d(e, t) {
    return r(e, i.Z6.TAB_ITEM, t);
}
function u(e, t) {
    return r(e, i.Z6.SPLIT, t);
}
function _(e, t) {
    return r(e, i.Z6.CATEGORY, t);
}
function m(e, t) {
    return r(e, i.Z6.ACCORDION, t);
}
function A(e, t) {
    return r(e, i.Z6.LIST, t);
}
function g(e, t) {
    return r(e, i.Z6.RELATED, t);
}
function E(e, t) {
    return r(e, i.Z6.FIELD_SET, t);
}
function h(e, t, n) {
    return { ...n, key: e, type: t };
}
function p(e, t) {
    return h(e, i.Z6.STATIC, t);
}
function C(e, t) {
    return h(e, i.Z6.BUTTON, t);
}
function x(e, t) {
    return h(e, i.Z6.TOGGLE, t);
}
function T(e, t) {
    return h(e, i.Z6.SLIDER, t);
}
function I(e, t) {
    return h(e, i.Z6.SELECT, t);
}
function S(e, t) {
    return h(e, i.Z6.RADIO, t);
}
function f(e, t) {
    return h(e, i.Z6.NAVIGATOR, t);
}
function N(e, t) {
    return h(e, i.Z6.CUSTOM, t);
}
