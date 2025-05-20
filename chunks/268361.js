n.d(t, { d: () => y });
var r = n(717029),
    i = n(25487),
    o = n(846042),
    a = n(823498),
    s = n(964415);
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
function c(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function u(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function d(e, t, n) {
    return t && u(e.prototype, t), n && u(e, n), e;
}
function f(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        t && _(e, t);
}
function _(e, t) {
    return (_ =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function p(e) {
    var t = g();
    return function () {
        var n,
            r = E(e);
        return (n = t ? Reflect.construct(r, arguments, E(this).constructor) : r.apply(this, arguments)), h(this, n);
    };
}
function h(e, t) {
    return t && ('object' === l(t) || 'function' == typeof t) ? t : m(e);
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
function b(e, t, n) {
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
var y = (function (e) {
    f(n, e);
    var t = p(n);
    function n() {
        var e;
        c(this, n);
        for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        return b(m((e = t.call.apply(t, [this].concat(i)))), 'priority', 100), b(m(e), 'incompatibleTokens', ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']), e;
    }
    return (
        d(n, [
            {
                key: 'parse',
                value: function (e, t, n) {
                    switch (t) {
                        case 'I':
                            return (0, o.ie)(i.z.week, e);
                        case 'Io':
                            return n.ordinalNumber(e, { unit: 'week' });
                        default:
                            return (0, o.ZL)(t.length, e);
                    }
                }
            },
            {
                key: 'validate',
                value: function (e, t) {
                    return t >= 1 && t <= 53;
                }
            },
            {
                key: 'set',
                value: function (e, t, n) {
                    return (0, s.Z)((0, a.Z)(e, n));
                }
            }
        ]),
        n
    );
})(r._);
