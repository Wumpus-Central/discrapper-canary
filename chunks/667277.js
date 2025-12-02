n.r(t), n.d(t, { default: () => T });
var r = n(393655),
    i = n(465735),
    a = n(528734),
    o = n(544991),
    s = n(128961),
    l = n(424421),
    c = n(198050),
    u = n(217224),
    d = n(951516),
    f = n(608297),
    p = n(416778),
    _ = n(633605);
function m(e) {
    return (m =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function h(e, t) {
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = g(e)) || (t && e && "number" == typeof e.length)) {
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
                              value: e[n++],
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: r,
            };
        }
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    var i,
        a,
        o = !0,
        s = !1;
    return {
        s: function () {
            i = e[Symbol.iterator]();
        },
        n: function () {
            var e = i.next();
            return (o = e.done), e;
        },
        e: function (e) {
            (s = !0), (a = e);
        },
        f: function () {
            try {
                o || null == i.return || i.return();
            } finally {
                if (s) throw a;
            }
        },
    };
}
function g(e, t) {
    if (e) {
        if ("string" == typeof e) return E(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t);
    }
}
function E(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var b = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    y = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    O = /^'([^]*?)'?$/,
    v = /''/g,
    S = /\S/,
    I = /[a-zA-Z]/;
function T(e, t, n, g) {
    (0, d.Z)(3, arguments);
    var E = String(e),
        O = String(t),
        v = (0, _.j)(),
        T = null != (P = null != (R = null == g ? void 0 : g.locale) ? R : v.locale) ? P : r.Z;
    if (!T.match) throw RangeError("locale must contain match property");
    var C = (0, u.Z)(
        null !=
            (w =
                null !=
                (D =
                    null !=
                    (x =
                        null != (L = null == g ? void 0 : g.firstWeekContainsDate)
                            ? L
                            : null == g || null == (j = g.locale) || null == (M = j.options)
                              ? void 0
                              : M.firstWeekContainsDate)
                        ? x
                        : v.firstWeekContainsDate)
                    ? D
                    : null == (k = v.locale) || null == (U = k.options)
                      ? void 0
                      : U.firstWeekContainsDate)
            ? w
            : 1,
    );
    if (!(C >= 1 && C <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var N = (0, u.Z)(
        null !=
            (G =
                null !=
                (Z =
                    null !=
                    (B =
                        null != (F = null == g ? void 0 : g.weekStartsOn)
                            ? F
                            : null == g || null == (V = g.locale) || null == (H = V.options)
                              ? void 0
                              : H.weekStartsOn)
                        ? B
                        : v.weekStartsOn)
                    ? Z
                    : null == (Y = v.locale) || null == (W = Y.options)
                      ? void 0
                      : W.weekStartsOn)
            ? G
            : 0,
    );
    if (!(N >= 0 && N <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if ("" === O)
        if ("" === E) return (0, a.default)(n);
        else return new Date(NaN);
    var P,
        R,
        w,
        D,
        x,
        L,
        j,
        M,
        k,
        U,
        G,
        Z,
        B,
        F,
        V,
        H,
        Y,
        W,
        K,
        z = {
            firstWeekContainsDate: C,
            weekStartsOn: N,
            locale: T,
        },
        q = [new f.GT()],
        X = O.match(y)
            .map(function (e) {
                var t = e[0];
                return t in s.Z ? (0, s.Z[t])(e, T.formatLong) : e;
            })
            .join("")
            .match(b),
        Q = [],
        J = h(X);
    try {
        var $ = function () {
            var t = K.value;
            !(null != g && g.useAdditionalWeekYearTokens) && (0, c.Do)(t) && (0, c.qp)(t, O, e),
                !(null != g && g.useAdditionalDayOfYearTokens) && (0, c.Iu)(t) && (0, c.qp)(t, O, e);
            var n = t[0],
                r = p.f[n];
            if (r) {
                var i = r.incompatibleTokens;
                if (Array.isArray(i)) {
                    var a = Q.find(function (e) {
                        return i.includes(e.token) || e.token === n;
                    });
                    if (a)
                        throw RangeError(
                            "The format string mustn't contain `"
                                .concat(a.fullToken, "` and `")
                                .concat(t, "` at the same time"),
                        );
                } else if ("*" === r.incompatibleTokens && Q.length > 0)
                    throw RangeError(
                        "The format string mustn't contain `".concat(t, "` and any other token at the same time"),
                    );
                Q.push({
                    token: n,
                    fullToken: t,
                });
                var o = r.run(E, t, T.match, z);
                if (!o) return { v: new Date(NaN) };
                q.push(o.setter), (E = o.rest);
            } else {
                if (n.match(I))
                    throw RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
                if (("''" === t ? (t = "'") : "'" === n && (t = A(t)), 0 !== E.indexOf(t))) return { v: new Date(NaN) };
                E = E.slice(t.length);
            }
        };
        for (J.s(); !(K = J.n()).done; ) {
            var ee = $();
            if ("object" === m(ee)) return ee.v;
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
        en = (0, a.default)(n);
    if (isNaN(en.getTime())) return new Date(NaN);
    var er,
        ei = (0, i.Z)(en, (0, l.Z)(en)),
        ea = {},
        eo = h(et);
    try {
        for (eo.s(); !(er = eo.n()).done; ) {
            var es = er.value;
            if (!es.validate(ei, z)) return new Date(NaN);
            var el = es.set(ei, ea, z);
            Array.isArray(el) ? ((ei = el[0]), (0, o.Z)(ea, el[1])) : (ei = el);
        }
    } catch (e) {
        eo.e(e);
    } finally {
        eo.f();
    }
    return ei;
}
function A(e) {
    return e.match(O)[1].replace(v, "'");
}
