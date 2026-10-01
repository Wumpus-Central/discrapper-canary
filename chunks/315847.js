function i(e, n) {
    let t = n && n.cache ? n.cache : u,
        i = n && n.serializer ? n.serializer : s;
    return (
        n && n.strategy
            ? n.strategy
            : function (e, n) {
                  var t, i;
                  let s = 1 === e.length ? r : a;
                  return ((t = n.cache.create()), (i = n.serializer), s.bind(this, e, t, i));
              }
    )(e, { cache: t, serializer: i });
}
function r(e, n, t, i) {
    let r = null == i || "number" == typeof i || "boolean" == typeof i ? i : t(i),
        a = n.get(r);
    return (void 0 === a && ((a = e.call(this, i)), n.set(r, a)), a);
}
function a(e, n, t) {
    let i = Array.prototype.slice.call(arguments, 3),
        r = t(i),
        a = n.get(r);
    return (void 0 === a && ((a = e.apply(this, i)), n.set(r, a)), a);
}
t.d(n, { B: () => i, W: () => l });
let s = function () {
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
    set(e, n) {
        this.cache[e] = n;
    }
}
let u = {
        create: function () {
            return new o();
        },
    },
    l = {
        variadic: function (e, n) {
            var t, i;
            return ((t = n.cache.create()), (i = n.serializer), a.bind(this, e, t, i));
        },
        monadic: function (e, n) {
            var t, i;
            return ((t = n.cache.create()), (i = n.serializer), r.bind(this, e, t, i));
        },
    };
