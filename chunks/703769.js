n.d(t, { J: () => y });
var r = n(12543),
    i = n(438767),
    a = n(384623),
    s = n(539385),
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
function c(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function u(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function d(e, t, n) {
    return t && u(e.prototype, t), n && u(e, n), e;
}
function f(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0,
        },
    })),
        t && p(e, t);
}
function p(e, t) {
    return (p =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function _(e) {
    var t = g();
    return function () {
        var n,
            r = E(e);
        return (n = t ? Reflect.construct(r, arguments, E(this).constructor) : r.apply(this, arguments)), h(this, n);
    };
}
function h(e, t) {
    return t && ("object" === l(t) || "function" == typeof t) ? t : m(e);
}
function m(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function g() {
    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function E(e) {
    return (E = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function b(e, t, n) {
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
var y = (function (e) {
    f(n, e);
    var t = _(n);
    function n() {
        var e;
        c(this, n);
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        return (
            b(m((e = t.call.apply(t, [this].concat(i)))), "priority", 100),
            b(m(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]),
            e
        );
    }
    return (
        d(n, [
            {
                key: "parse",
                value: function (e, t, n) {
                    switch (t) {
                        case "w":
                            return (0, a.P2)(i.h.week, e);
                        case "wo":
                            return n.ordinalNumber(e, { unit: "week" });
                        default:
                            return (0, a.ym)(t.length, e);
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
                    return (0, o.A)((0, s.A)(e, n, r), r);
                },
            },
        ]),
        n
    );
})(r.i);
