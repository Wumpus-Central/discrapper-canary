Object.defineProperty(t, '__esModule', { value: !0 }), (t.handleFocus = void 0);
var n,
    o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    a = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    i = (n = r(192379)) && n.__esModule ? n : { default: n };
function l(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
t.handleFocus = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return (function (r) {
        function n() {
            !(function (e, t) {
                if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
            })(this, n);
            for (var e, t, r, o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return (
                (t = r = l(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(a)))),
                (r.state = { focus: !1 }),
                (r.handleFocus = function () {
                    return r.setState({ focus: !0 });
                }),
                (r.handleBlur = function () {
                    return r.setState({ focus: !1 });
                }),
                l(r, t)
            );
        }
        return (
            !(function (e, t) {
                if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            })(n, r),
            a(n, [
                {
                    key: 'render',
                    value: function () {
                        return i.default.createElement(
                            t,
                            {
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur
                            },
                            i.default.createElement(e, o({}, this.props, this.state))
                        );
                    }
                }
            ]),
            n
        );
    })(i.default.Component);
};
