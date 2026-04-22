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
        t && s(e, t);
}
function s(e, t) {
    return (s =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function a(e) {
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
        var n,
            i,
            s,
            a = l(e);
        return (
            (s = t ? Reflect.construct(a, arguments, l(this).constructor) : a.apply(this, arguments)),
            (n = this),
            (i = s) && ("object" === r(i) || "function" == typeof i) ? i : o(n)
        );
    };
}
function o(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function l(e) {
    return (l = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function u(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function d(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function c(e, t, n) {
    return t && d(e.prototype, t), n && d(e, n), e;
}
function _(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
n.d(t, { Bc: () => E, Je: () => h });
var f = (function () {
        function e() {
            u(this, e), _(this, "subPriority", 0);
        }
        return (
            c(e, [
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
    E = (function (e) {
        i(n, e);
        var t = a(n);
        function n(e, r, i, s, a) {
            var o;
            return (
                u(this, n),
                ((o = t.call(this)).value = e),
                (o.validateValue = r),
                (o.setValue = i),
                (o.priority = s),
                a && (o.subPriority = a),
                o
            );
        }
        return (
            c(n, [
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
    })(f),
    h = (function (e) {
        i(n, e);
        var t = a(n);
        function n() {
            var e;
            u(this, n);
            for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
            return _(o((e = t.call.apply(t, [this].concat(i)))), "priority", 10), _(o(e), "subPriority", -1), e;
        }
        return (
            c(n, [
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
    })(f);
