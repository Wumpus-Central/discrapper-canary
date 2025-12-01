n.d(t, {
    Cy: () => d,
    HD: () => o,
    J8: () => u,
    PO: () => s,
    V9: () => f,
    VZ: () => i,
    cO: () => l,
    kK: () => c,
    y1: () => p,
});
let r = Object.prototype.toString;
function i(e) {
    switch (r.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return f(e, Error);
    }
}
function a(e, t) {
    return r.call(e) === `[object ${t}]`;
}
function o(e) {
    return a(e, "String");
}
function s(e) {
    return a(e, "Object");
}
function l(e) {
    return "undefined" != typeof Event && f(e, Event);
}
function c(e) {
    return "undefined" != typeof Element && f(e, Element);
}
function u(e) {
    return !!(e && e.then && "function" == typeof e.then);
}
function d(e) {
    return s(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function f(e, t) {
    try {
        return e instanceof t;
    } catch (e) {
        return !1;
    }
}
function p(e) {
    return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue));
}
