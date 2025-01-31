n.d(t, { d: () => g });
var i = n(717029),
    r = n(395913);
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
function o(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function l(e, t, n) {
    return t && o(e.prototype, t), n && o(e, n), e;
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
        t && c(e, t);
}
function c(e, t) {
    return (c =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function d(e) {
    var t = p();
    return function () {
        var n,
            i = h(e);
        return (n = t ? Reflect.construct(i, arguments, h(this).constructor) : i.apply(this, arguments)), f(this, n);
    };
}
function f(e, t) {
    return t && ('object' === a(t) || 'function' == typeof t) ? t : _(e);
}
function _(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function p() {
    if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function h(e) {
    return (h = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function m(e, t, n) {
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
var g = (function (e) {
    u(n, e);
    var t = d(n);
    function n() {
        var e;
        s(this, n);
        for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
        return m(_((e = t.call.apply(t, [this].concat(r)))), 'priority', 90), m(_(e), 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']), e;
    }
    return (
        l(n, [
            {
                key: 'parse',
                value: function (e, t, n) {
                    switch (t) {
                        case 'E':
                        case 'EE':
                        case 'EEE':
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
                        case 'EEEEE':
                            return n.day(e, {
                                width: 'narrow',
                                context: 'formatting'
                            });
                        case 'EEEEEE':
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
                    return (e = (0, r.Z)(e, n, i)).setUTCHours(0, 0, 0, 0), e;
                }
            }
        ]),
        n
    );
})(i._);
