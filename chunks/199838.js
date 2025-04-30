var r,
    n,
    _,
    o = a(720561),
    i = a(127849),
    c = a(434431),
    s = a(436207),
    E = a(77025),
    l = a(651144),
    u = a(661314),
    I = a(485073),
    R = 'Object already initialized',
    d = i.TypeError,
    A = i.WeakMap;
if (o || l.state) {
    var f = l.state || (l.state = new A());
    (f.get = f.get),
        (f.has = f.has),
        (f.set = f.set),
        (r = function (t, e) {
            if (f.has(t)) throw new d(R);
            return (e.facade = t), f.set(t, e), e;
        }),
        (n = function (t) {
            return f.get(t) || {};
        }),
        (_ = function (t) {
            return f.has(t);
        });
} else {
    var p = u('state');
    (I[p] = !0),
        (r = function (t, e) {
            if (E(t, p)) throw new d(R);
            return (e.facade = t), s(t, p, e), e;
        }),
        (n = function (t) {
            return E(t, p) ? t[p] : {};
        }),
        (_ = function (t) {
            return E(t, p);
        });
}
t.exports = {
    set: r,
    get: n,
    has: _,
    enforce: function (t) {
        return _(t) ? n(t) : r(t, {});
    },
    getterFor: function (t) {
        return function (e) {
            var a;
            if (!c(e) || (a = n(e)).type !== t) throw new d('Incompatible receiver, ' + t + ' required');
            return a;
        };
    }
};
