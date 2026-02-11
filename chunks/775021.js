"use strict";
n.r(t), n.d(t, { default: () => b });
var r = n(728898),
    i = n(128170),
    a = n(29583),
    s = n(411054),
    o = n(291048),
    l = n(84776),
    u = n(368617),
    c = n(998280),
    d = n(618027),
    _ = n(330935),
    f = n(802233),
    h = n(98430);
function p(e) {
    return (p =
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
function g(e, t) {
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = E(e)) || (t && e && "number" == typeof e.length)) {
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
        a,
        s = !0,
        o = !1;
    return {
        s: function () {
            i = e[Symbol.iterator]();
        },
        n: function () {
            var e = i.next();
            return (s = e.done), e;
        },
        e: function (e) {
            (o = !0), (a = e);
        },
        f: function () {
            try {
                s || null == i.return || i.return();
            } finally {
                if (o) throw a;
            }
        },
    };
}
function E(e, t) {
    if (e) {
        if ("string" == typeof e) return A(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t);
    }
}
function A(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var I = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    T = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    y = /^'([^]*?)'?$/,
    S = /''/g,
    v = /\S/,
    C = /[a-zA-Z]/;
function b(e, t, n, E) {
    (0, d.A)(3, arguments);
    var A = String(e),
        y = String(t),
        S = (0, h.q)(),
        b = null != (D = null != (L = null == E ? void 0 : E.locale) ? L : S.locale) ? D : r.A;
    if (!b.match) throw RangeError("locale must contain match property");
    var R = (0, c.A)(
        null !=
            (w =
                null !=
                (x =
                    null !=
                    (P =
                        null != (M = null == E ? void 0 : E.firstWeekContainsDate)
                            ? M
                            : null == E || null == (k = E.locale) || null == (U = k.options)
                              ? void 0
                              : U.firstWeekContainsDate)
                        ? P
                        : S.firstWeekContainsDate)
                    ? x
                    : null == (G = S.locale) || null == (F = G.options)
                      ? void 0
                      : F.firstWeekContainsDate)
            ? w
            : 1,
    );
    if (!(R >= 1 && R <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var O = (0, c.A)(
        null !=
            (V =
                null !=
                (B =
                    null !=
                    (j =
                        null != (H = null == E ? void 0 : E.weekStartsOn)
                            ? H
                            : null == E || null == (Y = E.locale) || null == (W = Y.options)
                              ? void 0
                              : W.weekStartsOn)
                        ? j
                        : S.weekStartsOn)
                    ? B
                    : null == (K = S.locale) || null == ($ = K.options)
                      ? void 0
                      : $.weekStartsOn)
            ? V
            : 0,
    );
    if (!(O >= 0 && O <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if ("" === y)
        if ("" === A) return (0, a.default)(n);
        else return new Date(NaN);
    var D,
        L,
        w,
        x,
        P,
        M,
        k,
        U,
        G,
        F,
        V,
        B,
        j,
        H,
        Y,
        W,
        K,
        $,
        z,
        q = { firstWeekContainsDate: R, weekStartsOn: O, locale: b },
        X = [new _.Je()],
        Z = y
            .match(T)
            .map(function (e) {
                var t = e[0];
                return t in o.A ? (0, o.A[t])(e, b.formatLong) : e;
            })
            .join("")
            .match(I),
        Q = [],
        J = g(Z);
    try {
        var ee = function () {
            var t = z.value;
            !(null != E && E.useAdditionalWeekYearTokens) && (0, u.xM)(t) && (0, u.lJ)(t, y, e),
                !(null != E && E.useAdditionalDayOfYearTokens) && (0, u.ef)(t) && (0, u.lJ)(t, y, e);
            var n = t[0],
                r = f.T[n];
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
                Q.push({ token: n, fullToken: t });
                var s = r.run(A, t, b.match, q);
                if (!s) return { v: new Date(NaN) };
                X.push(s.setter), (A = s.rest);
            } else {
                if (n.match(C))
                    throw RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
                if (("''" === t ? (t = "'") : "'" === n && (t = N(t)), 0 !== A.indexOf(t))) return { v: new Date(NaN) };
                A = A.slice(t.length);
            }
        };
        for (J.s(); !(z = J.n()).done; ) {
            var et = ee();
            if ("object" === p(et)) return et.v;
        }
    } catch (e) {
        J.e(e);
    } finally {
        J.f();
    }
    if (A.length > 0 && v.test(A)) return new Date(NaN);
    var en = X.map(function (e) {
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
        er = (0, a.default)(n);
    if (isNaN(er.getTime())) return new Date(NaN);
    var ei,
        ea = (0, i.A)(er, (0, l.A)(er)),
        es = {},
        eo = g(en);
    try {
        for (eo.s(); !(ei = eo.n()).done; ) {
            var el = ei.value;
            if (!el.validate(ea, q)) return new Date(NaN);
            var eu = el.set(ea, es, q);
            Array.isArray(eu) ? ((ea = eu[0]), (0, s.A)(es, eu[1])) : (ea = eu);
        }
    } catch (e) {
        eo.e(e);
    } finally {
        eo.f();
    }
    return ea;
}
function N(e) {
    return e.match(y)[1].replace(S, "'");
}
