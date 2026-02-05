"use strict";
n.d(t, { D: () => g });
var r = n(12543),
    i = n(384623);
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
function s(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function o(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function l(e, t, n) {
    return t && o(e.prototype, t), n && o(e, n), e;
}
function u(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
        t && c(e, t);
}
function c(e, t) {
    return (c =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function d(e) {
    var t = p();
    return function () {
        var n,
            r = h(e);
        return (n = t ? Reflect.construct(r, arguments, h(this).constructor) : r.apply(this, arguments)), _(this, n);
    };
}
function _(e, t) {
    return t && ("object" === a(t) || "function" == typeof t) ? t : f(e);
}
function f(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function p() {
    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function h(e) {
    return (h = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function m(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var g = (function (e) {
    u(n, e);
    var t = d(n);
    function n() {
        var e;
        s(this, n);
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        return (
            m(f((e = t.call.apply(t, [this].concat(i)))), "priority", 130),
            m(f(e), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]),
            e
        );
    }
    return (
        l(n, [
            {
                key: "parse",
                value: function (e, t, n) {
                    var r = function (e) {
                        return { year: e, isTwoDigitYear: "yy" === t };
                    };
                    switch (t) {
                        case "y":
                            return (0, i.IS)((0, i.ym)(4, e), r);
                        case "yo":
                            return (0, i.IS)(n.ordinalNumber(e, { unit: "year" }), r);
                        default:
                            return (0, i.IS)((0, i.ym)(t.length, e), r);
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
                value: function (e, t, n) {
                    var r = e.getUTCFullYear();
                    if (n.isTwoDigitYear) {
                        var a = (0, i.qB)(n.year, r);
                        return e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
                    }
                    var s = "era" in t && 1 !== t.era ? 1 - n.year : n.year;
                    return e.setUTCFullYear(s, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
                },
            },
        ]),
        n
    );
})(r.i);
