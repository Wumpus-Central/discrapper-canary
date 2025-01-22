Object.defineProperty(n, '__esModule', { value: !0 }), (n.handleFocus = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = (function () {
        function e(e, n) {
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        return function (n, r, i) {
            return r && e(n.prototype, r), i && e(n, i), n;
        };
    })(),
    o = s(r(192379));
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
function l(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function u(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function c(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function, not ' + typeof n);
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
}
n.handleFocus = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return (function (r) {
        function s() {
            l(this, s);
            for (var e, n, r, i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            return (
                (n = r = u(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [this].concat(a)))),
                (r.state = { focus: !1 }),
                (r.handleFocus = function () {
                    return r.setState({ focus: !0 });
                }),
                (r.handleBlur = function () {
                    return r.setState({ focus: !1 });
                }),
                u(r, n)
            );
        }
        return (
            c(s, r),
            a(s, [
                {
                    key: 'render',
                    value: function () {
                        return o.default.createElement(
                            n,
                            {
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur
                            },
                            o.default.createElement(e, i({}, this.props, this.state))
                        );
                    }
                }
            ]),
            s
        );
    })(o.default.Component);
};
