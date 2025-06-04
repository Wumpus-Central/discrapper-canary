var r,
    i,
    o,
    a = n(720561),
    s = n(127849),
    l = n(434431),
    c = n(436207),
    u = n(77025),
    d = n(651144),
    f = n(661314),
    _ = n(485073),
    p = 'Object already initialized',
    h = s.TypeError,
    m = s.WeakMap,
    g = function (e) {
        return o(e) ? i(e) : r(e, {});
    },
    E = function (e) {
        return function (t) {
            var n;
            if (!l(t) || (n = i(t)).type !== e) throw new h('Incompatible receiver, ' + e + ' required');
            return n;
        };
    };
if (a || d.state) {
    var b = d.state || (d.state = new m());
    (b.get = b.get),
        (b.has = b.has),
        (b.set = b.set),
        (r = function (e, t) {
            if (b.has(e)) throw new h(p);
            return (t.facade = e), b.set(e, t), t;
        }),
        (i = function (e) {
            return b.get(e) || {};
        }),
        (o = function (e) {
            return b.has(e);
        });
} else {
    var y = f('state');
    (_[y] = !0),
        (r = function (e, t) {
            if (u(e, y)) throw new h(p);
            return (t.facade = e), c(e, y, t), t;
        }),
        (i = function (e) {
            return u(e, y) ? e[y] : {};
        }),
        (o = function (e) {
            return u(e, y);
        });
}
e.exports = {
    set: r,
    get: i,
    has: o,
    enforce: g,
    getterFor: E
};
