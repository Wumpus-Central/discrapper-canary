"use strict";
r.r(t), r.d(t, { default: () => ng });
var n = r(728898),
    a = r(128170),
    s = r(29583),
    i = r(291048),
    o = r(84776),
    l = r(368617),
    u = r(998280),
    c = r(618027);
function d(e) {
    return (d =
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
function f(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
        t && p(e, t);
}
function p(e, t) {
    return (p =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function h(e) {
    var t = (function () {
        if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
            return !1;
        }
    })();
    return function () {
        var r,
            n,
            a,
            s = _(e);
        return (
            (a = t ? Reflect.construct(s, arguments, _(this).constructor) : s.apply(this, arguments)),
            (r = this),
            (n = a) && ("object" === d(n) || "function" == typeof n) ? n : m(r)
        );
    };
}
function m(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _(e) {
    return (_ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function g(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function v(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function b(e, t, r) {
    return t && v(e.prototype, t), r && v(e, r), e;
}
function y(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var E = (function () {
        function e() {
            g(this, e), y(this, "subPriority", 0);
        }
        return (
            b(e, [
                {
                    key: "validate",
                    value: function (e, t) {
                        return !0;
                    },
                },
            ]),
            e
        );
    })(),
    S = (function (e) {
        f(r, e);
        var t = h(r);
        function r(e, n, a, s, i) {
            var o;
            return (
                g(this, r),
                ((o = t.call(this)).value = e),
                (o.validateValue = n),
                (o.setValue = a),
                (o.priority = s),
                i && (o.subPriority = i),
                o
            );
        }
        return (
            b(r, [
                {
                    key: "validate",
                    value: function (e, t) {
                        return this.validateValue(e, this.value, t);
                    },
                },
                {
                    key: "set",
                    value: function (e, t, r) {
                        return this.setValue(e, t, this.value, r);
                    },
                },
            ]),
            r
        );
    })(E),
    T = (function (e) {
        f(r, e);
        var t = h(r);
        function r() {
            var e;
            g(this, r);
            for (var n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
            return y(m((e = t.call.apply(t, [this].concat(a)))), "priority", 10), y(m(e), "subPriority", -1), e;
        }
        return (
            b(r, [
                {
                    key: "set",
                    value: function (e, t) {
                        if (t.timestampIsSet) return e;
                        var r = new Date(0);
                        return (
                            r.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
                            r.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
                            r
                        );
                    },
                },
            ]),
            r
        );
    })(E),
    x = (function () {
        var e;
        function t() {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        }
        return (
            (e = [
                {
                    key: "run",
                    value: function (e, t, r, n) {
                        var a = this.parse(e, t, r, n);
                        return a
                            ? {
                                  setter: new S(a.value, this.validate, this.set, this.priority, this.subPriority),
                                  rest: a.rest,
                              }
                            : null;
                    },
                },
                {
                    key: "validate",
                    value: function (e, t, r) {
                        return !0;
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(t.prototype, e),
            t
        );
    })();
function w(e) {
    return (w =
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
function C(e, t) {
    return (C =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function D(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function O(e) {
    return (O = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function A(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var M = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
            e && C(a, e);
        var t,
            r,
            n =
                ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        r,
                        n,
                        s = O(a);
                    return (
                        (n = t ? Reflect.construct(s, arguments, O(this).constructor) : s.apply(this, arguments)),
                        (e = this),
                        (r = n) && ("object" === w(r) || "function" == typeof r) ? r : D(e)
                    );
                });
        function a() {
            var e;
            if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
            for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
            return (
                A(D((e = n.call.apply(n, [this].concat(r)))), "priority", 140),
                A(D(e), "incompatibleTokens", ["R", "u", "t", "T"]),
                e
            );
        }
        return (
            (r = [
                {
                    key: "parse",
                    value: function (e, t, r) {
                        switch (t) {
                            case "G":
                            case "GG":
                            case "GGG":
                                return r.era(e, { width: "abbreviated" }) || r.era(e, { width: "narrow" });
                            case "GGGGG":
                                return r.era(e, { width: "narrow" });
                            default:
                                return (
                                    r.era(e, { width: "wide" }) ||
                                    r.era(e, { width: "abbreviated" }) ||
                                    r.era(e, { width: "narrow" })
                                );
                        }
                    },
                },
                {
                    key: "set",
                    value: function (e, t, r) {
                        return (t.era = r), e.setUTCFullYear(r, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(a.prototype, r),
            a
        );
    })(x),
    R = r(575223),
    k = /^(1[0-2]|0?\d)/,
    N = /^(3[0-1]|[0-2]?\d)/,
    L = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    I = /^(5[0-3]|[0-4]?\d)/,
    P = /^(2[0-3]|[0-1]?\d)/,
    F = /^(2[0-4]|[0-1]?\d)/,
    B = /^(1[0-1]|0?\d)/,
    Y = /^(1[0-2]|0?\d)/,
    U = /^[0-5]?\d/,
    j = /^[0-5]?\d/,
    V = /^\d/,
    H = /^\d{1,2}/,
    G = /^\d{1,3}/,
    z = /^\d{1,4}/,
    W = /^-?\d+/,
    q = /^-?\d/,
    $ = /^-?\d{1,2}/,
    K = /^-?\d{1,3}/,
    Q = /^-?\d{1,4}/,
    X = /^([+-])(\d{2})(\d{2})?|Z/,
    Z = /^([+-])(\d{2})(\d{2})|Z/,
    J = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    ee = /^([+-])(\d{2}):(\d{2})|Z/,
    et = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
function er(e, t) {
    return e ? { value: t(e.value), rest: e.rest } : e;
}
function en(e, t) {
    var r = t.match(e);
    return r ? { value: parseInt(r[0], 10), rest: t.slice(r[0].length) } : null;
}
function ea(e, t) {
    var r = t.match(e);
    if (!r) return null;
    if ("Z" === r[0]) return { value: 0, rest: t.slice(1) };
    var n = "+" === r[1] ? 1 : -1,
        a = r[2] ? parseInt(r[2], 10) : 0,
        s = r[3] ? parseInt(r[3], 10) : 0,
        i = r[5] ? parseInt(r[5], 10) : 0;
    return { value: n * (a * R.s0 + s * R.Cg + i * R._m), rest: t.slice(r[0].length) };
}
function es(e, t) {
    switch (e) {
        case 1:
            return en(V, t);
        case 2:
            return en(H, t);
        case 3:
            return en(G, t);
        case 4:
            return en(z, t);
        default:
            return en(RegExp("^\\d{1," + e + "}"), t);
    }
}
function ei(e, t) {
    switch (e) {
        case 1:
            return en(q, t);
        case 2:
            return en($, t);
        case 3:
            return en(K, t);
        case 4:
            return en(Q, t);
        default:
            return en(RegExp("^-?\\d{1," + e + "}"), t);
    }
}
function eo(e) {
    switch (e) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        default:
            return 0;
    }
}
function el(e, t) {
    var r,
        n = t > 0,
        a = n ? t : 1 - t;
    if (a <= 50) r = e || 100;
    else {
        var s = a + 50;
        r = e + 100 * Math.floor(s / 100) - 100 * (e >= s % 100);
    }
    return n ? r : 1 - r;
}
function eu(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
function ec(e) {
    return (ec =
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
function ed(e, t) {
    return (ed =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function ef(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function ep(e) {
    return (ep = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function eh(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var em = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
            e && ed(a, e);
        var t,
            r,
            n =
                ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        r,
                        n,
                        s = ep(a);
                    return (
                        (n = t ? Reflect.construct(s, arguments, ep(this).constructor) : s.apply(this, arguments)),
                        (e = this),
                        (r = n) && ("object" === ec(r) || "function" == typeof r) ? r : ef(e)
                    );
                });
        function a() {
            var e;
            if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
            for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
            return (
                eh(ef((e = n.call.apply(n, [this].concat(r)))), "priority", 130),
                eh(ef(e), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]),
                e
            );
        }
        return (
            (r = [
                {
                    key: "parse",
                    value: function (e, t, r) {
                        var n = function (e) {
                            return { year: e, isTwoDigitYear: "yy" === t };
                        };
                        switch (t) {
                            case "y":
                                return er(es(4, e), n);
                            case "yo":
                                return er(r.ordinalNumber(e, { unit: "year" }), n);
                            default:
                                return er(es(t.length, e), n);
                        }
                    },
                },
                {
                    key: "validate",
                    value: function (e, t) {
                        return t.isTwoDigitYear || t.year > 0;
                    },
                },
                {
                    key: "set",
                    value: function (e, t, r) {
                        var n = e.getUTCFullYear();
                        if (r.isTwoDigitYear) {
                            var a = el(r.year, n);
                            return e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
                        }
                        var s = "era" in t && 1 !== t.era ? 1 - r.year : r.year;
                        return e.setUTCFullYear(s, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(a.prototype, r),
            a
        );
    })(x),
    e_ = r(564804),
    eg = r(327922);
function ev(e) {
    return (ev =
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
function eb(e, t) {
    return (eb =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function ey(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function eE(e) {
    return (eE = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function eS(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var eT = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
            e && eb(a, e);
        var t,
            r,
            n =
                ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        r,
                        n,
                        s = eE(a);
                    return (
                        (n = t ? Reflect.construct(s, arguments, eE(this).constructor) : s.apply(this, arguments)),
                        (e = this),
                        (r = n) && ("object" === ev(r) || "function" == typeof r) ? r : ey(e)
                    );
                });
        function a() {
            var e;
            if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
            for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
            return (
                eS(ey((e = n.call.apply(n, [this].concat(r)))), "priority", 130),
                eS(ey(e), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]),
                e
            );
        }
        return (
            (r = [
                {
                    key: "parse",
                    value: function (e, t, r) {
                        var n = function (e) {
                            return { year: e, isTwoDigitYear: "YY" === t };
                        };
                        switch (t) {
                            case "Y":
                                return er(es(4, e), n);
                            case "Yo":
                                return er(r.ordinalNumber(e, { unit: "year" }), n);
                            default:
                                return er(es(t.length, e), n);
                        }
                    },
                },
                {
                    key: "validate",
                    value: function (e, t) {
                        return t.isTwoDigitYear || t.year > 0;
                    },
                },
                {
                    key: "set",
                    value: function (e, t, r, n) {
                        var a = (0, e_.A)(e, n);
                        if (r.isTwoDigitYear) {
                            var s = el(r.year, a);
                            return (
                                e.setUTCFullYear(s, 0, n.firstWeekContainsDate),
                                e.setUTCHours(0, 0, 0, 0),
                                (0, eg.A)(e, n)
                            );
                        }
                        var i = "era" in t && 1 !== t.era ? 1 - r.year : r.year;
                        return (
                            e.setUTCFullYear(i, 0, n.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, eg.A)(e, n)
                        );
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(a.prototype, r),
            a
        );
    })(x),
    ex = r(576103);
function ew(e) {
    return (ew =
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
function eC(e, t) {
    return (eC =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function eD(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function eO(e) {
    return (eO = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function eA(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var eM = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && eC(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = eO(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, eO(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === ew(r) || "function" == typeof r) ? r : eD(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            eA(eD((e = n.call.apply(n, [this].concat(r)))), "priority", 130),
            eA(eD(e), "incompatibleTokens", [
                "G",
                "y",
                "Y",
                "u",
                "Q",
                "q",
                "M",
                "L",
                "w",
                "d",
                "D",
                "e",
                "c",
                "t",
                "T",
            ]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t) {
                    return "R" === t ? ei(4, e) : ei(t.length, e);
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    var n = new Date(0);
                    return n.setUTCFullYear(r, 0, 4), n.setUTCHours(0, 0, 0, 0), (0, ex.A)(n);
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function eR(e) {
    return (eR =
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
function ek(e, t) {
    return (ek =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function eN(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function eL(e) {
    return (eL = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function eI(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var eP = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && ek(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = eL(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, eL(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === eR(r) || "function" == typeof r) ? r : eN(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            eI(eN((e = n.call.apply(n, [this].concat(r)))), "priority", 130),
            eI(eN(e), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t) {
                    return "u" === t ? ei(4, e) : ei(t.length, e);
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCFullYear(r, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function eF(e) {
    return (eF =
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
function eB(e, t) {
    return (eB =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function eY(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function eU(e) {
    return (eU = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function ej(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var eV = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && eB(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = eU(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, eU(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === eF(r) || "function" == typeof r) ? r : eY(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            ej(eY((e = n.call.apply(n, [this].concat(r)))), "priority", 120),
            ej(eY(e), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "Q":
                        case "QQ":
                            return es(t.length, e);
                        case "Qo":
                            return r.ordinalNumber(e, { unit: "quarter" });
                        case "QQQ":
                            return (
                                r.quarter(e, { width: "abbreviated", context: "formatting" }) ||
                                r.quarter(e, { width: "narrow", context: "formatting" })
                            );
                        case "QQQQQ":
                            return r.quarter(e, { width: "narrow", context: "formatting" });
                        default:
                            return (
                                r.quarter(e, { width: "wide", context: "formatting" }) ||
                                r.quarter(e, { width: "abbreviated", context: "formatting" }) ||
                                r.quarter(e, { width: "narrow", context: "formatting" })
                            );
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 1 && t <= 4;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCMonth((r - 1) * 3, 1), e.setUTCHours(0, 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function eH(e) {
    return (eH =
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
function eG(e, t) {
    return (eG =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function ez(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function eW(e) {
    return (eW = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function eq(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var e$ = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && eG(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = eW(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, eW(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === eH(r) || "function" == typeof r) ? r : ez(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            eq(ez((e = n.call.apply(n, [this].concat(r)))), "priority", 120),
            eq(ez(e), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "q":
                        case "qq":
                            return es(t.length, e);
                        case "qo":
                            return r.ordinalNumber(e, { unit: "quarter" });
                        case "qqq":
                            return (
                                r.quarter(e, { width: "abbreviated", context: "standalone" }) ||
                                r.quarter(e, { width: "narrow", context: "standalone" })
                            );
                        case "qqqqq":
                            return r.quarter(e, { width: "narrow", context: "standalone" });
                        default:
                            return (
                                r.quarter(e, { width: "wide", context: "standalone" }) ||
                                r.quarter(e, { width: "abbreviated", context: "standalone" }) ||
                                r.quarter(e, { width: "narrow", context: "standalone" })
                            );
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 1 && t <= 4;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCMonth((r - 1) * 3, 1), e.setUTCHours(0, 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function eK(e) {
    return (eK =
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
function eQ(e, t) {
    return (eQ =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function eX(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function eZ(e) {
    return (eZ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function eJ(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var e0 = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && eQ(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = eZ(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, eZ(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === eK(r) || "function" == typeof r) ? r : eX(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            eJ(eX((e = n.call.apply(n, [this].concat(r)))), "incompatibleTokens", [
                "Y",
                "R",
                "q",
                "Q",
                "L",
                "w",
                "I",
                "D",
                "i",
                "e",
                "c",
                "t",
                "T",
            ]),
            eJ(eX(e), "priority", 110),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    var n = function (e) {
                        return e - 1;
                    };
                    switch (t) {
                        case "M":
                            return er(en(k, e), n);
                        case "MM":
                            return er(es(2, e), n);
                        case "Mo":
                            return er(r.ordinalNumber(e, { unit: "month" }), n);
                        case "MMM":
                            return (
                                r.month(e, { width: "abbreviated", context: "formatting" }) ||
                                r.month(e, { width: "narrow", context: "formatting" })
                            );
                        case "MMMMM":
                            return r.month(e, { width: "narrow", context: "formatting" });
                        default:
                            return (
                                r.month(e, { width: "wide", context: "formatting" }) ||
                                r.month(e, { width: "abbreviated", context: "formatting" }) ||
                                r.month(e, { width: "narrow", context: "formatting" })
                            );
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 0 && t <= 11;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCMonth(r, 1), e.setUTCHours(0, 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function e1(e) {
    return (e1 =
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
function e2(e, t) {
    return (e2 =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function e3(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function e4(e) {
    return (e4 = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function e6(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var e5 = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
            e && e2(a, e);
        var t,
            r,
            n =
                ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        r,
                        n,
                        s = e4(a);
                    return (
                        (n = t ? Reflect.construct(s, arguments, e4(this).constructor) : s.apply(this, arguments)),
                        (e = this),
                        (r = n) && ("object" === e1(r) || "function" == typeof r) ? r : e3(e)
                    );
                });
        function a() {
            var e;
            if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
            for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
            return (
                e6(e3((e = n.call.apply(n, [this].concat(r)))), "priority", 110),
                e6(e3(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]),
                e
            );
        }
        return (
            (r = [
                {
                    key: "parse",
                    value: function (e, t, r) {
                        var n = function (e) {
                            return e - 1;
                        };
                        switch (t) {
                            case "L":
                                return er(en(k, e), n);
                            case "LL":
                                return er(es(2, e), n);
                            case "Lo":
                                return er(r.ordinalNumber(e, { unit: "month" }), n);
                            case "LLL":
                                return (
                                    r.month(e, { width: "abbreviated", context: "standalone" }) ||
                                    r.month(e, { width: "narrow", context: "standalone" })
                                );
                            case "LLLLL":
                                return r.month(e, { width: "narrow", context: "standalone" });
                            default:
                                return (
                                    r.month(e, { width: "wide", context: "standalone" }) ||
                                    r.month(e, { width: "abbreviated", context: "standalone" }) ||
                                    r.month(e, { width: "narrow", context: "standalone" })
                                );
                        }
                    },
                },
                {
                    key: "validate",
                    value: function (e, t) {
                        return t >= 0 && t <= 11;
                    },
                },
                {
                    key: "set",
                    value: function (e, t, r) {
                        return e.setUTCMonth(r, 1), e.setUTCHours(0, 0, 0, 0), e;
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(a.prototype, r),
            a
        );
    })(x),
    e8 = r(789316);
function e9(e) {
    return (e9 =
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
function e7(e, t) {
    return (e7 =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function te(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function tt(e) {
    return (tt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function tr(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var tn = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
            e && e7(a, e);
        var t,
            r,
            n =
                ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        r,
                        n,
                        s = tt(a);
                    return (
                        (n = t ? Reflect.construct(s, arguments, tt(this).constructor) : s.apply(this, arguments)),
                        (e = this),
                        (r = n) && ("object" === e9(r) || "function" == typeof r) ? r : te(e)
                    );
                });
        function a() {
            var e;
            if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
            for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
            return (
                tr(te((e = n.call.apply(n, [this].concat(r)))), "priority", 100),
                tr(te(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]),
                e
            );
        }
        return (
            (r = [
                {
                    key: "parse",
                    value: function (e, t, r) {
                        switch (t) {
                            case "w":
                                return en(I, e);
                            case "wo":
                                return r.ordinalNumber(e, { unit: "week" });
                            default:
                                return es(t.length, e);
                        }
                    },
                },
                {
                    key: "validate",
                    value: function (e, t) {
                        return t >= 1 && t <= 53;
                    },
                },
                {
                    key: "set",
                    value: function (e, t, r, n) {
                        return (0, eg.A)(
                            (function (e, t, r) {
                                (0, c.A)(2, arguments);
                                var n = (0, s.default)(e),
                                    a = (0, u.A)(t),
                                    i = (0, e8.A)(n, r) - a;
                                return n.setUTCDate(n.getUTCDate() - 7 * i), n;
                            })(e, r, n),
                            n,
                        );
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(a.prototype, r),
            a
        );
    })(x),
    ta = r(749805);
function ts(e) {
    return (ts =
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
function ti(e, t) {
    return (ti =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function to(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function tl(e) {
    return (tl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function tu(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var tc = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && ti(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = tl(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, tl(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === ts(r) || "function" == typeof r) ? r : to(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            tu(to((e = n.call.apply(n, [this].concat(r)))), "priority", 100),
            tu(to(e), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "I":
                            return en(I, e);
                        case "Io":
                            return r.ordinalNumber(e, { unit: "week" });
                        default:
                            return es(t.length, e);
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 1 && t <= 53;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return (0, ex.A)(
                        (function (e, t) {
                            (0, c.A)(2, arguments);
                            var r = (0, s.default)(e),
                                n = (0, u.A)(t),
                                a = (0, ta.A)(r) - n;
                            return r.setUTCDate(r.getUTCDate() - 7 * a), r;
                        })(e, r),
                    );
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function td(e) {
    return (td =
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
function tf(e, t) {
    return (tf =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function tp(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function th(e) {
    return (th = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function tm(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var t_ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    tg = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    tv = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
            e && tf(a, e);
        var t,
            r,
            n =
                ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        r,
                        n,
                        s = th(a);
                    return (
                        (n = t ? Reflect.construct(s, arguments, th(this).constructor) : s.apply(this, arguments)),
                        (e = this),
                        (r = n) && ("object" === td(r) || "function" == typeof r) ? r : tp(e)
                    );
                });
        function a() {
            var e;
            if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
            for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
            return (
                tm(tp((e = n.call.apply(n, [this].concat(r)))), "priority", 90),
                tm(tp(e), "subPriority", 1),
                tm(tp(e), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]),
                e
            );
        }
        return (
            (r = [
                {
                    key: "parse",
                    value: function (e, t, r) {
                        switch (t) {
                            case "d":
                                return en(N, e);
                            case "do":
                                return r.ordinalNumber(e, { unit: "date" });
                            default:
                                return es(t.length, e);
                        }
                    },
                },
                {
                    key: "validate",
                    value: function (e, t) {
                        var r = eu(e.getUTCFullYear()),
                            n = e.getUTCMonth();
                        return r ? t >= 1 && t <= tg[n] : t >= 1 && t <= t_[n];
                    },
                },
                {
                    key: "set",
                    value: function (e, t, r) {
                        return e.setUTCDate(r), e.setUTCHours(0, 0, 0, 0), e;
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(a.prototype, r),
            a
        );
    })(x);
function tb(e) {
    return (tb =
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
function ty(e, t) {
    return (ty =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function tE(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function tS(e) {
    return (tS = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function tT(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var tx = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
            e && ty(a, e);
        var t,
            r,
            n =
                ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        r,
                        n,
                        s = tS(a);
                    return (
                        (n = t ? Reflect.construct(s, arguments, tS(this).constructor) : s.apply(this, arguments)),
                        (e = this),
                        (r = n) && ("object" === tb(r) || "function" == typeof r) ? r : tE(e)
                    );
                });
        function a() {
            var e;
            if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
            for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
            return (
                tT(tE((e = n.call.apply(n, [this].concat(r)))), "priority", 90),
                tT(tE(e), "subpriority", 1),
                tT(tE(e), "incompatibleTokens", [
                    "Y",
                    "R",
                    "q",
                    "Q",
                    "M",
                    "L",
                    "w",
                    "I",
                    "d",
                    "E",
                    "i",
                    "e",
                    "c",
                    "t",
                    "T",
                ]),
                e
            );
        }
        return (
            (r = [
                {
                    key: "parse",
                    value: function (e, t, r) {
                        switch (t) {
                            case "D":
                            case "DD":
                                return en(L, e);
                            case "Do":
                                return r.ordinalNumber(e, { unit: "date" });
                            default:
                                return es(t.length, e);
                        }
                    },
                },
                {
                    key: "validate",
                    value: function (e, t) {
                        return eu(e.getUTCFullYear()) ? t >= 1 && t <= 366 : t >= 1 && t <= 365;
                    },
                },
                {
                    key: "set",
                    value: function (e, t, r) {
                        return e.setUTCMonth(0, r), e.setUTCHours(0, 0, 0, 0), e;
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(a.prototype, r),
            a
        );
    })(x),
    tw = r(98430);
function tC(e, t, r) {
    (0, c.A)(2, arguments);
    var n,
        a,
        i,
        o,
        l,
        d,
        f,
        p,
        h = (0, tw.q)(),
        m = (0, u.A)(
            null !=
                (n =
                    null !=
                    (a =
                        null !=
                        (i =
                            null != (o = null == r ? void 0 : r.weekStartsOn)
                                ? o
                                : null == r || null == (l = r.locale) || null == (d = l.options)
                                  ? void 0
                                  : d.weekStartsOn)
                            ? i
                            : h.weekStartsOn)
                        ? a
                        : null == (f = h.locale) || null == (p = f.options)
                          ? void 0
                          : p.weekStartsOn)
                ? n
                : 0,
        );
    if (!(m >= 0 && m <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var _ = (0, s.default)(e),
        g = (0, u.A)(t),
        v = 7 * (((g % 7) + 7) % 7 < m) + g - _.getUTCDay();
    return _.setUTCDate(_.getUTCDate() + v), _;
}
function tD(e) {
    return (tD =
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
function tO(e, t) {
    return (tO =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function tA(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function tM(e) {
    return (tM = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function tR(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var tk = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && tO(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = tM(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, tM(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === tD(r) || "function" == typeof r) ? r : tA(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            tR(tA((e = n.call.apply(n, [this].concat(r)))), "priority", 90),
            tR(tA(e), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "E":
                        case "EE":
                        case "EEE":
                            return (
                                r.day(e, { width: "abbreviated", context: "formatting" }) ||
                                r.day(e, { width: "short", context: "formatting" }) ||
                                r.day(e, { width: "narrow", context: "formatting" })
                            );
                        case "EEEEE":
                            return r.day(e, { width: "narrow", context: "formatting" });
                        case "EEEEEE":
                            return (
                                r.day(e, { width: "short", context: "formatting" }) ||
                                r.day(e, { width: "narrow", context: "formatting" })
                            );
                        default:
                            return (
                                r.day(e, { width: "wide", context: "formatting" }) ||
                                r.day(e, { width: "abbreviated", context: "formatting" }) ||
                                r.day(e, { width: "short", context: "formatting" }) ||
                                r.day(e, { width: "narrow", context: "formatting" })
                            );
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 0 && t <= 6;
                },
            },
            {
                key: "set",
                value: function (e, t, r, n) {
                    return (e = tC(e, r, n)).setUTCHours(0, 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function tN(e) {
    return (tN =
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
function tL(e, t) {
    return (tL =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function tI(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function tP(e) {
    return (tP = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function tF(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var tB = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && tL(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = tP(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, tP(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === tN(r) || "function" == typeof r) ? r : tI(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            tF(tI((e = n.call.apply(n, [this].concat(r)))), "priority", 90),
            tF(tI(e), "incompatibleTokens", [
                "y",
                "R",
                "u",
                "q",
                "Q",
                "M",
                "L",
                "I",
                "d",
                "D",
                "E",
                "i",
                "c",
                "t",
                "T",
            ]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r, n) {
                    var a = function (e) {
                        var t = 7 * Math.floor((e - 1) / 7);
                        return ((e + n.weekStartsOn + 6) % 7) + t;
                    };
                    switch (t) {
                        case "e":
                        case "ee":
                            return er(es(t.length, e), a);
                        case "eo":
                            return er(r.ordinalNumber(e, { unit: "day" }), a);
                        case "eee":
                            return (
                                r.day(e, { width: "abbreviated", context: "formatting" }) ||
                                r.day(e, { width: "short", context: "formatting" }) ||
                                r.day(e, { width: "narrow", context: "formatting" })
                            );
                        case "eeeee":
                            return r.day(e, { width: "narrow", context: "formatting" });
                        case "eeeeee":
                            return (
                                r.day(e, { width: "short", context: "formatting" }) ||
                                r.day(e, { width: "narrow", context: "formatting" })
                            );
                        default:
                            return (
                                r.day(e, { width: "wide", context: "formatting" }) ||
                                r.day(e, { width: "abbreviated", context: "formatting" }) ||
                                r.day(e, { width: "short", context: "formatting" }) ||
                                r.day(e, { width: "narrow", context: "formatting" })
                            );
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 0 && t <= 6;
                },
            },
            {
                key: "set",
                value: function (e, t, r, n) {
                    return (e = tC(e, r, n)).setUTCHours(0, 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function tY(e) {
    return (tY =
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
function tU(e, t) {
    return (tU =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function tj(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function tV(e) {
    return (tV = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function tH(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var tG = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && tU(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = tV(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, tV(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === tY(r) || "function" == typeof r) ? r : tj(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            tH(tj((e = n.call.apply(n, [this].concat(r)))), "priority", 90),
            tH(tj(e), "incompatibleTokens", [
                "y",
                "R",
                "u",
                "q",
                "Q",
                "M",
                "L",
                "I",
                "d",
                "D",
                "E",
                "i",
                "e",
                "t",
                "T",
            ]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r, n) {
                    var a = function (e) {
                        var t = 7 * Math.floor((e - 1) / 7);
                        return ((e + n.weekStartsOn + 6) % 7) + t;
                    };
                    switch (t) {
                        case "c":
                        case "cc":
                            return er(es(t.length, e), a);
                        case "co":
                            return er(r.ordinalNumber(e, { unit: "day" }), a);
                        case "ccc":
                            return (
                                r.day(e, { width: "abbreviated", context: "standalone" }) ||
                                r.day(e, { width: "short", context: "standalone" }) ||
                                r.day(e, { width: "narrow", context: "standalone" })
                            );
                        case "ccccc":
                            return r.day(e, { width: "narrow", context: "standalone" });
                        case "cccccc":
                            return (
                                r.day(e, { width: "short", context: "standalone" }) ||
                                r.day(e, { width: "narrow", context: "standalone" })
                            );
                        default:
                            return (
                                r.day(e, { width: "wide", context: "standalone" }) ||
                                r.day(e, { width: "abbreviated", context: "standalone" }) ||
                                r.day(e, { width: "short", context: "standalone" }) ||
                                r.day(e, { width: "narrow", context: "standalone" })
                            );
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 0 && t <= 6;
                },
            },
            {
                key: "set",
                value: function (e, t, r, n) {
                    return (e = tC(e, r, n)).setUTCHours(0, 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function tz(e) {
    return (tz =
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
function tW(e, t) {
    return (tW =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function tq(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function t$(e) {
    return (t$ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function tK(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var tQ = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && tW(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = t$(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, t$(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === tz(r) || "function" == typeof r) ? r : tq(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            tK(tq((e = n.call.apply(n, [this].concat(r)))), "priority", 90),
            tK(tq(e), "incompatibleTokens", [
                "y",
                "Y",
                "u",
                "q",
                "Q",
                "M",
                "L",
                "w",
                "d",
                "D",
                "E",
                "e",
                "c",
                "t",
                "T",
            ]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    var n = function (e) {
                        return 0 === e ? 7 : e;
                    };
                    switch (t) {
                        case "i":
                        case "ii":
                            return es(t.length, e);
                        case "io":
                            return r.ordinalNumber(e, { unit: "day" });
                        case "iii":
                            return er(
                                r.day(e, { width: "abbreviated", context: "formatting" }) ||
                                    r.day(e, { width: "short", context: "formatting" }) ||
                                    r.day(e, { width: "narrow", context: "formatting" }),
                                n,
                            );
                        case "iiiii":
                            return er(r.day(e, { width: "narrow", context: "formatting" }), n);
                        case "iiiiii":
                            return er(
                                r.day(e, { width: "short", context: "formatting" }) ||
                                    r.day(e, { width: "narrow", context: "formatting" }),
                                n,
                            );
                        default:
                            return er(
                                r.day(e, { width: "wide", context: "formatting" }) ||
                                    r.day(e, { width: "abbreviated", context: "formatting" }) ||
                                    r.day(e, { width: "short", context: "formatting" }) ||
                                    r.day(e, { width: "narrow", context: "formatting" }),
                                n,
                            );
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 1 && t <= 7;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return (
                        (e = (function (e, t) {
                            (0, c.A)(2, arguments);
                            var r = (0, u.A)(t);
                            r % 7 == 0 && (r -= 7);
                            var n = (0, s.default)(e),
                                a = 7 * (((r % 7) + 7) % 7 < 1) + r - n.getUTCDay();
                            return n.setUTCDate(n.getUTCDate() + a), n;
                        })(e, r)).setUTCHours(0, 0, 0, 0),
                        e
                    );
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function tX(e) {
    return (tX =
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
function tZ(e, t) {
    return (tZ =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function tJ(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function t0(e) {
    return (t0 = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function t1(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var t2 = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && tZ(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = t0(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, t0(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === tX(r) || "function" == typeof r) ? r : tJ(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            t1(tJ((e = n.call.apply(n, [this].concat(r)))), "priority", 80),
            t1(tJ(e), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "a":
                        case "aa":
                        case "aaa":
                            return (
                                r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                                r.dayPeriod(e, { width: "narrow", context: "formatting" })
                            );
                        case "aaaaa":
                            return r.dayPeriod(e, { width: "narrow", context: "formatting" });
                        default:
                            return (
                                r.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                                r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                                r.dayPeriod(e, { width: "narrow", context: "formatting" })
                            );
                    }
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCHours(eo(r), 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function t3(e) {
    return (t3 =
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
function t4(e, t) {
    return (t4 =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function t6(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function t5(e) {
    return (t5 = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function t8(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var t9 = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && t4(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = t5(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, t5(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === t3(r) || "function" == typeof r) ? r : t6(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            t8(t6((e = n.call.apply(n, [this].concat(r)))), "priority", 80),
            t8(t6(e), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "b":
                        case "bb":
                        case "bbb":
                            return (
                                r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                                r.dayPeriod(e, { width: "narrow", context: "formatting" })
                            );
                        case "bbbbb":
                            return r.dayPeriod(e, { width: "narrow", context: "formatting" });
                        default:
                            return (
                                r.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                                r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                                r.dayPeriod(e, { width: "narrow", context: "formatting" })
                            );
                    }
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCHours(eo(r), 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function t7(e) {
    return (t7 =
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
function re(e, t) {
    return (re =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function rt(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function rr(e) {
    return (rr = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function rn(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var ra = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && re(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = rr(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, rr(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === t7(r) || "function" == typeof r) ? r : rt(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            rn(rt((e = n.call.apply(n, [this].concat(r)))), "priority", 80),
            rn(rt(e), "incompatibleTokens", ["a", "b", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "B":
                        case "BB":
                        case "BBB":
                            return (
                                r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                                r.dayPeriod(e, { width: "narrow", context: "formatting" })
                            );
                        case "BBBBB":
                            return r.dayPeriod(e, { width: "narrow", context: "formatting" });
                        default:
                            return (
                                r.dayPeriod(e, { width: "wide", context: "formatting" }) ||
                                r.dayPeriod(e, { width: "abbreviated", context: "formatting" }) ||
                                r.dayPeriod(e, { width: "narrow", context: "formatting" })
                            );
                    }
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCHours(eo(r), 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function rs(e) {
    return (rs =
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
function ri(e, t) {
    return (ri =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function ro(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function rl(e) {
    return (rl = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function ru(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var rc = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && ri(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = rl(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, rl(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === rs(r) || "function" == typeof r) ? r : ro(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            ru(ro((e = n.call.apply(n, [this].concat(r)))), "priority", 70),
            ru(ro(e), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "h":
                            return en(Y, e);
                        case "ho":
                            return r.ordinalNumber(e, { unit: "hour" });
                        default:
                            return es(t.length, e);
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 1 && t <= 12;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    var n = e.getUTCHours() >= 12;
                    return (
                        n && r < 12
                            ? e.setUTCHours(r + 12, 0, 0, 0)
                            : n || 12 !== r
                              ? e.setUTCHours(r, 0, 0, 0)
                              : e.setUTCHours(0, 0, 0, 0),
                        e
                    );
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function rd(e) {
    return (rd =
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
function rf(e, t) {
    return (rf =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function rp(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function rh(e) {
    return (rh = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function rm(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var r_ = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && rf(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = rh(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, rh(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === rd(r) || "function" == typeof r) ? r : rp(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            rm(rp((e = n.call.apply(n, [this].concat(r)))), "priority", 70),
            rm(rp(e), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "H":
                            return en(P, e);
                        case "Ho":
                            return r.ordinalNumber(e, { unit: "hour" });
                        default:
                            return es(t.length, e);
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 0 && t <= 23;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCHours(r, 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function rg(e) {
    return (rg =
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
function rv(e, t) {
    return (rv =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function rb(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function ry(e) {
    return (ry = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function rE(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var rS = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && rv(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = ry(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, ry(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === rg(r) || "function" == typeof r) ? r : rb(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            rE(rb((e = n.call.apply(n, [this].concat(r)))), "priority", 70),
            rE(rb(e), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "K":
                            return en(B, e);
                        case "Ko":
                            return r.ordinalNumber(e, { unit: "hour" });
                        default:
                            return es(t.length, e);
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 0 && t <= 11;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return (
                        e.getUTCHours() >= 12 && r < 12 ? e.setUTCHours(r + 12, 0, 0, 0) : e.setUTCHours(r, 0, 0, 0), e
                    );
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function rT(e) {
    return (rT =
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
function rx(e, t) {
    return (rx =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function rw(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function rC(e) {
    return (rC = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function rD(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var rO = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && rx(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = rC(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, rC(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === rT(r) || "function" == typeof r) ? r : rw(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            rD(rw((e = n.call.apply(n, [this].concat(r)))), "priority", 70),
            rD(rw(e), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "k":
                            return en(F, e);
                        case "ko":
                            return r.ordinalNumber(e, { unit: "hour" });
                        default:
                            return es(t.length, e);
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 1 && t <= 24;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCHours(r <= 24 ? r % 24 : r, 0, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function rA(e) {
    return (rA =
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
function rM(e, t) {
    return (rM =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function rR(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function rk(e) {
    return (rk = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function rN(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var rL = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && rM(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = rk(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, rk(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === rA(r) || "function" == typeof r) ? r : rR(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            rN(rR((e = n.call.apply(n, [this].concat(r)))), "priority", 60),
            rN(rR(e), "incompatibleTokens", ["t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "m":
                            return en(U, e);
                        case "mo":
                            return r.ordinalNumber(e, { unit: "minute" });
                        default:
                            return es(t.length, e);
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 0 && t <= 59;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCMinutes(r, 0, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function rI(e) {
    return (rI =
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
function rP(e, t) {
    return (rP =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function rF(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function rB(e) {
    return (rB = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function rY(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var rU = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && rP(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = rB(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, rB(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === rI(r) || "function" == typeof r) ? r : rF(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            rY(rF((e = n.call.apply(n, [this].concat(r)))), "priority", 50),
            rY(rF(e), "incompatibleTokens", ["t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t, r) {
                    switch (t) {
                        case "s":
                            return en(j, e);
                        case "so":
                            return r.ordinalNumber(e, { unit: "second" });
                        default:
                            return es(t.length, e);
                    }
                },
            },
            {
                key: "validate",
                value: function (e, t) {
                    return t >= 0 && t <= 59;
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCSeconds(r, 0), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function rj(e) {
    return (rj =
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
function rV(e, t) {
    return (rV =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function rH(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function rG(e) {
    return (rG = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function rz(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var rW = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && rV(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = rG(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, rG(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === rj(r) || "function" == typeof r) ? r : rH(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            rz(rH((e = n.call.apply(n, [this].concat(r)))), "priority", 30),
            rz(rH(e), "incompatibleTokens", ["t", "T"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t) {
                    return er(es(t.length, e), function (e) {
                        return Math.floor(e * Math.pow(10, -t.length + 3));
                    });
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return e.setUTCMilliseconds(r), e;
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function rq(e) {
    return (rq =
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
function r$(e, t) {
    return (r$ =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function rK(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function rQ(e) {
    return (rQ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function rX(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var rZ = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && r$(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = rQ(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, rQ(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === rq(r) || "function" == typeof r) ? r : rK(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            rX(rK((e = n.call.apply(n, [this].concat(r)))), "priority", 10),
            rX(rK(e), "incompatibleTokens", ["t", "T", "x"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t) {
                    switch (t) {
                        case "X":
                            return ea(X, e);
                        case "XX":
                            return ea(Z, e);
                        case "XXXX":
                            return ea(J, e);
                        case "XXXXX":
                            return ea(et, e);
                        default:
                            return ea(ee, e);
                    }
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return t.timestampIsSet ? e : new Date(e.getTime() - r);
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function rJ(e) {
    return (rJ =
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
function r0(e, t) {
    return (r0 =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function r1(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function r2(e) {
    return (r2 = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function r3(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var r4 = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && r0(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = r2(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, r2(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === rJ(r) || "function" == typeof r) ? r : r1(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return (
            r3(r1((e = n.call.apply(n, [this].concat(r)))), "priority", 10),
            r3(r1(e), "incompatibleTokens", ["t", "T", "X"]),
            e
        );
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e, t) {
                    switch (t) {
                        case "x":
                            return ea(X, e);
                        case "xx":
                            return ea(Z, e);
                        case "xxxx":
                            return ea(J, e);
                        case "xxxxx":
                            return ea(et, e);
                        default:
                            return ea(ee, e);
                    }
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return t.timestampIsSet ? e : new Date(e.getTime() - r);
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function r6(e) {
    return (r6 =
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
function r5(e, t) {
    return (r5 =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function r8(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function r9(e) {
    return (r9 = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function r7(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var ne = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
        e && r5(a, e);
    var t,
        r,
        n =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r,
                    n,
                    s = r9(a);
                return (
                    (n = t ? Reflect.construct(s, arguments, r9(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (r = n) && ("object" === r6(r) || "function" == typeof r) ? r : r8(e)
                );
            });
    function a() {
        var e;
        if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
        return r7(r8((e = n.call.apply(n, [this].concat(r)))), "priority", 40), r7(r8(e), "incompatibleTokens", "*"), e;
    }
    return (
        (r = [
            {
                key: "parse",
                value: function (e) {
                    return en(W, e);
                },
            },
            {
                key: "set",
                value: function (e, t, r) {
                    return [new Date(1e3 * r), { timestampIsSet: !0 }];
                },
            },
        ]),
        (function (e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        })(a.prototype, r),
        a
    );
})(x);
function nt(e) {
    return (nt =
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
function nr(e, t) {
    return (nr =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function nn(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function na(e) {
    return (na = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function ns(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var ni = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } })),
            e && nr(a, e);
        var t,
            r,
            n =
                ((t = (function () {
                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (e) {
                        return !1;
                    }
                })()),
                function () {
                    var e,
                        r,
                        n,
                        s = na(a);
                    return (
                        (n = t ? Reflect.construct(s, arguments, na(this).constructor) : s.apply(this, arguments)),
                        (e = this),
                        (r = n) && ("object" === nt(r) || "function" == typeof r) ? r : nn(e)
                    );
                });
        function a() {
            var e;
            if (!(this instanceof a)) throw TypeError("Cannot call a class as a function");
            for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
            return (
                ns(nn((e = n.call.apply(n, [this].concat(r)))), "priority", 20), ns(nn(e), "incompatibleTokens", "*"), e
            );
        }
        return (
            (r = [
                {
                    key: "parse",
                    value: function (e) {
                        return en(W, e);
                    },
                },
                {
                    key: "set",
                    value: function (e, t, r) {
                        return [new Date(r), { timestampIsSet: !0 }];
                    },
                },
            ]),
            (function (e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            })(a.prototype, r),
            a
        );
    })(x),
    no = {
        G: new M(),
        y: new em(),
        Y: new eT(),
        R: new eM(),
        u: new eP(),
        Q: new eV(),
        q: new e$(),
        M: new e0(),
        L: new e5(),
        w: new tn(),
        I: new tc(),
        d: new tv(),
        D: new tx(),
        E: new tk(),
        e: new tB(),
        c: new tG(),
        i: new tQ(),
        a: new t2(),
        b: new t9(),
        B: new ra(),
        h: new rc(),
        H: new r_(),
        K: new rS(),
        k: new rO(),
        m: new rL(),
        s: new rU(),
        S: new rW(),
        X: new rZ(),
        x: new r4(),
        t: new ne(),
        T: new ni(),
    };
function nl(e) {
    return (nl =
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
function nu(e, t) {
    if ("u" < typeof Symbol || null == e[Symbol.iterator]) {
        if (
            Array.isArray(e) ||
            (a = (function (e) {
                if (e) {
                    if ("string" == typeof e) return nc(e, void 0);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return nc(e, void 0);
                }
            })(e)) ||
            (t && e && "number" == typeof e.length)
        ) {
            a && (e = a);
            var r = 0,
                n = function () {};
            return {
                s: n,
                n: function () {
                    return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                },
                e: function (e) {
                    throw e;
                },
                f: n,
            };
        }
        throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    var a,
        s,
        i = !0,
        o = !1;
    return {
        s: function () {
            a = e[Symbol.iterator]();
        },
        n: function () {
            var e = a.next();
            return (i = e.done), e;
        },
        e: function (e) {
            (o = !0), (s = e);
        },
        f: function () {
            try {
                i || null == a.return || a.return();
            } finally {
                if (o) throw s;
            }
        },
    };
}
function nc(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var nd = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    nf = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    np = /^'([^]*?)'?$/,
    nh = /''/g,
    nm = /\S/,
    n_ = /[a-zA-Z]/;
function ng(e, t, r, d) {
    (0, c.A)(3, arguments);
    var f = String(e),
        p = String(t),
        h = (0, tw.q)(),
        m = null != (v = null != (b = null == d ? void 0 : d.locale) ? b : h.locale) ? v : n.A;
    if (!m.match) throw RangeError("locale must contain match property");
    var _ = (0, u.A)(
        null !=
            (y =
                null !=
                (E =
                    null !=
                    (S =
                        null != (x = null == d ? void 0 : d.firstWeekContainsDate)
                            ? x
                            : null == d || null == (w = d.locale) || null == (C = w.options)
                              ? void 0
                              : C.firstWeekContainsDate)
                        ? S
                        : h.firstWeekContainsDate)
                    ? E
                    : null == (D = h.locale) || null == (O = D.options)
                      ? void 0
                      : O.firstWeekContainsDate)
            ? y
            : 1,
    );
    if (!(_ >= 1 && _ <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var g = (0, u.A)(
        null !=
            (A =
                null !=
                (M =
                    null !=
                    (R =
                        null != (k = null == d ? void 0 : d.weekStartsOn)
                            ? k
                            : null == d || null == (N = d.locale) || null == (L = N.options)
                              ? void 0
                              : L.weekStartsOn)
                        ? R
                        : h.weekStartsOn)
                    ? M
                    : null == (I = h.locale) || null == (P = I.options)
                      ? void 0
                      : P.weekStartsOn)
            ? A
            : 0,
    );
    if (!(g >= 0 && g <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if ("" === p)
        if ("" === f) return (0, s.default)(r);
        else return new Date(NaN);
    var v,
        b,
        y,
        E,
        S,
        x,
        w,
        C,
        D,
        O,
        A,
        M,
        R,
        k,
        N,
        L,
        I,
        P,
        F,
        B = { firstWeekContainsDate: _, weekStartsOn: g, locale: m },
        Y = [new T()],
        U = p
            .match(nf)
            .map(function (e) {
                var t = e[0];
                return t in i.A ? (0, i.A[t])(e, m.formatLong) : e;
            })
            .join("")
            .match(nd),
        j = [],
        V = nu(U);
    try {
        for (V.s(); !(F = V.n()).done; ) {
            var H = (function () {
                var t = F.value;
                !(null != d && d.useAdditionalWeekYearTokens) && (0, l.xM)(t) && (0, l.lJ)(t, p, e),
                    !(null != d && d.useAdditionalDayOfYearTokens) && (0, l.ef)(t) && (0, l.lJ)(t, p, e);
                var r = t[0],
                    n = no[r];
                if (n) {
                    var a = n.incompatibleTokens;
                    if (Array.isArray(a)) {
                        var s = j.find(function (e) {
                            return a.includes(e.token) || e.token === r;
                        });
                        if (s)
                            throw RangeError(
                                "The format string mustn't contain `"
                                    .concat(s.fullToken, "` and `")
                                    .concat(t, "` at the same time"),
                            );
                    } else if ("*" === n.incompatibleTokens && j.length > 0)
                        throw RangeError(
                            "The format string mustn't contain `".concat(t, "` and any other token at the same time"),
                        );
                    j.push({ token: r, fullToken: t });
                    var i = n.run(f, t, m.match, B);
                    if (!i) return { v: new Date(NaN) };
                    Y.push(i.setter), (f = i.rest);
                } else {
                    if (r.match(n_))
                        throw RangeError("Format string contains an unescaped latin alphabet character `" + r + "`");
                    if (
                        ("''" === t ? (t = "'") : "'" === r && (t = t.match(np)[1].replace(nh, "'")),
                        0 !== f.indexOf(t))
                    )
                        return { v: new Date(NaN) };
                    f = f.slice(t.length);
                }
            })();
            if ("object" === nl(H)) return H.v;
        }
    } catch (e) {
        V.e(e);
    } finally {
        V.f();
    }
    if (f.length > 0 && nm.test(f)) return new Date(NaN);
    var G = Y.map(function (e) {
            return e.priority;
        })
            .sort(function (e, t) {
                return t - e;
            })
            .filter(function (e, t, r) {
                return r.indexOf(e) === t;
            })
            .map(function (e) {
                return Y.filter(function (t) {
                    return t.priority === e;
                }).sort(function (e, t) {
                    return t.subPriority - e.subPriority;
                });
            })
            .map(function (e) {
                return e[0];
            }),
        z = (0, s.default)(r);
    if (isNaN(z.getTime())) return new Date(NaN);
    var W,
        q = (0, a.A)(z, (0, o.A)(z)),
        $ = {},
        K = nu(G);
    try {
        for (K.s(); !(W = K.n()).done; ) {
            var Q = W.value;
            if (!Q.validate(q, B)) return new Date(NaN);
            var X = Q.set(q, $, B);
            Array.isArray(X)
                ? ((q = X[0]),
                  (function (e, t) {
                      if (null == e) throw TypeError("assign requires that input parameter not be null or undefined");
                      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                  })($, X[1]))
                : (q = X);
        }
    } catch (e) {
        K.e(e);
    } finally {
        K.f();
    }
    return q;
}
