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
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        t && o(e, t);
}
function o(e, t) {
    return (o =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function a(e) {
    var t = c();
    return function () {
        var n,
            r = u(e);
        return (n = t ? Reflect.construct(r, arguments, u(this).constructor) : r.apply(this, arguments)), s(this, n);
    };
}
function s(e, t) {
    return t && ('object' === r(t) || 'function' == typeof t) ? t : l(e);
}
function l(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function c() {
    if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function u(e) {
    return (u = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function d(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function f(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function _(e, t, n) {
    return t && f(e.prototype, t), n && f(e, n), e;
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
n.d(t, {
    GT: () => E,
    gr: () => g
});
var h = 10,
    m = (function () {
        function e() {
            d(this, e), p(this, 'subPriority', 0);
        }
        return (
            _(e, [
                {
                    key: 'validate',
                    value: function (e, t) {
                        return !0;
                    }
                }
            ]),
            e
        );
    })(),
    g = (function (e) {
        i(n, e);
        var t = a(n);
        function n(e, r, i, o, a) {
            var s;
            return d(this, n), ((s = t.call(this)).value = e), (s.validateValue = r), (s.setValue = i), (s.priority = o), a && (s.subPriority = a), s;
        }
        return (
            _(n, [
                {
                    key: 'validate',
                    value: function (e, t) {
                        return this.validateValue(e, this.value, t);
                    }
                },
                {
                    key: 'set',
                    value: function (e, t, n) {
                        return this.setValue(e, t, this.value, n);
                    }
                }
            ]),
            n
        );
    })(m),
    E = (function (e) {
        i(n, e);
        var t = a(n);
        function n() {
            var e;
            d(this, n);
            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return p(l((e = t.call.apply(t, [this].concat(i)))), 'priority', h), p(l(e), 'subPriority', -1), e;
        }
        return (
            _(n, [
                {
                    key: 'set',
                    value: function (e, t) {
                        if (t.timestampIsSet) return e;
                        var n = new Date(0);
                        return n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), n.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), n;
                    }
                }
            ]),
            n
        );
    })(m);
