"use strict";
n.d(t, { i: () => f });
var r = n(384623),
    i = n(12543),
    s = n(438767);
function a(e) {
    return (a =
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
function o(e, t) {
    return (o =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function l(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function u(e) {
    return (u = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function d(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var c = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    _ = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    f = (function (e) {
        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
        (f.prototype = Object.create(e && e.prototype, { constructor: { value: f, writable: !0, configurable: !0 } })),
            e && o(f, e);
        var t,
            n,
            i =
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
                        n,
                        r,
                        i = u(f);
                    return (
                        (r = t ? Reflect.construct(i, arguments, u(this).constructor) : i.apply(this, arguments)),
                        (e = this),
                        (n = r) && ("object" === a(n) || "function" == typeof n) ? n : l(e)
                    );
                });
        function f() {
            var e;
            if (!(this instanceof f)) throw TypeError("Cannot call a class as a function");
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return (
                d(l((e = i.call.apply(i, [this].concat(n)))), "priority", 90),
                d(l(e), "subPriority", 1),
                d(l(e), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]),
                e
            );
        }
        return (
            (n = [
                {
                    key: "parse",
                    value: function (e, t, n) {
                        switch (t) {
                            case "d":
                                return (0, r.P2)(s.h.date, e);
                            case "do":
                                return n.ordinalNumber(e, { unit: "date" });
                            default:
                                return (0, r.ym)(t.length, e);
                        }
                    },
                },
                {
                    key: "validate",
                    value: function (e, t) {
                        var n = e.getUTCFullYear(),
                            i = (0, r.iz)(n),
                            s = e.getUTCMonth();
                        return i ? t >= 1 && t <= _[s] : t >= 1 && t <= c[s];
                    },
                },
                {
                    key: "set",
                    value: function (e, t, n) {
                        return e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e;
                    },
                },
            ]),
            (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                }
            })(f.prototype, n),
            f
        );
    })(i.i);
