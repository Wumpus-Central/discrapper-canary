"use strict";
n.d(t, { Kg: () => s, L2: () => _, bJ: () => i, mE: () => c, tH: () => d, vq: () => u, xH: () => l });
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
function s(e) {
    return a(e, "String");
}
function o(e) {
    return a(e, "Object");
}
function l(e) {
    return "u" > typeof Event && d(e, Event);
}
function u(e) {
    return "u" > typeof Element && d(e, Element);
}
function c(e) {
    return o(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function d(e, t) {
    try {
        return e instanceof t;
    } catch (e) {
        return !1;
    }
}
function _(e) {
    return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue));
}
