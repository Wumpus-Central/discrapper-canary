var r,
    i,
    o,
    a = n(723455),
    s = n(668530),
    l = n(982665),
    c = n(948634),
    u = n(141603),
    d = n(980277),
    f = n(964653),
    p = n(511364),
    _ = 'Object already initialized',
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
    var v = d.state || (d.state = new m());
    (v.get = v.get),
        (v.has = v.has),
        (v.set = v.set),
        (r = function (e, t) {
            if (v.has(e)) throw new h(_);
            return (t.facade = e), v.set(e, t), t;
        }),
        (i = function (e) {
            return v.get(e) || {};
        }),
        (o = function (e) {
            return v.has(e);
        });
} else {
    var b = f('state');
    (p[b] = !0),
        (r = function (e, t) {
            if (u(e, b)) throw new h(_);
            return (t.facade = e), c(e, b, t), t;
        }),
        (i = function (e) {
            return u(e, b) ? e[b] : {};
        }),
        (o = function (e) {
            return u(e, b);
        });
}
e.exports = {
    set: r,
    get: i,
    has: o,
    enforce: g,
    getterFor: E
};
