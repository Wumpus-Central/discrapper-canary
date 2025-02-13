var r,
    n,
    o,
    _ = a(197047),
    i = a(161581),
    c = a(622281),
    s = a(251069),
    E = a(740362),
    l = a(801127),
    u = a(883539),
    I = a(624906),
    R = 'Object already initialized',
    d = i.TypeError,
    A = i.WeakMap;
if (_ || l.state) {
    var f = l.state || (l.state = new A());
    (f.get = f.get),
        (f.has = f.has),
        (f.set = f.set),
        (r = function (t, e) {
            if (f.has(t)) throw d(R);
            return (e.facade = t), f.set(t, e), e;
        }),
        (n = function (t) {
            return f.get(t) || {};
        }),
        (o = function (t) {
            return f.has(t);
        });
} else {
    var p = u('state');
    (I[p] = !0),
        (r = function (t, e) {
            if (E(t, p)) throw d(R);
            return (e.facade = t), s(t, p, e), e;
        }),
        (n = function (t) {
            return E(t, p) ? t[p] : {};
        }),
        (o = function (t) {
            return E(t, p);
        });
}
t.exports = {
    set: r,
    get: n,
    has: o,
    enforce: function (t) {
        return o(t) ? n(t) : r(t, {});
    },
    getterFor: function (t) {
        return function (e) {
            var a;
            if (!c(e) || (a = n(e)).type !== t) throw d('Incompatible receiver, ' + t + ' required');
            return a;
        };
    }
};
