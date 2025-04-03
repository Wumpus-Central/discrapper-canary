a.d(e, {
    Cy: () => f,
    HD: () => s,
    J8: () => A,
    Kj: () => d,
    Le: () => E,
    PO: () => u,
    TX: () => i,
    V9: () => p,
    VW: () => o,
    VZ: () => n,
    cO: () => I,
    fm: () => c,
    kK: () => R,
    pt: () => l,
    y1: () => N
});
let r = Object.prototype.toString;
function n(t) {
    switch (r.call(t)) {
        case '[object Error]':
        case '[object Exception]':
        case '[object DOMException]':
            return !0;
        default:
            return p(t, Error);
    }
}
function _(t, e) {
    return r.call(t) === `[object ${e}]`;
}
function o(t) {
    return _(t, 'ErrorEvent');
}
function i(t) {
    return _(t, 'DOMError');
}
function c(t) {
    return _(t, 'DOMException');
}
function s(t) {
    return _(t, 'String');
}
function E(t) {
    return 'object' == typeof t && null !== t && '__sentry_template_string__' in t && '__sentry_template_values__' in t;
}
function l(t) {
    return null === t || E(t) || ('object' != typeof t && 'function' != typeof t);
}
function u(t) {
    return _(t, 'Object');
}
function I(t) {
    return 'undefined' != typeof Event && p(t, Event);
}
function R(t) {
    return 'undefined' != typeof Element && p(t, Element);
}
function d(t) {
    return _(t, 'RegExp');
}
function A(t) {
    return !!(t && t.then && 'function' == typeof t.then);
}
function f(t) {
    return u(t) && 'nativeEvent' in t && 'preventDefault' in t && 'stopPropagation' in t;
}
function p(t, e) {
    try {
        return t instanceof e;
    } catch (t) {
        return !1;
    }
}
function N(t) {
    return !!('object' == typeof t && null !== t && (t.__isVue || t._isVue));
}
