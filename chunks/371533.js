"use strict";
n.d(t, { r: () => c });
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
            d(l((e = r.call.apply(r, [this].concat(n)))), "priority", 70),
            d(l(e), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
            e
        );
    }
    return (
        (n = [
            {
                key: "parse",
                value: function (e, t, n) {
                    switch (t) {
                        case "h":
                            return (0, s.P2)(i.h.hour12h, e);
                        case "ho":
                            return n.ordinalNumber(e, { unit: "hour" });
                        default:
                            return (0, s.ym)(t.length, e);
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
                value: function (e, t, n) {
                    var r = e.getUTCHours() >= 12;
                    return (
                        r && n < 12
                            ? e.setUTCHours(n + 12, 0, 0, 0)
                            : r || 12 !== n
                              ? e.setUTCHours(n, 0, 0, 0)
                              : e.setUTCHours(0, 0, 0, 0),
                        e
                    );
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
