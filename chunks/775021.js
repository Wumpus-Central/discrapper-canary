n.r(t), n.d(t, { default: () => I });
var r = n(728898),
    i = n(128170),
    a = n(29583),
    s = n(411054),
    o = n(291048),
    l = n(84776),
    c = n(368617),
    u = n(998280),
    d = n(618027),
    f = n(330935),
    p = n(802233),
    _ = n(98430);
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
function m(e, t) {
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
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
    A = /''/g,
    v = /\S/,
    S = /[a-zA-Z]/;
function I(e, t, n, g) {
    (0, d.A)(3, arguments);
    var E = String(e),
        O = String(t),
        A = (0, _.q)(),
        I = null != (R = null != (w = null == g ? void 0 : g.locale) ? w : A.locale) ? R : r.A;
    if (!I.match) throw RangeError("locale must contain match property");
    var C = (0, u.A)(
        null !=
            (P =
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
                        : A.firstWeekContainsDate)
                    ? D
                    : null == (k = A.locale) || null == (U = k.options)
                      ? void 0
                      : U.firstWeekContainsDate)
            ? P
            : 1,
    );
    if (!(C >= 1 && C <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var N = (0, u.A)(
        null !=
            (G =
                null !=
                (V =
                    null !=
                    (F =
                        null != (B = null == g ? void 0 : g.weekStartsOn)
                            ? B
                            : null == g || null == (H = g.locale) || null == (Y = H.options)
                              ? void 0
                              : Y.weekStartsOn)
                        ? F
                        : A.weekStartsOn)
                    ? V
                    : null == (W = A.locale) || null == (K = W.options)
                      ? void 0
                      : K.weekStartsOn)
            ? G
            : 0,
    );
    if (!(N >= 0 && N <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if ("" === O)
        if ("" === E) return (0, a.default)(n);
        else return new Date(NaN);
    var R,
        w,
        P,
        D,
        x,
        L,
        j,
        M,
        k,
        U,
        G,
        V,
        F,
        B,
        H,
        Y,
        W,
        K,
        z,
        q = {
            firstWeekContainsDate: C,
            weekStartsOn: N,
            locale: I,
        },
        X = [new f.Je()],
        Z = O.match(y)
            .map(function (e) {
                var t = e[0];
                return t in o.A ? (0, o.A[t])(e, I.formatLong) : e;
            })
            .join("")
            .match(b),
        Q = [],
        $ = m(Z);
    try {
        var J = function () {
            var t = z.value;
            !(null != g && g.useAdditionalWeekYearTokens) && (0, c.xM)(t) && (0, c.lJ)(t, O, e),
                !(null != g && g.useAdditionalDayOfYearTokens) && (0, c.ef)(t) && (0, c.lJ)(t, O, e);
            var n = t[0],
                r = p.T[n];
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
                var s = r.run(E, t, I.match, q);
                if (!s) return { v: new Date(NaN) };
                X.push(s.setter), (E = s.rest);
            } else {
                if (n.match(S))
                    throw RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
                if (("''" === t ? (t = "'") : "'" === n && (t = T(t)), 0 !== E.indexOf(t))) return { v: new Date(NaN) };
                E = E.slice(t.length);
            }
        };
        for ($.s(); !(z = $.n()).done; ) {
            var ee = J();
            if ("object" === h(ee)) return ee.v;
        }
    } catch (e) {
        $.e(e);
    } finally {
        $.f();
    }
    if (E.length > 0 && v.test(E)) return new Date(NaN);
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
        en = (0, a.default)(n);
    if (isNaN(en.getTime())) return new Date(NaN);
    var er,
        ei = (0, i.A)(en, (0, l.A)(en)),
        ea = {},
        es = m(et);
    try {
        for (es.s(); !(er = es.n()).done; ) {
            var eo = er.value;
            if (!eo.validate(ei, q)) return new Date(NaN);
            var el = eo.set(ei, ea, q);
            Array.isArray(el) ? ((ei = el[0]), (0, s.A)(ea, el[1])) : (ei = el);
        }
    } catch (e) {
        es.e(e);
    } finally {
        es.f();
    }
    return ei;
}
function T(e) {
    return e.match(O)[1].replace(A, "'");
}
