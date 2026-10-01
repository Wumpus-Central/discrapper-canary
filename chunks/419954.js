u.d(n, {
    AK: () => C,
    D1: () => a,
    E2: () => g,
    FW: () => S,
    Hn: () => L,
    Hr: () => o,
    Qx: () => _,
    Tf: () => d,
    WI: () => c,
    bd: () => s,
    gN: () => I,
    hl: () => r,
    i4: () => A,
    sN: () => R,
    t0: () => E,
    t_: () => f,
    v_: () => O,
    zC: () => l,
    zD: () => D,
    zY: () => Z,
    zZ: () => T,
});
var e = u(963935);
function r(t) {
    return (function t(n) {
        if ("buildLayout" in n && "function" == typeof n.buildLayout) {
            let u = n.buildLayout().map(t),
                { buildLayout: e, ...r } = n,
                i = { ...r, layout: u };
            return (u.forEach((t) => (t.parent = i)), i);
        }
        return n;
    })(t);
}
function i(t, n, u) {
    return { ...u, key: t, type: n };
}
function o(t) {
    return i("$Root", e.Z6.ROOT, t);
}
function c(t, n) {
    return i(t, e.Z6.SECTION, n);
}
function A(t, n) {
    return i(t, e.Z6.SIDEBAR_ITEM, n);
}
function f(t, n) {
    return i(t, e.Z6.PANEL, n);
}
function l(t, n) {
    return i(t, e.Z6.SPLIT, n);
}
function T(t, n) {
    return i(t, e.Z6.CATEGORY, n);
}
function s(t, n) {
    return i(t, e.Z6.ACCORDION, n);
}
function a(t, n) {
    return i(t, e.Z6.LIST, n);
}
function E(t, n) {
    return i(t, e.Z6.NESTED_PANEL_NAVIGATOR, n);
}
function I(t, n) {
    return i(t, e.Z6.RELATED, n);
}
function Z(t, n) {
    return i(t, e.Z6.CARD, n);
}
function S(t, n) {
    return i(t, e.Z6.FIELD_SET, n);
}
function N(t, n, u) {
    return { ...u, key: t, type: n };
}
function O(t, n) {
    return N(t, e.Z6.STATIC, n);
}
function d(t, n) {
    return N(t, e.Z6.BUTTON, n);
}
function D(t, n) {
    return N(t, e.Z6.TOGGLE, n);
}
function R(t, n) {
    return N(t, e.Z6.SLIDER, n);
}
function L(t, n) {
    let u = n.selectionMode ?? "single";
    return { ...n, selectionMode: u, key: t, type: e.Z6.SELECT };
}
function _(t, n) {
    return N(t, e.Z6.RADIO, n);
}
function C(t, n) {
    return N(t, e.Z6.NAVIGATOR, n);
}
function g(t, n) {
    return N(t, e.Z6.CUSTOM, n);
}
