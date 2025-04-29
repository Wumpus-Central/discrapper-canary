n.d(t, { C: () => E });
var r = n(846042),
    i = n(717029),
    o = n(25487);
function a(e) {
    return (a =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function s(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function l(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function c(e, t, n) {
    return t && l(e.prototype, t), n && l(e, n), e;
}
function u(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
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
        return (n = t ? Reflect.construct(r, arguments, m(this).constructor) : r.apply(this, arguments)), _(this, n);
    };
}
function _(e, t) {
    return t && ('object' === a(t) || 'function' == typeof t) ? t : p(e);
}
function p(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function h() {
    if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var E = (function (e) {
    u(n, e);
    var t = f(n);
    function n() {
        var e;
        s(this, n);
        for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        return g(p((e = t.call.apply(t, [this].concat(i)))), 'incompatibleTokens', ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']), g(p(e), 'priority', 110), e;
    }
    return (
        c(n, [
            {
                key: 'parse',
                value: function (e, t, n) {
                    var i = function (e) {
                        return e - 1;
                    };
                    switch (t) {
                        case 'M':
                            return (0, r.jg)((0, r.ie)(o.z.month, e), i);
                        case 'MM':
                            return (0, r.jg)((0, r.ZL)(2, e), i);
                        case 'Mo':
                            return (0, r.jg)(n.ordinalNumber(e, { unit: 'month' }), i);
                        case 'MMM':
                            return (
                                n.month(e, {
                                    width: 'abbreviated',
                                    context: 'formatting'
                                }) ||
                                n.month(e, {
                                    width: 'narrow',
                                    context: 'formatting'
                                })
                            );
                        case 'MMMMM':
                            return n.month(e, {
                                width: 'narrow',
                                context: 'formatting'
                            });
                        default:
                            return (
                                n.month(e, {
                                    width: 'wide',
                                    context: 'formatting'
                                }) ||
                                n.month(e, {
                                    width: 'abbreviated',
                                    context: 'formatting'
                                }) ||
                                n.month(e, {
                                    width: 'narrow',
                                    context: 'formatting'
                                })
                            );
                    }
                }
            },
            {
                key: 'validate',
                value: function (e, t) {
                    return t >= 0 && t <= 11;
                }
            },
            {
                key: 'set',
                value: function (e, t, n) {
                    return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e;
                }
            }
        ]),
        n
    );
})(i._);
