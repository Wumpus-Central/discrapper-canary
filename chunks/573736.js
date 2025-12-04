n.d(t, {
    Cy: () => u,
    HD: () => o,
    V9: () => d,
    VZ: () => i,
    cO: () => l,
    kK: () => c,
    y1: () => f,
});
let r = Object.prototype.toString;
function i(e) {
    switch (r.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return d(e, Error);
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
    return "undefined" != typeof Event && d(e, Event);
}
function c(e) {
    return "undefined" != typeof Element && d(e, Element);
}
function u(e) {
    return s(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function d(e, t) {
    try {
        return e instanceof t;
    } catch (e) {
        return !1;
    }
}
function f(e) {
    return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue));
}
