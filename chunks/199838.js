var r,
    i,
    a,
    o = n(720561),
    s = n(127849),
    l = n(434431),
    c = n(436207),
    u = n(77025),
    d = n(651144),
    f = n(661314),
    p = n(485073),
    _ = "Object already initialized",
    m = s.TypeError,
    h = s.WeakMap,
    g = function (e) {
        return a(e) ? i(e) : r(e, {});
    },
    E = function (e) {
        return function (t) {
            var n;
            if (!l(t) || (n = i(t)).type !== e) throw new m("Incompatible receiver, " + e + " required");
            return n;
        };
    };
if (o || d.state) {
    var b = d.state || (d.state = new h());
    (b.get = b.get),
        (b.has = b.has),
        (b.set = b.set),
        (r = function (e, t) {
            if (b.has(e)) throw new m(_);
            return (t.facade = e), b.set(e, t), t;
        }),
        (i = function (e) {
            return b.get(e) || {};
        }),
        (a = function (e) {
            return b.has(e);
        });
} else {
    var y = f("state");
    (p[y] = !0),
        (r = function (e, t) {
            if (u(e, y)) throw new m(_);
            return (t.facade = e), c(e, y, t), t;
        }),
        (i = function (e) {
            return u(e, y) ? e[y] : {};
        }),
        (a = function (e) {
            return u(e, y);
        });
}
e.exports = {
    set: r,
    get: i,
    has: a,
    enforce: g,
    getterFor: E,
};
