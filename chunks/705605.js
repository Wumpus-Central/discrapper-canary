r.d(t, { Z: () => i });
var a = r(259775);
function n(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function s(e, t, r) {
    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1 / 0;
    if ('Object' === e) {
        var o = Object.getOwnPropertyNames(t);
        r && o.sort(!0 === r ? void 0 : r),
            (i = {
                entries: (o = o.slice(a, s + 1)).map(function (e) {
                    return {
                        key: e,
                        value: t[e]
                    };
                })
            });
    } else if ('Array' === e)
        i = {
            entries: t.slice(a, s + 1).map(function (e, t) {
                return {
                    key: t + a,
                    value: e
                };
            })
        };
    else {
        var i,
            c,
            l = 0,
            u = [],
            f = !0,
            b = 'function' == typeof t.set,
            d = (function (e, t) {
                var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (!r) {
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return n(e, void 0);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                                if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t);
                            }
                        })(e))
                    ) {
                        r && (e = r);
                        var a = 0,
                            s = function () {};
                        return {
                            s: s,
                            n: function () {
                                return a >= e.length
                                    ? { done: !0 }
                                    : {
                                          done: !1,
                                          value: e[a++]
                                      };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: s
                        };
                    }
                    throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }
                var o,
                    i = !0,
                    c = !1;
                return {
                    s: function () {
                        r = r.call(e);
                    },
                    n: function () {
                        var e = r.next();
                        return (i = e.done), e;
                    },
                    e: function (e) {
                        (c = !0), (o = e);
                    },
                    f: function () {
                        try {
                            i || null == r.return || r.return();
                        } finally {
                            if (c) throw o;
                        }
                    }
                };
            })(t);
        try {
            for (d.s(); !(c = d.n()).done; ) {
                var h = c.value;
                if (l > s) {
                    f = !1;
                    break;
                }
                a <= l &&
                    (b && Array.isArray(h)
                        ? 'string' == typeof h[0] || 'number' == typeof h[0]
                            ? u.push({
                                  key: h[0],
                                  value: h[1]
                              })
                            : u.push({
                                  key: '[entry '.concat(l, ']'),
                                  value: {
                                      '[key]': h[0],
                                      '[value]': h[1]
                                  }
                              })
                        : u.push({
                              key: l,
                              value: h
                          })),
                    l++;
            }
        } catch (e) {
            d.e(e);
        } finally {
            d.f();
        }
        i = {
            hasMore: !f,
            entries: u
        };
    }
    return i;
}
function o(e, t, r) {
    for (var a = []; t - e > r * r; ) r *= r;
    for (var n = e; n <= t; n += r)
        a.push({
            from: n,
            to: Math.min(t, n + r - 1)
        });
    return a;
}
function i(e, t, r, n) {
    var i,
        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1 / 0,
        u = s.bind(null, e, t, r);
    if (!n) return u().entries;
    var f = l < 1 / 0,
        b = Math.min(l - c, 'Object' === e ? Object.keys(t).length : 'Array' === e ? t.length : 1 / 0);
    if ('Iterable' !== e) {
        if (b <= n || n < 7) return u(c, l).entries;
    } else if (b <= n && !f) return u(c, l).entries;
    if ('Iterable' === e) {
        var d = u(c, c + n - 1),
            h = d.hasMore,
            p = d.entries;
        i = h ? [].concat((0, a.Z)(p), (0, a.Z)(o(c + n, c + 2 * n - 1, n))) : p;
    } else i = f ? o(c, l, n) : [].concat((0, a.Z)(u(0, n - 5).entries), (0, a.Z)(o(n - 4, b - 5, n)), (0, a.Z)(u(b - 4, b - 1).entries));
    return i;
}
