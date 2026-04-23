"use strict";
n.d(t, { y: () => d });
var r = n(12543),
    i = n(438767),
    s = n(384623);
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
function c(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var d = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (d.prototype = Object.create(e && e.prototype, { constructor: { value: d, writable: !0, configurable: !0 } })),
        e && o(d, e);
    var t,
        n,
        r =
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
                    i = u(d);
                return (
                    (r = t ? Reflect.construct(i, arguments, u(this).constructor) : i.apply(this, arguments)),
                    (e = this),
                    (n = r) && ("object" === a(n) || "function" == typeof n) ? n : l(e)
                );
            });
    function d() {
        var e;
        if (!(this instanceof d)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return (
            c(l((e = r.call.apply(r, [this].concat(n)))), "priority", 10),
            c(l(e), "incompatibleTokens", ["t", "T", "X"]),
            e
        );
    }
    return (
        (n = [
            {
                key: "parse",
                value: function (e, t) {
                    switch (t) {
                        case "x":
                            return (0, s.bQ)(i.j.basicOptionalMinutes, e);
                        case "xx":
                            return (0, s.bQ)(i.j.basic, e);
                        case "xxxx":
                            return (0, s.bQ)(i.j.basicOptionalSeconds, e);
                        case "xxxxx":
                            return (0, s.bQ)(i.j.extendedOptionalSeconds, e);
                        default:
                            return (0, s.bQ)(i.j.extended, e);
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
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        })(d.prototype, n),
        d
    );
})(r.i);
