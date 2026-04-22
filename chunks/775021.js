"use strict";
n.r(t), n.d(t, { default: () => N });
var r = n(728898),
    i = n(128170),
    s = n(29583),
    a = n(411054),
    o = n(291048),
    l = n(84776),
    u = n(368617),
    d = n(998280),
    c = n(618027),
    _ = n(330935),
    f = n(802233),
    E = n(98430);
function h(e) {
    return (h =
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
function p(e, t) {
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
        if (
            Array.isArray(e) ||
            (i = (function (e) {
                if (e) {
                    if ("string" == typeof e) return m(e, void 0);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return m(e, void 0);
                }
            })(e)) ||
            (t && e && "number" == typeof e.length)
        ) {
            i && (e = i);
            var n = 0,
                r = function () {};
            return {
                s: r,
                n: function () {
                    return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
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
        s,
        a = !0,
        o = !1;
    return {
        s: function () {
            i = e[Symbol.iterator]();
        },
        n: function () {
            var e = i.next();
            return (a = e.done), e;
        },
        e: function (e) {
            (o = !0), (s = e);
        },
        f: function () {
            try {
                a || null == i.return || i.return();
            } finally {
                if (o) throw s;
            }
        },
    };
}
function m(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var g = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    A = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    I = /^'([^]*?)'?$/,
    T = /''/g,
    S = /\S/,
    y = /[a-zA-Z]/;
function N(e, t, n, m) {
    (0, c.A)(3, arguments);
    var N = String(e),
        O = String(t),
        R = (0, E.q)(),
        v = null != (D = null != (L = null == m ? void 0 : m.locale) ? L : R.locale) ? D : r.A;
    if (!v.match) throw RangeError("locale must contain match property");
    var C = (0, d.A)(
        null !=
            (w =
                null !=
                (M =
                    null !=
                    (P =
                        null != (U = null == m ? void 0 : m.firstWeekContainsDate)
                            ? U
                            : null == m || null == (k = m.locale) || null == (x = k.options)
                              ? void 0
                              : x.firstWeekContainsDate)
                        ? P
                        : R.firstWeekContainsDate)
                    ? M
                    : null == (G = R.locale) || null == (V = G.options)
                      ? void 0
                      : V.firstWeekContainsDate)
            ? w
            : 1,
    );
    if (!(C >= 1 && C <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var b = (0, d.A)(
        null !=
            (F =
                null !=
                (B =
                    null !=
                    (H =
                        null != (Y = null == m ? void 0 : m.weekStartsOn)
                            ? Y
                            : null == m || null == (W = m.locale) || null == (j = W.options)
                              ? void 0
                              : j.weekStartsOn)
                        ? H
                        : R.weekStartsOn)
                    ? B
                    : null == (K = R.locale) || null == ($ = K.options)
                      ? void 0
                      : $.weekStartsOn)
            ? F
            : 0,
    );
    if (!(b >= 0 && b <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if ("" === O)
        if ("" === N) return (0, s.default)(n);
        else return new Date(NaN);
    var D,
        L,
        w,
        M,
        P,
        U,
        k,
        x,
        G,
        V,
        F,
        B,
        H,
        Y,
        W,
        j,
        K,
        $,
        z,
        q = { firstWeekContainsDate: C, weekStartsOn: b, locale: v },
        X = [new _.Je()],
        Q = O.match(A)
            .map(function (e) {
                var t = e[0];
                return t in o.A ? (0, o.A[t])(e, v.formatLong) : e;
            })
            .join("")
            .match(g),
        J = [],
        Z = p(Q);
    try {
        for (Z.s(); !(z = Z.n()).done; ) {
            var ee = (function () {
                var t = z.value;
                !(null != m && m.useAdditionalWeekYearTokens) && (0, u.xM)(t) && (0, u.lJ)(t, O, e),
                    !(null != m && m.useAdditionalDayOfYearTokens) && (0, u.ef)(t) && (0, u.lJ)(t, O, e);
                var n = t[0],
                    r = f.T[n];
                if (r) {
                    var i = r.incompatibleTokens;
                    if (Array.isArray(i)) {
                        var s = J.find(function (e) {
                            return i.includes(e.token) || e.token === n;
                        });
                        if (s)
                            throw RangeError(
                                "The format string mustn't contain `"
                                    .concat(s.fullToken, "` and `")
                                    .concat(t, "` at the same time"),
                            );
                    } else if ("*" === r.incompatibleTokens && J.length > 0)
                        throw RangeError(
                            "The format string mustn't contain `".concat(t, "` and any other token at the same time"),
                        );
                    J.push({ token: n, fullToken: t });
                    var a = r.run(N, t, v.match, q);
                    if (!a) return { v: new Date(NaN) };
                    X.push(a.setter), (N = a.rest);
                } else {
                    if (n.match(y))
                        throw RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
                    if (("''" === t ? (t = "'") : "'" === n && (t = t.match(I)[1].replace(T, "'")), 0 !== N.indexOf(t)))
                        return { v: new Date(NaN) };
                    N = N.slice(t.length);
                }
            })();
            if ("object" === h(ee)) return ee.v;
        }
    } catch (e) {
        Z.e(e);
    } finally {
        Z.f();
    }
    if (N.length > 0 && S.test(N)) return new Date(NaN);
    var et = X.map(function (e) {
            return e.priority;
        })
            .sort(function (e, t) {
                return t - e;
            })
            .filter(function (e, t, n) {
                return n.indexOf(e) === t;
            })
            .map(function (e) {
                return X.filter(function (t) {
                    return t.priority === e;
                }).sort(function (e, t) {
                    return t.subPriority - e.subPriority;
                });
            })
            .map(function (e) {
                return e[0];
            }),
        en = (0, s.default)(n);
    if (isNaN(en.getTime())) return new Date(NaN);
    var er,
        ei = (0, i.A)(en, (0, l.A)(en)),
        es = {},
        ea = p(et);
    try {
        for (ea.s(); !(er = ea.n()).done; ) {
            var eo = er.value;
            if (!eo.validate(ei, q)) return new Date(NaN);
            var el = eo.set(ei, es, q);
            Array.isArray(el) ? ((ei = el[0]), (0, a.A)(es, el[1])) : (ei = el);
        }
    } catch (e) {
        ea.e(e);
    } finally {
        ea.f();
    }
    return ei;
}
