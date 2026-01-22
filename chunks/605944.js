var n,
    o,
    s,
    i = e(491755),
    u = e(308227),
    c = e(407057),
    a = e(180734),
    f = e(512008),
    p = e(574236),
    l = e(157494),
    v = e(760326),
    y = "Object already initialized",
    h = u.TypeError,
    x = u.WeakMap;
if (i || p.state) {
    var d = p.state || (p.state = new x());
    (d.get = d.get),
        (d.has = d.has),
        (d.set = d.set),
        (n = function (t, r) {
            if (d.has(t)) throw new h(y);
            return (r.facade = t), d.set(t, r), r;
        }),
        (o = function (t) {
            return d.get(t) || {};
        }),
        (s = function (t) {
            return d.has(t);
        });
} else {
    var g = l("state");
    (v[g] = !0),
        (n = function (t, r) {
            if (f(t, g)) throw new h(y);
            return (r.facade = t), a(t, g, r), r;
        }),
        (o = function (t) {
            return f(t, g) ? t[g] : {};
        }),
        (s = function (t) {
            return f(t, g);
        });
}
t.exports = {
    set: n,
    get: o,
    has: s,
    enforce: function (t) {
        return s(t) ? o(t) : n(t, {});
    },
    getterFor: function (t) {
        return function (r) {
            var e;
            if (!c(r) || (e = o(r)).type !== t) throw new h("Incompatible receiver, " + t + " required");
            return e;
        };
    },
};
