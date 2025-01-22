r.d(n, {
    d: function () {
        return b;
    }
});
var i = r(717029),
    a = r(25487),
    o = r(846042),
    s = r(823498),
    l = r(964415);
function u(e) {
    return (u =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function c(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function d(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function f(e, n, r) {
    return n && d(e.prototype, n), r && d(e, r), e;
}
function p(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        n && h(e, n);
}
function h(e, n) {
    return (h =
        Object.setPrototypeOf ||
        function (e, n) {
            return (e.__proto__ = n), e;
        })(e, n);
}
function _(e) {
    var n = E();
    return function () {
        var r,
            i = v(e);
        return (r = n ? Reflect.construct(i, arguments, v(this).constructor) : i.apply(this, arguments)), m(this, r);
    };
}
function m(e, n) {
    return n && ('object' === u(n) || 'function' == typeof n) ? n : g(e);
}
function g(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function E() {
    if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function v(e) {
    return (v = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function y(e, n, r) {
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
var b = (function (e) {
    p(r, e);
    var n = _(r);
    function r() {
        var e;
        c(this, r);
        for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
        return y(g((e = n.call.apply(n, [this].concat(a)))), 'priority', 100), y(g(e), 'incompatibleTokens', ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']), e;
    }
    return (
        f(r, [
            {
                key: 'parse',
                value: function (e, n, r) {
                    switch (n) {
                        case 'I':
                            return (0, o.ie)(a.z.week, e);
                        case 'Io':
                            return r.ordinalNumber(e, { unit: 'week' });
                        default:
                            return (0, o.ZL)(n.length, e);
                    }
                }
            },
            {
                key: 'validate',
                value: function (e, n) {
                    return n >= 1 && n <= 53;
                }
            },
            {
                key: 'set',
                value: function (e, n, r) {
                    return (0, l.Z)((0, s.Z)(e, r));
                }
            }
        ]),
        r
    );
})(i._);
