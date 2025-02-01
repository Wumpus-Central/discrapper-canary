var i = n(690244),
    r = n(192853),
    a = n(813426),
    s = i('%TypeError%'),
    o = i('%WeakMap%', !0),
    l = i('%Map%', !0),
    u = r('WeakMap.prototype.get', !0),
    c = r('WeakMap.prototype.set', !0),
    d = r('WeakMap.prototype.has', !0),
    f = r('Map.prototype.get', !0),
    _ = r('Map.prototype.set', !0),
    p = r('Map.prototype.has', !0),
    h = function (e, t) {
        for (var n, i = e; null !== (n = i.next); i = n) if (n.key === t) return (i.next = n.next), (n.next = e.next), (e.next = n), n;
    },
    m = function (e, t) {
        var n = h(e, t);
        return n && n.value;
    },
    g = function (e, t, n) {
        var i = h(e, t);
        i
            ? (i.value = n)
            : (e.next = {
                  key: t,
                  next: e.next,
                  value: n
              });
    },
    E = function (e, t) {
        return !!h(e, t);
    };
e.exports = function () {
    var e,
        t,
        n,
        i = {
            assert: function (e) {
                if (!i.has(e)) throw new s('Side channel does not contain ' + a(e));
            },
            get: function (i) {
                if (o && i && ('object' == typeof i || 'function' == typeof i)) {
                    if (e) return u(e, i);
                } else if (l) {
                    if (t) return f(t, i);
                } else if (n) return m(n, i);
            },
            has: function (i) {
                if (o && i && ('object' == typeof i || 'function' == typeof i)) {
                    if (e) return d(e, i);
                } else if (l) {
                    if (t) return p(t, i);
                } else if (n) return E(n, i);
                return !1;
            },
            set: function (i, r) {
                o && i && ('object' == typeof i || 'function' == typeof i)
                    ? (e || (e = new o()), c(e, i, r))
                    : l
                      ? (t || (t = new l()), _(t, i, r))
                      : (n ||
                            (n = {
                                key: {},
                                next: null
                            }),
                        g(n, i, r));
            }
        };
    return i;
};
