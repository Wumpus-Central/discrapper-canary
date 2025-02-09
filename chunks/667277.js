n.r(t), n.d(t, { default: () => A });
var i = n(393655),
    r = n(465735),
    a = n(528734),
    s = n(544991),
    o = n(128961),
    l = n(424421),
    u = n(198050),
    c = n(217224),
    d = n(951516),
    f = n(608297),
    _ = n(416778),
    p = n(633605);
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
        if (Array.isArray(e) || (r = g(e)) || (t && e && 'number' == typeof e.length)) {
            r && (e = r);
            var n = 0,
                i = function () {};
            return {
                s: i,
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
                f: i
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var r,
        a,
        s = !0,
        o = !1;
    return {
        s: function () {
            r = e[Symbol.iterator]();
        },
        n: function () {
            var e = r.next();
            return (s = e.done), e;
        },
        e: function (e) {
            (o = !0), (a = e);
        },
        f: function () {
            try {
                s || null == r.return || r.return();
            } finally {
                if (o) throw a;
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
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
var v = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    y = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    I = /^'([^]*?)'?$/,
    T = /''/g,
    b = /\S/,
    S = /[a-zA-Z]/;
function A(e, t, n, g) {
    (0, d.Z)(3, arguments);
    var E = String(e),
        I = String(t),
        T = (0, p.j)(),
        A = null !== (O = null !== (D = null == g ? void 0 : g.locale) && void 0 !== D ? D : T.locale) && void 0 !== O ? O : i.Z;
    if (!A.match) throw RangeError('locale must contain match property');
    var C = (0, c.Z)(null !== (L = null !== (x = null !== (w = null !== (P = null == g ? void 0 : g.firstWeekContainsDate) && void 0 !== P ? P : null == g ? void 0 : null === (M = g.locale) || void 0 === M ? void 0 : null === (k = M.options) || void 0 === k ? void 0 : k.firstWeekContainsDate) && void 0 !== w ? w : T.firstWeekContainsDate) && void 0 !== x ? x : null === (U = T.locale) || void 0 === U ? void 0 : null === (G = U.options) || void 0 === G ? void 0 : G.firstWeekContainsDate) && void 0 !== L ? L : 1);
    if (!(C >= 1 && C <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var R = (0, c.Z)(null !== (B = null !== (Z = null !== (F = null !== (V = null == g ? void 0 : g.weekStartsOn) && void 0 !== V ? V : null == g ? void 0 : null === (j = g.locale) || void 0 === j ? void 0 : null === (H = j.options) || void 0 === H ? void 0 : H.weekStartsOn) && void 0 !== F ? F : T.weekStartsOn) && void 0 !== Z ? Z : null === (Y = T.locale) || void 0 === Y ? void 0 : null === (W = Y.options) || void 0 === W ? void 0 : W.weekStartsOn) && void 0 !== B ? B : 0);
    if (!(R >= 0 && R <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if ('' === I) return '' === E ? (0, a.default)(n) : new Date(NaN);
    var O,
        D,
        L,
        x,
        w,
        P,
        M,
        k,
        U,
        G,
        B,
        Z,
        F,
        V,
        j,
        H,
        Y,
        W,
        K,
        z = {
            firstWeekContainsDate: C,
            weekStartsOn: R,
            locale: A
        },
        q = [new f.GT()],
        Q = I.match(y)
            .map(function (e) {
                var t = e[0];
                return t in o.Z ? (0, o.Z[t])(e, A.formatLong) : e;
            })
            .join('')
            .match(v),
        X = [],
        J = m(Q);
    try {
        var $ = function () {
            var t = K.value;
            !(null != g && g.useAdditionalWeekYearTokens) && (0, u.Do)(t) && (0, u.qp)(t, I, e), !(null != g && g.useAdditionalDayOfYearTokens) && (0, u.Iu)(t) && (0, u.qp)(t, I, e);
            var n = t[0],
                i = _.f[n];
            if (i) {
                var r = i.incompatibleTokens;
                if (Array.isArray(r)) {
                    var a = X.find(function (e) {
                        return r.includes(e.token) || e.token === n;
                    });
                    if (a) throw RangeError("The format string mustn't contain `".concat(a.fullToken, '` and `').concat(t, '` at the same time'));
                } else if ('*' === i.incompatibleTokens && X.length > 0) throw RangeError("The format string mustn't contain `".concat(t, '` and any other token at the same time'));
                X.push({
                    token: n,
                    fullToken: t
                });
                var s = i.run(E, t, A.match, z);
                if (!s) return { v: new Date(NaN) };
                q.push(s.setter), (E = s.rest);
            } else {
                if (n.match(S)) throw RangeError('Format string contains an unescaped latin alphabet character `' + n + '`');
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
    if (E.length > 0 && b.test(E)) return new Date(NaN);
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
        en = (0, a.default)(n);
    if (isNaN(en.getTime())) return new Date(NaN);
    var ei,
        er = (0, r.Z)(en, (0, l.Z)(en)),
        ea = {},
        es = m(et);
    try {
        for (es.s(); !(ei = es.n()).done; ) {
            var eo = ei.value;
            if (!eo.validate(er, z)) return new Date(NaN);
            var el = eo.set(er, ea, z);
            Array.isArray(el) ? ((er = el[0]), (0, s.Z)(ea, el[1])) : (er = el);
        }
    } catch (e) {
        es.e(e);
    } finally {
        es.f();
    }
    return er;
}
function N(e) {
    return e.match(I)[1].replace(T, "'");
}
