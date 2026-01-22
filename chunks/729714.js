n.d(t, {
    i: () => y,
});
var r = n(384623),
    i = n(12543),
    a = n(438767);

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

function c(e, t, n) {
    return t && l(e.prototype, t), n && l(e, n), e;
}

function u(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0,
        },
    })),
        t && d(e, t);
}

function d(e, t) {
    return (d =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}

function f(e) {
    var t = h();
    return function () {
        var n,
            r = m(e);
        return (n = t ? Reflect.construct(r, arguments, m(this).constructor) : r.apply(this, arguments)), p(this, n);
    };
}

function p(e, t) {
    return t && ("object" === s(t) || "function" == typeof t) ? t : _(e);
}

function _(e) {
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
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var E = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    b = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    y = (function (e) {
        u(n, e);
        var t = f(n);

        function n() {
            var e;
            o(this, n);
            for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
            return (
                g(_((e = t.call.apply(t, [this].concat(i)))), "priority", 90),
                g(_(e), "subPriority", 1),
                g(_(e), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]),
                e
            );
        }
        return (
            c(n, [
                {
                    key: "parse",
                    value: function (e, t, n) {
                        switch (t) {
                            case "d":
                                return (0, r.P2)(a.h.date, e);
                            case "do":
                                return n.ordinalNumber(e, {
                                    unit: "date",
                                });
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
                            a = e.getUTCMonth();
                        return i ? t >= 1 && t <= b[a] : t >= 1 && t <= E[a];
                    },
                },
                {
                    key: "set",
                    value: function (e, t, n) {
                        return e.setUTCDate(n), e.setUTCHours(0, 0, 0, 0), e;
                    },
                },
            ]),
            n
        );
    })(i.i);
