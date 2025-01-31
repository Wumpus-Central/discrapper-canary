n.d(t, { m: () => E });
var i = n(717029),
    r = n(846042),
    a = n(395913);
function s(e) {
    return (s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function o(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function l(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function u(e, t, n) {
    return t && l(e.prototype, t), n && l(e, n), e;
}
function c(e, t) {
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
            i = m(e);
        return (n = t ? Reflect.construct(i, arguments, m(this).constructor) : i.apply(this, arguments)), _(this, n);
    };
}
function _(e, t) {
    return t && ('object' === s(t) || 'function' == typeof t) ? t : p(e);
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
    c(n, e);
    var t = f(n);
    function n() {
        var e;
        o(this, n);
        for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
        return g(p((e = t.call.apply(t, [this].concat(r)))), 'priority', 90), g(p(e), 'incompatibleTokens', ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']), e;
    }
    return (
        u(n, [
            {
                key: 'parse',
                value: function (e, t, n, i) {
                    var a = function (e) {
                        var t = 7 * Math.floor((e - 1) / 7);
                        return ((e + i.weekStartsOn + 6) % 7) + t;
                    };
                    switch (t) {
                        case 'e':
                        case 'ee':
                            return (0, r.jg)((0, r.ZL)(t.length, e), a);
                        case 'eo':
                            return (0, r.jg)(n.ordinalNumber(e, { unit: 'day' }), a);
                        case 'eee':
                            return (
                                n.day(e, {
                                    width: 'abbreviated',
                                    context: 'formatting'
                                }) ||
                                n.day(e, {
                                    width: 'short',
                                    context: 'formatting'
                                }) ||
                                n.day(e, {
                                    width: 'narrow',
                                    context: 'formatting'
                                })
                            );
                        case 'eeeee':
                            return n.day(e, {
                                width: 'narrow',
                                context: 'formatting'
                            });
                        case 'eeeeee':
                            return (
                                n.day(e, {
                                    width: 'short',
                                    context: 'formatting'
                                }) ||
                                n.day(e, {
                                    width: 'narrow',
                                    context: 'formatting'
                                })
                            );
                        default:
                            return (
                                n.day(e, {
                                    width: 'wide',
                                    context: 'formatting'
                                }) ||
                                n.day(e, {
                                    width: 'abbreviated',
                                    context: 'formatting'
                                }) ||
                                n.day(e, {
                                    width: 'short',
                                    context: 'formatting'
                                }) ||
                                n.day(e, {
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
                    return t >= 0 && t <= 6;
                }
            },
            {
                key: 'set',
                value: function (e, t, n, i) {
                    return (e = (0, a.Z)(e, n, i)).setUTCHours(0, 0, 0, 0), e;
                }
            }
        ]),
        n
    );
})(i._);
