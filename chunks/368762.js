function r(e) {
    return (r =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function i(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function o(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function a(e, t, n) {
    return t && o(e.prototype, t), n && o(e, n), e;
}
function s(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        t && l(e, t);
}
function l(e, t) {
    return (l =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function c(e) {
    var t = f();
    return function () {
        var n,
            r = _(e);
        return (n = t ? Reflect.construct(r, arguments, _(this).constructor) : r.apply(this, arguments)), u(this, n);
    };
}
function u(e, t) {
    return t && ('object' === r(t) || 'function' == typeof t) ? t : d(e);
}
function d(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function f() {
    if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function _(e) {
    return (_ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function p(e, t, n) {
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
n.d(t, { z: () => h });
var h = (function (e) {
    s(n, e);
    var t = c(n);
    function n() {
        var e;
        i(this, n);
        for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
        return p(d((e = t.call.apply(t, [this].concat(o)))), 'priority', 140), p(d(e), 'incompatibleTokens', ['R', 'u', 't', 'T']), e;
    }
    return (
        a(n, [
            {
                key: 'parse',
                value: function (e, t, n) {
                    switch (t) {
                        case 'G':
                        case 'GG':
                        case 'GGG':
                            return n.era(e, { width: 'abbreviated' }) || n.era(e, { width: 'narrow' });
                        case 'GGGGG':
                            return n.era(e, { width: 'narrow' });
                        default:
                            return n.era(e, { width: 'wide' }) || n.era(e, { width: 'abbreviated' }) || n.era(e, { width: 'narrow' });
                    }
                }
            },
            {
                key: 'set',
                value: function (e, t, n) {
                    return (t.era = n), e.setUTCFullYear(n, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
                }
            }
        ]),
        n
    );
})(n(717029)._);
