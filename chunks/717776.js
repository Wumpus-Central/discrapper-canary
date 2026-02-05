"use strict";
n.d(t, { y: () => E });
var r = n(12543),
    i = n(438767),
    a = n(384623);
function s(e) {
    return (s =
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
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function l(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function u(e, t, n) {
    return t && l(e.prototype, t), n && l(e, n), e;
}
function c(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
        t && d(e, t);
}
function d(e, t) {
    return (d =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function _(e) {
    var t = h();
    return function () {
        var n,
            r = m(e);
        return (n = t ? Reflect.construct(r, arguments, m(this).constructor) : r.apply(this, arguments)), f(this, n);
    };
}
function f(e, t) {
    return t && ("object" === s(t) || "function" == typeof t) ? t : p(e);
}
function p(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function h() {
    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function m(e) {
    return (m = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function g(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var E = (function (e) {
    c(n, e);
    var t = _(n);
    function n() {
        var e;
        o(this, n);
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        return (
            g(p((e = t.call.apply(t, [this].concat(i)))), "priority", 10),
            g(p(e), "incompatibleTokens", ["t", "T", "X"]),
            e
        );
    }
    return (
        u(n, [
            {
                key: "parse",
                value: function (e, t) {
                    switch (t) {
                        case "x":
                            return (0, a.bQ)(i.j.basicOptionalMinutes, e);
                        case "xx":
                            return (0, a.bQ)(i.j.basic, e);
                        case "xxxx":
                            return (0, a.bQ)(i.j.basicOptionalSeconds, e);
                        case "xxxxx":
                            return (0, a.bQ)(i.j.extendedOptionalSeconds, e);
                        default:
                            return (0, a.bQ)(i.j.extended, e);
                    }
                },
            },
            {
                key: "set",
                value: function (e, t, n) {
                    return t.timestampIsSet ? e : new Date(e.getTime() - n);
                },
            },
        ]),
        n
    );
})(r.i);
