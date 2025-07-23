n.d(t, {
    Cy: () => d,
    HD: () => o,
    J8: () => u,
    PO: () => s,
    V9: () => _,
    VZ: () => i,
    cO: () => l,
    kK: () => c,
    y1: () => f
});
let r = Object.prototype.toString;
function i(e) {
    switch (r.call(e)) {
        case '[object Error]':
        case '[object Exception]':
        case '[object DOMException]':
            return !0;
        default:
            return _(e, Error);
    }
}
function a(e, t) {
    return r.call(e) === `[object ${t}]`;
}
function o(e) {
    return a(e, 'String');
}
function s(e) {
    return a(e, 'Object');
}
function l(e) {
    return 'undefined' != typeof Event && _(e, Event);
}
function c(e) {
    return 'undefined' != typeof Element && _(e, Element);
}
function u(e) {
    return !!(e && e.then && 'function' == typeof e.then);
}
function d(e) {
    return s(e) && 'nativeEvent' in e && 'preventDefault' in e && 'stopPropagation' in e;
}
function _(e, t) {
    try {
        return e instanceof t;
    } catch (e) {
        return !1;
    }
}
function f(e) {
    return !!('object' == typeof e && null !== e && (e.__isVue || e._isVue));
}
