function a(n, e) {
    let t = e && e.cache ? e.cache : o,
        a = e && e.serializer ? e.serializer : s;
    return (
        e && e.strategy
            ? e.strategy
            : function (n, e) {
                  var t, a;
                  let s = 1 === n.length ? r : i;
                  return (t = e.cache.create()), (a = e.serializer), s.bind(this, n, t, a);
              }
    )(n, { cache: t, serializer: a });
}
function r(n, e, t, a) {
    let r = null == a || "number" == typeof a || "boolean" == typeof a ? a : t(a),
        i = e.get(r);
    return void 0 === i && ((i = n.call(this, a)), e.set(r, i)), i;
}
function i(n, e, t) {
    let a = Array.prototype.slice.call(arguments, 3),
        r = t(a),
        i = e.get(r);
    return void 0 === i && ((i = n.apply(this, a)), e.set(r, i)), i;
}
t.d(e, { B: () => a, W: () => d });
let s = function () {
    return JSON.stringify(arguments);
};
class u {
    cache;
    constructor() {
        this.cache = Object.create(null);
    }
    get(n) {
        return this.cache[n];
    }
    set(n, e) {
        this.cache[n] = e;
    }
}
let o = {
        create: function () {
            return new u();
        },
    },
    d = {
        variadic: function (n, e) {
            var t, a;
            return (t = e.cache.create()), (a = e.serializer), i.bind(this, n, t, a);
        },
        monadic: function (n, e) {
            var t, a;
            return (t = e.cache.create()), (a = e.serializer), r.bind(this, n, t, a);
        },
    };
