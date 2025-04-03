Object.defineProperty(t, '__esModule', { value: !0 }), (t.ColorWrap = void 0);
var n =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    o = (function () {
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
    a = r(192379),
    i = u(a),
    l = u(r(889678)),
    s = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
    })(r(999385));
function u(e) {
    return e && e.__esModule ? e : { default: e };
}
var c = (t.ColorWrap = function (e) {
    var t = (function (t) {
        if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
        function r(e) {
            if (!(this instanceof r)) throw TypeError('Cannot call a class as a function');
            var t = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
            })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
            return (
                (t.handleChange = function (e, r) {
                    if (s.simpleCheckForValidColor(e)) {
                        var n = s.toState(e, e.h || t.state.oldHue);
                        t.setState(n), t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, n, r), t.props.onChange && t.props.onChange(n, r);
                    }
                }),
                (t.handleSwatchHover = function (e, r) {
                    if (s.simpleCheckForValidColor(e)) {
                        var n = s.toState(e, e.h || t.state.oldHue);
                        t.props.onSwatchHover && t.props.onSwatchHover(n, r);
                    }
                }),
                (t.state = n({}, s.toState(e.color, 0))),
                (t.debounce = (0, l.default)(function (e, t, r) {
                    e(t, r);
                }, 100)),
                t
            );
        }
        return (
            (r.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(r, t) : (r.__proto__ = t)),
            o(
                r,
                [
                    {
                        key: 'render',
                        value: function () {
                            var t = {};
                            return this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover), i.default.createElement(e, n({}, this.props, this.state, { onChange: this.handleChange }, t));
                        }
                    }
                ],
                [
                    {
                        key: 'getDerivedStateFromProps',
                        value: function (e, t) {
                            return n({}, s.toState(e.color, t.oldHue));
                        }
                    }
                ]
            ),
            r
        );
    })(a.PureComponent || a.Component);
    return (
        (t.propTypes = n({}, e.propTypes)),
        (t.defaultProps = n({}, e.defaultProps, {
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
t.default = c;
