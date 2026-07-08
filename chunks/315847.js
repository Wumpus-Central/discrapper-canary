function a(e, n) {
    let t = n && n.cache ? n.cache : o,
        a = n && n.serializer ? n.serializer : u;
    return (
        n && n.strategy
            ? n.strategy
            : function (e, n) {
                  var t, a;
                  let u = 1 === e.length ? r : i;
                  return (t = n.cache.create()), (a = n.serializer), u.bind(this, e, t, a);
              }
    )(e, { cache: t, serializer: a });
}
function r(e, n, t, a) {
    let r = null == a || "number" == typeof a || "boolean" == typeof a ? a : t(a),
        i = n.get(r);
    return void 0 === i && ((i = e.call(this, a)), n.set(r, i)), i;
}
function i(e, n, t) {
    let a = Array.prototype.slice.call(arguments, 3),
        r = t(a),
        i = n.get(r);
    return void 0 === i && ((i = e.apply(this, a)), n.set(r, i)), i;
}
t.d(n, { B: () => a, W: () => l });
let u = function () {
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
    set(e, n) {
        this.cache[e] = n;
    }
}
let o = {
        create: function () {
            return new s();
        },
    },
    l = {
        variadic: function (e, n) {
            var t, a;
            return (t = n.cache.create()), (a = n.serializer), i.bind(this, e, t, a);
        },
        monadic: function (e, n) {
            var t, a;
            return (t = n.cache.create()), (a = n.serializer), r.bind(this, e, t, a);
        },
    };
