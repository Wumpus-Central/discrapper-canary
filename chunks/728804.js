var i = r(690244),
    a = r(192853),
    o = r(813426),
    s = i('%TypeError%'),
    l = i('%WeakMap%', !0),
    u = i('%Map%', !0),
    c = a('WeakMap.prototype.get', !0),
    d = a('WeakMap.prototype.set', !0),
    f = a('WeakMap.prototype.has', !0),
    p = a('Map.prototype.get', !0),
    h = a('Map.prototype.set', !0),
    _ = a('Map.prototype.has', !0),
    m = function (e, n) {
        for (var r, i = e; null !== (r = i.next); i = r) if (r.key === n) return (i.next = r.next), (r.next = e.next), (e.next = r), r;
    },
    g = function (e, n) {
        var r = m(e, n);
        return r && r.value;
    },
    E = function (e, n, r) {
        var i = m(e, n);
        i
            ? (i.value = r)
            : (e.next = {
                  key: n,
                  next: e.next,
                  value: r
              });
    },
    v = function (e, n) {
        return !!m(e, n);
    };
e.exports = function () {
    var e,
        n,
        r,
        i = {
            assert: function (e) {
                if (!i.has(e)) throw new s('Side channel does not contain ' + o(e));
            },
            get: function (i) {
                if (l && i && ('object' == typeof i || 'function' == typeof i)) {
                    if (e) return c(e, i);
                } else if (u) {
                    if (n) return p(n, i);
                } else if (r) return g(r, i);
            },
            has: function (i) {
                if (l && i && ('object' == typeof i || 'function' == typeof i)) {
                    if (e) return f(e, i);
                } else if (u) {
                    if (n) return _(n, i);
                } else if (r) return v(r, i);
                return !1;
            },
            set: function (i, a) {
                l && i && ('object' == typeof i || 'function' == typeof i)
                    ? (!e && (e = new l()), d(e, i, a))
                    : u
                      ? (!n && (n = new u()), h(n, i, a))
                      : (!r &&
                            (r = {
                                key: {},
                                next: null
                            }),
                        E(r, i, a));
            }
        };
    return i;
};
