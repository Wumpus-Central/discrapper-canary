n.r(t), n.d(t, { default: () => T });
var r = n(393655),
    i = n(465735),
    o = n(528734),
    a = n(544991),
    s = n(128961),
    l = n(424421),
    c = n(198050),
    u = n(217224),
    d = n(951516),
    f = n(608297),
    p = n(416778),
    _ = n(633605);
function h(e) {
    return (h =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function m(e, t) {
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = g(e)) || (t && e && 'number' == typeof e.length)) {
            i && (e = i);
            var n = 0,
                r = function () {};
            return {
                s: r,
                n: function () {
                    return n >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[n++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: r
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var i,
        o,
        a = !0,
        s = !1;
    return {
        s: function () {
            i = e[Symbol.iterator]();
        },
        n: function () {
            var e = i.next();
            return (a = e.done), e;
        },
        e: function (e) {
            (s = !0), (o = e);
        },
        f: function () {
            try {
                a || null == i.return || i.return();
            } finally {
                if (s) throw o;
            }
        }
    };
}
function g(e, t) {
    if (e) {
        if ('string' == typeof e) return E(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t);
    }
}
function E(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var v = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    b = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    y = /^'([^]*?)'?$/,
    O = /''/g,
    S = /\S/,
    I = /[a-zA-Z]/;
function T(e, t, n, g) {
    (0, d.Z)(3, arguments);
    var E = String(e),
        y = String(t),
        O = (0, _.j)(),
        T = null !== (R = null !== (P = null == g ? void 0 : g.locale) && void 0 !== P ? P : O.locale) && void 0 !== R ? R : r.Z;
    if (!T.match) throw RangeError('locale must contain match property');
    var A = (0, u.Z)(null !== (w = null !== (D = null !== (x = null !== (L = null == g ? void 0 : g.firstWeekContainsDate) && void 0 !== L ? L : null == g ? void 0 : null === (M = g.locale) || void 0 === M ? void 0 : null === (k = M.options) || void 0 === k ? void 0 : k.firstWeekContainsDate) && void 0 !== x ? x : O.firstWeekContainsDate) && void 0 !== D ? D : null === (j = O.locale) || void 0 === j ? void 0 : null === (U = j.options) || void 0 === U ? void 0 : U.firstWeekContainsDate) && void 0 !== w ? w : 1);
    if (!(A >= 1 && A <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var C = (0, u.Z)(null !== (G = null !== (B = null !== (Z = null !== (F = null == g ? void 0 : g.weekStartsOn) && void 0 !== F ? F : null == g ? void 0 : null === (V = g.locale) || void 0 === V ? void 0 : null === (H = V.options) || void 0 === H ? void 0 : H.weekStartsOn) && void 0 !== Z ? Z : O.weekStartsOn) && void 0 !== B ? B : null === (W = O.locale) || void 0 === W ? void 0 : null === (Y = W.options) || void 0 === Y ? void 0 : Y.weekStartsOn) && void 0 !== G ? G : 0);
    if (!(C >= 0 && C <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if ('' === y) return '' === E ? (0, o.default)(n) : new Date(NaN);
    var R,
        P,
        w,
        D,
        x,
        L,
        M,
        k,
        j,
        U,
        G,
        B,
        Z,
        F,
        V,
        H,
        W,
        Y,
        K,
        z = {
            firstWeekContainsDate: A,
            weekStartsOn: C,
            locale: T
        },
        q = [new f.GT()],
        Q = y
            .match(b)
            .map(function (e) {
                var t = e[0];
                return t in s.Z ? (0, s.Z[t])(e, T.formatLong) : e;
            })
            .join('')
            .match(v),
        X = [],
        J = m(Q);
    try {
        var $ = function () {
            var t = K.value;
            !(null != g && g.useAdditionalWeekYearTokens) && (0, c.Do)(t) && (0, c.qp)(t, y, e), !(null != g && g.useAdditionalDayOfYearTokens) && (0, c.Iu)(t) && (0, c.qp)(t, y, e);
            var n = t[0],
                r = p.f[n];
            if (r) {
                var i = r.incompatibleTokens;
                if (Array.isArray(i)) {
                    var o = X.find(function (e) {
                        return i.includes(e.token) || e.token === n;
                    });
                    if (o) throw RangeError("The format string mustn't contain `".concat(o.fullToken, '` and `').concat(t, '` at the same time'));
                } else if ('*' === r.incompatibleTokens && X.length > 0) throw RangeError("The format string mustn't contain `".concat(t, '` and any other token at the same time'));
                X.push({
                    token: n,
                    fullToken: t
                });
                var a = r.run(E, t, T.match, z);
                if (!a) return { v: new Date(NaN) };
                q.push(a.setter), (E = a.rest);
            } else {
                if (n.match(I)) throw RangeError('Format string contains an unescaped latin alphabet character `' + n + '`');
                if (("''" === t ? (t = "'") : "'" === n && (t = N(t)), 0 !== E.indexOf(t))) return { v: new Date(NaN) };
                E = E.slice(t.length);
            }
        };
        for (J.s(); !(K = J.n()).done; ) {
            var ee = $();
            if ('object' === h(ee)) return ee.v;
        }
    } catch (e) {
        J.e(e);
    } finally {
        J.f();
    }
    if (E.length > 0 && S.test(E)) return new Date(NaN);
    var et = q
            .map(function (e) {
                return e.priority;
            })
            .sort(function (e, t) {
                return t - e;
            })
            .filter(function (e, t, n) {
                return n.indexOf(e) === t;
            })
            .map(function (e) {
                return q
                    .filter(function (t) {
                        return t.priority === e;
                    })
                    .sort(function (e, t) {
                        return t.subPriority - e.subPriority;
                    });
            })
            .map(function (e) {
                return e[0];
            }),
        en = (0, o.default)(n);
    if (isNaN(en.getTime())) return new Date(NaN);
    var er,
        ei = (0, i.Z)(en, (0, l.Z)(en)),
        eo = {},
        ea = m(et);
    try {
        for (ea.s(); !(er = ea.n()).done; ) {
            var es = er.value;
            if (!es.validate(ei, z)) return new Date(NaN);
            var el = es.set(ei, eo, z);
            Array.isArray(el) ? ((ei = el[0]), (0, a.Z)(eo, el[1])) : (ei = el);
        }
    } catch (e) {
        ea.e(e);
    } finally {
        ea.f();
    }
    return ei;
}
function N(e) {
    return e.match(y)[1].replace(O, "'");
}
