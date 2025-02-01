var i,
    r,
    a,
    s = n(723455),
    o = n(668530),
    l = n(982665),
    u = n(948634),
    c = n(141603),
    d = n(980277),
    f = n(964653),
    _ = n(511364),
    p = 'Object already initialized',
    h = o.TypeError,
    m = o.WeakMap,
    g = function (e) {
        return a(e) ? r(e) : i(e, {});
    },
    E = function (e) {
        return function (t) {
            var n;
            if (!l(t) || (n = r(t)).type !== e) throw new h('Incompatible receiver, ' + e + ' required');
            return n;
        };
    };
if (s || d.state) {
    var v = d.state || (d.state = new m());
    (v.get = v.get),
        (v.has = v.has),
        (v.set = v.set),
        (i = function (e, t) {
            if (v.has(e)) throw new h(p);
            return (t.facade = e), v.set(e, t), t;
        }),
        (r = function (e) {
            return v.get(e) || {};
        }),
        (a = function (e) {
            return v.has(e);
        });
} else {
    var y = f('state');
    (_[y] = !0),
        (i = function (e, t) {
            if (c(e, y)) throw new h(p);
            return (t.facade = e), u(e, y, t), t;
        }),
        (r = function (e) {
            return c(e, y) ? e[y] : {};
        }),
        (a = function (e) {
            return c(e, y);
        });
}
e.exports = {
    set: i,
    get: r,
    has: a,
    enforce: g,
    getterFor: E
};
