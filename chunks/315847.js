"use strict";
function n(e, t) {
    let r = t && t.cache ? t.cache : l,
        n = t && t.serializer ? t.serializer : a;
    return (
        t && t.strategy
            ? t.strategy
            : function (e, t) {
                  var r, n;
                  let a = 1 === e.length ? i : o;
                  return (r = t.cache.create()), (n = t.serializer), a.bind(this, e, r, n);
              }
    )(e, { cache: r, serializer: n });
}
function i(e, t, r, n) {
    let i = null == n || "number" == typeof n || "boolean" == typeof n ? n : r(n),
        o = t.get(i);
    return void 0 === o && ((o = e.call(this, n)), t.set(i, o)), o;
}
function o(e, t, r) {
    let n = Array.prototype.slice.call(arguments, 3),
        i = r(n),
        o = t.get(i);
    return void 0 === o && ((o = e.apply(this, n)), t.set(i, o)), o;
}
r.d(t, { B: () => n, W: () => u });
let a = function () {
    return JSON.stringify(arguments);
};
class s {
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
let l = {
        create: function () {
            return new s();
        },
    },
    u = {
        variadic: function (e, t) {
            var r, n;
            return (r = t.cache.create()), (n = t.serializer), o.bind(this, e, r, n);
        },
        monadic: function (e, t) {
            var r, n;
            return (r = t.cache.create()), (n = t.serializer), i.bind(this, e, r, n);
        },
    };
