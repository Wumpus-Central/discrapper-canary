"use strict";
n.d(t, { U: () => u });
var r = n(12543);
function i(e) {
    return (i =
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
    return (s =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function a(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function o(e) {
    return (o = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function l(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var u = (function (e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
    (u.prototype = Object.create(e && e.prototype, { constructor: { value: u, writable: !0, configurable: !0 } })),
        e && s(u, e);
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
                    s = o(u);
                return (
                    (r = t ? Reflect.construct(s, arguments, o(this).constructor) : s.apply(this, arguments)),
                    (e = this),
                    (n = r) && ("object" === i(n) || "function" == typeof n) ? n : a(e)
                );
            });
    function u() {
        var e;
        if (!(this instanceof u)) throw TypeError("Cannot call a class as a function");
        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
        return (
            l(a((e = r.call.apply(r, [this].concat(n)))), "priority", 140),
            l(a(e), "incompatibleTokens", ["R", "u", "t", "T"]),
            e
        );
    }
    return (
        (n = [
            {
                key: "parse",
                value: function (e, t, n) {
                    switch (t) {
                        case "G":
                        case "GG":
                        case "GGG":
                            return n.era(e, { width: "abbreviated" }) || n.era(e, { width: "narrow" });
                        case "GGGGG":
                            return n.era(e, { width: "narrow" });
                        default:
                            return (
                                n.era(e, { width: "wide" }) ||
                                n.era(e, { width: "abbreviated" }) ||
                                n.era(e, { width: "narrow" })
                            );
                    }
                },
            },
            {
                key: "set",
                value: function (e, t, n) {
                    return (t.era = n), e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
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
        })(u.prototype, n),
        u
    );
})(r.i);
