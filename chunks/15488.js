Object.defineProperty(t, '__esModule', { value: !0 }), (t.ColorWrap = void 0);
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
    a = n(192379),
    s = c(a),
    o = c(n(889678)),
    l = u(n(999385));
function u(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return (t.default = e), t;
}
function c(e) {
    return e && e.__esModule ? e : { default: e };
}
function d(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function f(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function _(e, t) {
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
var p = (t.ColorWrap = function (e) {
    var t = (function (t) {
        function n(e) {
            d(this, n);
            var t = f(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (
                (t.handleChange = function (e, n) {
                    if (l.simpleCheckForValidColor(e)) {
                        var i = l.toState(e, e.h || t.state.oldHue);
                        t.setState(i), t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, i, n), t.props.onChange && t.props.onChange(i, n);
                    }
                }),
                (t.handleSwatchHover = function (e, n) {
                    if (l.simpleCheckForValidColor(e)) {
                        var i = l.toState(e, e.h || t.state.oldHue);
                        t.props.onSwatchHover && t.props.onSwatchHover(i, n);
                    }
                }),
                (t.state = i({}, l.toState(e.color, 0))),
                (t.debounce = (0, o.default)(function (e, t, n) {
                    e(t, n);
                }, 100)),
                t
            );
        }
        return (
            _(n, t),
            r(
                n,
                [
                    {
                        key: 'render',
                        value: function () {
                            var t = {};
                            return this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover), s.default.createElement(e, i({}, this.props, this.state, { onChange: this.handleChange }, t));
                        }
                    }
                ],
                [
                    {
                        key: 'getDerivedStateFromProps',
                        value: function (e, t) {
                            return i({}, l.toState(e.color, t.oldHue));
                        }
                    }
                ]
            ),
            n
        );
    })(a.PureComponent || a.Component);
    return (
        (t.propTypes = i({}, e.propTypes)),
        (t.defaultProps = i({}, e.defaultProps, {
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
t.default = p;
