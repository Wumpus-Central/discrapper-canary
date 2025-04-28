var e,
    o,
    i,
    u = r(720561),
    c = r(127849),
    a = r(434431),
    f = r(436207),
    s = r(77025),
    l = r(651144),
    p = r(661314),
    d = r(485073),
    _ = 'Object already initialized',
    h = c.TypeError,
    y = c.WeakMap;
if (u || l.state) {
    var b = l.state || (l.state = new y());
    (b.get = b.get),
        (b.has = b.has),
        (b.set = b.set),
        (e = function (t, n) {
            if (b.has(t)) throw new h(_);
            return (n.facade = t), b.set(t, n), n;
        }),
        (o = function (t) {
            return b.get(t) || {};
        }),
        (i = function (t) {
            return b.has(t);
        });
} else {
    var g = p('state');
    (d[g] = !0),
        (e = function (t, n) {
            if (s(t, g)) throw new h(_);
            return (n.facade = t), f(t, g, n), n;
        }),
        (o = function (t) {
            return s(t, g) ? t[g] : {};
        }),
        (i = function (t) {
            return s(t, g);
        });
}
t.exports = {
    set: e,
    get: o,
    has: i,
    enforce: function (t) {
        return i(t) ? o(t) : e(t, {});
    },
    getterFor: function (t) {
        return function (n) {
            var r;
            if (!a(n) || (r = o(n)).type !== t) throw new h('Incompatible receiver, ' + t + ' required');
            return r;
        };
    }
};
