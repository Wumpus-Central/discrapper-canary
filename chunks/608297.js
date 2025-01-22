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
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    })),
        n && o(e, n);
}
function o(e, n) {
    return (o =
        Object.setPrototypeOf ||
        function (e, n) {
            return (e.__proto__ = n), e;
        })(e, n);
}
function s(e) {
    var n = c();
    return function () {
        var r,
            i = d(e);
        return (r = n ? Reflect.construct(i, arguments, d(this).constructor) : i.apply(this, arguments)), l(this, r);
    };
}
function l(e, n) {
    return n && ('object' === i(n) || 'function' == typeof n) ? n : u(e);
}
function u(e) {
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
function d(e) {
    return (d = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function f(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function p(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function h(e, n, r) {
    return n && p(e.prototype, n), r && p(e, r), e;
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
    GT: function () {
        return v;
    },
    gr: function () {
        return E;
    }
});
var m = 10,
    g = (function () {
        function e() {
            f(this, e), _(this, 'subPriority', 0);
        }
        return (
            h(e, [
                {
                    key: 'validate',
                    value: function (e, n) {
                        return !0;
                    }
                }
            ]),
            e
        );
    })(),
    E = (function (e) {
        a(r, e);
        var n = s(r);
        function r(e, i, a, o, s) {
            var l;
            return f(this, r), ((l = n.call(this)).value = e), (l.validateValue = i), (l.setValue = a), (l.priority = o), s && (l.subPriority = s), l;
        }
        return (
            h(r, [
                {
                    key: 'validate',
                    value: function (e, n) {
                        return this.validateValue(e, this.value, n);
                    }
                },
                {
                    key: 'set',
                    value: function (e, n, r) {
                        return this.setValue(e, n, this.value, r);
                    }
                }
            ]),
            r
        );
    })(g),
    v = (function (e) {
        a(r, e);
        var n = s(r);
        function r() {
            var e;
            f(this, r);
            for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            return _(u((e = n.call.apply(n, [this].concat(a)))), 'priority', m), _(u(e), 'subPriority', -1), e;
        }
        return (
            h(r, [
                {
                    key: 'set',
                    value: function (e, n) {
                        if (n.timestampIsSet) return e;
                        var r = new Date(0);
                        return r.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()), r.setHours(e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()), r;
                    }
                }
            ]),
            r
        );
    })(g);
