"use strict";
n.d(t, { Y: () => c });
var r = n(12543),
    i = n(384623),
    s = n(576103);
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
var c = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (c.prototype = Object.create(e && e.prototype, { constructor: { value: c, writable: !0, configurable: !0 } })),
        e && o(c, e);
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
                    i = u(c);
                return (
                    (r = t ? Reflect.construct(i, arguments, u(this).constructor) : i.apply(this, arguments)),
                    (e = this),
                    (n = r) && ("object" === a(n) || "function" == typeof n) ? n : l(e)
                );
            });
    function c() {
        var e;
        if (!(this instanceof c)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return (
            d(l((e = r.call.apply(r, [this].concat(n)))), "priority", 130),
            d(l(e), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]),
            e
        );
    }
    return (
        (n = [
            {
                key: "parse",
                value: function (e, t) {
                    return "R" === t ? (0, i.gB)(4, e) : (0, i.gB)(t.length, e);
                },
            },
            {
                key: "set",
                value: function (e, t, n) {
                    var r = new Date(0);
                    return r.setUTCFullYear(n, 0, 4), r.setUTCHours(0, 0, 0, 0), (0, s.A)(r);
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
        })(c.prototype, n),
        c
    );
})(r.i);
