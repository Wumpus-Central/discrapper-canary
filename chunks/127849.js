var r = function (t) {
    return t && t.Math === Math && t;
};
t.exports =
    r('object' == typeof globalThis && globalThis) ||
    r('object' == typeof window && window) ||
    r('object' == typeof self && self) ||
    r('object' == typeof a.g && a.g) ||
    r('object' == typeof this && this) ||
    (function () {
        return this;
    })() ||
    Function('return this')();
