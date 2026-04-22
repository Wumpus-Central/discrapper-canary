"use strict";
n.d(t, { J: () => f });
var r = n(12543),
    i = n(438767),
    s = n(384623),
    a = n(539385),
    o = n(327922);
function l(e) {
    return (l =
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
function u(e, t) {
    return (u =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function d(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function c(e) {
    return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function _(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var f = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (f.prototype = Object.create(e && e.prototype, { constructor: { value: f, writable: !0, configurable: !0 } })),
        e && u(f, e);
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
                    i = c(f);
                return (
                    (r = t ? Reflect.construct(i, arguments, c(this).constructor) : i.apply(this, arguments)),
                    (e = this),
                    (n = r) && ("object" === l(n) || "function" == typeof n) ? n : d(e)
                );
            });
    function f() {
        var e;
        if (!(this instanceof f)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return (
            _(d((e = r.call.apply(r, [this].concat(n)))), "priority", 100),
            _(d(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]),
            e
        );
    }
    return (
        (n = [
            {
                key: "parse",
                value: function (e, t, n) {
                    switch (t) {
                        case "w":
                            return (0, s.P2)(i.h.week, e);
                        case "wo":
                            return n.ordinalNumber(e, { unit: "week" });
                        default:
                            return (0, s.ym)(t.length, e);
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
                value: function (e, t, n, r) {
                    return (0, o.A)((0, a.A)(e, n, r), r);
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
})(r.i);
