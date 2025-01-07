r.d(t, {
    Z: function () {
        return i;
    }
});
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
            u = 0,
            l = [],
            f = !0,
            b = 'function' == typeof t.set,
            h = (function (e, t) {
                var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                if (!r) {
                    if (
                        Array.isArray(e) ||
                        (r = (function (e, t) {
                            if (e) {
                                if ('string' == typeof e) return n(e, t);
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
                            !i && null != r.return && r.return();
                        } finally {
                            if (c) throw o;
                        }
                    }
                };
            })(t);
        try {
            for (h.s(); !(c = h.n()).done; ) {
                var d = c.value;
                if (u > s) {
                    f = !1;
                    break;
                }
                a <= u &&
                    (b && Array.isArray(d)
                        ? 'string' == typeof d[0] || 'number' == typeof d[0]
                            ? l.push({
                                  key: d[0],
                                  value: d[1]
                              })
                            : l.push({
                                  key: '[entry '.concat(u, ']'),
                                  value: {
                                      '[key]': d[0],
                                      '[value]': d[1]
                                  }
                              })
                        : l.push({
                              key: u,
                              value: d
                          })),
                    u++;
            }
        } catch (e) {
            h.e(e);
        } finally {
            h.f();
        }
        i = {
            hasMore: !f,
            entries: l
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
        c,
        u,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1 / 0,
        b = s.bind(null, e, t, r);
    if (!n) return b().entries;
    var h = f < 1 / 0;
    var d = Math.min(f - l, ((i = e), (c = t), 'Object' === i ? Object.keys(c).length : 'Array' === i ? c.length : 1 / 0));
    if ('Iterable' !== e) {
        if (d <= n || n < 7) return b(l, f).entries;
    } else if (d <= n && !h) return b(l, f).entries;
    if ('Iterable' === e) {
        var p = b(l, l + n - 1),
            m = p.hasMore,
            g = p.entries;
        u = m ? [].concat((0, a.Z)(g), (0, a.Z)(o(l + n, l + 2 * n - 1, n))) : g;
    } else u = h ? o(l, f, n) : [].concat((0, a.Z)(b(0, n - 5).entries), (0, a.Z)(o(n - 4, d - 5, n)), (0, a.Z)(b(d - 4, d - 1).entries));
    return u;
}
