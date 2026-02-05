"use strict";
function r(e) {
    return (r =
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
function i(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
        t && a(e, t);
}
function a(e, t) {
    return (a =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function s(e) {
    var t = u();
    return function () {
        var n,
            r = c(e);
        return (n = t ? Reflect.construct(r, arguments, c(this).constructor) : r.apply(this, arguments)), o(this, n);
    };
}
function o(e, t) {
    return t && ("object" === r(t) || "function" == typeof t) ? t : l(e);
}
function l(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function u() {
    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function c(e) {
    return (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function d(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function _(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function f(e, t, n) {
    return t && _(e.prototype, t), n && _(e, n), e;
}
function p(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
n.d(t, { Bc: () => g, Je: () => E });
var h = 10,
    m = (function () {
        function e() {
            d(this, e), p(this, "subPriority", 0);
        }
        return (
            f(e, [
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
    g = (function (e) {
        i(n, e);
        var t = s(n);
        function n(e, r, i, a, s) {
            var o;
            return (
                d(this, n),
                ((o = t.call(this)).value = e),
                (o.validateValue = r),
                (o.setValue = i),
                (o.priority = a),
                s && (o.subPriority = s),
                o
            );
        }
        return (
            f(n, [
                {
                    key: "validate",
                    value: function (e, t) {
                        return this.validateValue(e, this.value, t);
                    },
                },
                {
                    key: "set",
                    value: function (e, t, n) {
                        return this.setValue(e, t, this.value, n);
                    },
                },
            ]),
            n
        );
    })(m),
    E = (function (e) {
        i(n, e);
        var t = s(n);
        function n() {
            var e;
            d(this, n);
            for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return p(l((e = t.call.apply(t, [this].concat(i)))), "priority", h), p(l(e), "subPriority", -1), e;
        }
        return (
            f(n, [
                {
                    key: "set",
                    value: function (e, t) {
                        if (t.timestampIsSet) return e;
                        var n = new Date(0);
                        return (
                            n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
                            n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()),
                            n
                        );
                    },
                },
            ]),
            n
        );
    })(m);
