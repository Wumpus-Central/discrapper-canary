r.d(n, {
    T: function () {
        return E;
    }
});
var i = r(717029),
    a = r(846042);
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
function s(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function l(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function u(e, n, r) {
    return n && l(e.prototype, n), r && l(e, r), e;
}
function c(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        n && d(e, n);
}
function d(e, n) {
    return (d =
        Object.setPrototypeOf ||
        function (e, n) {
            return (e.__proto__ = n), e;
        })(e, n);
}
function f(e) {
    var n = _();
    return function () {
        var r,
            i = m(e);
        return (r = n ? Reflect.construct(i, arguments, m(this).constructor) : i.apply(this, arguments)), p(this, r);
    };
}
function p(e, n) {
    return n && ('object' === o(n) || 'function' == typeof n) ? n : h(e);
}
function h(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _() {
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
function g(e, n, r) {
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
var E = (function (e) {
    c(r, e);
    var n = f(r);
    function r() {
        var e;
        s(this, r);
        for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
        return g(h((e = n.call.apply(n, [this].concat(a)))), 'priority', 20), g(h(e), 'incompatibleTokens', '*'), e;
    }
    return (
        u(r, [
            {
                key: 'parse',
                value: function (e) {
                    return (0, a.n8)(e);
                }
            },
            {
                key: 'set',
                value: function (e, n, r) {
                    return [new Date(r), { timestampIsSet: !0 }];
                }
            }
        ]),
        r
    );
})(i._);
