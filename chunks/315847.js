"use strict";
function r(e, t) {
    let n = t && t.cache ? t.cache : f,
        r = t && t.serializer ? t.serializer : d;
    return (t && t.strategy ? t.strategy : l)(e, { cache: n, serializer: r });
}
function i(e) {
    return null == e || "number" == typeof e || "boolean" == typeof e;
}
function s(e, t, n, r) {
    let s = i(r) ? r : n(r),
        a = t.get(s);
    return void 0 === a && ((a = e.call(this, r)), t.set(s, a)), a;
}
function a(e, t, n) {
    let r = Array.prototype.slice.call(arguments, 3),
        i = n(r),
        s = t.get(i);
    return void 0 === s && ((s = e.apply(this, r)), t.set(i, s)), s;
}
function o(e, t, n, r, i) {
    return n.bind(t, e, r, i);
}
function l(e, t) {
    let n = 1 === e.length ? s : a;
    return o(e, this, n, t.cache.create(), t.serializer);
}
function u(e, t) {
    return o(e, this, a, t.cache.create(), t.serializer);
}
function c(e, t) {
    return o(e, this, s, t.cache.create(), t.serializer);
}
n.d(t, { B: () => r, W: () => p });
let d = function () {
    return JSON.stringify(arguments);
};
class _ {
    cache;
    constructor() {
        this.cache = Object.create(null);
    }
    get(e) {
        return this.cache[e];
    }
    set(e, t) {
        this.cache[e] = t;
    }
}
let f = {
        create: function () {
            return new _();
        },
    },
    p = { variadic: u, monadic: c };
