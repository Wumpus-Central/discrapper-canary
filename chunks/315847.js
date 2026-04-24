"use strict";
function r(e, t) {
    let n = t && t.cache ? t.cache : s,
        r = t && t.serializer ? t.serializer : u;
    return (
        t && t.strategy
            ? t.strategy
            : function (e, t) {
                  var n, r;
                  let u = 1 === e.length ? i : a;
                  return (n = t.cache.create()), (r = t.serializer), u.bind(this, e, n, r);
              }
    )(e, { cache: n, serializer: r });
}
function i(e, t, n, r) {
    let i = null == r || "number" == typeof r || "boolean" == typeof r ? r : n(r),
        a = t.get(i);
    return void 0 === a && ((a = e.call(this, r)), t.set(i, a)), a;
}
function a(e, t, n) {
    let r = Array.prototype.slice.call(arguments, 3),
        i = n(r),
        a = t.get(i);
    return void 0 === a && ((a = e.apply(this, r)), t.set(i, a)), a;
}
n.d(t, { B: () => r, W: () => l });
let u = function () {
    return JSON.stringify(arguments);
};
class o {
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
let s = {
        create: function () {
            return new o();
        },
    },
    l = {
        variadic: function (e, t) {
            var n, r;
            return (n = t.cache.create()), (r = t.serializer), a.bind(this, e, n, r);
        },
        monadic: function (e, t) {
            var n, r;
            return (n = t.cache.create()), (r = t.serializer), i.bind(this, e, n, r);
        },
    };
