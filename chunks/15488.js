Object.defineProperty(t, '__esModule', { value: !0 }), (t.ColorWrap = void 0);
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    o = n(192379),
    a = u(o),
    s = u(n(889678)),
    l = c(n(999385));
function c(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return (t.default = e), t;
}
function u(e) {
    return e && e.__esModule ? e : { default: e };
}
function d(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function f(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function p(e, t) {
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
var _ = (t.ColorWrap = function (e) {
    var t = (function (t) {
        function n(e) {
            d(this, n);
            var t = f(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (
                (t.handleChange = function (e, n) {
                    if (l.simpleCheckForValidColor(e)) {
                        var r = l.toState(e, e.h || t.state.oldHue);
                        t.setState(r), t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, r, n), t.props.onChange && t.props.onChange(r, n);
                    }
                }),
                (t.handleSwatchHover = function (e, n) {
                    if (l.simpleCheckForValidColor(e)) {
                        var r = l.toState(e, e.h || t.state.oldHue);
                        t.props.onSwatchHover && t.props.onSwatchHover(r, n);
                    }
                }),
                (t.state = r({}, l.toState(e.color, 0))),
                (t.debounce = (0, s.default)(function (e, t, n) {
                    e(t, n);
                }, 100)),
                t
            );
        }
        return (
            p(n, t),
            i(
                n,
                [
                    {
                        key: 'render',
                        value: function () {
                            var t = {};
                            return this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover), a.default.createElement(e, r({}, this.props, this.state, { onChange: this.handleChange }, t));
                        }
                    }
                ],
                [
                    {
                        key: 'getDerivedStateFromProps',
                        value: function (e, t) {
                            return r({}, l.toState(e.color, t.oldHue));
                        }
                    }
                ]
            ),
            n
        );
    })(o.PureComponent || o.Component);
    return (
        (t.propTypes = r({}, e.propTypes)),
        (t.defaultProps = r({}, e.defaultProps, {
            color: {
                h: 250,
                s: 0.5,
                l: 0.2,
                a: 1
            }
        })),
        t
    );
});
t.default = _;
