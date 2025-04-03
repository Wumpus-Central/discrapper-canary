var e,
    o,
    i,
    u = n(723455),
    s = n(668530),
    c = n(982665),
    f = n(948634),
    a = n(141603),
    p = n(980277),
    v = n(964653),
    l = n(511364),
    y = 'Object already initialized',
    h = s.TypeError,
    x = s.WeakMap;
if (u || p.state) {
    var d = p.state || (p.state = new x());
    (d.get = d.get),
        (d.has = d.has),
        (d.set = d.set),
        (e = function (t, r) {
            if (d.has(t)) throw new h(y);
            return (r.facade = t), d.set(t, r), r;
        }),
        (o = function (t) {
            return d.get(t) || {};
        }),
        (i = function (t) {
            return d.has(t);
        });
} else {
    var g = v('state');
    (l[g] = !0),
        (e = function (t, r) {
            if (a(t, g)) throw new h(y);
            return (r.facade = t), f(t, g, r), r;
        }),
        (o = function (t) {
            return a(t, g) ? t[g] : {};
        }),
        (i = function (t) {
            return a(t, g);
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
        return function (r) {
            var n;
            if (!c(r) || (n = o(r)).type !== t) throw new h('Incompatible receiver, ' + t + ' required');
            return n;
        };
    }
};
