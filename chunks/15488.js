Object.defineProperty(n, '__esModule', { value: !0 }), (n.ColorWrap = void 0);
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
    o = r(192379),
    s = d(o),
    l = d(r(889678)),
    u = c(r(999385));
function c(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return (n.default = e), n;
}
function d(e) {
    return e && e.__esModule ? e : { default: e };
}
function f(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function p(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function h(e, n) {
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
var _ = (n.ColorWrap = function (e) {
    var n = (function (n) {
        function r(e) {
            f(this, r);
            var n = p(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
            return (
                (n.handleChange = function (e, r) {
                    if (u.simpleCheckForValidColor(e)) {
                        var i = u.toState(e, e.h || n.state.oldHue);
                        n.setState(i), n.props.onChangeComplete && n.debounce(n.props.onChangeComplete, i, r), n.props.onChange && n.props.onChange(i, r);
                    }
                }),
                (n.handleSwatchHover = function (e, r) {
                    if (u.simpleCheckForValidColor(e)) {
                        var i = u.toState(e, e.h || n.state.oldHue);
                        n.props.onSwatchHover && n.props.onSwatchHover(i, r);
                    }
                }),
                (n.state = i({}, u.toState(e.color, 0))),
                (n.debounce = (0, l.default)(function (e, n, r) {
                    e(n, r);
                }, 100)),
                n
            );
        }
        return (
            h(r, n),
            a(
                r,
                [
                    {
                        key: 'render',
                        value: function () {
                            var n = {};
                            return this.props.onSwatchHover && (n.onSwatchHover = this.handleSwatchHover), s.default.createElement(e, i({}, this.props, this.state, { onChange: this.handleChange }, n));
                        }
                    }
                ],
                [
                    {
                        key: 'getDerivedStateFromProps',
                        value: function (e, n) {
                            return i({}, u.toState(e.color, n.oldHue));
                        }
                    }
                ]
            ),
            r
        );
    })(o.PureComponent || o.Component);
    return (
        (n.propTypes = i({}, e.propTypes)),
        (n.defaultProps = i({}, e.defaultProps, {
            color: {
                h: 250,
                s: 0.5,
                l: 0.2,
                a: 1
            }
        })),
        n
    );
});
n.default = _;
