var i,
    a,
    o,
    s = r(723455),
    l = r(668530),
    u = r(982665),
    c = r(948634),
    d = r(141603),
    f = r(980277),
    p = r(964653),
    h = r(511364),
    _ = 'Object already initialized',
    m = l.TypeError,
    g = l.WeakMap,
    E = function (e) {
        return o(e) ? a(e) : i(e, {});
    },
    v = function (e) {
        return function (n) {
            var r;
            if (!u(n) || (r = a(n)).type !== e) throw new m('Incompatible receiver, ' + e + ' required');
            return r;
        };
    };
if (s || f.state) {
    var y = f.state || (f.state = new g());
    (y.get = y.get),
        (y.has = y.has),
        (y.set = y.set),
        (i = function (e, n) {
            if (y.has(e)) throw new m(_);
            return (n.facade = e), y.set(e, n), n;
        }),
        (a = function (e) {
            return y.get(e) || {};
        }),
        (o = function (e) {
            return y.has(e);
        });
} else {
    var b = p('state');
    (h[b] = !0),
        (i = function (e, n) {
            if (d(e, b)) throw new m(_);
            return (n.facade = e), c(e, b, n), n;
        }),
        (a = function (e) {
            return d(e, b) ? e[b] : {};
        }),
        (o = function (e) {
            return d(e, b);
        });
}
e.exports = {
    set: i,
    get: a,
    has: o,
    enforce: E,
    getterFor: v
};
