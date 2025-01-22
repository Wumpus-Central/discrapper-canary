r.d(n, {
    d: function () {
        return v;
    }
});
var i = r(717029),
    a = r(25487),
    o = r(846042);
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
function l(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function u(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function c(e, n, r) {
    return n && u(e.prototype, n), r && u(e, r), e;
}
function d(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        n && f(e, n);
}
function f(e, n) {
    return (f =
        Object.setPrototypeOf ||
        function (e, n) {
            return (e.__proto__ = n), e;
        })(e, n);
}
function p(e) {
    var n = m();
    return function () {
        var r,
            i = g(e);
        return (r = n ? Reflect.construct(i, arguments, g(this).constructor) : i.apply(this, arguments)), h(this, r);
    };
}
function h(e, n) {
    return n && ('object' === s(n) || 'function' == typeof n) ? n : _(e);
}
function _(e) {
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
function E(e, n, r) {
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
var v = (function (e) {
    d(r, e);
    var n = p(r);
    function r() {
        var e;
        l(this, r);
        for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
        return E(_((e = n.call.apply(n, [this].concat(a)))), 'priority', 50), E(_(e), 'incompatibleTokens', ['t', 'T']), e;
    }
    return (
        c(r, [
            {
                key: 'parse',
                value: function (e, n, r) {
                    switch (n) {
                        case 's':
                            return (0, o.ie)(a.z.second, e);
                        case 'so':
                            return r.ordinalNumber(e, { unit: 'second' });
                        default:
                            return (0, o.ZL)(n.length, e);
                    }
                }
            },
            {
                key: 'validate',
                value: function (e, n) {
                    return n >= 0 && n <= 59;
                }
            },
            {
                key: 'set',
                value: function (e, n, r) {
                    return e.setUTCSeconds(r, 0), e;
                }
            }
        ]),
        r
    );
})(i._);
