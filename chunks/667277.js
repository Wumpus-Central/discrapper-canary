r.r(n),
    r.d(n, {
        default: function () {
            return C;
        }
    });
var i = r(393655),
    a = r(465735),
    o = r(528734),
    s = r(544991),
    l = r(128961),
    u = r(424421),
    c = r(198050),
    d = r(217224),
    f = r(951516),
    p = r(608297),
    h = r(416778),
    _ = r(633605);
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
        o,
        s = !0,
        l = !1;
    return {
        s: function () {
            a = e[Symbol.iterator]();
        },
        n: function () {
            var e = a.next();
            return (s = e.done), e;
        },
        e: function (e) {
            (l = !0), (o = e);
        },
        f: function () {
            try {
                !s && null != a.return && a.return();
            } finally {
                if (l) throw o;
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
var y = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    b = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    I = /^'([^]*?)'?$/,
    T = /''/g,
    S = /\S/,
    A = /[a-zA-Z]/;
function C(e, n, r, E) {
    (0, f.Z)(3, arguments);
    var v = String(e),
        I = String(n),
        T = (0, _.j)(),
        C = null !== (P = null !== (M = null == E ? void 0 : E.locale) && void 0 !== M ? M : T.locale) && void 0 !== P ? P : i.Z;
    if (!C.match) throw RangeError('locale must contain match property');
    var R = (0, d.Z)(null !== (k = null !== (U = null !== (B = null !== (G = null == E ? void 0 : E.firstWeekContainsDate) && void 0 !== G ? G : null == E ? void 0 : null === (Z = E.locale) || void 0 === Z ? void 0 : null === (F = Z.options) || void 0 === F ? void 0 : F.firstWeekContainsDate) && void 0 !== B ? B : T.firstWeekContainsDate) && void 0 !== U ? U : null === (V = T.locale) || void 0 === V ? void 0 : null === (j = V.options) || void 0 === j ? void 0 : j.firstWeekContainsDate) && void 0 !== k ? k : 1);
    if (!(R >= 1 && R <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var O = (0, d.Z)(null !== (H = null !== (Y = null !== (W = null !== (K = null == E ? void 0 : E.weekStartsOn) && void 0 !== K ? K : null == E ? void 0 : null === (z = E.locale) || void 0 === z ? void 0 : null === (q = z.options) || void 0 === q ? void 0 : q.weekStartsOn) && void 0 !== W ? W : T.weekStartsOn) && void 0 !== Y ? Y : null === (Q = T.locale) || void 0 === Q ? void 0 : null === (X = Q.options) || void 0 === X ? void 0 : X.weekStartsOn) && void 0 !== H ? H : 0);
    if (!(O >= 0 && O <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if ('' === I) return '' === v ? (0, o.default)(r) : new Date(NaN);
    var D = {
            firstWeekContainsDate: R,
            weekStartsOn: O,
            locale: C
        },
        x = [new p.GT()],
        L = I.match(b)
            .map(function (e) {
                var n = e[0];
                return n in l.Z ? (0, l.Z[n])(e, C.formatLong) : e;
            })
            .join('')
            .match(y),
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
        $ = g(L);
    try {
        var ee = function () {
            var n = J.value;
            !(null != E && E.useAdditionalWeekYearTokens) && (0, c.Do)(n) && (0, c.qp)(n, I, e), !(null != E && E.useAdditionalDayOfYearTokens) && (0, c.Iu)(n) && (0, c.qp)(n, I, e);
            var r = n[0],
                i = h.f[r];
            if (i) {
                var a = i.incompatibleTokens;
                if (Array.isArray(a)) {
                    var o = w.find(function (e) {
                        return a.includes(e.token) || e.token === r;
                    });
                    if (o) throw RangeError("The format string mustn't contain `".concat(o.fullToken, '` and `').concat(n, '` at the same time'));
                } else if ('*' === i.incompatibleTokens && w.length > 0) throw RangeError("The format string mustn't contain `".concat(n, '` and any other token at the same time'));
                w.push({
                    token: r,
                    fullToken: n
                });
                var s = i.run(v, n, C.match, D);
                if (!s) return { v: new Date(NaN) };
                x.push(s.setter), (v = s.rest);
            } else {
                if (r.match(A)) throw RangeError('Format string contains an unescaped latin alphabet character `' + r + '`');
                if (("''" === n ? (n = "'") : "'" === r && (n = N(n)), 0 !== v.indexOf(n))) return { v: new Date(NaN) };
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
    var en = x
            .map(function (e) {
                return e.priority;
            })
            .sort(function (e, n) {
                return n - e;
            })
            .filter(function (e, n, r) {
                return r.indexOf(e) === n;
            })
            .map(function (e) {
                return x
                    .filter(function (n) {
                        return n.priority === e;
                    })
                    .sort(function (e, n) {
                        return n.subPriority - e.subPriority;
                    });
            })
            .map(function (e) {
                return e[0];
            }),
        er = (0, o.default)(r);
    if (isNaN(er.getTime())) return new Date(NaN);
    var ei = (0, a.Z)(er, (0, u.Z)(er)),
        ea = {},
        eo,
        es = g(en);
    try {
        for (es.s(); !(eo = es.n()).done; ) {
            var el = eo.value;
            if (!el.validate(ei, D)) return new Date(NaN);
            var eu = el.set(ei, ea, D);
            Array.isArray(eu) ? ((ei = eu[0]), (0, s.Z)(ea, eu[1])) : (ei = eu);
        }
    } catch (e) {
        es.e(e);
    } finally {
        es.f();
    }
    return ei;
}
function N(e) {
    return e.match(I)[1].replace(T, "'");
}
