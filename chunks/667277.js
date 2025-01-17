r.r(n),
    r.d(n, {
        default: function () {
            return N;
        }
    });
var i = r(393655),
    a = r(465735),
    s = r(528734),
    o = r(544991),
    l = r(128961),
    u = r(424421),
    c = r(198050),
    d = r(217224),
    f = r(951516),
    _ = r(608297),
    h = r(416778),
    p = r(633605);
function m(e) {
    return (m =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function g(e, n) {
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (a = E(e)) || (n && e && 'number' == typeof e.length)) {
            a && (e = a);
            var r = 0,
                i = function () {};
            return {
                s: i,
                n: function () {
                    return r >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[r++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: i
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var a,
        s,
        o = !0,
        l = !1;
    return {
        s: function () {
            a = e[Symbol.iterator]();
        },
        n: function () {
            var e = a.next();
            return (o = e.done), e;
        },
        e: function (e) {
            (l = !0), (s = e);
        },
        f: function () {
            try {
                !o && null != a.return && a.return();
            } finally {
                if (l) throw s;
            }
        }
    };
}
function E(e, n) {
    if (e) {
        if ('string' == typeof e) return v(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, n);
    }
}
function v(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
var I = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    T = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    b = /^'([^]*?)'?$/,
    y = /''/g,
    S = /\S/,
    A = /[a-zA-Z]/;
function N(e, n, r, E) {
    (0, f.Z)(3, arguments);
    var v = String(e),
        b = String(n),
        y = (0, p.j)(),
        N = null !== (P = null !== (M = null == E ? void 0 : E.locale) && void 0 !== M ? M : y.locale) && void 0 !== P ? P : i.Z;
    if (!N.match) throw RangeError('locale must contain match property');
    var R = (0, d.Z)(null !== (k = null !== (U = null !== (B = null !== (G = null == E ? void 0 : E.firstWeekContainsDate) && void 0 !== G ? G : null == E ? void 0 : null === (Z = E.locale) || void 0 === Z ? void 0 : null === (F = Z.options) || void 0 === F ? void 0 : F.firstWeekContainsDate) && void 0 !== B ? B : y.firstWeekContainsDate) && void 0 !== U ? U : null === (V = y.locale) || void 0 === V ? void 0 : null === (j = V.options) || void 0 === j ? void 0 : j.firstWeekContainsDate) && void 0 !== k ? k : 1);
    if (!(R >= 1 && R <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var O = (0, d.Z)(null !== (H = null !== (Y = null !== (W = null !== (K = null == E ? void 0 : E.weekStartsOn) && void 0 !== K ? K : null == E ? void 0 : null === (z = E.locale) || void 0 === z ? void 0 : null === (q = z.options) || void 0 === q ? void 0 : q.weekStartsOn) && void 0 !== W ? W : y.weekStartsOn) && void 0 !== Y ? Y : null === (Q = y.locale) || void 0 === Q ? void 0 : null === (X = Q.options) || void 0 === X ? void 0 : X.weekStartsOn) && void 0 !== H ? H : 0);
    if (!(O >= 0 && O <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if ('' === b) return '' === v ? (0, s.default)(r) : new Date(NaN);
    var D = {
            firstWeekContainsDate: R,
            weekStartsOn: O,
            locale: N
        },
        L = [new _.GT()],
        x = b
            .match(T)
            .map(function (e) {
                var n = e[0];
                return n in l.Z ? (0, l.Z[n])(e, N.formatLong) : e;
            })
            .join('')
            .match(I),
        w = [],
        P,
        M,
        k,
        U,
        B,
        G,
        Z,
        F,
        V,
        j,
        H,
        Y,
        W,
        K,
        z,
        q,
        Q,
        X,
        J,
        $ = g(x);
    try {
        var ee = function () {
            var n = J.value;
            !(null != E && E.useAdditionalWeekYearTokens) && (0, c.Do)(n) && (0, c.qp)(n, b, e), !(null != E && E.useAdditionalDayOfYearTokens) && (0, c.Iu)(n) && (0, c.qp)(n, b, e);
            var r = n[0],
                i = h.f[r];
            if (i) {
                var a = i.incompatibleTokens;
                if (Array.isArray(a)) {
                    var s = w.find(function (e) {
                        return a.includes(e.token) || e.token === r;
                    });
                    if (s) throw RangeError("The format string mustn't contain `".concat(s.fullToken, '` and `').concat(n, '` at the same time'));
                } else if ('*' === i.incompatibleTokens && w.length > 0) throw RangeError("The format string mustn't contain `".concat(n, '` and any other token at the same time'));
                w.push({
                    token: r,
                    fullToken: n
                });
                var o = i.run(v, n, N.match, D);
                if (!o) return { v: new Date(NaN) };
                L.push(o.setter), (v = o.rest);
            } else {
                if (r.match(A)) throw RangeError('Format string contains an unescaped latin alphabet character `' + r + '`');
                if (("''" === n ? (n = "'") : "'" === r && (n = C(n)), 0 !== v.indexOf(n))) return { v: new Date(NaN) };
                v = v.slice(n.length);
            }
        };
        for ($.s(); !(J = $.n()).done; ) {
            var et = ee();
            if ('object' === m(et)) return et.v;
        }
    } catch (e) {
        $.e(e);
    } finally {
        $.f();
    }
    if (v.length > 0 && S.test(v)) return new Date(NaN);
    var en = L.map(function (e) {
            return e.priority;
        })
            .sort(function (e, n) {
                return n - e;
            })
            .filter(function (e, n, r) {
                return r.indexOf(e) === n;
            })
            .map(function (e) {
                return L.filter(function (n) {
                    return n.priority === e;
                }).sort(function (e, n) {
                    return n.subPriority - e.subPriority;
                });
            })
            .map(function (e) {
                return e[0];
            }),
        er = (0, s.default)(r);
    if (isNaN(er.getTime())) return new Date(NaN);
    var ei = (0, a.Z)(er, (0, u.Z)(er)),
        ea = {},
        es,
        eo = g(en);
    try {
        for (eo.s(); !(es = eo.n()).done; ) {
            var el = es.value;
            if (!el.validate(ei, D)) return new Date(NaN);
            var eu = el.set(ei, ea, D);
            Array.isArray(eu) ? ((ei = eu[0]), (0, o.Z)(ea, eu[1])) : (ei = eu);
        }
    } catch (e) {
        eo.e(e);
    } finally {
        eo.f();
    }
    return ei;
}
function C(e) {
    return e.match(b)[1].replace(y, "'");
}
