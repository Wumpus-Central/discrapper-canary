function i(e) {
    return (i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function a(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function o(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function s(e, n, r) {
    return n && o(e.prototype, n), r && o(e, r), e;
}
function l(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        n && u(e, n);
}
function u(e, n) {
    return (u =
        Object.setPrototypeOf ||
        function (e, n) {
            return (e.__proto__ = n), e;
        })(e, n);
}
function c(e) {
    var n = p();
    return function () {
        var r,
            i = h(e);
        return (r = n ? Reflect.construct(i, arguments, h(this).constructor) : i.apply(this, arguments)), d(this, r);
    };
}
function d(e, n) {
    return n && ('object' === i(n) || 'function' == typeof n) ? n : f(e);
}
function f(e) {
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
function _(e, n, r) {
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
r.d(n, {
    z: function () {
        return m;
    }
});
var m = (function (e) {
    l(r, e);
    var n = c(r);
    function r() {
        var e;
        a(this, r);
        for (var i = arguments.length, o = Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return _(f((e = n.call.apply(n, [this].concat(o)))), 'priority', 140), _(f(e), 'incompatibleTokens', ['R', 'u', 't', 'T']), e;
    }
    return (
        s(r, [
            {
                key: 'parse',
                value: function (e, n, r) {
                    switch (n) {
                        case 'G':
                        case 'GG':
                        case 'GGG':
                            return r.era(e, { width: 'abbreviated' }) || r.era(e, { width: 'narrow' });
                        case 'GGGGG':
                            return r.era(e, { width: 'narrow' });
                        default:
                            return r.era(e, { width: 'wide' }) || r.era(e, { width: 'abbreviated' }) || r.era(e, { width: 'narrow' });
                    }
                }
            },
            {
                key: 'set',
                value: function (e, n, r) {
                    return (n.era = r), e.setUTCFullYear(r, 0, 1), e.setUTCHours(0, 0, 0, 0), e;
                }
            }
        ]),
        r
    );
})(r(717029)._);
