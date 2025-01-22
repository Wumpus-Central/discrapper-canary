r.d(n, {
    x: function () {
        return y;
    }
});
var i = r(717029),
    a = r(846042),
    o = r(193603),
    s = r(780603);
function l(e) {
    return (l =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function u(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function c(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function d(e, n, r) {
    return n && c(e.prototype, n), r && c(e, r), e;
}
function f(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        n && p(e, n);
}
function p(e, n) {
    return (p =
        Object.setPrototypeOf ||
        function (e, n) {
            return (e.__proto__ = n), e;
        })(e, n);
}
function h(e) {
    var n = g();
    return function () {
        var r,
            i = E(e);
        return (r = n ? Reflect.construct(i, arguments, E(this).constructor) : i.apply(this, arguments)), _(this, r);
    };
}
function _(e, n) {
    return n && ('object' === l(n) || 'function' == typeof n) ? n : m(e);
}
function m(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function g() {
    if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
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
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
var y = (function (e) {
    f(r, e);
    var n = h(r);
    function r() {
        var e;
        u(this, r);
        for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
        return v(m((e = n.call.apply(n, [this].concat(a)))), 'priority', 130), v(m(e), 'incompatibleTokens', ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']), e;
    }
    return (
        d(r, [
            {
                key: 'parse',
                value: function (e, n, r) {
                    var i = function (e) {
                        return {
                            year: e,
                            isTwoDigitYear: 'YY' === n
                        };
                    };
                    switch (n) {
                        case 'Y':
                            return (0, a.jg)((0, a.ZL)(4, e), i);
                        case 'Yo':
                            return (0, a.jg)(r.ordinalNumber(e, { unit: 'year' }), i);
                        default:
                            return (0, a.jg)((0, a.ZL)(n.length, e), i);
                    }
                }
            },
            {
                key: 'validate',
                value: function (e, n) {
                    return n.isTwoDigitYear || n.year > 0;
                }
            },
            {
                key: 'set',
                value: function (e, n, r, i) {
                    var l = (0, o.Z)(e, i);
                    if (r.isTwoDigitYear) {
                        var u = (0, a.WG)(r.year, l);
                        return e.setUTCFullYear(u, 0, i.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, s.Z)(e, i);
                    }
                    var c = 'era' in n && 1 !== n.era ? 1 - r.year : r.year;
                    return e.setUTCFullYear(c, 0, i.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, s.Z)(e, i);
                }
            }
        ]),
        r
    );
})(i._);
