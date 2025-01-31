n.d(t, { x: () => v });
var i = n(717029),
    r = n(846042),
    a = n(193603),
    s = n(780603);
function o(e) {
    return (o =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function l(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function u(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function c(e, t, n) {
    return t && u(e.prototype, t), n && u(e, n), e;
}
function d(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        t && f(e, t);
}
function f(e, t) {
    return (f =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function _(e) {
    var t = m();
    return function () {
        var n,
            i = g(e);
        return (n = t ? Reflect.construct(i, arguments, g(this).constructor) : i.apply(this, arguments)), p(this, n);
    };
}
function p(e, t) {
    return t && ('object' === o(t) || 'function' == typeof t) ? t : h(e);
}
function h(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function m() {
    if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function g(e) {
    return (g = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function E(e, t, n) {
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
var v = (function (e) {
    d(n, e);
    var t = _(n);
    function n() {
        var e;
        l(this, n);
        for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
        return E(h((e = t.call.apply(t, [this].concat(r)))), 'priority', 130), E(h(e), 'incompatibleTokens', ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']), e;
    }
    return (
        c(n, [
            {
                key: 'parse',
                value: function (e, t, n) {
                    var i = function (e) {
                        return {
                            year: e,
                            isTwoDigitYear: 'YY' === t
                        };
                    };
                    switch (t) {
                        case 'Y':
                            return (0, r.jg)((0, r.ZL)(4, e), i);
                        case 'Yo':
                            return (0, r.jg)(n.ordinalNumber(e, { unit: 'year' }), i);
                        default:
                            return (0, r.jg)((0, r.ZL)(t.length, e), i);
                    }
                }
            },
            {
                key: 'validate',
                value: function (e, t) {
                    return t.isTwoDigitYear || t.year > 0;
                }
            },
            {
                key: 'set',
                value: function (e, t, n, i) {
                    var o = (0, a.Z)(e, i);
                    if (n.isTwoDigitYear) {
                        var l = (0, r.WG)(n.year, o);
                        return e.setUTCFullYear(l, 0, i.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, s.Z)(e, i);
                    }
                    var u = 'era' in t && 1 !== t.era ? 1 - n.year : n.year;
                    return e.setUTCFullYear(u, 0, i.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, s.Z)(e, i);
                }
            }
        ]),
        n
    );
})(i._);
