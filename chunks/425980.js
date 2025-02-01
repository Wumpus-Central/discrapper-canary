Object.defineProperty(t, '__esModule', { value: !0 }), (t.handleFocus = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
        };
    })(),
    a = s(n(192379));
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
function o(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function l(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function u(e, t) {
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
}
t.handleFocus = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return (function (n) {
        function s() {
            o(this, s);
            for (var e, t, n, i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
            return (
                (t = n = l(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [this].concat(r)))),
                (n.state = { focus: !1 }),
                (n.handleFocus = function () {
                    return n.setState({ focus: !0 });
                }),
                (n.handleBlur = function () {
                    return n.setState({ focus: !1 });
                }),
                l(n, t)
            );
        }
        return (
            u(s, n),
            r(s, [
                {
                    key: 'render',
                    value: function () {
                        return a.default.createElement(
                            t,
                            {
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur
                            },
                            a.default.createElement(e, i({}, this.props, this.state))
                        );
                    }
                }
            ]),
            s
        );
    })(a.default.Component);
};
